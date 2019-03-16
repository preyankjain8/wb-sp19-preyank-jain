
class LessonService {
    constructor() {
        //this.url = 'https://salty-castle-98472.herokuapp.com/api';
        //this.url = 'http://localhost:8080/api';
        this.url = 'https://peaceful-reef-79181.herokuapp.com/api'
    }

    findAllLessons = (moduleId) => {
        return fetch(this.url+"/module/"+moduleId+"/lesson", {
            method: 'GET',
            credentials: 'include',
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            console.log(error.toString())
        });
    }

    addLesson = (lesson, moduleId) => {
        if(lesson === undefined || lesson.title === '') {
            lesson = {
                id: (new Date()).getMilliseconds(),
                title: 'New lesson'
            }
        }
        return fetch(this.url+"/module/"+moduleId+"/lesson", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "id": lesson.id,
                "title": lesson.title,
            })
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            console.log(error.toString())
        });
    }

    deleteLesson = lessonId => {
        return fetch(this.url+"/lesson/"+lessonId, {
            method: 'DELETE',
            credentials: 'include',
        }).catch(error=>{
            console.log(error.toString())
        });
    }

    updateLesson = (lesson,lessonId) => {
        return fetch(this.url+"/lessons/"+lessonId, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "id": lesson.id,
                "title": lesson.title,
            })
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            console.log(error.toString())
        });
    }
}
export default LessonService;