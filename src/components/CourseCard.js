import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse}) =>
  <div className="card mb-4"
       styles={{width: '18rem'}}>
    <img className="card-img-top"
         src="https://picsum.photos/300/200"/>
    <div className="card-body">
      <h5 className="card-title">
        <Link to={`/course/${course.id}`}>{course.title}</Link>
      </h5>
      <p className="card-text">
      <i className="fa fa-file-text" aria-hidden="true"></i> Modified 6:45 PM
      <i onClick={ () => deleteCourse(course) } className="fa fa-trash float-right"></i>
      </p>
    </div></div>
export default CourseCard;