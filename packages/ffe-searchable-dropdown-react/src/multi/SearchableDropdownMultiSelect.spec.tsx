import React, { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchableDropdownMultiSelect } from './SearchableDropdownMultiSelect';
import { SearchableDropdownMultiSelectProps } from '../../types';

const companies = [
    {
        organizationName: 'Bedriften',
        organizationNumber: '912602370',
        quantityUnprocessedMessages: 5,
    },
    {
        organizationName: 'Sønn & co',
        organizationNumber: '812602372',
        quantityUnprocessedMessages: 3,
    },
    {
        organizationName: 'Beslag skytter',
        organizationNumber: '812602552',
        quantityUnprocessedMessages: 1,
    },
];

const SearchableDropdownMultiSelectButton: React.FC<
    SearchableDropdownMultiSelectProps<(typeof companies)[0]>
> = ({
    ...props
}: SearchableDropdownMultiSelectProps<(typeof companies)[0]>) => {
    const [items, setItems] = useState([companies[0]]);
    return (
        <>
            <button
                data-testid="change-multiselect-input"
                onClick={() => {
                    setItems([]);
                }}
            />
            <button
                data-testid="change-multiselect-input-add"
                onClick={() => {
                    setItems([companies[0], companies[1]]);
                }}
            />
            <SearchableDropdownMultiSelect {...props} selectedItems={items} />
        </>
    );
};

describe('SearchableDropdownMultiSelect', () => {
    it('should show filtered result', async () => {
        const user = userEvent.setup();
        const onChangeMultiSelect = jest.fn();

        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChangeMultiSelect}
            />,
        );

        const input = screen.getByRole('combobox');

        await user.type(input, 'Be');

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.queryByText('Sønn & co')).toBeNull();
        expect(screen.queryByText('812602372')).toBeNull();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();

        await user.clear(input);
        await user.type(input, '8126023');

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.queryByText('Beslag skytter')).toBeNull();
        expect(screen.queryByText('812602552')).toBeNull();
    });

    it('should select clicked element', async () => {
        const user = userEvent.setup();
        const onChangeMultiSelect = jest.fn();
        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChangeMultiSelect}
            />,
        );

        const input = screen.getByRole('combobox');

        await user.type(input, 'Be');

        await user.click(screen.getByText('Bedriften'));

        expect(onChangeMultiSelect).toHaveBeenCalledTimes(1);
        expect(onChangeMultiSelect).toHaveBeenCalledWith(
            companies[0],
            'selected',
        );

        const elements = screen.getAllByText('Bedriften');
        expect(elements).toHaveLength(2);
    });

    it('should deselect clicked chip', async () => {
        const user = userEvent.setup();
        const onChangeMultiSelect = jest.fn();
        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChangeMultiSelect}
                selectedItems={[companies[0]]}
            />,
        );

        const input = screen.getByRole('combobox');

        await user.type(input, 'Be');

        //await user.click(screen.getByText('Bedriften'));
        await fireEvent.click(screen.getByLabelText('Bedriften, fjern valg'));

        expect(onChangeMultiSelect).toHaveBeenCalledTimes(1);
        expect(onChangeMultiSelect).toHaveBeenCalledWith(
            companies[0],
            'removed',
        );

        const elements = screen.getAllByText('Bedriften');
        expect(elements).toHaveLength(1);
    });

    it('should be possible to select item with keyboard', async () => {
        const user = userEvent.setup();
        const onChangeMultiSelect = jest.fn();

        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChangeMultiSelect}
                selectedItems={[companies[0]]}
            />,
        );

        const input = screen.getByRole('combobox');
        await user.click(input);

        await user.type(input, '{arrowdown}');
        await user.type(input, '{arrowdown}');
        await user.type(input, '{enter}');

        expect(onChangeMultiSelect).toHaveBeenCalledTimes(1);
        expect(onChangeMultiSelect).toHaveBeenCalledWith(
            companies[1],
            'selected',
        );
        const elements = screen.getAllByText('Sønn & co');
        expect(elements).toHaveLength(2);
    });

    it('should show "noMatch" values', async () => {
        const user = userEvent.setup();
        const onChangeMultiSelect = jest.fn();

        const noMatchDropDownList = [
            {
                organizationName: 'Rør og sånt',
                organizationNumber: '812602399',
                quantityUnprocessedMessages: 7,
            },
            {
                organizationName: 'Kaffekoppen',
                organizationNumber: '812602222',
                quantityUnprocessedMessages: 8,
            },
        ];
        const noMatchText = 'No result';

        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChangeMultiSelect}
                noMatch={{
                    text: noMatchText,
                    dropdownList: noMatchDropDownList,
                }}
            />,
        );

        const input = screen.getByRole('combobox');
        await user.click(input);
        await user.type(input, 'something without a match');

        expect(screen.getByText(noMatchText)).toBeInTheDocument();
        expect(screen.getByText('Rør og sånt')).toBeInTheDocument();
        expect(screen.getByText('812602399')).toBeInTheDocument();
        expect(screen.getByText('Kaffekoppen')).toBeInTheDocument();
        expect(screen.getByText('812602222')).toBeInTheDocument();

        await user.clear(input);

        expect(screen.queryByText(noMatchText)).toBeNull();
        expect(screen.queryByText('Rør og sånt')).toBeNull();
        expect(screen.queryByText('812602399')).toBeNull();
        expect(screen.queryByText('Kaffekoppen')).toBeNull();
        expect(screen.queryByText('812602222')).toBeNull();
    });

    it('should open and close using tab', async function () {
        const user = userEvent.setup();
        const onChangeMultiSelect = jest.fn();

        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChangeMultiSelect}
                selectedItems={[]}
            />,
        );

        await user.tab();

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.queryByText('Sønn & co')).toBeInTheDocument();
        expect(screen.queryByText('812602372')).toBeInTheDocument();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();

        await user.tab();

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.queryByText('Beslag skytter')).toBeNull();
        expect(screen.queryByText('812602552')).toBeNull();
    });

    it('should navigate to selected items using tab', async function () {
        const user = userEvent.setup();
        const onChangeMultiSelect = jest.fn();

        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChangeMultiSelect}
                selectedItems={[companies[0], companies[1]]}
            />,
        );

        const input = screen.getByRole('combobox');
        await user.click(input);
        expect(input).toHaveFocus();

        await userEvent.keyboard('{Shift>}{Tab}{/Shift}');

        expect(screen.getByLabelText('Sønn & co, fjern valg')).toHaveFocus();
    });

    it('should be a wai-aria 1.0 combobox', async () => {
        const user = userEvent.setup();
        const onChangeMultiSelect = jest.fn();

        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChangeMultiSelect}
            />,
        );

        const input = screen.getByRole('combobox');

        // open list and select second item
        await user.click(input);
        await user.type(input, '{arrowdown}');
        await user.type(input, '{arrowdown}');
        await user.type(input, '{enter}');

        // reopen the list and navigate to second item
        await user.click(input);
        await user.type(input, '{arrowdown}');
        await user.type(input, '{arrowdown}');

        const listBox = screen.getByRole('listbox');
        const options = screen.getAllByRole('option');

        expect(input.getAttribute('aria-autocomplete')).toEqual('list');
        expect(input.getAttribute('autocomplete')).toEqual('off');
        expect(input.getAttribute('aria-controls')).toEqual(
            listBox.getAttribute('id'),
        );
        expect(input.getAttribute('aria-haspopup')).toEqual('listbox');

        options.forEach((option, index) =>
            expect(option.getAttribute('aria-selected')).toEqual(
                index === 1 ? 'true' : 'false',
            ),
        );
    });

    it('should set a11y status message briefly on element change', async () => {
        const user = userEvent.setup({ delay: null });
        const onChangeMultiSelect = jest.fn();
        jest.useFakeTimers();
        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdownMultiSelect
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={companies}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                    onChange={onChangeMultiSelect}
                />
            </div>,
        );

        const input = await screen.findByRole('combobox');

        await user.click(input);
        await user.type(input, '{arrowdown}');
        await user.type(input, '{enter}');

        const a11yStatusMessage = await screen.findByRole('status');

        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                'Element Bedriften er valgt.',
            );
        });
        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        await user.clear(input);
        await user.click(screen.getByText('Knapp'));

        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });
        jest.useRealTimers();
    });

    it('should format input value when passing formatter', async () => {
        const user = userEvent.setup();

        const onChangeMultiSelect = jest.fn();

        const formatter = jest.fn(text => {
            return text
                .split('')
                .map((char: string) => `${char}!?_`)
                .join('');
        });
        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChangeMultiSelect}
                formatter={formatter}
            />,
        );

        const input = screen.getByRole('combobox');
        await user.type(input, 'H');
        expect(input.getAttribute('value')).toEqual('H!?_');
    });

    it('allows using a custom search matcher', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        const cleanString = (value: string | number) =>
            `${value}`.replace(/h/g, 'sky');

        const searchMatcher = jest.fn(
            (inputValue, searchAttributes) =>
                (item: (typeof companies)[number]) => {
                    const cleanedInputValue = cleanString(inputValue);
                    return searchAttributes
                        .map(
                            (
                                searchAttribute: keyof (typeof companies)[number],
                            ) => cleanString(item[searchAttribute]),
                        )
                        .some((cleanedItemAttribute: string) =>
                            cleanedItemAttribute.includes(cleanedInputValue),
                        );
                },
        );

        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChange}
                searchMatcher={searchMatcher}
            />,
        );

        const input = screen.getByRole('combobox');
        await user.type(input, 'Beslag htter');
        expect(input.getAttribute('value')).toEqual('Beslag htter');

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.queryByText('Sønn & co')).toBeNull();
        expect(screen.queryByText('812602372')).toBeNull();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();
    });

    it('allows passing a selected item', async () => {
        const onChange = jest.fn();

        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChange}
                selectedItems={[companies[2]]}
            />,
        );

        const elements = screen.getAllByText('Beslag skytter');
        expect(elements).toHaveLength(1);
    });

    it('allows for writing and selecting even when passing selectedItem', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        render(
            <SearchableDropdownMultiSelect
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChange}
                selectedItems={[companies[1]]}
            />,
        );

        const input = screen.getByRole('combobox');

        const elements = screen.getAllByText('Sønn & co');
        expect(elements).toHaveLength(1);

        await user.clear(input);
        await user.type(input, 'Be');

        await user.click(screen.getByText('Beslag skytter'));

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[2], 'selected');
        expect(screen.getAllByText('Beslag skytter')).toHaveLength(2);
    });

    it('should show postListElement when postListElement is passed as props', async () => {
        const onChangeMultiSelect = jest.fn();
        const user = userEvent.setup();

        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdownMultiSelect
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={companies}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                    onChange={onChangeMultiSelect}
                    selectedItems={[companies[0]]}
                    postListElement={<span>Dette er et postListElement!</span>}
                    isLoading={true}
                />
            </div>,
        );
        const input = screen.getByRole('combobox');
        await user.click(input);
        await screen.findByText('Dette er et postListElement!');
    });

    it('should clear selected items if selectedItems is cleared', async () => {
        const onChangeMultiSelect = jest.fn();
        const user = userEvent.setup();

        render(
            <SearchableDropdownMultiSelectButton
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                onChange={onChangeMultiSelect}
            />,
        );

        expect(
            screen.getByText(companies[0].organizationName),
        ).toBeInTheDocument();
        await user.click(screen.getByTestId('change-multiselect-input-add'));
        expect(
            screen.getByText(companies[0].organizationName),
        ).toBeInTheDocument();
        expect(
            screen.getByText(companies[1].organizationName),
        ).toBeInTheDocument();
        await user.click(screen.getByTestId('change-multiselect-input'));
        expect(screen.queryByText(companies[0].organizationName)).toBeNull();
    });
});
