
class TopicService {
    constructor() {
        this.url = 'http://127.0.0.1:8080/api';
    }

    findAllTopics = (lessonId) => {
        return fetch(this.url+"/lesson/"+lessonId+"/topic", {
            method: 'GET',
            credentials: 'include',
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            alert("Could not fetch modules!")
        });
    }

    register = (userName, password, firstName, lastName) => {
        return fetch(this.url+"/register", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                "userName":userName,
                "password":password,
                "firstName": firstName,
                "lastName": lastName,
                "role": "FACULTY"
            })
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            alert("incorrect username or password!")
        });
    }
}
export default TopicService;