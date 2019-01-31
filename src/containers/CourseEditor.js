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
              topic: {},
              moduleInput: '',
              lessonInput: '',
              topicInput: '',
              editing: false,
              editModule: {},
              editLesson: {},
              editTopic: {}
            }
    }
    else if(course.modules[0].lessons === undefined ||
            course.modules[0].lessons.length === 0){
            this.state = {
                  course: course,
                  module: course.modules[0],
                  lesson: {},
                  topic: {},
                  moduleInput: '',
                  lessonInput: '',
                  topicInput: '',
                  editing: false,
                  editModule: {},
                  editLesson: {},
                  editTopic: {}
                }
        }
    else if(course.modules[0].lessons[0].topics === undefined ||
            course.modules[0].lessons[0].topics.length === 0){
                 this.state = {
                       course: course,
                       module: course.modules[0],
                       lesson: course.modules[0].lessons[0],
                       topic: {},
                       moduleInput: '',
                       lessonInput: '',
                       topicInput: '',
                       editing: false,
                       editModule: {},
                       editLesson: {},
                       editTopic: {}
                     }
             }
    else{
        this.state = {
                          course: course,
                          module: course.modules[0],
                          lesson: course.modules[0].lessons[0],
                          topic: course.modules[0].lessons[0].topics[0],
                          moduleInput: '',
                          lessonInput: '',
                          topicInput: '',
                          editing: false,
                          editModule: {},
                          editLesson: {},
                          editTopic: {}
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

  selectTopic = topic =>
  this.setState
  ({
    topic: topic
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

    editModuleFunc(){
        var modules = this.state.course.modules;
        modules.find(
            m => m.id === this.state.editModule.id
        )
        .title = this.state.moduleInput;
        var cor = this.state.course;
        cor.modules = modules;
        this.setState({
            course: cor,
            moduleInput: '',
            editModule: undefined
        })
    }

    createModule = () => {
        if (this.state.editModule !== undefined){
            this.editModuleFunc();
        }
        else{
            var modules = this.state.course.modules;
                    var modTitle = 'New Module';
                    if(this.state.moduleInput !== ''){
                         modTitle = this.state.moduleInput
                    }
                    modules.push(
                        {title: modTitle,
                        id: (new Date()).getTime()
                        }
                    )
                    var cor = this.state.course
                    cor.modules = modules
                    this.setState(
                      {
                        course: cor,
                        moduleInput:''
                      }
                    )
        }
      }
      titleChanged = (event) => {
        this.setState(
          {
            moduleInput: event.target.value
          });
      }

      deleteModule = (moduleId) => {
          var mod = this.state.course.modules;
          mod = mod.filter(
            module => module.id !== moduleId
          )
          var cor = this.state.course
          cor.modules = mod
          if(this.state.module.id === moduleId){
            this.setState(
                        {
                          course: cor,
                          module: {},
                          lesson: {},
                          topic: {}
                        }
                      )
          }
          else{
            this.setState(
                                    {
                                      course: cor,
                                    }
                                  )
          }

        }

  editModuleName= (module) => {
    this.setState({
        moduleInput: module.title,
        editModule: module
    })
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
            moduleInput={this.state.moduleInput}
            titleChanged={this.titleChanged}
            createModule={this.createModule}
            deleteModule={this.deleteModule}
            selectModule={this.selectModule}
            module={this.state.module}
            modules={this.state.course.modules}
            editModuleName= {this.editModuleName}/>
        </div>
        <div className="col-8">
          <TopicPills
            lesson={this.state.lesson}
            createTopic={this.createTopic}
            topicTitleChanged={this.topicTitleChanged}
            deleteTopic={this.deleteTopic}
            topicInput={this.state.topicInput}
            selectedTopic={this.state.topic}
            selectTopic={this.selectTopic}/>
          <WidgetList />
        </div>
      </div>
    </div>
    )
  }
}
export default CourseEditor