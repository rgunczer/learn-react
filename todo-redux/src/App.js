import React from 'react';
import { Provider } from 'react-redux';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import AppTitle from './AppTitle';

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <AppTitle title="Fruits"/>
      <AddTodo />
      <TodoList />
    </Provider>
  );
}

export default App;
