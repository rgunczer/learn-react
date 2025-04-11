import React from 'react'

export const Input = (props) => {
  const {
    type = 'text',
    className = '',
    label,
    ...other
  } = props;

  return (
    <div className="">
      <input
        type={type}
        className={` ${className}`}
        placeholder={label}
        {...other}
      />
      <label>{label}</label>
    </div>
  )
}
