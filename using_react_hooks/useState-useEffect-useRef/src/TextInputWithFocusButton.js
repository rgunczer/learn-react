import React, { useRef } from 'react';

const TextInputWithFocusButton = () => {

    const inpEl = useRef(null);

    return (
        <>
            <input type="text" ref={inpEl} />
            <button onClick={ () => inpEl.current.focus() } >Focus</button>
        </>
    )
}

export default TextInputWithFocusButton;
