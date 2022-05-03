import React from 'react';
import PropTypes from 'prop-types';
import { title } from 'case';
import { Link } from 'react-router-dom';
import { LinkText } from '@sb1/ffe-core-react';
const TocGroup = ({ group, level = 1 }) => {
    const { leafs, subtrees } = group.children.reduce(
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
                                    element={Link}
                                    to={`/${leaf.value.key}`}
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
                />
            ))}
        </>
    );
};

TocGroup.propTypes = {
    group: PropTypes.object.isRequired,
    level: PropTypes.number,
};

export default function Toc({ exampleTree }) {
    return (
        <nav className="sb1ex-toc">
            {exampleTree.children.map(example => (
                <TocGroup key={example.edge} group={example} />
            ))}
        </nav>
    );
}

Toc.propTypes = {
    exampleTree: PropTypes.object.isRequired,
};
