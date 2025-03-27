import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from './features/counter/counterSlice';


export default function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>Dec</button>
    </div>
  );
}