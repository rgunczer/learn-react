import React, { Component } from 'react';

class Home extends Component {

    handleClick = () => {
        this.props.history.push('/person/123');
    }

    render() {
        return (
            <div>
                <p>Home is Here</p>
                <button onClick={this.handleClick}>Goto Person</button>
            </div>
        );
    }
}

export default Home;