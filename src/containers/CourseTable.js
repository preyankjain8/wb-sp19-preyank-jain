import React, {Component} from 'react'
import courses from "../services/courses.json";
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";


class CourseTable extends Component {
  constructor(props) {
      super(props);
      this.state = {
        course: { title: '' },
        courses: []
      };
  }

  componentDidMount() {
        this.setState(
              {
                courses: this.state.courses.concat(this.findAllCourses())
              }
            )
         console.log(this.state.courses)
      }

  findAllCourses = () => {
        console.log(this.courseService)
        return this.courseService.findAllCourses()
      }



  deleteCourse = (course) => {
        this.setState(
                      {
                        courses: this.courseService.deleteCourse(course)
                      }
                    )
  }



  findModule = (course) => {
        if (course.modules.length == 0)
            return "undefined"
        else
            return course.modules[0].title
  }

  findLesson = (course) => {
          if (course.modules.length == 0)
              return "undefined"
          else if (course.modules.length != 0 && course.modules[0].lessons.length == 0)
              return "undefined"
          else
              return course.modules[0].lessons[0].title
    }


  render() {
    return (
      <div>
      <CourseService onRef={ref => (this.courseService = ref)} />
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
                   		<th className="empty-column"><i className="fa fa-th" aria-hidden="true"></i></th>
                   		<th className="empty-column d-none d-md-table-cell"></th>
               		</tr>
           		</thead>
          		<tbody>
          		    {
          		        this.state.courses.map(
          		                                (course) => {
          		                                var moduleTitle = this.findModule(course)
                                                var lessonTitle = this.findLesson(course)
          		                                return (
          		                                    <CourseRow
          		                                    courseId={course.id}
          		                                    title={"  "+course.title}
          		                                    deleteCourse={this.deleteCourse}
          		                                    course={course}
          		                                    moduleTitle={moduleTitle}
          		                                    lessonTitle={lessonTitle}/>
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