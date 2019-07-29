import React, { Component } from 'react';
import queryString from 'query-string';


export default class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        };
    }

    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search);
        console.log(queryParams);
        this.setState({
            question: queryParams.q,
            answer: queryParams.a
        });
    }

    render() {
        return (
            <>
                <h2>Person here</h2>
                <pre>
                    { JSON.stringify(this.state, null, 2) }
                </pre>
            </>
        );
    }

}