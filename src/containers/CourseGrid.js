import React, {Component} from 'react'
import courses from "../services/courses.json";
import CourseCard from "../components/CourseCard";


class CourseGrid extends Component {
  constructor(props) {
      super(props)
      this.state = {
        course: { title: '' },
        courses: courses
      };
  }
  render() {
    return (
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
              	<span className="fa-stack wd-top-row">
        			<i className="fas fa-circle fa-stack-2x"></i>
        			<i className="fas fa-plus fa-stack-1x fa-inverse"></i>
        		</span>
              </div>
        </div>
        <div className="row" id="second-row">
            <div className="col-3">
                Recent documents
            </div>
            <div className="col-3">
                Owned by me
            </div>
            <div className="col-1">
                <i class="fa fa-2x fa-bars" aria-hidden="true"></i>
            </div>
            <div className="col-1">
            </div>
            <div className="col-1">
                <i class="fa fa-2x fa-folder" aria-hidden="true"></i>
            </div>
        </div>
        <div class="container">
            <div class="row">
                {
                    this.state.courses.map(
                        (course) => {
                            return (
                                <CourseCard
                                    key={course.id}
                                         title={"  "+course.title}/>)
                                    }
                                           )
                }
            </div>
        </div>
      </div>
    )

  }
}

export default CourseGrid;