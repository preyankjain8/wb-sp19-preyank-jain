
class TopicService {
    constructor() {
        //this.url = 'https://salty-castle-98472.herokuapp.com/api';
        //this.url = 'http://localhost:8080/api';
        this.url = 'https://peaceful-reef-79181.herokuapp.com/api'
    }

    findAllTopics = (lessonId) => {
        return fetch(this.url+"/lesson/"+lessonId+"/topic", {
            method: 'GET',
            credentials: 'include',
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            console.log(error.toString())
        });
    }

    addTopic = (topic, lessonId) => {
        if(topic === undefined || topic.title === '') {
            topic = {
                id: (new Date()).getMilliseconds(),
                title: 'New Topic'
            }
        }

        return fetch(this.url+"/lesson/"+lessonId+"/topic", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "id": topic.id,
                "title": topic.title,
            })
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            console.log(error.toString())
        });
    }

    deleteTopic = topicId => {
        return fetch(this.url+"/topic/"+topicId, {
            method: 'DELETE',
            credentials: 'include',
        }).catch(error=>{
            console.log(error.toString())
        });
    }


    updateTopic = (topic,topicId) => {
        return fetch(this.url+"/topic/"+topicId, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "id": topic.id,
                "title": topic.title,
            })
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            console.log(error.toString())
        });
    }
}
export default TopicService;