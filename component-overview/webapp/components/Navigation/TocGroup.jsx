import React from 'react';
import PropTypes from 'prop-types';
import { title } from 'case';
import { Link } from 'react-router-dom';
import { LinkText } from '@sb1/ffe-core-react';

const getLeafsAndSubtrees = group =>
    group.children.reduce(
        (acc, child) => {
            if (child.hasValue) {
                acc.leafs.push(child);
            }
            if (child.hasChildren) {
                acc.subtrees.push(child);
            }
            return acc;
        },
        { leafs: [], subtrees: [] },
    );

export default function TocGroup({ group, level = 1, focusable = true }) {
    const { leafs, subtrees } = getLeafsAndSubtrees(group);
    const conditionalTabIndex = focusable ? {} : { tabIndex: -1 };

    const hLevel = Math.min(level + 1, 6);
    const Hx = `h${hLevel}`;
    const hxClass = `ffe-h${hLevel}`;

    return (
        <>
            <div
                className={`sb1ex-toc__group sb1ex-toc__group--level-${level}`}
            >
                <Hx
                    className={`${hxClass} sb1ex-toc__group-title`}
                    id={`toc_${group.path}`}
                >
                    {title(group.edge)}
                </Hx>
                {leafs.length > 0 && (
                    <ul className="sb1ex-toc__example-list">
                        {leafs.map(leaf => (
                            <li
                                key={leaf.edge}
                                className="sb1ex-toc____example-list-item"
                            >
                                <LinkText
                                    as={Link}
                                    to={`/${leaf.value.key}`}
                                    {...conditionalTabIndex}
                                >
                                    {leaf.edge}
                                </LinkText>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {subtrees.map(subtree => (
                <TocGroup
                    key={subtree.edge}
                    group={subtree}
                    level={level + 1}
                    focusable={focusable}
                />
            ))}
        </>
    );
}

TocGroup.propTypes = {
    group: PropTypes.object.isRequired,
    level: PropTypes.number,
    focusable: PropTypes.bool,
};
