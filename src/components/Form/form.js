import React, { Component } from 'react';

import './form.scss'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameIsEmpty: true
        }
    }

    onchangeInput = (e) => {
        const { value } = e.target;

        this.setState(() => ({
            usernameIsEmpty: value.length === 0
        }))
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Form sent');
    }

    render() {
        return (
            <form className="form" action="#" onSubmit={this.handleOnSubmit}>

            </form>
        )
    }
}