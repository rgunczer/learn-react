import React, { useState } from 'react';
import Example from './Example';

function App() {
  const [count, setCount] = useState(10);
  const [fruit, setFruit] = useState('banana');
  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button onClick={ () => setCount(count + 1) }>
        Click me
      </button>
      <hr />
      <p>fruit is: { fruit }</p>
      <button onClick={ () => setFruit('apple') }>
        Set Fruit
      </button>
      <hr />
      <Example />
    </div>
  );
}

export default App;
