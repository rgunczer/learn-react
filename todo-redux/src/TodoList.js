import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class TodoList extends Component {

    render() {
        return (
            <div>
                Todo items:
                <ul>
                    {this.props.todos.map(x => <Todo key={x} name={x} />)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps
)(TodoList);