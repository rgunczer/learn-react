import React from 'react';

export default (props) => {
    return (
        <div>
            <div className="top">{props.top}</div>
            <div className="left">{props.left}</div>
            <div className="center">{props.center}</div>
        </div>
    );
}