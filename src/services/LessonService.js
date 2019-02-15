
class LessonService {
    constructor() {
        this.url = 'http://127.0.0.1:8080/api';
    }

    findAllLessons = (moduleId) => {
        return fetch(this.url+"/module/"+moduleId+"/lesson", {
            method: 'GET',
            credentials: 'include',
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            alert("Could not fetch modules!")
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
            alert("Could not create lesson!")
        });
    }

    deleteLesson = lessonId => {
        return fetch(this.url+"/lesson/"+lessonId, {
            method: 'DELETE',
            credentials: 'include',
        }).catch(error=>{
            alert("incorrect username or password!")
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
            alert("Could not update lesson!")
        });
    }
}
export default LessonService;