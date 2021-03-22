import React from 'react';

function GameHeader(props) {
    return (
        <div>
            <h1 style={{ fontSize: '3.3rem', fontWeight: 700, color: 'rgb(255, 255, 255)' }}>{props.title}</h1>
            <a className="border rounded border-dark" href={props.hrefport} style={{ color: 'rgba(0, 0, 0, 1) !important', backgroundColor: 'rgb(0, 0, 0) !important', borderColor: 'rgb(0, 0, 0) !important', fontSize: '1.25rem', padding: '7.5px', textDecoration: 'none' }}>{props.icon}{props.prebutton}
                &nbsp;<span style={{ fontWeight: 600 }}>{props.name}</span></a>
        </div>
    );
}

export default GameHeader;