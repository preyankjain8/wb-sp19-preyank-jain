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
const widgetReducer = (state = widgets, action) => {
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
                        text: 'New Widget',
                        size: 1
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
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return{
                widgets: state.widgets
            }
        default:
            return state;
    }
}

export default widgetReducer;