import React from 'react'

class LessonTabs extends React.Component{

    constructor(props){
        super(props);
        if(this.props.module.lessons === undefined){
            this.props.module.lessons = []
        }
    }
    render(){
        return(
            <ul className="nav nav-tabs" id="course-editor-lessonTabs">
                {
                  this.props.module.lessons.map(lesson =>
                    <li key={lesson.id} className="nav-item" active>
                      <div className="nav-link">
                      <a
                                   onClick={ () => this.props.selectLesson(lesson) }
                                   href="#">{lesson.title}
                      </a>
                      <i onClick={ () => this.props.deleteLesson(lesson) } class="fa fa-times" aria-hidden="true"></i>
                      <i className="fa fa-pencil"></i>
                      </div>
                    </li>
                  )
                }
                <li className="nav-item">
                            <input
                              onChange={this.props.lessonTitleChanged}
                              className="form-control"/>
                </li>
                <li className="nav-item">
                                <button
                                  onClick={this.props.createLesson}
                                  className="btn btn-primary btn-block"><i class="fa fa-plus" aria-hidden="true"></i></button>
                </li>
              </ul>
        )
    }
}
export default LessonTabs