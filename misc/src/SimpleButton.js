import React, { Component } from 'react';

export default class SimpleButton extends Component {

    render() {
        return <p>SimpleButton here [{this.props.state.buttonText}] {this.props.state.buttonAge}</p>;
    }

}