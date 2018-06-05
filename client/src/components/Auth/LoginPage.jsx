import React, { Component } from 'react';
import Input from '../common/Input';
import { loginAction, redirect } from '../../actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LoginPage extends Component {
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
        this.props.login(this.state.name, this.state.password);
    }

    componentWillReceiveProps(newProps){
        if(newProps.loginSuccess){  
            this.props.redirect()
            this.props.history.push('/')
        }
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

function mapStateToProps(state){
    return {
        loginSuccess: state.login.success
    }
}
function mapDispatchToProps(dispatch){
    return {
        login: (username, password) => dispatch(loginAction(username, password)),
        redirect: () => dispatch(redirect)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage))