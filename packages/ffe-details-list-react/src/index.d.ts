import * as React from 'react';

declare class DetailContent extends React.Component<{
    /**
     * Internal prop used for knowing the total amount of columns, provided by `Detail`
     */
    childCount?: number;
    /**
     * The contents of the column
     */
    children: React.ReactNode;
    /**
     * Internal prop used for knowing which column is being rendered, provided by `Detail`
     */
    index?: number;
    /**
     * Any CSS classes that should be included on the rendered content
     */
    className?: string;
    /**
     * Indicate if this should be rendered as a call to action and moved to the end of the row
     */
    cta?: boolean;
}> {}

declare class DetailList extends React.Component<
    {
        /**
         * A set of `Detail` components where each will be rendered as a row item
         */
        children: React.ReactNode;
    },
    any
> {}

declare class Detail extends React.Component<
    {
        /**
         * A set of `Detail` components where each will be rendered as a row item
         */
        children: React.ReactNode;
        /**
         * A label for the data
         */
        label: string;
    },
    any
> {}

export { Detail };
export { DetailList };
export { DetailContent };
