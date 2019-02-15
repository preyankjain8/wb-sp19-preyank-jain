
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
            alert("Could not create topic!")
        });
    }

    deleteTopic = topicId => {
        return fetch(this.url+"/topic/"+topicId, {
            method: 'DELETE',
            credentials: 'include',
        }).catch(error=>{
            alert("incorrect username or password!")
        });
    }
}
export default TopicService;