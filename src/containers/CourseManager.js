import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
import CourseEditor from "./CourseEditor";
import CourseService from "../services/CourseService";

class CourseManager extends Component {
  constructor(props){
    super(props)
    this.courseService = new CourseService();
    this.state = {
        courses: this.courseService.findAllCourses()
    }
  }
  deleteCourse = (course) =>
          this.setState({
            courses: this.state.courses.filter(
                deletecourse => deletecourse.id !== course.id
            )
          })
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
                component={() => <CourseTable
                               courses={this.state.courses}
                               deleteCourse={this.deleteCourse}/>}/>
                <Route path='/grid'
                component={() => <CourseGrid
                               courses={this.state.courses}
                               deleteCourse={this.deleteCourse}/>}/>
                <Route path="/course/:id"
                                   exact
                                   component={CourseEditor}/>
              </div>
      </div>
      </Router>
      )
  }
}

export default CourseManager;