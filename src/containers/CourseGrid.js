import React from 'react'
import {Link} from 'react-router-dom';
import CourseCard from '../components/CourseCard'
import NewCourseCard from "../components/NewCourseCard";
const CourseGrid = ({courses, deleteCourse, addCourse}) =>
  <div className="container-fluid">
    <div className="row" id="course-grid-second-row">
                        <div className="col-4 d-none d-md-block course-grid-second-row-ctnt">
                          Recent documents
                        </div>
                        <div className="col-2 d-none d-md-block">
                        </div>
                        <div className="col-2 course-grid-second-row-ctnt">
                          Owned by me
                        </div>
                        <div className="col-1">
                        	<Link to="/">
                        	<i class="fa fa-th-list" aria-hidden="true"></i>
                        	</Link>
                        </div>
                        <div className="col-1">
                        <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
                        </div>
                        <div className="col-1">
                        <i class="fa fa-file" aria-hidden="true"></i>
                        </div>
    </div>
    <div className="card-deck">
    {
        courses.map(course =>
          <CourseCard
            deleteCourse={deleteCourse}
            course={course}
            key={course.id}/>
        )
    }
    <NewCourseCard
      addCourse={addCourse}/>
    </div>
  </div>

export default CourseGrid