import React from 'react';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.test = "test"
    }

    render() {
        return (
            <h1> It's the {this.test}!</h1>
        );
    }
}