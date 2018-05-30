import React, { Component } from 'react';
import Input from '../common/Input';
import { register } from '../../api/remote';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: '',
            repeat: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmit(e) {
        e.preventDefault();
        console.log(this.state.name)
        console.log(this.state.password)
        const res = await register(this.state.name, this.state.password);
    }

    render() {
        return (
            <div className="container">
                <h1>Register</h1>
                <form onSubmit={this.onSubmit}>
                    <Input
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        label="Name"
                    />
                    <Input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        label="Password"
                    />
                    <Input
                        name="repeat"
                        type="password"
                        value={this.state.repeat}
                        onChange={this.onChange}
                        label="Repeat password"
                    />
                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
            </div>
        );
    }
}