import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <ul>
                    {this.props.todos.map(x => <li>{x}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo
    };
};

export default connect(
    mapStateToProps,
    null
)(TodoList);
