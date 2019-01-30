import React, {Component} from 'react'
import courses from "../services/courses.json";
import {Link} from 'react-router-dom';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";

class CourseTable extends Component {
  constructor(props) {
      super(props);
      this.state = {
        course: { title: '' },
        courses: this.props.courses
      };
  }

  render() {
    return (
      <div>
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