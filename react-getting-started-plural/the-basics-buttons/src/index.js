import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

const render = () => {

    document.getElementById('mountNode').innerHTML = `
    <div>
        Hello HTML
        <input />
        <pre>${(new Date).toLocaleTimeString()}</pre>
    </div>
    `;

    ReactDOM.render(
        <div>
            Hello React
            <input />
            <pre>{(new Date).toLocaleTimeString()}</pre>
        </div>,
        document.getElementById('mountNode2')
    )
}

setInterval(render, 1000);