import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './ffe-icons-react';
import iconlist from 'json!./iconlist.json';
import BilIkon from './bil-ikon';

const style = {
    'width': '200px'
};

ReactDOM.render(
    <div>
        <BilIkon style={style}/>
        {iconlist.map((icon) => {
            return <Icon key={icon} className="icon" iconName={icon}/>;
        })}
    </div>,
    document.getElementById('app')
);