import React, { useState } from 'react';

const AddTodo = props => {
    const [text, setText] = useState('aaa');

    const handleAdd = () => {
        console.log(text)
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <label>Todo:</label>
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddTodo;
