import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    });

    return (
        <div>
            <p>Example works, really!?</p>
            <p>Clicked { count } times</p>
            <button onClick={ () => setCount(count + 1)}>Click</button>
        </div>
    );
}

export default Example;