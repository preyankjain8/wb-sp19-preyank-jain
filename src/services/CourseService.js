import React, {Component} from 'react'
import courses from "./courses.json"

class CourseService extends Component {
  constructor(props) {
    super(props);
    this.courses = courses;
  }
  componentDidMount() {
      this.props.onRef(this)
    }
    componentWillUnmount() {
      this.props.onRef(undefined)
    }
  findAllCourses = () => {
      return this.courses;
    }
  addCourse = course => {
    if(course === null) {
      course = {
        id: (new Date()).getTime(),
        title: 'New Course'
      }
    }
    this.courses.push(course)
    return this.courses
  }
  findCourseById = courseId =>
    this.courses = this.courses.find(
      course => course.id === courseId
    )
    deleteCourse = deleteCourse =>
    this.courses = this.courses.filter(
    course => course.id !== deleteCourse.id
    )
    render(){
    return null;
    }
}

export default CourseService