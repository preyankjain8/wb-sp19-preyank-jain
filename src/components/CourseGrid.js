import React from 'react'
import CourseCard from './CourseCard'
import NewCourseCard from "./NewCourseCard";
const CourseGrid = ({courses, deleteCourse, addCourse}) =>
  <div className="container-fluid">
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