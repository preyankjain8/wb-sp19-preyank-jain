import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
import CourseEditor from "./CourseEditor";
import CourseEditor1 from "./CourseEditor1";
import CourseService from "../services/CourseService";
import Login from "../components/Login"
import Register from "../components/Register"

class CourseManager extends Component {
    constructor(props){
        super(props)
        this.courseService = new CourseService();
        this.courses = this.courseService.findAllCourses().then(this.findAllCourses)
        this.state = {
            courseInput: '',
            courses: []
        }
    }

    findAllCourses = (courses) => {
        this.setState({
            courses: courses
        })
        console.log(this.state.courses)
    }

    componentDidMount(){
        document.getElementById("new-course-title").style.display="block";
        document.getElementById("add-course-btn").style.display="block";
        document.getElementById("new-course-title").value=this.state.courseInput;
        document.getElementById("new-course-title").onchange=this.onCourseNameChange;
        document.getElementById("add-course-btn").onclick= ()=>{
            this.createCourse();
        }
    }

    componentWillUnmount(){
        document.getElementById("new-course-title").style.display="none";
        document.getElementById("add-course-btn").style.display="none";
    }

    onCourseNameChange = (event) =>
    {
        this.setState({
            courseInput: event.target.value
        })
    }

    deleteCourse = (course) =>{
        this.courseService.deleteCourse(course).then(()=> {
            this.courseDeleted(course)
        })
    }

    createCourse = () =>{
        this.courseService.addCourse({
            id:(new Date()).getMilliseconds(),
            title: this.state.courseInput
        }).then(this.courseAdded)
    }

    courseAdded = (course) => {
        var courses = this.state.courses
        courses.push(course)
        this.setState({
            courses: courses
        })
    }

    courseDeleted = (course) => {
        var courses = this.state.courses
        courses = courses.filter(c => c.id !== course.id)
        this.setState({
            courses: courses
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path='/courses'
                           component={() => <CourseTable
                               courses={this.state.courses}
                               deleteCourse={this.deleteCourse}/>}/>
                    <Route path='/grid'
                           component={() => <CourseGrid
                               courses={this.state.courses}
                               deleteCourse={this.deleteCourse}/>}/>
                    <Route path="/course/:id"
                           component={CourseEditor1}/>
                    <Route path="/"
                           exact
                           component={Login}/>
                    <Route path="/register"
                           exact
                           component={Register}/>
                </div>
            </Router>
        )
    }
}

export default CourseManager;