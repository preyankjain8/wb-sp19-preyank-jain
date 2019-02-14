import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import UserService from "../services/UserService";
import CourseManager from "../containers/CourseManager"

class Register extends Component {
    constructor(props){
        super(props)
        this.userService = new UserService();
        this.state = {
            userName: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: ''
        }
    }

    updateUserName = (event) =>{
        this.setState({
            userName: event.target.value
        })
    }

    updateFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    updateLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }

    updatePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    }

    updateConfirmPassword = (event) =>{
        this.setState({
            confirmPassword: event.target.value
        })
    }

    register = () => {
        this.userService.register(
            this.state.userName,
            this.state.password,
            this.state.firstName,
            this.state.lastName).then(this.allowLogin)
    }

    allowLogin = (user) =>{
        window.location.href = '/courses';
    }

    render() {
        return (
            <div className="container-fluid">
                <h1 className="register">Sign Up</h1>
                <div className="form-group row">
                    <label htmlFor="username"
                           className="col-sm-2">
                        Username
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="alice"
                               value={this.state.userName}
                               onChange={this.updateUserName}
                               id="username">
                        </input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password"
                           className="col-sm-2">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               type="password"
                               value={this.state.password}
                               onChange={this.updatePassword}
                               placeholder="!@#$QWERzxc"
                               id="password">
                        </input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="verify-password"
                           className="col-sm-2">
                        Verify Password
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               type="password"
                               value={this.state.confirmPassword}
                               onChange={this.updateConfirmPassword}
                               placeholder="!@#$QWERzxc"
                               id="verify-password">
                        </input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="firstName"
                           className="col-sm-2">
                        First Name
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Alice"
                               value={this.state.firstName}
                               onChange={this.updateFirstName}
                               id="firstname">
                        </input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastName"
                           className="col-sm-2">
                        Last Name
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               placeholder="Wonderland"
                               value={this.state.lastName}
                               onChange={this.updateLastName}
                               id="lastname">
                        </input>
                    </div>
                </div>
                <div>
                    <button type="button"
                            onClick={this.register}
                            className="btn btn-primary col-sm-10 float-right">
                        Sign up
                    </button>
                </div>
                <div>
                    <Link className="col-sm-10 float-right"
                       to="/">Login</Link>
                </div>
            </div>
        )
    }
}

export default Register;