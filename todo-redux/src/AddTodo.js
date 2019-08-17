import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './store/actionCreators';

class AddTodo extends Component {

    constructor() {
        super();
        this.state = {
            text: ''
        };
        this.inp = React.createRef();
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleAddTodo = (e) => {
        console.log('addTodo: ', this.state.text);
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        });
        this.inp.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inp} onChange={this.handleChange} value={this.state.text} placeholder="Enter Todo Item"></input>
                <button onClick={this.handleAddTodo} disabled={this.state.text === ''} >Add Todo</button>
            </div>
        );
    }
}

export default connect(
    null,
    { addTodo }
)(AddTodo);