import React, { Component } from 'react';

export default class FormWithValidation extends Component {

    state = {
        fullName: null,
        email: null,
        password: null,
        errors: {
            fullName: '',
            email: '',
            password: ''
        }
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        console.log(`${name} - ${value}`);
        let errors = this.state.errors;

        switch (name) {
            case 'fullName':

            break;

            case 'email':

            break;

            case 'password':
                if (value && value.length < 6) {
                    errors[name] = 'Too short';
                } else {
                    errors[name] = '';
                }
            break;

            default:

                break;
        }

        this.setState({ [name]: value, errors });
    }

    handleSubmit = (e) => {
        console.log('form submit', e);
    }

    render() {
        return (
            <React.Fragment>
                <h3>Form With Validation</h3>
                <form autoComplete="off" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <label htmlFor="">Full Name:
                        <input type="text" id="fullName" name="fullName" />
                    </label>
                    <br />
                    <label htmlFor="email">Email:
                        <input type="text" id="email" name="email" />
                    </label>
                    <br />
                    <label htmlFor="password">Password [{ this.state.password ? this.state.password.length : '0'}]:
                        <input type="password" id="password" name="password" />
                        { this.state.errors.password && <div>{this.state.errors.password}</div> }
                    </label>
                </form>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
                <br />
                <br />
                <br />
                <br />

            </React.Fragment>
        );
    }
}