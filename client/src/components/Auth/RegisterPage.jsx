import React, { Component } from 'react';
import Input from '../common/Input';
import { withRouter } from 'react-router-dom';
import { registerAction } from '../../actions/authActions' 
import { connect } from 'react-redux'

class RegisterPage extends Component {
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
        this.props.register(this.state.name, this.state.password)
    }

    componentWillReceiveProps(newProps){
        if(newProps.registerSuccess){
            this.props.history.push('/login')
        }
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

function mapStateToProps(state){
    return {
        registerSuccess: state.register.success
    }
}

function mapDispatchToProps(dispatch){
    return{
        register: (username, password) => dispatch(registerAction(username,password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterPage))