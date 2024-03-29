
class ModuleService {
    constructor() {
        //this.url = 'https://salty-castle-98472.herokuapp.com/api';
        //this.url = 'http://localhost:8080/api';
        this.url = 'https://peaceful-reef-79181.herokuapp.com/api'
    }

    findAllModules = (courseId) => {
        return fetch(this.url+"/course/"+courseId+"/modules", {
            method: 'GET',
            credentials: 'include',
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            console.log(error.toString())
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
            console.log(error.toString())
        });
    }

    deleteModule = moduleId => {
        return fetch(this.url+"/modules/"+moduleId, {
            method: 'DELETE',
            credentials: 'include',
        }).catch(error=>{
            console.log(error.toString())
        });
    }

    updateModule = (module,moduleId) => {
        return fetch(this.url+"/modules/"+moduleId, {
            method: 'PUT',
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
            console.log(error.toString())
        });
    }
}
export default ModuleService;