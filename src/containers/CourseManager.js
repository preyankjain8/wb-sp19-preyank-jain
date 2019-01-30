import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
import CourseService from "../services/CourseService";

class CourseManager extends Component {
  constructor(props){
    super(props)
    this.courseService = new CourseService();
    this.state = {
        courses: this.courseService.findAllCourses()
    }
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
                      Course Manager
                    </div>
                    <div className="col-7">
                      <input id="new-course-title"
                      		placeholder="New Course Title">
                      </input>
                    </div>
                    <div className="col-2">
                    	<i className="fa fa-2x fa-plus-circle"></i>
                    </div>
      </div>
              <div>
                <Route path='/' exact
                render={() => <CourseTable courses={this.state.courses}/>}/>
                <Route path='/grid'
                render={() => <CourseGrid courses={this.state.courses}/>}/>
              </div>
      </div>
      </Router>
      )
  }
}

export default CourseManager;