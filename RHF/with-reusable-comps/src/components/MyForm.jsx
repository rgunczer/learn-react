import React from 'react'
import { useForm } from 'react-hook-form';

export const MyForm = () => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = formData => {
    console.log('onSubmit -> formData', formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" { ... register('name') } />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
