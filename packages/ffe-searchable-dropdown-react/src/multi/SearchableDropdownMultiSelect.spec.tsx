import React, { useState } from 'react';
import {
    fireEvent,
    render,
    screen,
    waitFor,
    within,
} from '@testing-library/react';
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
            [companies[0]],
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
            [companies[0]],
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
            [companies[1]],
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
        expect(onChange).toHaveBeenCalledWith([companies[2]], 'selected');
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

    it('does not run onOpen or onClose on mount', async () => {
        const onChange = jest.fn();
        const onOpen = jest.fn();
        const onClose = jest.fn();

        render(
            <SearchableDropdownMultiSelectButton
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                onOpen={onOpen}
                onClose={onClose}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        expect(onOpen).not.toHaveBeenCalled();
        expect(onClose).not.toHaveBeenCalled();
    });

    it('runs onOpen when opening dropdown and onClose when closing dropdown', async () => {
        const onChange = jest.fn();
        const onOpen = jest.fn();
        const onClose = jest.fn();
        const user = userEvent.setup();

        render(
            <>
                <button>Knapp</button>
                <SearchableDropdownMultiSelectButton
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={companies}
                    onChange={onChange}
                    onOpen={onOpen}
                    onClose={onClose}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                />
            </>,
        );

        const input = screen.getByRole('combobox');
        const button = screen.getByText('Knapp');

        // Focus combobox to open dropdown
        await user.click(input);
        expect(onOpen).toHaveBeenCalledTimes(1);

        // Unfocus combobox to close dropdown
        await user.click(button);
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    describe('showSelectAll', () => {
        type Company = (typeof companies)[0];
        type Props = SearchableDropdownMultiSelectProps<Company>;

        const renderSelectAll = ({
            onChange,
            ...props
        }: {
            onChange: Props['onChange'];
            locale?: Props['locale'];
            noMatch?: Props['noMatch'];
            selectAllTexts?: Props['selectAllTexts'];
            selectedItems?: Props['selectedItems'];
            showSelectAll?: Props['showSelectAll'];
        }) =>
            render(
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
                    onChange={onChange}
                    showSelectAll={true}
                    {...props}
                />,
            );

        /**
         * The a11y live region is global and holds leftover announcements
         * between tests, so all text lookups are scoped to the listbox.
         */
        const list = () => within(screen.getByRole('listbox'));

        const getRow = (label: string) =>
            list().getByText(label).closest('[role="option"]');

        it('is not rendered unless showSelectAll is passed', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange, showSelectAll: undefined });

            await user.click(screen.getByRole('combobox'));

            expect(list().queryByText('Velg alle')).toBeNull();
            expect(screen.getAllByRole('option')).toHaveLength(
                companies.length,
            );
        });

        it('selects every item when clicking the row', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange });

            await user.click(screen.getByRole('combobox'));
            await user.click(list().getByText('Velg alle'));

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith(companies, 'selected');
            expect(list().getByText('Fjern alle')).toBeInTheDocument();
            screen.getAllByRole('option').forEach(option => {
                expect(option.getAttribute('aria-selected')).toEqual('true');
            });
        });

        it('removes every item when toggling the row again', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange });

            await user.click(screen.getByRole('combobox'));
            await user.click(list().getByText('Velg alle'));
            await user.click(list().getByText('Fjern alle'));

            expect(onChange).toHaveBeenCalledTimes(2);
            expect(onChange).toHaveBeenLastCalledWith(companies, 'removed');
            expect(list().getByText('Velg alle')).toBeInTheDocument();
            screen.getAllByRole('option').forEach(option => {
                expect(option.getAttribute('aria-selected')).toEqual('false');
            });
        });

        it('passes only the items that changed', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange, selectedItems: [companies[0]] });

            await user.click(screen.getByRole('combobox'));
            await user.click(list().getByText('Velg alle'));

            expect(onChange).toHaveBeenCalledWith(
                [companies[1], companies[2]],
                'selected',
            );
        });

        it('only applies to the visible matches when searching', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange });

            const input = screen.getByRole('combobox');
            await user.type(input, 'Be');
            await user.click(list().getByText('Velg alle'));

            expect(onChange).toHaveBeenCalledWith(
                [companies[0], companies[2]],
                'selected',
            );
        });

        it('keeps the search when toggling, so the same matches can be removed again', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange });

            const input = screen.getByRole('combobox');
            await user.type(input, 'Be');
            await user.click(list().getByText('Velg alle'));

            expect(input).toHaveValue('Be');

            await user.click(list().getByText('Fjern alle'));

            expect(onChange).toHaveBeenLastCalledWith(
                [companies[0], companies[2]],
                'removed',
            );
        });

        it('selects the first match when pressing enter right after searching', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange });

            const input = screen.getByRole('combobox');
            await user.type(input, 'Be');
            await user.type(input, '{enter}');

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith([companies[0]], 'selected');
        });

        it('is the first row when navigating with the keyboard', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange });

            const input = screen.getByRole('combobox');
            await user.click(input);
            await user.type(input, '{arrowdown}');

            expect(input.getAttribute('aria-activedescendant')).toEqual(
                getRow('Velg alle')?.getAttribute('id'),
            );

            await user.type(input, '{enter}');

            expect(onChange).toHaveBeenCalledWith(companies, 'selected');
        });

        it('leaves the first item on the second arrow down', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange });

            const input = screen.getByRole('combobox');
            await user.click(input);
            await user.type(input, '{arrowdown}');
            await user.type(input, '{arrowdown}');
            await user.type(input, '{enter}');

            expect(onChange).toHaveBeenCalledWith([companies[0]], 'selected');
        });

        it('wraps around between the row and the last item', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange });

            const input = screen.getByRole('combobox');
            await user.click(input);
            await user.type(input, '{arrowup}');

            expect(input.getAttribute('aria-activedescendant')).toEqual(
                list()
                    .getByText('Beslag skytter')
                    .closest('[role="option"]')
                    ?.getAttribute('id'),
            );

            await user.type(input, '{arrowdown}');

            expect(input.getAttribute('aria-activedescendant')).toEqual(
                getRow('Velg alle')?.getAttribute('id'),
            );
        });

        it('is hidden when there are no matches', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            const { unmount } = renderSelectAll({ onChange });

            await user.type(screen.getByRole('combobox'), 'zzz');
            expect(list().queryByText('Velg alle')).toBeNull();

            unmount();

            renderSelectAll({
                onChange,
                noMatch: { text: 'Ingen treff', dropdownList: [companies[1]] },
            });

            await user.type(screen.getByRole('combobox'), 'zzz');
            expect(list().getByText('Ingen treff')).toBeInTheDocument();
            expect(list().queryByText('Velg alle')).toBeNull();
        });

        it('allows overriding both labels', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({
                onChange,
                selectAllTexts: {
                    selectAll: 'Ta alle',
                    removeAll: 'Nullstill',
                },
            });

            await user.click(screen.getByRole('combobox'));
            await user.click(list().getByText('Ta alle'));

            expect(list().getByText('Nullstill')).toBeInTheDocument();
            expect(list().queryByText('Velg alle')).toBeNull();
        });

        it('translates the labels', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            const { unmount } = renderSelectAll({ onChange, locale: 'en' });

            await user.click(screen.getByRole('combobox'));
            await user.click(list().getByText('Select all'));
            expect(list().getByText('Remove all')).toBeInTheDocument();

            unmount();

            renderSelectAll({ onChange, locale: 'nn' });

            await user.click(screen.getByRole('combobox'));
            expect(list().getByText('Vel alle')).toBeInTheDocument();
        });

        it('announces the bulk change as a single a11y status message', async () => {
            const user = userEvent.setup({ delay: null });
            const onChange = jest.fn();
            jest.useFakeTimers();

            renderSelectAll({ onChange });

            await user.click(screen.getByRole('combobox'));
            await user.click(list().getByText('Velg alle'));

            const a11yStatusMessage = await screen.findByRole('status');

            await waitFor(() => {
                expect(a11yStatusMessage).toHaveTextContent(
                    '3 elementer er valgt. 3 valgt totalt.',
                );
            });

            jest.useRealTimers();
        });

        /**
         * The box is a decorative span, not an <input>: role="option" has
         * presentational children, so a real checkbox inside a row would trip
         * axe's nested-interactive rule and have its state dropped from the
         * accessibility tree anyway.
         */
        const box = (label: string) =>
            getRow(label)?.querySelector('.ffe-checkbox');

        it('shows a checkbox on the row and on every item', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange });

            await user.click(screen.getByRole('combobox'));

            screen.getAllByRole('option').forEach(option => {
                expect(option.querySelector('.ffe-checkbox')).toBeTruthy();
            });
            expect(
                document.querySelector(
                    '.ffe-searchable-dropdown__selected-icon',
                ),
            ).toBeNull();
        });

        it('checks the box on a selected item', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange, selectedItems: [companies[0]] });

            await user.click(screen.getByRole('combobox'));

            expect(box(companies[0].organizationName)).toHaveClass(
                'ffe-checkbox--checked',
            );
            expect(box(companies[1].organizationName)).not.toHaveClass(
                'ffe-checkbox--checked',
            );
        });

        it('shows the row as partially selected when only some items are selected', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange, selectedItems: [companies[0]] });

            await user.click(screen.getByRole('combobox'));

            expect(box('Velg alle')).toHaveClass('ffe-checkbox--indeterminate');
            expect(getRow('Velg alle')).toHaveAttribute(
                'aria-selected',
                'false',
            );
        });

        it('shows the row as empty when nothing is selected', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange });

            await user.click(screen.getByRole('combobox'));

            expect(box('Velg alle')).not.toHaveClass(
                'ffe-checkbox--indeterminate',
            );
            expect(box('Velg alle')).not.toHaveClass('ffe-checkbox--checked');
        });

        it('shows the row as checked, never partially, when everything is selected', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange });

            await user.click(screen.getByRole('combobox'));
            await user.click(list().getByText('Velg alle'));

            expect(box('Fjern alle')).toHaveClass('ffe-checkbox--checked');
            expect(box('Fjern alle')).not.toHaveClass(
                'ffe-checkbox--indeterminate',
            );
        });

        it('scopes the partial state to the visible matches', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderSelectAll({ onChange, selectedItems: [companies[0]] });

            const input = screen.getByRole('combobox');
            // Narrowing to the one selected company makes every visible item
            // selected, so the row is checked rather than partial.
            await user.type(input, companies[0].organizationName);
            expect(box('Fjern alle')).toHaveClass('ffe-checkbox--checked');

            await user.clear(input);
            expect(box('Velg alle')).toHaveClass('ffe-checkbox--indeterminate');
        });
    });

    describe('showNumberSelectedAfter', () => {
        type Company = (typeof companies)[0];
        type Props = SearchableDropdownMultiSelectProps<Company>;

        const renderShowNumberSelected = ({
            onChange,
            ...props
        }: {
            onChange: Props['onChange'];
            locale?: Props['locale'];
            selectedItems?: Props['selectedItems'];
            showNumberSelectedAfter?: Props['showNumberSelectedAfter'];
        }) =>
            render(
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
                    onChange={onChange}
                    showNumberSelectedAfter={2}
                    selectedItems={companies}
                    {...props}
                />,
            );

        const summaryChip = () =>
            screen.getByRole('button', { name: '3 valgt, fjern alle' });

        /* Slik at en feilende timer-test ikke drar de neste med seg. */
        afterEach(() => jest.useRealTimers());

        it('replaces the chips with a removable summary chip above the threshold', () => {
            renderShowNumberSelected({ onChange: jest.fn() });

            expect(summaryChip()).toHaveTextContent('3 valgt');
            expect(summaryChip().tagName).toEqual('BUTTON');
            // Krysset, altså at chippen ser fjernbar ut og ikke bare er det.
            expect(summaryChip()).toHaveClass('ffe-chip--icon-right');
            expect(
                screen.queryByLabelText('Bedriften, fjern valg'),
            ).toBeNull();
        });

        it('translates the summary chip label', () => {
            renderShowNumberSelected({ onChange: jest.fn(), locale: 'en' });

            expect(
                screen.getByRole('button', {
                    name: '3 selected, remove all',
                }),
            ).toHaveTextContent('3 selected');
        });

        it('removes every selected item when clicking the summary chip', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderShowNumberSelected({ onChange });

            await user.click(summaryChip());

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith(companies, 'removed');
            expect(
                screen.queryByRole('button', { name: /valgt, fjern alle/ }),
            ).toBeNull();
        });

        it('removes every selected item on backspace', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderShowNumberSelected({ onChange });

            await user.click(screen.getByRole('combobox'));
            await user.keyboard('{Backspace}');

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith(companies, 'removed');
            expect(
                screen.queryByRole('button', { name: /valgt, fjern alle/ }),
            ).toBeNull();
        });

        it('moves focus to the input when the focused summary chip is removed', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderShowNumberSelected({ onChange });

            await user.click(screen.getByRole('combobox'));
            // The chip sits before the input, so shift+tab lands on it.
            await user.tab({ shift: true });
            expect(summaryChip()).toHaveFocus();

            await user.keyboard('{Backspace}');

            expect(screen.getByRole('combobox')).toHaveFocus();
        });

        it('leaves the selection alone when backspace edits the search text', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderShowNumberSelected({ onChange });

            const input = screen.getByRole('combobox');
            await user.type(input, 'Be{Backspace}');

            expect(onChange).not.toHaveBeenCalled();
            expect(input).toHaveValue('B');
            expect(summaryChip()).toBeInTheDocument();
        });

        it('still removes only the last chip below the threshold', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderShowNumberSelected({
                onChange,
                selectedItems: [companies[0], companies[1]],
            });

            expect(screen.queryByText('2 valgt')).toBeNull();

            await user.click(screen.getByRole('combobox'));
            await user.keyboard('{Backspace}');

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith([companies[1]], 'removed');
            expect(
                screen.getByLabelText('Bedriften, fjern valg'),
            ).toBeInTheDocument();
        });

        /**
         * Focus starts in the input, as it does after selecting items. Removing
         * from an unfocused chip instead moves focus into the input, which
         * reopens the list and announces the result count — that announcement
         * lands inside the same debounce window and wins.
         */
        it('announces the removal as a single a11y status message', async () => {
            const user = userEvent.setup({ delay: null });
            jest.useFakeTimers();

            renderShowNumberSelected({ onChange: jest.fn() });

            await user.click(screen.getByRole('combobox'));
            await user.keyboard('{Backspace}');

            const a11yStatusMessage = await screen.findByRole('status');

            await waitFor(() => {
                expect(a11yStatusMessage).toHaveTextContent(
                    '3 elementer er fjernet. 0 valgt totalt.',
                );
            });
        });

        /**
         * With a threshold of 0 the summary chip is the only rendering, even for
         * a single item. The delta is then -1, so the bulk announcement does not
         * apply and the single-item message must still come through.
         */
        it('removes the one selected item when the threshold is 0', async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();

            renderShowNumberSelected({
                onChange,
                showNumberSelectedAfter: 0,
                selectedItems: [companies[0]],
            });

            const chip = screen.getByRole('button', {
                name: '1 valgt, fjern alle',
            });
            expect(chip).toHaveTextContent('1 valgt');

            await user.click(chip);

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith([companies[0]], 'removed');
        });
    });
});
