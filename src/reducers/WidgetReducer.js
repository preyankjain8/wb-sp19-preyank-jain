import HeadingWidgetService from "../services/HeadingWidgetService";
import ListWidgetService from "../services/ListWidgetService";
import ParagraphWidgetService from "../services/ParagraphWidgetService";
import ImageWidgetService from "../services/ImageWidgetService";

const widgetReducer = (state = {widgets:[], preview: true}, action) => {
    switch(action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id),
                preview: state.preview
            }
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ],
                preview: state.preview
            }
        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget =>
                widget.id === action.id ? action.widget : widget
                ),
                preview: state.preview
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
            if(index === state.widgets.length - 1){
                alert("Can't move the last widget down!")
                return state
            }
            else{
                state.widgets.move(index, index + 1);
                return {widgets: state.widgets.splice(0),
                        preview: state.preview};
            }

        case 'MOVE_UP_WIDGET':
              var index = state.widgets.indexOf(action.widget);
              state.widgets.move(index, index - 1);
              return {widgets: state.widgets.splice(0),
                      preview: state.preview};
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
                widgets: state.widgets.filter(
                    widget => widget.topicId === action.topicId
                )
            }
        case 'FIND_WIDGET':
            return{
                widgets: state.widgets.filter(
                    widget => widget.id === action.widgetId
                )
            }
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return{
                widgets: state.widgets.filter(
                widget => widget.id === action.widgetId)}

        case 'FIND_ALL_WIDGETS':
            return state.widgets

        default:
            return state;
    }
}

export default widgetReducer;