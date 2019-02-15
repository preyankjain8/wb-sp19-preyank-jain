import courses from './courses.json';

class CourseService {
    constructor() {
        this.url = 'http://127.0.0.1:8080/api/courses';
        this.courses = courses;
    }
    addCourse = (course) => {
        if(course === undefined || course.title === '') {
            course = {
                id: (new Date()).getMilliseconds(),
                title: 'New Course'
            }
        }

        return fetch('http://127.0.0.1:8080/api/courses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "id": course.id,
                "title": course.title,
            })
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            alert("Could not create course!")
        });
    }

    findCourseById = courseId =>
        this.courses = this.courses.find(
            course => course.id === courseId
        )
    findAllCourses = () =>{
        return fetch(this.url,{
            method: 'GET',
            credentials: 'include'
        })
            .then(function(response) {
                return response.json();
            });
        //this.courses;
    }
    deleteCourse = deleteCourse => {
        return fetch('http://127.0.0.1:8080/api/courses/'+deleteCourse.id, {
            method: 'DELETE',
            credentials: 'include',
        }).catch(error=>{
            alert("incorrect username or password!")
        });
    }

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