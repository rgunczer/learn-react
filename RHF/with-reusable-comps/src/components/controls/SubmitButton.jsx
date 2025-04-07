import React from 'react'
import { useFormState } from 'react-hook-form'

const buttonClasses = `
  px-6 py-3
  bg-blue-500 text-white font-semibold
  rounded-2xl shadow-lg
  hover:shadow-xl hover:scale-105
  transition-transform duration-300
`

export const SubmitButton = ({ control }) => {
  const { isSubmitting } = useFormState({ control })
  return (
    <button
      type="submit"
      className={buttonClasses}
    >
      {isSubmitting && <span style={{ marginRight: '10px' }}>Spinner</span>}
      Submit
    </button>
  )
}
