import React, { Component } from 'react';

export default class FormWithDropdown extends Component {

    state = {
        selectedColor: 'red',
        possibleColors: ['red', 'green', 'blue', 'orange', 'yellow', 'magenta'],
        selectedPerson: null,
        possiblePersons: [
            {
                id: 1,
                name: 'Diego'
            },
            {
                id: 2,
                name: 'Pedro'
            },
            {
                id: 3,
                name: 'Javier'
            }
        ]
    };

    handleColorChange = (e) => {
        this.setState({selectedColor: e.target.value});
    }

    handlePersonChange = (e) => {
        const id2Find = Number(e.target.value);
        console.log(e.target.value);
        const person = this.state.possiblePersons.find(x => x.id === id2Find);
        if (person) {
            console.log('found');
            this.setState({ selectedPerson: person });
        } else {
            this.setState({selectedPerson: null});
        }
    }

    render() {
        const colors = this.state.possibleColors.map((x, index) => <option key={index} value={x}>{x}</option>)
        // const persons = this.state.possiblePersons.map(x => <option value={x.id}>{x.id + ' - ' + x.name}</option>)
        const persons = this.state.possiblePersons.map(x => <option key={x.id} value={x.id}>{`${x.name} - [${x.id}] `}</option>)
        return (
            <div>
                <form>
                    <select value={this.state.selectedColor} onChange={this.handleColorChange}>
                        {/* <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option> */}
                        {colors}
                    </select>
                    <hr />
                    <input type="text" value={this.state.selectedPerson ? this.state.selectedPerson.name : ''} onChange={() => null}></input>
                    <select value={this.state.selectedPerson ? this.state.selectedPerson.id : ''} onChange={this.handlePersonChange}>
                        <option value=""></option>
                        {persons}
                    </select>
                </form>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </div>
        );
    }
}