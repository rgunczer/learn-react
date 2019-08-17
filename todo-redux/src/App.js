import React from 'react';
import { Provider } from 'react-redux';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  );
}

export default App;
