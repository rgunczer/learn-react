import React, { Component } from 'react';
import ThemeContext from './context';

export default class ThemedButton extends Component {

    static contextType = ThemeContext;

    render() {
        return <p>ThemedButton is here {this.context} </p>
    }
}