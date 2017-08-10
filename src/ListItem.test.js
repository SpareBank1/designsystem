/*eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import ListItem from './ListItem';
const i = t => t;

const renderItem = company => (
    <div>
        <div className="custom-render-function">
            {company.organizationName}
        </div>
    </div>
);

const mountListItemProps = props => shallow(<ListItem {...props}/>);

describe('<Input>', () => {
    const props = {
        id:1,
        key:1,
        isHighlighted: false,
        item:{
            organizationName: "Bedriften",
            organizationNumber: "912602370",
        },
        onSelect:i,
        dropdownAttributes:["organizationName", "organizationNumber"],
        refHighlightedListItem: i,
    };

    const component = mountListItemProps(props);

    test('renders', () =>
        expect(component.find('.ffe-searchable-dropdown__item')).toHaveLength(1));

    test('renders custom renderElement function when defined', () => {
        const customRenderProps = {
            id:1,
            key:1,
            isHighlighted: false,
            item:{
                organizationName: "Bedriften",
                organizationNumber: "912602370",
            },
            onSelect:i,
            renderElement: renderItem,
            dropdownAttributes:["organizationName", "organizationNumber"],
            refHighlightedListItem: i,
        };
        const customRenderItem = mountListItemProps(customRenderProps);

        expect(customRenderItem.find('.ffe-searchable-dropdown__item--header')).toHaveLength(0);
        expect(customRenderItem.find('.custom-render-function')).toHaveLength(1);
    });

    describe('renders default case when renderElement is not defined', () => {

        test('including dropdown details when dropdownAttrs > 1', () => {
            expect(component.find('.ffe-searchable-dropdown__item--header')).toHaveLength(1);
            expect(component.find('.ffe-searchable-dropdown__item--details')).toHaveLength(1);
        });

        test('does not render dropdown details when dropdownAttrs === 1', () => {
            const singleDropdownAttrProps = {
                id:1,
                key:1,
                isHighlighted: false,
                item:{
                    organizationName: "Bedriften",
                    organizationNumber: "912602370",
                },
                onSelect:i,
                dropdownAttributes:["organizationName"],
                refHighlightedListItem: i,
            };
            const componentWithSingelDropdownAttrsItem = mountListItemProps(singleDropdownAttrProps);
            expect(componentWithSingelDropdownAttrsItem.find('.ffe-searchable-dropdown__item--header')).toHaveLength(1);
            expect(componentWithSingelDropdownAttrsItem.find('.ffe-searchable-dropdown__item--details')).toHaveLength(0);
        });
    });
});
