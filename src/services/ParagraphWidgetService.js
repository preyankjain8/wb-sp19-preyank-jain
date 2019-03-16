
class ParagraphWidgetService{
    constructor() {
        //this.url = 'https://salty-castle-98472.herokuapp.com/api';
        this.url = 'http://localhost:8080/api';
    }

    findWidgetById = widgetId =>{
        return fetch(this.url+"/paragraph/widget/"+widgetId,{
            method: 'GET',
            credentials: 'include'
        })
            .then(function(response) {
                return response.json();
            });
    }

    deleteWidget = widgetId => {
        return fetch(this.url+"/paragraph/widget/"+widgetId, {
            method: 'DELETE',
            credentials: 'include',
        }).catch(error=>{
            console.log(error.toString())
        });
    }


    updateWidget = (widget,widgetId) => {
        return fetch(this.url+"/paragraph/widget/"+widgetId, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "id": widgetId,
                "title": widget.title,
                "text": widget.text,
                "type": widget.type,
                "size": widget.size,
            })
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            console.log(error.toString())
        });
    }
}
export default ParagraphWidgetService;