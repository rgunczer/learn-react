import React, { Component } from 'react';

import RequiredWarning from './RequiredWarning';

export default class EditPerson extends Component {

    state = {
        form: {
            name: '',
            nick: '',
            country: ''
        },
        formErrors: {
            name: false,
            nick: false,
            country: false
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');

    }

    handleChange = (e) => {
        console.log('handleChange');

        const { name, value } = e.target;

        console.log(`name: [${name}], value:[${value}]`);

        this.setState({
            form: { ...this.state.form, [name]: value}
        }, () => {

            switch(name) {
                case 'name':
                    this.setState({
                        formErrors: {...this.state.formErrors, name: this.state.form.name === '' }
                    });
                    break;

                case 'nick':
                    this.setState({
                        formErrors: {...this.state.formErrors, nick: this.state.form.nick === '' || this.state.form.nick.length < 3 }
                    });
                    break;

                default:
                    break;
            }

        });
    }

    render() {
        return (
            <div>
                <h3>Edit Person</h3>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit} onChange={this.handleChange}>

                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" />
                    <RequiredWarning show={this.state.formErrors.name}/>
                    <br />
                    <label htmlFor="nick">Nick: </label>
                    <input type="text" id="nick" name="nick" />
                    <RequiredWarning show={this.state.formErrors.nick}/>
                    <br />
                    <label htmlFor="country">Country: </label>
                    <input type="text" id="country" name="country" />
                    <RequiredWarning show={this.state.formErrors.country}/>
                    <br />

                    <button>Submit</button>
                </form>
                <pre style={{backgroundColor: 'lightgray'}}>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </div>
        );
    }

}