import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, loadTodos } from './store/actionCreators';


class AddTodo extends Component {

    constructor() {
        super()
        this.state = {
            text: ''
        }
        this.inpRef = React.createRef();
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleAdd = () => {
        // alert(this.state.text);
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        });
        this.inpRef.current.focus();
    }

    handleLoad = () => {
        this.props.loadTodos();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inpRef} value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleLoad}>Load</button>
            </div>
        )
    }
}


export default connect(
    null,
    { addTodo, loadTodos }
)(AddTodo);
