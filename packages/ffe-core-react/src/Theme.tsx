import React from 'react';
import './theme.less';

export const Theme: React.FC = () => {
    return (
        <div className="theme theme--red">
            nivå1
            <div className="theme theme--green">
                nivå2
                <div className="theme theme--red">nivå3</div>
                nivå2
            </div>
        </div>
    );
};
