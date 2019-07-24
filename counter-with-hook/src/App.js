import React, { useState } from 'react';

function Button(props) {

  // const handleClick = () => setCounter(counter*2);

  return (
    // <button onClick={handleClick}>
    <button onClick={props.onClickFunction}>
      {/* {counter} */}
      +1
    </button>
  );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  )
}

function App() {
  const [counter, setCounter] = useState(5);
  const incrementCounter = () => setCounter(counter+1);
  return (
    <div>
      <Button onClickFunction={incrementCounter} />
      <Display message={counter}/>
    </div>
  )
}

export default App;
