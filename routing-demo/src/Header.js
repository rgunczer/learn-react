import React, { Component } from 'react';
import { withRouter } from "react-router";

class Header extends Component {

    state = {
        num: 0
    };

    updateNum = (event) => {
        this.setState({
            num: event.target.value
        });
    }

    handleNav = () => {
        this.props.history.push('/person/' + this.state.num + '123');
    }

    render() {
        return (
            <div>
                <input type="number" onChange={this.updateNum} value={this.state.num} />
                <button className="btn btn-primary" onClick={this.handleNav} >Show</button>
            </div>
        );
    }
}

export default withRouter(Header);;
