import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from './store/actionCreators';

class Todo extends Component {

    handleRemove = () => {
        this.props.removeTodo(this.props.name);
    }

    render() {
        return (
            <li>

                    <span>{this.props.name}</span>
                    <button onClick={this.handleRemove}>X</button>

            </li>
        );
    }
}

export default connect(
    null,
    { removeTodo }
)(Todo);