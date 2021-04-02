import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import SearchableDropdown from './SearchableDropdown';

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

    it('should show filtered result', () => {
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.change(input, { target: { value: 'Be' } });

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.queryByText('Sønn & co')).toBeNull();
        expect(screen.queryByText('812602372')).toBeNull();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();

        fireEvent.change(input, { target: { value: '8126023' } });

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.queryByText('Beslag skytter')).toBeNull();
        expect(screen.queryByText('812602552')).toBeNull();
    });

    it('should select clicked element', () => {
        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.change(input, { target: { value: 'Be' } });

        fireEvent.click(screen.getByText('Bedriften'), { button: 1 });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[0]);
        expect(input.value).toEqual('Bedriften');
    });

    it('should be possible to select item with keyboard', () => {
        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        fireEvent.click(input);

        fireEvent.keyDown(input, { key: 'ArrowDown' });
        fireEvent.keyDown(input, { key: 'ArrowDown' });
        fireEvent.keyDown(input, { key: 'Enter' });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[1]);
        expect(input.value).toEqual('Sønn & co');
    });

    it('should show "noMatch" values', () => {
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
                labelId="labelId"
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
        fireEvent.click(input);
        fireEvent.change(input, {
            target: { value: 'some thing without a match' },
        });

        expect(screen.getByText(noMatchText)).toBeInTheDocument();
        expect(screen.getByText('Rør og sånt')).toBeInTheDocument();
        expect(screen.getByText('812602399')).toBeInTheDocument();
        expect(screen.getByText('Kaffekoppen')).toBeInTheDocument();
        expect(screen.getByText('812602222')).toBeInTheDocument();

        fireEvent.change(input, { target: { value: '' } });

        expect(screen.queryByText(noMatchText)).toBeNull();
        expect(screen.queryByText('Rør og sånt')).toBeNull();
        expect(screen.queryByText('812602399')).toBeNull();
        expect(screen.queryByText('Kaffekoppen')).toBeNull();
        expect(screen.queryByText('812602222')).toBeNull();
    });

    it('should have clear button', () => {
        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        fireEvent.change(input, { target: { value: 'Be' } });

        fireEvent.click(screen.getByText('Bedriften'), { button: 1 });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith(companies[0]);
        expect(input.value).toEqual('Bedriften');

        const clearButton = screen.getByRole('button', {
            name: /fjern valgt/i,
        });

        fireEvent.click(clearButton, { button: 1 });

        expect(onChange).toHaveBeenCalledTimes(2);
        expect(onChange).toHaveBeenLastCalledWith(null);
        expect(input.value).toEqual('');
    });

    it('should render custom elements', () => {
        /* eslint-disable react/prop-types */
        const CustomListItemBody = ({ item, isHighlighted }) => {
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
        /* eslint-enable react/prop-types */

        const onChange = jest.fn();
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                listElementBody={CustomListItemBody}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        fireEvent.click(input);

        fireEvent.keyDown(input, { key: 'ArrowDown' });

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

    it('should use initialValue', () => {
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                initialValue={companies[1]}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');
        expect(input.value).toEqual('Sønn & co');
    });

    it('should open and close', function() {
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const openButton = screen.getByRole('button', {
            name: /åpne alternativer/i,
        });

        fireEvent.click(openButton, { button: 1 });

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();

        const closeButton = screen.getByRole('button', {
            name: /lukk alternativer/i,
        });

        fireEvent.click(closeButton, { button: 1 });

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.queryByText('Sønn & co')).toBeNull();
        expect(screen.queryByText('812602372')).toBeNull();
        expect(screen.queryByText('Beslag skytter')).toBeNull();
        expect(screen.queryByText('812602552')).toBeNull();
    });

    it('should filter only when value is changed', () => {
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.click(input);

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'Sønn' } });

        expect(screen.queryByText('Bedriften')).toBeNull();
        expect(screen.queryByText('912602370')).toBeNull();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.queryByText('Beslag skytter')).toBeNull();
        expect(screen.queryByText('812602552')).toBeNull();

        fireEvent.change(input, { target: { value: '' } });

        expect(screen.getByText('Bedriften')).toBeInTheDocument();
        expect(screen.getByText('912602370')).toBeInTheDocument();
        expect(screen.getByText('Sønn & co')).toBeInTheDocument();
        expect(screen.getByText('812602372')).toBeInTheDocument();
        expect(screen.getByText('Beslag skytter')).toBeInTheDocument();
        expect(screen.getByText('812602552')).toBeInTheDocument();
    });

    it('should be a wai-aria 1.0 combobox', () => {
        render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.click(input);
        fireEvent.keyDown(input, { key: 'ArrowDown' });
        fireEvent.keyDown(input, { key: 'ArrowDown' });

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
});
