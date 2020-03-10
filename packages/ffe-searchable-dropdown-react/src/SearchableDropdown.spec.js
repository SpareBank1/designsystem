import React from 'react';
import { render, fireEvent } from '@testing-library/react';

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
        const placeholder = 'placeholder';
        const { queryByText, getByPlaceholderText, getByText } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                inputProps={{ placeholder }}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = getByPlaceholderText(placeholder);

        fireEvent.change(input, { target: { value: 'Be' } });

        expect(getByText('Bedriften')).toBeInTheDocument();
        expect(getByText('912602370')).toBeInTheDocument();
        expect(queryByText('Sønn & co')).toBeNull();
        expect(queryByText('812602372')).toBeNull();
        expect(getByText('Beslag skytter')).toBeInTheDocument();
        expect(getByText('812602552')).toBeInTheDocument();

        fireEvent.change(input, { target: { value: '8126023' } });

        expect(queryByText('Bedriften')).toBeNull();
        expect(queryByText('912602370')).toBeNull();
        expect(getByText('Sønn & co')).toBeInTheDocument();
        expect(getByText('812602372')).toBeInTheDocument();
        expect(queryByText('Beslag skytter')).toBeNull();
        expect(queryByText('812602552')).toBeNull();
    });

    it('should select clicked element', () => {
        const placeholder = 'placeholder';
        const onChange = jest.fn();
        const { getByPlaceholderText, getByText } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                inputProps={{ placeholder }}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = getByPlaceholderText(placeholder);

        fireEvent.change(input, { target: { value: 'Be' } });

        fireEvent.click(getByText('Bedriften'), { button: 1 });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(companies[0]);
        expect(input.value).toEqual('Bedriften');
    });

    it('should be possible to select item with keyboard', () => {
        const placeholder = 'placeholder';
        const onChange = jest.fn();
        const { getByPlaceholderText } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                inputProps={{ placeholder }}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = getByPlaceholderText(placeholder);
        fireEvent.focus(input);

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

        const placeholder = 'placeholder';
        const { getByPlaceholderText, getByText, queryByText } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                inputProps={{ placeholder }}
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

        const input = getByPlaceholderText(placeholder);
        fireEvent.focus(input);

        fireEvent.change(input, {
            target: { value: 'some thing without a match' },
        });

        expect(getByText(noMatchText)).toBeInTheDocument();
        expect(getByText('Rør og sånt')).toBeInTheDocument();
        expect(getByText('812602399')).toBeInTheDocument();
        expect(getByText('Kaffekoppen')).toBeInTheDocument();
        expect(getByText('812602222')).toBeInTheDocument();

        fireEvent.change(input, { target: { value: '' } });

        expect(queryByText(noMatchText)).toBeNull();
        expect(queryByText('Rør og sånt')).toBeNull();
        expect(queryByText('812602399')).toBeNull();
        expect(queryByText('Kaffekoppen')).toBeNull();
        expect(queryByText('812602222')).toBeNull();
    });

    it('should have clear button', () => {
        const placeholder = 'placeholder';
        const onChange = jest.fn();
        const { getByPlaceholderText, getByText, getByLabelText } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                inputProps={{ placeholder }}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = getByPlaceholderText(placeholder);
        fireEvent.change(input, { target: { value: 'Be' } });

        fireEvent.click(getByText('Bedriften'), { button: 1 });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith(companies[0]);
        expect(input.value).toEqual('Bedriften');

        const clearButton = getByLabelText('fjern valgt');

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

        const placeholder = 'placeholder';
        const onChange = jest.fn();
        const { getByPlaceholderText, getByText, getByTestId } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                inputProps={{ placeholder }}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={onChange}
                searchAttributes={['organizationName', 'organizationNumber']}
                listElementBody={CustomListItemBody}
                locale="nb"
            />,
        );

        const input = getByPlaceholderText(placeholder);
        fireEvent.focus(input);

        fireEvent.keyDown(input, { key: 'ArrowDown' });

        const listItemBody0 = getByTestId(companies[0].organizationNumber);
        expect(listItemBody0).toBeInTheDocument();
        expect(listItemBody0.getAttribute('data-is-higlighted')).toEqual(
            'true',
        );
        expect(getByText('Bedriften,912602370,5')).toBeInTheDocument();

        const listItemBody1 = getByTestId(companies[1].organizationNumber);
        expect(listItemBody1).toBeInTheDocument();
        expect(listItemBody1.getAttribute('data-is-higlighted')).toEqual(
            'false',
        );
        expect(getByText('Sønn & co,812602372,3')).toBeInTheDocument();

        const listItemBody2 = getByTestId(companies[2].organizationNumber);
        expect(listItemBody2).toBeInTheDocument();
        expect(listItemBody2.getAttribute('data-is-higlighted')).toEqual(
            'false',
        );
        expect(getByText('Beslag skytter,812602552,1')).toBeInTheDocument();
    });

    it('should use initialValue', () => {
        const placeholder = 'placeholder';
        const { getByPlaceholderText } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                inputProps={{ placeholder }}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                initialValue={companies[1]}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = getByPlaceholderText(placeholder);
        expect(input.value).toEqual('Sønn & co');
    });

    it('should open and close', function() {
        const placeholder = 'placeholder';
        const { getByLabelText, getByText, queryByText } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                inputProps={{ placeholder }}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const openButton = getByLabelText('åpne meny');
        fireEvent.click(openButton, { button: 1 });

        expect(getByText('Bedriften')).toBeInTheDocument();
        expect(getByText('912602370')).toBeInTheDocument();
        expect(getByText('Sønn & co')).toBeInTheDocument();
        expect(getByText('812602372')).toBeInTheDocument();
        expect(getByText('Beslag skytter')).toBeInTheDocument();
        expect(getByText('812602552')).toBeInTheDocument();

        const closeButton = getByLabelText('lukk meny');
        fireEvent.click(closeButton, { button: 1 });

        expect(queryByText('Bedriften')).toBeNull();
        expect(queryByText('912602370')).toBeNull();
        expect(queryByText('Sønn & co')).toBeNull();
        expect(queryByText('812602372')).toBeNull();
        expect(queryByText('Beslag skytter')).toBeNull();
        expect(queryByText('812602552')).toBeNull();
    });

    it('should filter only when value is changed', () => {
        const placeholder = 'placeholder';
        const { getByText, queryByText, getByPlaceholderText } = render(
            <SearchableDropdown
                id="id"
                labelId="labelId"
                inputProps={{ placeholder }}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />,
        );

        const input = getByPlaceholderText(placeholder);

        fireEvent.focus(input);

        expect(getByText('Bedriften')).toBeInTheDocument();
        expect(getByText('912602370')).toBeInTheDocument();
        expect(getByText('Sønn & co')).toBeInTheDocument();
        expect(getByText('812602372')).toBeInTheDocument();
        expect(getByText('Beslag skytter')).toBeInTheDocument();
        expect(getByText('812602552')).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'Sønn' } });

        expect(queryByText('Bedriften')).toBeNull();
        expect(queryByText('912602370')).toBeNull();
        expect(getByText('Sønn & co')).toBeInTheDocument();
        expect(getByText('812602372')).toBeInTheDocument();
        expect(queryByText('Beslag skytter')).toBeNull();
        expect(queryByText('812602552')).toBeNull();

        fireEvent.change(input, { target: { value: '' } });

        expect(getByText('Bedriften')).toBeInTheDocument();
        expect(getByText('912602370')).toBeInTheDocument();
        expect(getByText('Sønn & co')).toBeInTheDocument();
        expect(getByText('812602372')).toBeInTheDocument();
        expect(getByText('Beslag skytter')).toBeInTheDocument();
        expect(getByText('812602552')).toBeInTheDocument();
    });
});
