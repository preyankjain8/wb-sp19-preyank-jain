import React from 'react'

class LessonTabs extends React.Component{

    constructor(props){
        super(props);
        if(this.props.module.lessons === undefined){
            this.props.module.lessons = []
        }
    }

    componentWillReceiveProps(nextProps){
            if(nextProps.module.lessons === undefined){
                                nextProps.module.lessons = []
                            }
        }
     isActive(lesson){
        return this.props.selectedLesson === lesson
     }

    render(){
        return(
            <ul className="nav nav-tabs" id="course-editor-lessonTabs">
                {
                  this.props.module.lessons.map(lesson =>
                    <li key={lesson.id} className={ this.isActive(lesson) ? 'nav-item active': 'nav-item' }>
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
                              value={this.props.lessonInput}
                              onChange={this.props.lessonTitleChanged}
                              className="form-control"/>
                </li>
                <li className="nav-item">
                                <button
                                  onClick={this.props.createLesson}
                                  className="btn-webdv"><i class="fa fa-plus" aria-hidden="true"></i></button>
                </li>
              </ul>
        )
    }
}
export default LessonTabs