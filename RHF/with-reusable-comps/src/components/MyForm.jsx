import React from 'react'
import { useForm } from 'react-hook-form';

import { Input } from './controls/Input';
import { Dropdown } from './controls/Dropdown';
import { SubmitButton } from './controls/SubmitButton';

export const MyForm = () => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = formData => {
    console.log('onSubmit -> formData', formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="text" { ... register('name') } /> */}
        <Input label="User name" { ...register('name') } />
        <Dropdown />
        <SubmitButton />
      </form>
    </div>
  )
}
