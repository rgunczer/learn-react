import React, { Component } from 'react';

export default class Dummy extends Component {


    componentDidUpdate() {
        console.log('component did update');
    }

    render() {
        return <p>Dummy is here{this.props.text}</p>
    }
}