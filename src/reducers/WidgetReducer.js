const widgets =
    {
        widgets: [
            {
                id: 123,
                Name: 'Widget 1',
                type: 'HEADING',
                text: 'This is a heading',
                size: 2
            },
            {
                id: 234,
                Name: 'Widget 2',
                type: 'IMAGE'
            }
        ]
    }



const widgetReducer = (state = {widgets:[], preview: true}, action) => {
    switch(action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }
        case 'ADD_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        type: 'HEADING',
                        Name: 'New Widget',
                        size: 1,
                        id: (new Date()).getTime()
                    }
                ]
            }
        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget =>
                widget.id === action.widget.id ? action.widget : widget
                )
            }
        case 'LOAD_WIDGET':
                if (action.reloadWidgets === true){
                    var newState = {widgets: action.widgets,
                                    preview: true}
                    return Object.assign({}, newState)
                }
                else{
                    return state
                }

        case 'MOVE_DOWN_WIDGET':
            var index = state.widgets.indexOf(action.widget);
            if(index === widgets.length - 1){
                alert("Can't move the last widget down!")
                return
            }
            state.widgets.move(index, index + 1);
            return {widgets: state.widgets.splice(0),
            reload: false};

        case 'MOVE_UP_WIDGET':
              var index = state.widgets.indexOf(action.widget);
              state.widgets.move(index, index - 1);
              return {widgets: state.widgets.splice(0)};
        case 'TOGGLE_PREVIEW':
           var widgetsTemp= [];
           for (var i = 0; i < state.widgets.length; i++){
                var widget = state.widgets[i]
                widget.editing = !state.preview
                widgetsTemp.push(widget)
           }
           return{
                widgets: widgetsTemp,
                preview: !state.preview
           }

        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return{
                widgets: state.widgets
            }
        default:
            return state;
    }
}

export default widgetReducer;