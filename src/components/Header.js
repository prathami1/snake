import React from 'react';

function Header(props) {
    return (
        <div>
            <h1 style={{ fontSize: '3.3rem', fontWeight: 700, color: 'rgb(255, 255, 255)' }}>{props.title}</h1>
            <p style={{ fontSize: '1.5rem', color: 'rgb(255, 255, 255)' }}>{props.pretag}&nbsp;{props.break}<a><span style={{color: 'rgb(255, 255, 255)'}}>{props.posttag}</span></a></p>
            <a className="border rounded border-dark" href={props.hrefport} style={{ color: 'rgba(0, 0, 0, 1) !important', backgroundColor: 'rgb(0, 0, 0) !important', borderColor: 'rgb(0, 0, 0) !important', fontSize: '1.25rem', padding: '7.5px', textDecoration: 'none' }}>{props.prebutton}
                &nbsp;<span style={{ fontWeight: 600 }}>{props.name}</span></a>
        </div>
    );
}

export default Header;