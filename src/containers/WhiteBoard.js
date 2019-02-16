import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "../components/Login"
import Register from "../components/Register"
import CourseManager from "./CourseManager";
import CourseEditor1 from "./CourseEditor1";
import UserService from "../services/UserService"

class WhiteBoard extends Component {
    constructor(props){
        super(props)
        this.userService = new UserService();
    }

    logOut = () => {
        this.userService.logout().then(function () {
            window.location.href = '/'
        })
    }

    componentDidMount(){
        document.getElementById("new-course-title").style.display="none";
        document.getElementById("add-course-btn").style.display="none";
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="row" id="top-row">
                        <div className="col-1">
                            <i className="fa fa-2x fa-bars" aria-hidden="true"></i>
                        </div>
                        <div className="col-2 d-none d-md-block"
                             id="course-manager">
                            WhiteBoard
                        </div>
                        <div className="col-7">
                            <input
                                id="new-course-title"
                                placeholder="New Course Title" className="form-control">
                            </input>
                        </div>
                        <div className="col-1">
                            <i id="add-course-btn" className="fa fa-2x fa-plus-circle"></i>
                        </div>

                        <div className="col-1">
                            <i id="add-course-btn"
                               onClick={this.logOut}
                               className="fa fa-2x fa-sign-out"></i>
                        </div>
                    </div>
                    <div>
                        <Route path='/courses'
                               exact
                               render={() => <CourseManager/>}/>
                        <Route path='/grid'
                               exact
                               render={() => <CourseManager/>}/>
                        <Route path="/"
                               exact
                               component={Login}/>
                        <Route path="/register"
                               exact
                               component={Register}/>
                        <Route path="/course/:id"
                               exact
                               component={CourseEditor1}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default WhiteBoard;