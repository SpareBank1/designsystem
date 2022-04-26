import {
    DescriptionList,
    DescriptionListTerm,
    DescriptionListDescription,
} from '@sb1/ffe-lists-react';

<div>
    <h3 className="ffe-h5">Medium</h3>
    <DescriptionList horizontal={true} medium={true}>
        <DescriptionListTerm>
            This is a very long term, so I might need some extra room
        </DescriptionListTerm>
        <DescriptionListDescription>
            Enlarging the term will of course be at the cost of space for the
            description
        </DescriptionListDescription>
    </DescriptionList>

    <h3 className="ffe-h5">Large</h3>
    <DescriptionList horizontal={true} large={true}>
        <DescriptionListTerm>
            This is a very long description, so I might need some extra room
        </DescriptionListTerm>
        <DescriptionListDescription>
            Enlarging the term will of course be at the cost of space for the
            description
        </DescriptionListDescription>
    </DescriptionList>
</div>
