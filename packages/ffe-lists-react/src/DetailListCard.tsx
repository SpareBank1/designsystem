import React from 'react';
import classNames from 'classnames';

export type BackgroundColor = 'primary' | 'secondary' | 'tertiary';

export interface DetailListCardProps
    extends React.ComponentPropsWithoutRef<'dl'> {
    /**
     * Property has new values that work with dark and accent mode as part of the Semantic Color update
     * Possible values: `primary` `secondary` `tertiary`
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)
     */
    bgColor?: BackgroundColor;
    /** @deprecated as part of update to Semantic Colors
     *
     * Property is replaced by the updated values for `bgColor` that works on dark mode
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    bgDarkmodeColor?: never;
}

export const DetailListCard: React.FC<DetailListCardProps> = ({
    className,
    bgColor,
    children,
    ...rest
}) => {
    return (
        <dl
            className={classNames('ffe-detail-list-card', className, {
                [`ffe-detail-list-card--bg-${bgColor}`]: bgColor,
            })}
            {...rest}
        >
            {children}
        </dl>
    );
};
