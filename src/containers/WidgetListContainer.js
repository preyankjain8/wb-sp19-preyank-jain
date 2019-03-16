import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import HeadingWidgetService from "../services/HeadingWidgetService";
import ListWidgetService from "../services/ListWidgetService";
import ParagraphWidgetService from "../services/ParagraphWidgetService";
import ImageWidgetService from "../services/ImageWidgetService";
import LinkWidgetService from "../services/LinkWidgetService";




const stateToPropertyMapper = (state, props) => ({
    widgets: state.widgets,
    preview: state.preview
})

const dispatchToPropertyMapper = (dispatch, props) => ({
    deleteWidget: widget =>{
        //props.deleteWidget(widget.id);
        props.widgetService.deleteWidget(widget.id)
            .then(dispatch({
                type: 'DELETE_WIDGET',
                widget: widget
            }))
    },
    addWidget: () =>{
        //props.addWidget();
        props.widgetService.addWidget(props.topic.id).then(
            function(widget){
                dispatch({
                    type: 'CREATE_WIDGET',
                    widget: widget
            })
        })
    },
    moveDownWidget: widget =>{
        //props.moveDownWidget(widget);
        dispatch({
        type: 'MOVE_DOWN_WIDGET',
        widget: widget
        })
    },
    moveUpWidget: widget =>{
    //props.moveUpWidget(widget);
        dispatch({
                type: 'MOVE_UP_WIDGET',
                widget: widget
                })
    },
    loadWidget: () =>{
        dispatch({
            type: 'LOAD_WIDGET',
            widgets: props.widgets,
            reloadWidgets: props.reloadWidgets
                        })
        if(props.reloadWidgets === true){
            props.toggleReload();
        }

    },
    updateWidget: widget =>{
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget,
            id : widget.id
        })
    },
     togglePreview: widgets =>
        dispatch({
            type: 'TOGGLE_PREVIEW'
        }),
    saveWidgets: widgets =>{
        props.saveWidgets(widgets)
    }
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer