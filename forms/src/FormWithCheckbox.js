import React, { Component } from 'react';

export default class FormWithCheckbox extends Component {

    state = {
        red: true,
        green: false,
        blue: false
    };

    handleCheckbox = (e) => {
        const { name, checked } = e.target;
        console.log(name, checked);

        this.setState({
            [name]: checked
        });
    }

    handleSumit = (e) => {
        e.preventDefault();

        console.log('submit', this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSumit}>
                    <label>
                        <input type="checkbox" name="red" checked={this.state.red} onChange={this.handleCheckbox} />Red
                    </label>
                    <label>
                    <input type="checkbox" name="green" checked={this.state.green} onChange={this.handleCheckbox} />Green
                    </label>
                    <label>
                    <input type="checkbox" name="blue" checked={this.state.blue} onChange={this.handleCheckbox} />Blue
                    </label>
                    <button>Submit</button>
                </form>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </div>
        );
    }

}