import React, { Component } from 'react';
import { connect } from 'react-redux';

function addTodo(value) {
  return {
    type: 'ADD',
    payload: value
  };
}

function deleteTodo(value) {
  return {
    type: 'DEL',
    payload: value
  };
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo
  }
}

const mapDispatchToProps = { addTodo, deleteTodo }

class App extends Component {

  constructor() {
    super();
    this.inp = React.createRef();

    this.state = {
      text: ''
    }
  }

  onTextChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  onAdd = () => {
    this.props.addTodo(this.state.text)
    this.setState({
      text: ''
    });
    this.inp.current.focus();
  }

  onDel = () => {
    this.props.deleteTodo(this.state.text)
  }

  render() {
    const todos = this.props.todos.map(x => <li>{x}</li>)
    return (
      <div>
        <h2>App Here</h2>
        <input type="text" value={this.state.text} onChange={this.onTextChange} ref={this.inp} />
        <button onClick={this.onAdd}>Add</button>
        <button onClick={this.onDel}>Del</button>
        <br />
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
