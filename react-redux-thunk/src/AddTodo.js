import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoItem, loadTodos } from './store/actionCreators';

class AddTodo extends Component {

    state = {
        todoText: ''
    }

    handleChange = (e) => {
        this.setState({
            todoText: e.target.value
        });
    }

    handleAdd = (e) => {
        alert(this.state.todoText)
        this.setState({
            todoText: ''
        })
        this.props.addTodoItem(this.state.todoText);
    }

    handleLoad = (e) => {
        this.props.loadTodos();
    }

    render() {
        return (
            <>
                <input type="text" onChange={this.handleChange} value={this.state.todoText}></input>
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleLoad}>Load</button>
            </>
        )
    }
}

export default connect(
    null,
    { addTodoItem, loadTodos }
)(AddTodo);
