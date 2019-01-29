import React from 'react'

const LessonTabs = ({lessons, lessonTitleChanged, createLesson}) =>
  <ul className="nav nav-tabs">
    {
      lessons.map(lesson =>
        <li key={lesson.id} className="nav-item">
          <a className="nav-link active"
             href="#">{lesson.title}
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
                      className="btn btn-primary btn-block">Add Lesson</button>
    </li>
  </ul>
export default LessonTabs