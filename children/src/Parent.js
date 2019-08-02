import React, { Component } from 'react';

export default class Parent extends Component {

    render() {
        return (
            <>
                <h2>Parent</h2>
                {this.props.children}
            </>
        );
    }

}