import React from 'react'

const LessonTabs = ({selectLesson, lessons, lessonTitleChanged, createLesson, deleteLesson}) =>
  <ul className="nav nav-tabs">
    {
      lessons.map(lesson =>
        <li key={lesson.id} className="nav-item">
          <a className="nav-link active"
             onClick={ () => selectLesson(lesson) }
             href="#">{lesson.title}
             <i onClick={ () => deleteLesson(lesson.id) } class="fa fa-times" aria-hidden="true"></i>
             <i className="fa fa-pencil"></i>
          </a>
        </li>
      )
    }
    <li className="nav-item">
                <input
                  onChange={lessonTitleChanged}
                  className="form-control"/>
    </li>
    <li className="nav-item">
                    <button
                      onClick={createLesson}
                      className="btn btn-primary btn-block"><i class="fa fa-plus" aria-hidden="true"></i></button>
    </li>
  </ul>
export default LessonTabs