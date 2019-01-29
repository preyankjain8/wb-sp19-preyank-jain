import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseEditor from "../components/CourseEditor";
import CourseTable from "./CourseTable";
import CourseService from "../services/CourseService";

class CourseManager extends Component {
  render() {
    return (
    <Router>
      <div>
              <div>
                <Route exact path='/'
                component={CourseTable}/>
                <Route path='/courseEditor/:id'
                component={CourseEditor}/>
              </div>
      </div>
      </Router>
      )
  }
}

export default CourseManager;