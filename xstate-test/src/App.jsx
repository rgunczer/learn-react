import './App.css'

import { useMachine } from '@xstate/react';
import { machine } from './machine.js';

function App() {
  const [state, send] = useMachine(machine);

  return (
    <section id="app">
      <p>{JSON.stringify(state)}</p>
      <p>{state.value}</p>
      <p>{state.context.count}</p>
      <button onClick={() => send({ type: 'toggle' })}>toggle</button>
    </section>
  );
}

export default App
