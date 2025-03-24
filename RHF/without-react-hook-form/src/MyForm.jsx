import React, { useState } from 'react'
import { getRenderCount } from './utils/getRenderCount';

const RenderCount = getRenderCount();

export const MyForm = () => {
  const [values, setValues] = useState({
    customerName: 'John Doe',
    mobile: '',
  });

  const [errors, setErrors] = useState({
    customerName: '',
    mobile: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const validateFormData = () => {
    let tempErrors = {
      customerName: '',
      mobile: '',
    };

    if (values.customerName === '') {
      tempErrors.customerName = 'Customer Name is required';
    }

    if (values.mobile === '') {
      tempErrors.mobile = 'Mobile number is required';
    }

    setErrors(tempErrors);

    return Object.values(tempErrors).every((err) => err === '');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateFormData()) {
      console.log('form data', values);
    } else {
      console.log('Form is invalid');
    }
  }

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <RenderCount />
      <div className="form-floating mb-3">
        <input
          type="text"
          name="customerName"
          className="form-control"
          placeholder="Customer Name"
          value={values.customerName}
          onChange={handleInputChange}
        />
        <label>Customer Name</label>
        { errors.customerName && <div className="text-danger">{errors.customerName}</div> }
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="mobile"
          className="form-control"
          placeholder="Mobile"
          value={values.mobile}
          onChange={handleInputChange}
        />
        <label>Mobile</label>
        { errors.mobile && <div className="text-danger">{errors.mobile}</div> }
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
