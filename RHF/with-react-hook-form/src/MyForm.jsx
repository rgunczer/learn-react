import React from 'react'
import { useForm } from 'react-hook-form'
import { getRenderCount } from './utils/getRenderCount';

const RenderCount = getRenderCount();

export const MyForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: '',
      mobile: '',
      email: '',
    }
  });

  const onSubmit = formData => {
    console.log('formData', formData);
  }

  const onError = err => {
    console.log('validation errors', err);
  }

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit, onError)}>
      <RenderCount />
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="#Order No."
              disabled
              {...register('orderNo')}
            />
            <label>#Order No.</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile"
              {
                ...register('mobile', {
                  minLength: 10,
                  maxLength: 10,
                  required: true,
                })
              }
            />
            <label>Mobile</label>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Customer Name"
              {
                ...register(
                  'customerName',
                  {
                    required: 'This field is required',
                  }
                )
              }
            />
            <label>Customer Name</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              {...register('email', {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Incorrect email format',
                },
              })}
            />
            <label>Email</label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
