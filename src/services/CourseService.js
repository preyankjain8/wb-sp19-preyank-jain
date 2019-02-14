import courses from './courses.json';

class CourseService {
    constructor() {
        this.url = 'http://localhost:8080/api/courses';
        this.courses = courses;
    }
    addCourse = course => {
        if(course === undefined || course.title === '') {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course'
            }
        }
        this.courses.push(course)
        return this.courses
    }

    findCourseById = courseId =>
        this.courses = this.courses.find(
            course => course.id === courseId
        )
    findAllCourses = () =>{
        return fetch(this.url)
            .then(function(response) {
                return response.json();
            });
        //this.courses;
    }
    deleteCourse = deleteCourse =>
        this.courses = this.courses.filter(
            course => course.id !== deleteCourse.id
        )

    deleteWidget = (courseId, moduleId, lessonId, topicId, widgetId) =>{
        var course = this.courses.find(c => c.id === courseId);
        var module = course.modules.find(m => m.id === moduleId);
        var lesson = module.lessons.find(l => l.id === lessonId);
        var topic = lesson.topics.find(t => t.id === lessonId);
        return topic.widgets.filter(widget => widget.id !== widgetId)
    }

    createWidget = (topicId, widget) => {
        if(widget === undefined || widget.title === '') {
            widget = {
                id: (new Date()).getTime(),
                Name: 'New Widget',
                topicId: topicId
            }
        }

        for (var i = 0; i < this.courses.length; i++){
            var course = this.courses[i];
            for (var j = 0; j < course.modules.length; j++){
                var module = course.modules[j];
                for (var k = 0; k < module.lessons.length; k++){
                    var lesson = module.lessons[k];
                    for (var l = 0; l < lesson.topics.length; l++){
                        if (lesson.topics[i].id === topicId){
                            lesson.topics[i].push(widget)
                        }
                    }
                }
            }
        }

        return this.courses
    }

    findWidgets = topicId => {
        var widgetsAr = [];
        for (var i = 0; i < this.courses.length; i++){
            var course = this.courses[i];
            for (var j = 0; j < course.modules.length; j++){
                var module = course.modules[j];
                for (var k = 0; k < module.lessons.length; k++){
                    var lesson = module.lessons[k];
                    for (var l = 0; l < lesson.topics.length; l++){
                        var topic = lesson.topic[l];
                        for (var m = 0; m < topic.widgets.length; m++){
                            widgetsAr.push(topic.widgets[m]);
                        }
                    }
                }
            }
        }
        return widgetsAr
    }

    findWidget = widgetId => {
        var widgetsAr = [];
        for (var i = 0; i < this.courses.length; i++){
            var course = this.courses[i];
            for (var j = 0; j < course.modules.length; j++){
                var module = course.modules[j];
                for (var k = 0; k < module.lessons.length; k++){
                    var lesson = module.lessons[k];
                    for (var l = 0; l < lesson.topics.length; l++){
                        var topic = lesson.topic[l];
                        for (var m = 0; m < topic.widgets.length; m++){
                            if(topic.widgets[m].id === widgetId){
                                return topic.widgets[m]
                            }
                        }
                    }
                }
            }
        }
        return null;
    }

    findWidget = (widgetId, widget) => {
        var widgetsAr = [];
        for (var i = 0; i < this.courses.length; i++){
            var course = this.courses[i];
            for (var j = 0; j < course.modules.length; j++){
                var module = course.modules[j];
                for (var k = 0; k < module.lessons.length; k++){
                    var lesson = module.lessons[k];
                    for (var l = 0; l < lesson.topics.length; l++){
                        var topic = lesson.topic[l];
                        for (var m = 0; m < topic.widgets.length; m++){
                            if(topic.widgets[m].id === widgetId){
                                topic.widgets[m] = widget
                                return topic.widgets[m]
                            }
                        }
                    }
                }
            }
        }
    }

    deleteWidget = widgetId => {
        var widgetsAr = [];
        for (var i = 0; i < this.courses.length; i++){
            var course = this.courses[i];
            for (var j = 0; j < course.modules.length; j++){
                var module = course.modules[j];
                for (var k = 0; k < module.lessons.length; k++){
                    var lesson = module.lessons[k];
                    for (var l = 0; l < lesson.topics.length; l++){
                        var topic = lesson.topic[l];
                        for (var m = 0; m < topic.widgets.length; m++){
                            if(topic.widgets[m].id === widgetId){
                                topic.widgets.remove(topic.widgets[m])
                            }
                        }
                    }
                }
            }
        }
        return this.courses
    }




}
export default CourseService;