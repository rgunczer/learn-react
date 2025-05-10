import React from 'react'
import { useForm } from 'react-hook-form'

export default function BookForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = formData => {
    console.log('Succes: ', formData)
    alert(
      JSON.stringify(formData)
    );
  }

  const onError = err => {
    console.log('error', err);

    for (const property in err) {
      console.log('property: ',property);
      console.log('type: ', err[property].type)
      console.log('message: ', err[property].message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          type="text"
          {
            ...register(
              'title',
              {
                required: 'Field is required',
                minLength: {
                  value: 3,
                  message: 'Too short'
                }
              }
            )
          }
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
