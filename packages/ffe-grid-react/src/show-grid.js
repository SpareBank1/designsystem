import React from 'react';

import { Grid, GridRow, GridCol } from 'ffe-grid-react';
import { render } from 'react-dom';

const createGridContainer = () => {
    const css = `
        .ffe-grid-react-debug__grid-content {
            background: #e1e1e1;
            height: 100vh;
            opacity: 0.6;
            width: 100%;
        }

        .ffe-grid-react-debug__grid-container {
            height: 100%;
            pointer-events: none;
            position: fixed;
            top: 0;
            z-index: 9999;
            width: 100%;
        }
    `;

    const style = document.createElement('style');
    style.id = 'gridViewStyle';
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    const div = document.createElement('div');
    div.id = 'gridView';
    div.classList.add('ffe-grid-react-debug__grid-container');

    document.body.appendChild(div);
    return div;
};

const showGrid = () => {
    const div = document.getElementById('gridView');

    if (div) {
        const styleDiv = document.getElementById('gridViewStyle');
        styleDiv.parentNode.removeChild(styleDiv);
        return div.parentNode.removeChild(div);
    }

    const grid = (
        <Grid>
            <GridRow>
                {new Array(12).fill(null).map((_,index) => (
                    <GridCol
                        lg={1}
                        md={2}
                        sm={3}
                        key={index}
                    >
                        <div className="ffe-grid-react-debug__grid-content" />
                    </GridCol>
                ))}
            </GridRow>
        </Grid>
    );
    render(grid, createGridContainer());
};

export default showGrid;
