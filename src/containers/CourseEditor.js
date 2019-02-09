import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import WidgetList from "../components/WidgetList";
import CourseService from "../services/CourseService"
import WidgetListContainer from './WidgetListContainer'
import widgetReducer from '../reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { combineReducers } from 'redux'

const store = createStore(widgetReducer);

class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
    const widgets =
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
              widgets: {},
              moduleInput: '',
              lessonInput: '',
              topicInput: '',
              editing: false,
              editModule: undefined,
              editLesson: undefined,
              editTopic: undefined,
              reloadWidgets: true
            }
    }
    else if(course.modules[0].lessons === undefined ||
            course.modules[0].lessons.length === 0){
            this.state = {
                  course: course,
                  module: course.modules[0],
                  lesson: {},
                  topic: {},
                  widgets: {},
                  moduleInput: '',
                  lessonInput: '',
                  topicInput: '',
                  editing: false,
                  editModule: undefined,
                  editLesson: undefined,
                  editTopic: undefined,
                  reloadWidgets: true
                }
        }
    else if(course.modules[0].lessons[0].topics === undefined ||
            course.modules[0].lessons[0].topics.length === 0){
                 this.state = {
                       course: course,
                       module: course.modules[0],
                       lesson: course.modules[0].lessons[0],
                       topic: {},
                       widgets: {},
                       moduleInput: '',
                       lessonInput: '',
                       topicInput: '',
                       editing: false,
                       editModule: undefined,
                       editLesson: undefined,
                       editTopic: undefined,
                       reloadWidgets: true
                     }
             }
    else{
        this.state = {
                          course: course,
                          module: course.modules[0],
                          lesson: course.modules[0].lessons[0],
                          topic: course.modules[0].lessons[0].topics[0],
                          widgets: course.modules[0].lessons[0].topics[0].widgets,
                          moduleInput: '',
                          lessonInput: '',
                          topicInput: '',
                          editing: false,
                          editModule: undefined,
                          editLesson: undefined,
                          editTopic: undefined,
                          reloadWidgets: true
                          }
    }
  }
  selectModule = module =>{
    if (module.lessons === undefined || module.lessons.length === 0){
        this.setState({
                  module: module,
                  lesson: {},
                  reloadWidgets: true
                })
    }
    else if (module.lessons.length > 0 && module.lessons[0].topics === undefined)
    {
        this.setState({
                          module: module,
                          lesson: module.lessons[0],
                          topic: {},
                          widgets: [],
                          reloadWidgets: true

                        })
    }
    else if (module.lessons[0].topics.length > 0 && module.lessons[0].topics[0].widgets === undefined)
    {
    this.setState({
            module: module,
            lesson: module.lessons[0],
            topic: module.lessons[0].topics[0],
            widgets: [],
            reloadWidgets: true
            })
    }
    else{
        this.setState({
                    module: module,
                    lesson: module.lessons[0],
                    topic: module.lessons[0].topics[0],
                    widgets: module.lessons[0].topics[0].widgets
                    })
    }
  }

  selectLesson = lesson =>
      this.setState({
        lesson: lesson
      })

  selectTopic = topic =>{
        if(topic.widgets === undefined){
            this.setState
              ({
                topic: topic,
                widgets: [],
                reloadWidgets: true
              })
        }
  }

  deleteWidget = widgetId =>{

    var top =  this.state.topic
        var widge = top.widgets
        widge = widge.filter(widget => widget.id !== widgetId)
        top.widgets = widge
        this.setState
        ({
        topic: top,
        widgets: this.state.widgets.filter(widget => widget.id !== widgetId)
        })

  }

  moveUpWidget = widget =>{
    let index = this.state.widgets.indexOf(widget);
    var top =  this.state.topic
    var widge = top.widgets
    widge.move(index, index - 1);
    widge = widge.splice(0);
    top.widgets = widge
    this.setState
            ({
            topic: top,
            widgets: widge
            })
  }

  addWidget = () => {
    var top =  this.state.topic
    var widge = top.widgets
    var newWidget = {
    type: 'HEADING',
    Name: 'New Widget',
    size: 1,
    id: (new Date()).getTime()}
    widge.push(newWidget)
    top.widgets = widge
    this.setState
                ({
                topic: top,
                widgets: widge
                })
  }

  moveDownWidget = widget => {
    let index = this.state.widgets.indexOf(widget);
    if(index === this.state.widgets.length -1){
        alert("Can't move the last widget down!")
        return
    }
        var top =  this.state.topic
        var widge = top.widgets
        widge.move(index, index + 1);
        widge = widge.splice(0);
        top.widgets = widge
        this.setState
                ({
                topic: top,
                widgets: widge
                })

  }

  createLesson = () => {
      if (this.state.editLesson !== undefined){
        this.editLessonFunc();
      }
      else{
        if(this.state.module.id == undefined){
            alert("Please select a module first!")
        }
        else{
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
      }

    }

  deleteLesson = (deletelesson) => {
        var less = this.state.module.lessons.filter(
                                   lesson => lesson.id !== deletelesson.id
                               )
        var mod = this.state.module
        mod.lessons = less

        if(this.state.lesson.id === deletelesson.id){
            this.setState(
                      {
                        module: mod,
                        lesson: {},
                        topic: {}
                      }
                    )
        }
        else{
            this.setState(
                      {
                        module: mod,
                        lesson: {}
                      }
                    )
        }
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
         if (this.state.editTopic !== undefined){
            this.editTopicFunc();
         }
         else{
            if(this.state.lesson.title === undefined){
                        alert("Please select a lesson first!")
                      }
             else{
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
         }
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
        document.getElementById("module-add-btn").innerHTML="Add Module";
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
            console.log("inside")
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
    document.getElementById("module-add-btn").innerHTML="Done";
    document.getElementById("module-cncl-btn").style.display="block";
  }

  cancelModuleUpdate = () => {
    this.setState({
            moduleInput: '',
            editModule: undefined
        })
        document.getElementById("module-add-btn").innerHTML="Add Module";
        document.getElementById("module-cncl-btn").style.display="none";
  }



  editLessonName= (lesson) => {
      this.setState({
          lessonInput: lesson.title,
          editLesson: lesson
      })
      document.getElementById("lsn-cncl-btn").style.display="block";
    }

    cancelLessonUpdate = () => {
        this.setState({
                lessonInput: '',
                editLesson: undefined
            })
        document.getElementById("lsn-cncl-btn").style.display="none";
      }

  editLessonFunc(){
          var less = this.state.module.lessons;
          less.find(
              l => l.id === this.state.editLesson.id
          )
          .title = this.state.lessonInput;
          var mod = this.state.module;
          mod.lessons = less;
          this.setState({
              module: mod,
              lessonInput: '',
              editLesson: undefined
          })
      }

  editTopicName= (topic) => {
        this.setState({
            topicInput: topic.title,
            editTopic: topic
        })
        document.getElementById("top-cncl-btn").style.display="block";
      }

  cancelTopicUpdate = () => {
          this.setState({
                  topicInput: '',
                  editTopic: undefined
              })
          document.getElementById("top-cncl-btn").style.display="none";
        }

    editTopicFunc(){
            var top = this.state.lesson.topics;
            top.find(
                t => t.id === this.state.editTopic.id
            )
            .title = this.state.topicInput;
            var less = this.state.lesson;
            less.topics = top;
            this.setState({
                lesson: less,
                topicInput: '',
                editTopic: undefined
            })
        }

  componentDidMount(){
    document.getElementById("new-course-title").style.display="none";
    document.getElementById("add-course-btn").style.display="none";
  }

  componentWillUnmount(){
        document.getElementById("new-course-title").style.display="block";
        document.getElementById("add-course-btn").style.display="block";
  }

  toggleReload = () =>
  {
    this.setState({
                      reloadWidgets: !this.state.reloadWidgets
                  })
  }

  render() {
    return (
      <div>
      <div className="row" id="course-editor-second-row">
        <div className="col-4 d-none d-md-block">
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
                        lessonInput={this.state.lessonInput}
                        editLessonName={this.editLessonName}
                        cancelLessonUpdate={this.cancelLessonUpdate}/>
        </div>
      </div>
      <div className="row">
        <div className="col-4 d-none d-md-block" id="course-editor-module-list">
          <ModuleList
            moduleInput={this.state.moduleInput}
            titleChanged={this.titleChanged}
            createModule={this.createModule}
            deleteModule={this.deleteModule}
            selectModule={this.selectModule}
            module={this.state.module}
            modules={this.state.course.modules}
            editModuleName= {this.editModuleName}
            cancelModuleUpdate={this.cancelModuleUpdate}/>
        </div>
        <div className="col-8">
          <TopicPills
            lesson={this.state.lesson}
            createTopic={this.createTopic}
            topicTitleChanged={this.topicTitleChanged}
            deleteTopic={this.deleteTopic}
            topicInput={this.state.topicInput}
            selectedTopic={this.state.topic}
            selectTopic={this.selectTopic}
            editTopicName={this.editTopicName}
            cancelTopicUpdate={this.cancelTopicUpdate}/>
          <Provider store={store}>
              <WidgetListContainer
              topic={this.state.topic}
              widgets={this.state.widgets}
              deleteWidget={this.deleteWidget}
              moveUpWidget={this.moveUpWidget}
              moveDownWidget={this.moveDownWidget}
              addWidget={this.addWidget}
              reloadWidgets={this.state.reloadWidgets}
              toggleReload={this.toggleReload}/>
          </Provider>
        </div>
      </div>
    </div>
    )
  }
}
export default CourseEditor