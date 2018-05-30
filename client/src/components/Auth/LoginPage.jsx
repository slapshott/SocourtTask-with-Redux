import React, { Component } from 'react';
import Input from '../common/Input';
import { login } from '../../api/remote';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        const res = await login(this.state.name, this.state.password);
        console.log(res)
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <Input
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        label="Name"
                    />
                    <Input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        label="Password"
                    />
                    <input type="submit" className="btn btn-primary" value="Login" />
                </form>
            </div>
        );
    }
}