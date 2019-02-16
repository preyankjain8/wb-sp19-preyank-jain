import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import UserService from "../services/UserService";
import CourseManager from "../containers/CourseManager"

class Login extends Component {
    constructor(props){
        super(props)
        this.userService = new UserService();
        this.userService.loggedIn().then(this.loggedIn)
        this.state = {
            userName: '',
            password: ''
        }
    }

    updateUserName = (event) =>{
        this.setState({
            userName: event.target.value
        })
    }

    updatePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    }

    login = () => {
        this.userService.login(this.state.userName,
            this.state.password)
            .then(this.allowLogin)
    }

    allowLogin = (user) =>{
        if(user !== undefined)
            window.location.href = '/courses';
        else{
            alert("incorrect username or password!")
        }
    }

    loggedIn = (user) => {
        if(user !== undefined){
            window.location.href = '/courses';
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <h1 className="login">Sign In</h1>
                <div className="form-group row">
                    <label htmlFor="username"
                           className="col-sm-2">
                        Username
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               value={this.state.userName}
                               onChange={this.updateUserName}
                               placeholder="alice"
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
                <div>
                    <button type="button"
                            className="btn btn-primary col-sm-10 float-right"
                            onClick={() => this.login()}>
                        Sign in
                    </button>
                </div>
                <div className="col-sm-10 float-right">
                    <a className="float-left"
                       href="#">
                        Forgot Password?
                    </a>
                    <Link
                        to="/register"
                        className="float-right">
                        Sign Up
                    </Link>
                </div>
            </div>
        )
    }
}

export default Login;