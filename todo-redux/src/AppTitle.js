import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AppTitle extends Component {

    render() {
        return (
            <h2>Todo List for [{this.props.title}]</h2>
        );
    }
}

AppTitle.propTypes = {
    title: PropTypes.string.isRequired
}