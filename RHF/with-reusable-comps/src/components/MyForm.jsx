import React from 'react'
import { useForm } from 'react-hook-form';

import { Input } from './controls/Input';
import { Dropdown } from './controls/Dropdown';
import { SubmitButton } from './controls/SubmitButton';

const options = [
  { text: 'Select...', value: '' },
  { text: 'Lada', value: 'lada' },
  { text: 'Peugeot', value: 'peugeot' },
  { text: 'Porsche', value: 'porsche' },
];


export const MyForm = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: 'Jill',
      carType: 'lada'
    }
  });

  const onSubmit = async formData => {
    console.log('onSubmit[BEGIN] -> formData', formData);

    await new Promise(resolve => setTimeout(resolve, 3000)); // call the api

    console.log('onSubmit[END] -> formData', formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="text" { ... register('name') } /> */}
        <Input label="User name" { ...register('name') } />
        <Dropdown options={options} { ...register('carType')} />
        <div style={{ marginTop: '1rem' }}>
          <SubmitButton control={control} />
        </div>
      </form>
    </div>
  )
}



