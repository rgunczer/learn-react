import React from 'react';
import Toolbar from './Toolbar';
import ThemeContext from './context';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default App;
