
class ModuleService {
    constructor() {
        this.url = 'http://127.0.0.1:8080/api';
    }

    findAllModules = (courseId) => {
        return fetch(this.url+"/course/"+courseId+"/modules", {
            method: 'GET',
            credentials: 'include',
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            alert("Could not fetch modules!")
        });
    }

    addModule = (module, courseId) => {
        if(module === undefined || module.title === '') {
            module = {
                id: (new Date()).getMilliseconds(),
                title: 'New Module'
            }
        }

        return fetch(this.url+"/courses/"+courseId+"/modules", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "id": module.id,
                "title": module.title,
            })
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            alert("Could not create course!")
        });
    }

    deleteModule = moduleId => {
        return fetch(this.url+"/modules/"+moduleId, {
            method: 'DELETE',
            credentials: 'include',
        }).catch(error=>{
            alert("incorrect username or password!")
        });
    }
}
export default ModuleService;