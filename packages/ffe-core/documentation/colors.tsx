import React from 'react';
// import {colors} from '../gen-src/semantic-color-names.js;

export const ColorsComponent = () => {
    const colors = ['derp'];
    return (
        <table>
            <thead>
                <tr>
                    <th>Farge navn</th>
                    <th>Light</th>
                    <th>Light accent</th>
                    <th>Dark</th>
                    <th>Dark accent</th>
                </tr>
            </thead>
            <tbody>
                {colors.map(color => (
                    <tr key={color}>
                        <td>{color}</td>
                        <td style={{ backgroundColor: `var(${color})` }}></td>
                        <td
                            class="ffe-accent-mode"
                            style={{ backgroundColor: `var(${color})` }}
                        ></td>
                        <td
                            class="dark-mode"
                            style={{ backgroundColor: `var(${color})` }}
                        ></td>
                        <td
                            class="dark-mode ffe-accent-color"
                            style={{ backgroundColor: `var(${color})` }}
                        ></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
