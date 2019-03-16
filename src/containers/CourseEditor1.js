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
import ModuleService from '../services/ModuleService'
import LessonService from '../services/LessonService'
import TopicService from '../services/TopicService'
import WidgetService from '../services/WidgetService'
import HeadingWidgetService from '../services/HeadingWidgetService'
import ImageWidgetService from '../services/ImageWidgetService'
import ParagraphWidgetService from '../services/ParagraphWidgetService'
import ListWidgetService from '../services/ListWidgetService'
import { combineReducers } from 'redux'
import LinkWidgetService from "../services/LinkWidgetService";

const store = createStore(widgetReducer);

class CourseEditor1 extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = new CourseService()
        this.moduleService = new ModuleService()
        this.lesonService = new LessonService()
        this.topicService = new TopicService()
        this.widgetService = new WidgetService()
        this.imageWidgetService = new ImageWidgetService()
        this.headingWidgetService = new HeadingWidgetService()
        this.listWidgetService = new ListWidgetService()
        this.paragraphWidgetService = new ParagraphWidgetService()
        this.courseId = parseInt(props.match.params.id)
        //var modules = this.moduleService.findAllModules(this.courseId).then(this.assignModules)
        this.state = {
            course: {id:'',title:''},
            modules: [],
            module:{},
            lessons: [],
            lesson:{},
            topics: [],
            topic:{},
            widgets: [],
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


    assignModules = (modules) => {
        if (modules === undefined){
            window.location.href = '/';
        }
        if (modules.length === 0)
        {
            alert("There are no modules yet for this course!")
            this.setState({
                modules: [],
                module: {},
                lessons: [],
                lesson: {},
                topics: [],
                topic: {},
                widgets: [],
                reloadWidgets: true
            })
        }
        else{
            this.setState({
                modules: modules,
                module: modules[0],
                lessons: [],
                lesson: {},
                topics: [],
                topic: {},
                widgets: [],
                reloadWidgets: true
            })
            this.lesonService.findAllLessons(modules[0].id).then(this.assignLessons)
        }
    }

    assignLessons = (lessons) => {
        if (lessons.length === 0)
        {
            this.setState({
                modules:this.state.modules,
                module:this.state.module,
                lessons: [],
                lesson: {},
                topics: [],
                topic: {},
                widgets: [],
                reloadWidgets: true
            })
        }
        else{
            this.setState({
                modules:this.state.modules,
                module:this.state.module,
                lessons: lessons,
                lesson: lessons[0],
                topics: [],
                topic: {},
                widgets: [],
                reloadWidgets: true
            })
            this.topicService.findAllTopics(lessons[0].id).then(this.assignTopics)
        }
    }

    assignTopics = (topics) => {
        if (topics.length === 0)
        {
            this.setState({
                modules:this.state.modules,
                module:this.state.module,
                lessons:this.state.lessons,
                lesson:this.state.lesson,
                topics: [],
                topic: {},
                widgets: [],
                reloadWidgets: true
            })
        }
        else{
            this.setState({
                modules:this.state.modules,
                module:this.state.module,
                lessons:this.state.lessons,
                lesson:this.state.lesson,
                topics: topics,
                topic: topics[0],
                widgets: [],
                reloadWidgets: true
            })
            this.widgetService.findAllWidgets(topics[0].id).then(this.assignWidgets)
        }
    }

    assignWidgets = (widgets) => {
        if (widgets.length === 0)
        {
            this.setState({
                modules:this.state.modules,
                module:this.state.module,
                lessons:this.state.lessons,
                lesson:this.state.lesson,
                topics: this.state.topics,
                topic: this.state.topic,
                widgets: [],
                reloadWidgets: true
            })
        }
        else{
            this.setState({
                modules:this.state.modules,
                module:this.state.module,
                lessons:this.state.lessons,
                lesson:this.state.lesson,
                topics: this.state.topics,
                topic: this.state.topic,
                widgets: widgets,
                reloadWidgets: true
            })
        }
    }

    selectModule = module =>{
        this.setState({
            module:module
        })
        this.lesonService.findAllLessons(module.id)
            .then(this.assignLessons)
    }

    selectLesson = lesson =>{
        this.setState({
            lesson:lesson
        })
        this.topicService.findAllTopics(lesson.id)
            .then(this.assignTopics)
    }

    selectTopic = topic =>{
        this.setState({
            topic:topic
        })
        this.widgetService.findAllWidgets(topic.id).then(this.assignWidgets)
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
            this.lesonService.addLesson({
                title: this.state.lessonInput,
                id: (new Date()).getMilliseconds()
            }, this.state.module.id).then(this.lessonAdded)
        }
    }

    lessonAdded = (lesson) => {
        if(lesson.error !== undefined){
            alert("Please select a module to add lesson to!")
            return
        }
        var lessons = this.state.lessons;
        lessons.push(lesson);
        this.setState({
            lessons: lessons,
            lessonInput: ''
        })
    }

    deleteLesson = (deletelesson) => {

        this.lesonService.deleteLesson(deletelesson.id).then(() => this.lessonDeleted(deletelesson.id))
    }

    lessonDeleted = (lessonId) => {
        var lessons = this.state.lessons;
        lessons = lessons.filter(l => l.id !== lessonId);
        this.setState({
            lessons: lessons,
            topics:[],
            wigets: [],
            reloadWidgets: true
        })
        if (lessons.length > 0){
            this.selectLesson(lessons[0])
        }
    }

    deleteTopic = (deletetopic) => {
        this.topicService.deleteTopic(deletetopic.id).then(() => this.topicDeleted(deletetopic.id))
    }

    topicDeleted = (topicId) => {
        var topics = this.state.topics;
        topics = topics.filter(t => t.id !== topicId);
        this.setState({
            topics: topics,
            wigets: [],
            reloadWidgets: true
        })
        if (topics.length > 0){
            this.selectTopic(topics[0])
        }
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
            this.topicService.addTopic({
                title: this.state.topicInput,
                id: (new Date()).getMilliseconds()
            }, this.state.lesson.id).then(this.topicAdded)
        }
    }

    topicAdded = (topic) =>{
        if(topic.error !== undefined){
            alert("Please select a lesson to add topic to!")
            return
        }
        var topics = this.state.topics;
        topics.push(topic);
        this.setState({
            topics: topics,
            topicInput: ''
        })
    }

    editModuleFunc(){
        this.moduleService.updateModule({
            id: this.state.editModule.id,
            title: this.state.moduleInput
        }, this.state.editModule.id).then(this.moduleUpdated)
    }

    moduleUpdated = (module) => {
        var modules = this.state.modules;
        modules.find(m => m.id === module.id)
            .title = module.title;
        this.setState({
            modules: modules,
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
            this.moduleService.addModule({
                title: this.state.moduleInput,
                id: (new Date()).getMilliseconds()
            }, this.courseId).then(this.moduleAdded)
        }
    }

    moduleAdded = (module) => {
        if(module.error !== undefined){
            alert("could not create module!")
            return
        }
        var modules = this.state.modules;
        modules.push(module);
        this.setState({
            modules: modules,
            moduleInput: ''
        })
    }


    titleChanged = (event) => {
        this.setState(
            {
                moduleInput: event.target.value
            });
    }

    deleteModule = (moduleId) => {
        this.moduleService.deleteModule(moduleId).then(()=> this.moduleDeleted(moduleId))
    }

    moduleDeleted = (moduleId) => {
        var modules = this.state.modules;
        modules = modules.filter(m => m.id != moduleId)
        this.setState({
            modules: modules,
            lessons: [],
            topics: [],
            widgets: [],
            reloadWidgets: true

        })
        if (modules.length > 0){
            this.selectModule(modules[0])
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
        this.lesonService.updateLesson({
            id: this.state.editLesson.id,
            title: this.state.lessonInput
        }, this.state.editLesson.id).then(this.lessonUpdated)
    }

    lessonUpdated = (lesson) => {
        var lessons = this.state.lessons;
        lessons.find(l => l.id === lesson.id)
            .title = lesson.title;
        this.setState({
            lessons: lessons,
            lessonInput: '',
            editLesson: undefined
        })
        document.getElementById("lsn-cncl-btn").style.display="none";
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

        this.topicService.updateTopic({
            id: this.state.editTopic.id,
            title: this.state.topicInput
        }, this.state.editTopic.id).then(this.topicUpdated)
    }

    topicUpdated = (topic) => {
        var topics = this.state.topics;
        topics.find(t => t.id === topic.id)
            .title = topic.title;
        this.setState({
            topics: topics,
            topicInput: '',
            editTopic: undefined
        })
        document.getElementById("top-cncl-btn").style.display="none";
    }

    componentDidMount(){
        document.getElementById("new-course-title").style.display="none";
        document.getElementById("add-course-btn").style.display="none";
        this.courseService.findCourseById(this.courseId).then(this.courseFound)
        this.moduleService.findAllModules(this.courseId).then(this.assignModules)
    }

    courseFound = (course) => {
        var c = course
        this.setState({
            course: c
        })
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

    saveWidgets = (widgets) => {
        var top = this.state.topic;
        top.widgets = widgets
        this.setState({
            topic: top,
            widgets: widgets,
            reloadWidgets: true
        })

        widgets.forEach(
            function (widget) {
                if (widget.type == "HEADING"){
                    var headingWidgetService = new HeadingWidgetService()
                    headingWidgetService.updateWidget(widget,widget.id)
                }
                else if (widget.type == "LIST"){
                    var listWidgetService = new ListWidgetService()
                    listWidgetService.updateWidget(widget,widget.id)
                }
                else if (widget.type == "PARAGRAPH"){
                    var paragraphWidgetService = new ParagraphWidgetService()
                    paragraphWidgetService.updateWidget(widget,widget.id)
                }
                else if (widget.type == "IMAGE"){
                    var imageWidgetService = new ImageWidgetService()
                    imageWidgetService.updateWidget(widget,widget.id)
                }
                else if (widget.type == "LINK"){
                    var linkWidgetService = new LinkWidgetService()
                    linkWidgetService.updateWidget(widget,widget.id)
                }
            }

        );
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
                            lessons = {this.state.lessons}
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
                            modules={this.state.modules}
                            editModuleName= {this.editModuleName}
                            cancelModuleUpdate={this.cancelModuleUpdate}/>
                    </div>
                    <div className="col-8">
                        <TopicPills
                            lesson={this.state.lesson}
                            topics={this.state.topics}
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
                                widgetService={this.widgetService}
                                deleteWidget={this.deleteWidget}
                                moveUpWidget={this.moveUpWidget}
                                moveDownWidget={this.moveDownWidget}
                                addWidget={this.addWidget}
                                reloadWidgets={this.state.reloadWidgets}
                                toggleReload={this.toggleReload}
                                saveWidgets={this.saveWidgets}/>
                        </Provider>
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseEditor1