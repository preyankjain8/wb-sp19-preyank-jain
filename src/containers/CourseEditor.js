import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import WidgetList from "../components/WidgetList";
import CourseService from "../services/CourseService"

class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
    this.courseService = new CourseService()
    const courseId = parseInt(props.match.params.id)
    const course = this.courseService.findCourseById(courseId)
    if(course.modules === undefined || course.modules.length === 0){
        course.modules = []
        this.state = {
              course: course,
              module: {},
              lesson: {},
              lessonInput: '',
              topicInput: ''
            }
    }
    else if(course.modules[0].lessons === undefined){
            this.state = {
                  course: course,
                  module: course.modules[0],
                  lesson: {},
                  lessonInput: '',
                  topicInput: ''
                }
        }
    else{
        this.state = {
                          course: course,
                          module: course.modules[0],
                          lesson: course.modules[0].lessons[0],
                          lessonInput: '',
                          topicInput: ''
                          }
    }
  }
  selectModule = module =>{
    if (module.lessons === undefined || module.lessons.length === 0){
        this.setState({
                  module: module,
                  lesson: {}
                })
    }
    else{
        this.setState({
                          module: module,
                          lesson: module.lessons[0]
                        })
    }
  }

  selectLesson = lesson =>
      this.setState({
        lesson: lesson
      })

  createLesson = () => {
      var lessonTitle = 'New Lesson'
      var less = this.state.module.lessons;
      if (this.state.lessonInput !== ''){
          lessonTitle = this.state.lessonInput
      }
      less.push(
        {title: lessonTitle,
         id: (new Date()).getTime()}
      )
      var mod = this.state.module
      mod.lessons = less
      this.setState(
        {
              module: mod,
              lessonInput: ''
        }
      )
    }

  deleteLesson = (deletelesson) => {
        var less = this.state.module.lessons.filter(
                                   lesson => lesson.id !== deletelesson.id
                               )
        var mod = this.state.module
        mod.lessons = less
        this.setState(
          {
            module: mod
          }
        )
      }

  deleteTopic = (deletetopic) => {
          var top = this.state.module.lessons.find(
                                    lesson => lesson === this.state.lesson
                                ).topics.filter(
                                    topic => topic !== deletetopic
                                )
          var mod = this.state.module
          mod.lessons.find(l => l === this.state.lesson).topics = top
          this.setState(
            {
            module: mod
            }
          )
        }


  lessonTitleChanged = (event) => {
      this.setState(
        {
          lessonInput: event.target.value

        });
  }

  topicTitleChanged = (event) => {
        this.setState(
          {
            topicInput: event.target.value
          });
    }

   createTopic = () => {
         var top = this.state.lesson.topics;
         var topicTitle = 'New Topic'
         if (this.state.topicInput !== ''){
            topicTitle = this.state.topicInput;
         }
               top.push(
               {title: topicTitle,
                id: (new Date()).getTime()}
               )
               var less = this.state.lesson
               less.topics = top
               this.setState(
                 {
                       lesson: less,
                       topicInput: ''
                 }
               )
       }



  render() {
    return (
      <div>
      <div className="row" id="course-editor-second-row">
        <div className="col-4">
            <h4 id="course-editor-heading">Course Editor: {this.state.course.title}</h4>
        </div>
        <div className="col-8">
            <LessonTabs
                        selectLesson={this.selectLesson}
                        module={this.state.module}
                        createLesson={this.createLesson}
                        lessonTitleChanged={this.lessonTitleChanged}
                        deleteLesson={this.deleteLesson}
                        selectedLesson={this.state.lesson}
                        lessonInput={this.state.lessonInput}/>
        </div>
      </div>
      <div className="row">
        <div className="col-4" id="course-editor-module-list">
          <ModuleList
            selectModule={this.selectModule}
            module={this.state.module}
            modules={this.state.course.modules}/>
        </div>
        <div className="col-8">
          <TopicPills
            lesson={this.state.lesson}
            createTopic={this.createTopic}
            topicTitleChanged={this.topicTitleChanged}
            deleteTopic={this.deleteTopic}
            topicInput={this.state.topicInput}/>
          <WidgetList />
        </div>
      </div>
    </div>
    )
  }
}
export default CourseEditor