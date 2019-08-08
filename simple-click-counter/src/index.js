import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const model = {
    clickCount: 0
}

function render() {
    ReactDOM.render(<App clickCount={model.clickCount} click={() => { model.clickCount++; render(); }
} />, document.getElementById('root'));
}
render()