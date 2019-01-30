import React, {Component} from 'react'
import courses from "../services/courses.json";
import {Link} from 'react-router-dom';
import CourseRow from "./CourseRow";
import CourseService from "../services/CourseService";

class CourseTable extends Component {
  constructor(props) {
      super(props);
      this.courseService = new CourseService()
      this.state = {
        course: { title: '' },
        courses: this.courseService.findAllCourses()
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
              	<i className="fa fa-2x fa-plus-circle"></i>
              </div>
        </div>
        <div className="table-responsive">
        	<table className="table">
          		<thead>
               		<tr className="table-heading">
                   		<th className="d-none d-md-table-cell"></th>
                   		<th className="title">Title</th>
                   		<th className="d-none d-md-table-cell">Owned by</th>
                   		<th className="d-none d-md-table-cell">Last modified</th>
                   		<th className="empty-column">
                   		<Link to="/grid">
                   		    <i className="fa fa-th" aria-hidden="true"></i>
                   		</Link>
                   		</th>
                   		<th className="empty-column d-none d-md-table-cell"></th>
               		</tr>
           		</thead>
          		<tbody>
          		    {
          		        this.state.courses.map(
          		                                (course) => {
          		                                return (
          		                                    <CourseRow
          		                                    courseId={course.id}
          		                                    title={"  "+course.title}
          		                                    deleteCourse={this.deleteCourse}
          		                                    course={course}/>
                                                        )
                                                    }
                                                )
          		    }
               	</tbody>
            </table>
        </div>
      </div>
    )

  }
}

export default CourseTable;