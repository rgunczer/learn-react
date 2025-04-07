import React from 'react'
import { useForm } from 'react-hook-form';

import { Input } from './controls/Input';
import { Dropdown } from './controls/Dropdown';
import { SubmitButton } from './controls/SubmitButton';

export const MyForm = () => {
  const { register, handleSubmit, control } = useForm({});

  const onSubmit = async formData => {
    console.log('onSubmit[BEGIN] -> formData', formData);

    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('onSubmit[END] -> formData', formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="text" { ... register('name') } /> */}
        <Input label="User name" { ...register('name') } />
        <Dropdown />
        <SubmitButton control={control} />
      </form>
    </div>
  )
}
