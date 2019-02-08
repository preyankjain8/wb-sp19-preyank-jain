import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseManager from './containers/CourseManager'
import WidgetList from './components/WidgetList'

ReactDOM.render(
  <div className="container-fluid">
    <CourseManager/>
  </div>,
  document.getElementById("root")
);