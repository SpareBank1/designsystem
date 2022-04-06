import React from 'react';
import PropTypes from 'prop-types';
import { title } from 'case';
import { Link } from 'react-router-dom';

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

    const Hx = `h${Math.min(level + 1, 6)}`;
    const hxClass = `ffe-h${Math.min(level + 1, 6)}`;

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
                                <Link to={`/${leaf.value.key}`}>
                                    {leaf.edge}
                                </Link>
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
        <div className="sb1ex-toc">
            {exampleTree.children.map(example => (
                <TocGroup key={example.edge} group={example} />
            ))}
        </div>
    );
}

Toc.propTypes = {
    exampleTree: PropTypes.object.isRequired,
};
