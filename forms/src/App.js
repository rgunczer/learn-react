import React, { Component } from 'react';
import FormWithCheckbox from './FormWithCheckbox';
import FormWithDropdown from './FormWithDropdown';
import FormWithValidation from './FormWithValidation';

class App extends Component {

  state = {
    title: 'Some title',
    tech: ['angular', 'react', 'vue', 'nodejs'],
    selectedTech: 'react',
    firstName: '',
    lastName: ''
  };

  handleChange = (e) => {
    let obj = {};
    obj[e.target.value] = e.target.checked
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit: ', this.state.title);
  }

  handleRadio = (e) => {
    this.setState({ selectedTech: e.target.value });
  }

  handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    // e.target.name
    // e.target.value
    console.log(`${name}, ${value}`);
    this.setState({ [name]: value });
  }

  handleSubmit2nd = (e) => {
    e.preventDefault();
    const dataToSend = {
      first_name: this.state.firstName.trim(),
      last_name: this.state.lastName.trim()
    };
    console.log(`Data to send: ${JSON.stringify(dataToSend, null, 2)}}`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />

          {
            this.state.tech.map(x => {
              return (
                <label key={x}>
                  <input type="radio"
                    name="radioTech"
                    value={x}
                    checked={x === this.state.selectedTech}
                    onChange={this.handleRadio} />
                  {x}
                </label>
              );
            })
          }

        </form>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
        <hr />
        <form autoComplete="off" onSubmit={this.handleSubmit2nd} onChange={this.handleChange}>
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <button>Submit</button>
        </form>
        <hr />
        <FormWithCheckbox />
        <hr />
        <FormWithDropdown />
        <hr />
        <FormWithValidation />
      </div>
    );
  }
}

export default App;
