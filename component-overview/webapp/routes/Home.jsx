import React from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash.map';
import Header from '../components/Header';

export default function Home({ exampleGroups }) {
    return (
        <>
            <Header title="@sb1/ffe-*-react by example" />
            <div className="sb1ex-toc">
                {map(exampleGroups, (examples, group) => (
                    <div key={group} className="sb1ex-toc__group">
                        <div className="sb1ex-toc__group-title">{group}</div>
                        <ul className="sb1ex-toc__example-list">
                            {examples.map(({ id, label }) => (
                                <li
                                    key={id}
                                    className="sb1ex-toc____example-list-item"
                                >
                                    <Link to={`/${id}`}>
                                        {label.replace(`${group}/`, '')}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}
