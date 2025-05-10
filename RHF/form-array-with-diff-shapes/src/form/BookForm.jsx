import React from 'react'
import { useForm } from 'react-hook-form'

export default function BookForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = formData => {
    alert(
      JSON.stringify(formData)
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('title')}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
