import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import WhiteBoard from './components/WhiteBoard';
import CourseTable from './containers/CourseTable';
import CourseGrid from './containers/CourseGrid';
import CourseEditor from './containers/CourseEditor';
import CourseManager from './containers/CourseManager';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Router>
  <div className="container-fluid">
      <CourseManager/>
  </div>
  </Router>,
  document.getElementById("root")
);