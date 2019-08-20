import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
  render() {
    return (
      <div>
        App here
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
