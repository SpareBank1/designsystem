import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './../ffe-icons-react';
import iconlist from './../iconlist.json';
import BilIkon from './../bil-ikon';

const style = {
    'width': '200px'
};

ReactDOM.render(
    <div>
        <BilIkon style={style} title="Bil ikon" desc="Bil ikonet er et fint ikon" focusable={true}/>
        {iconlist.map((icon) => {
            return <Icon key={icon} className="icon" iconName={icon} title={icon}/>;
        })}
        <Icon iconName="none-existing" />
    </div>,
    document.getElementById('app')
);