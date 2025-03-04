import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchableDropdown } from './SearchableDropdown';

describe('SearchableDropdown', () => {
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

    it('should show filtered result', async () => {
        const user = userEvent.setup();

        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
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
        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        await user.type(input, 'Be');

        await user.click(screen.getByText('Bedriften'));

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[0]);
        expect(input.getAttribute('value')).toEqual('Bedriften');
    });

    it('should be possible to select item with keyboard', async () => {
        const user = userEvent.setup();

        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        await user.click(input);

        await user.type(input, '{arrowdown}');
        await user.type(input, '{arrowdown}');
        await user.type(input, '{enter}');

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[1]);
        expect(input.getAttribute('value')).toEqual('Sønn & co');
    });

    it('should show "noMatch" values', async () => {
        const user = userEvent.setup();

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
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                noMatch={{
                    text: noMatchText,
                    dropdownList: noMatchDropDownList,
                }}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        await user.click(input);
        await user.type(input, 'some thing without a match');

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

    it('should render custom elements', async () => {
        const user = userEvent.setup();
        const CustomOptionBody = ({
            item,
            isHighlighted,
        }: {
            item: (typeof companies)[number];
            isHighlighted: boolean;
        }) => {
            return (
                <div
                    data-testid={item.organizationNumber}
                    data-is-higlighted={isHighlighted}
                >
                    {item.organizationName},{item.organizationNumber},
                    {item.quantityUnprocessedMessages}
                </div>
            );
        };

        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                optionBody={CustomOptionBody}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        await user.click(input);

        await user.type(input, '{arrowdown}');

        const listItemBody0 = screen.getByTestId(
            companies[0].organizationNumber,
        );
        expect(listItemBody0).toBeInTheDocument();
        expect(listItemBody0.getAttribute('data-is-higlighted')).toEqual(
            'true',
        );
        expect(screen.getByText('Bedriften,912602370,5')).toBeInTheDocument();

        const listItemBody1 = screen.getByTestId(
            companies[1].organizationNumber,
        );
        expect(listItemBody1).toBeInTheDocument();
        expect(listItemBody1.getAttribute('data-is-higlighted')).toEqual(
            'false',
        );
        expect(screen.getByText('Sønn & co,812602372,3')).toBeInTheDocument();

        const listItemBody2 = screen.getByTestId(
            companies[2].organizationNumber,
        );
        expect(listItemBody2).toBeInTheDocument();
        expect(listItemBody2.getAttribute('data-is-higlighted')).toEqual(
            'false',
        );
        expect(
            screen.getByText('Beslag skytter,812602552,1'),
        ).toBeInTheDocument();
    });

    it('should open and close', async function () {
        const user = userEvent.setup();

        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        await user.click(input);

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();

        const closeButton = document.getElementsByClassName(
            'ffe-searchable-dropdown__button',
        )[0];
        await user.click(closeButton);

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.queryByText('Sønn & co')).toBeNull();
        expect(screen.queryByText('812602372')).toBeNull();
        expect(screen.queryByText('Beslag skytter')).toBeNull();
        expect(screen.queryByText('812602552')).toBeNull();
    });

    it('should open and close using tab', async function () {
        const user = userEvent.setup();

        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        await user.tab();

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();

        await user.tab();

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.queryByText('Sønn & co')).toBeNull();
        expect(screen.queryByText('812602372')).toBeNull();
        expect(screen.queryByText('Beslag skytter')).toBeNull();
        expect(screen.queryByText('812602552')).toBeNull();
    });

    it('should filter only when value is changed', async () => {
        const user = userEvent.setup();
        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        await user.click(input);

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();

        await user.type(input, 'Sønn');

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.queryByText('Beslag skytter')).toBeNull();
        expect(screen.queryByText('812602552')).toBeNull();

        await user.clear(input);

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();
    });

    it('should be a wai-aria 1.0 combobox', async () => {
        const user = userEvent.setup();
        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
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
        expect(input.getAttribute('aria-activedescendant')).toEqual(
            options[1].getAttribute('id'),
        );
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
        jest.useFakeTimers();
        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
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
            expect(a11yStatusMessage).toHaveTextContent(
                'Valgt element har blitt fjernet.',
            );
        });
        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });
        jest.useRealTimers();
    });

    it('should set a11y status message briefly on state change', async () => {
        const user = userEvent.setup({ delay: null });
        jest.useFakeTimers();
        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
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
                />
            </div>,
        );

        const input = await screen.findByRole('combobox');

        await user.click(input);

        const a11yStatusMessage = await screen.findByRole('status');

        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                '3 resultater er tilgjengelig, bruk opp- og nedpiltastene for å navigere. Trykk Enter for å velge.',
            );
        });
        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        await user.type(input, 'be');

        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                '2 resultater er tilgjengelig, bruk opp- og nedpiltastene for å navigere. Trykk Enter for å velge.',
            );
        });
        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        await user.clear(input);
        await user.type(input, 'ingen');

        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                'Ingen resultater er tilgjengelige.',
            );
        });
        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        await user.click(screen.getByText('Knapp'));

        expect(a11yStatusMessage).toHaveTextContent('');
        jest.useRealTimers();
    });

    it('should highlight the first element when typing', async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();
        const { container } = render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        await user.click(input);

        await user.type(input, 'Be');

        const highlightedElements = container.querySelectorAll(
            '.ffe-searchable-dropdown__list-item-body--highlighted',
        );
        expect(highlightedElements).toHaveLength(1);
        expect(highlightedElements[0].innerHTML).toContain('Bedriften');
    });

    it('should call onChange(null) when emptying the input field and moving focus away', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={companies}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                />
            </div>,
        );

        const input = screen.getByRole('combobox');

        await user.type(input, 'Be');

        await user.click(screen.getByText('Bedriften'));

        await user.clear(input);

        await user.click(screen.getByText('Knapp'));

        expect(onChange).toHaveBeenCalledTimes(2);
        expect(onChange).toHaveBeenCalledWith(null);
        expect(input.getAttribute('value')).toEqual('');
    });

    it('should reset the input field value to the saved selected element when pressing Escape', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();
        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        await user.type(input, 'Be');

        await user.click(screen.getByText('Bedriften'));

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[0]);
        expect(input.getAttribute('value')).toEqual('Bedriften');

        await user.clear(input);
        await user.type(input, 'B');
        expect(input.getAttribute('value')).toEqual('B');

        await user.keyboard('{Esc}');

        expect(input.getAttribute('value')).toEqual('Bedriften');
    });

    it('should select item when losing focus if there is one single match', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={companies}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                />
            </div>,
        );

        const input = screen.getByRole('combobox');

        await user.clear(input);
        await user.type(input, 'Besla');

        expect(input.getAttribute('value')).toEqual('Besla');

        await user.click(screen.getByText('Knapp'));

        expect(input.getAttribute('value')).toEqual('Beslag skytter');
    });

    it('should format input value when passing formatter', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        const formatter = jest.fn(text => {
            return text
                .split('')
                .map((char: string) => `${char}!?_`)
                .join('');
        });

        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
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
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
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

        const { rerender } = render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        expect(input.getAttribute('value')).toBe('');

        rerender(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                selectedItem={companies[2]}
            />,
        );

        expect(input.getAttribute('value')).toBe('Beslag skytter');
    });

    it('allows for writing and selecting even when passing selectedItem', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                selectedItem={companies[1]}
            />,
        );

        const input = screen.getByRole('combobox');

        expect(input.getAttribute('value')).toBe('Sønn & co');

        await user.clear(input);
        await user.type(input, 'Be');

        await user.click(screen.getByText('Beslag skytter'));

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[2]);
        expect(input.getAttribute('value')).toEqual('Beslag skytter');
    });

    it('should not automatically change selectedItem if object structure is different from previous but the actual content is still the same content', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={companies}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    selectedItem={{
                        organizationNumber: '912602370',
                        quantityUnprocessedMessages: 5,
                        organizationName: 'Bedriften',
                    }}
                    locale="nb"
                />
            </div>,
        );

        const input = screen.getByRole('combobox');
        await user.click(input);
        await user.click(screen.getByText('Knapp'));

        expect(onChange).not.toHaveBeenCalled();
    });

    it('should allow passing a selectedItem with same organizationName as dropdownListItems but different organizationNumber without it being changed', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        const noMatchDropDownList = [
            {
                organizationName: 'Bedriften',
                organizationNumber: '1111111',
                quantityUnprocessedMessages: 7,
            },
        ];

        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={companies}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                    noMatch={{
                        text: '',
                        dropdownList: noMatchDropDownList,
                    }}
                    selectedItem={noMatchDropDownList[0]}
                />
            </div>,
        );

        const input = screen.getByRole('combobox');
        await user.click(input);
        await user.click(screen.getByText('Knapp'));

        expect(onChange).not.toHaveBeenCalled();
    });

    it('should not automatically change selectedItem when list contains one element if there is no highlightedIndex', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={[companies[0]]}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                />
            </div>,
        );

        const input = screen.getByRole('combobox');
        await user.click(screen.getByText('Knapp'));

        expect(onChange).not.toHaveBeenCalled();
        expect(input.getAttribute('value')).toEqual('');
    });

    it('should show updated result list after loading completes', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        const { rerender } = render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={[]}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                    isLoading={true}
                />
            </div>,
        );

        const input = screen.getByRole('combobox');
        await user.click(input);
        await user.type(input, 'Beslag');

        expect(screen.queryByText('Beslag skytter')).toBeNull();

        rerender(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={[
                        {
                            organizationName: 'Beslag skytter',
                            organizationNumber: '812602552',
                        },
                    ]}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                    isLoading={false}
                />
            </div>,
        );

        await waitFor(() => {
            expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        });
    });

    it('should broadcast loading status when dropdown list is loading', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();
        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={[]}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                    isLoading={true}
                />
            </div>,
        );

        const input = screen.getByRole('combobox');
        await user.click(input);

        await screen.findByText('Laster inn alternativer.');
    });

    it('should show postListElement when postListElement is passed as props', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        render(
            <div>
                <button>Knapp</button>
                <SearchableDropdown
                    id="id"
                    labelledById="labelId"
                    dropdownAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    dropdownList={[]}
                    postListElement={<span>Dette er et postListElement!</span>}
                    onChange={onChange}
                    searchAttributes={[
                        'organizationName',
                        'organizationNumber',
                    ]}
                    locale="nb"
                    isLoading={true}
                />
            </div>,
        );
        const input = screen.getByRole('combobox');
        await user.click(input);
        await screen.findByText('Dette er et postListElement!');
    });

    it('allows passing a custom display attribute', async () => {
        const onChange = jest.fn();
        const user = userEvent.setup();

        render(
            <SearchableDropdown
                id="id"
                labelledById="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                displayAttribute={'organizationNumber'}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        expect(input.getAttribute('value')).toBe('');
        await user.type(input, 'Be');

        await user.click(screen.getByText('Beslag skytter'));

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[2]);
        expect(input.getAttribute('value')).toEqual('812602552');
    });
});
