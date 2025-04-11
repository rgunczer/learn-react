import React from 'react'

const selectClasses = `
  px-4 py-2
  border border-gray-300 rounded-md shadow-sm
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
  bg-white text-gray-700
`;

export const Dropdown = (props) => {
  const {
    options,
    ...other
  } = props;

  return (
    <>
      <select
        className={selectClasses}
        {...other}
      >
        {options.map(x => <option value={x.value}>{x.text}</option>)}
      </select>
    </>
  );
}



