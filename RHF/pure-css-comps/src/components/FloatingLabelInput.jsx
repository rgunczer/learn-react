import React, { useState } from 'react';
// import './FloatingLabelInput.css';

function FloatingLabelInput({ label, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div className={`input-wrapper ${isFocused || value ? 'focused' : ''}`}>
        <label className="input-label">{label}</label>
        <input
          type="text"
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
          className="input-field"
        />
      </div>
      <input />
    </>
  );
}

export default FloatingLabelInput;