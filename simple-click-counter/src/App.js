import React from 'react';

function App(props) {
  return (
    <div onClick={props.click}>
      This div was clicked {props.clickCount} times.
    </div>
  );
}

export default App;
