import React from 'react';
import classNames from 'classnames';
import Chevron from 'ffe-icons-react/chevron-ikon';
import TableCell from './table-cell.jsx';

const TableRowExpandable = ({ cells, onClick, handleKeyPress, expanded, expandableContent }) => {

    let tabIndex = { tabIndex:'0' };

    return <tbody
        className={ classNames('ffe-responsive-table__row--expandable', { 'ffe-responsive-table__row--expanded': expanded })}
        onKeyDown={ handleKeyPress }
        {...tabIndex}>

        <tr className="ffe-responsive-table__row" onClick={ onClick } aria-expanded={ expanded }>
            { cells.map((cell, index) => {
                    if (cell === null || typeof cell === 'string') {
                        return <TableCell key={ index }>{ cell }</TableCell>;
                    } else {
                        return <TableCell key={ index }
                                          dataHeader={ cell.dataHeader }
                                          alignLeft={ cell.alignLeft }>
                            { cell.content }
                        </TableCell>;
                    }
                }
            )}
            <TableCell tdClasses={ 'icon-cell' } contentClasses={ 'icon-container' }>
                <Chevron className={ classNames('expand-icon', {'expand-icon--open' : expanded}) } />
            </TableCell>
        </tr>
        { expanded &&
            <tr role="presentation" className="expanded-content">
                { expandableContent }
            </tr>
        }
    </tbody>;
};

TableRowExpandable.propTypes = {
    cells: React.PropTypes.array.isRequired,
    onClick: React.PropTypes.func.isRequired,
    expanded: React.PropTypes.bool.isRequired,
    expandableContent: React.PropTypes.node.isRequired,
    handleKeyPress: React.PropTypes.func
};

export default TableRowExpandable;
