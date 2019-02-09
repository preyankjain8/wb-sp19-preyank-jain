import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'




const stateToPropertyMapper = (state, props) => ({
    widgets: state.widgets,
    preview: state.preview
})

const dispatchToPropertyMapper = (dispatch, props) => ({
    deleteWidget: widget =>{
        //props.deleteWidget(widget.id);
        dispatch({
                type: 'DELETE_WIDGET',
                widget: widget
                    })
    },
    addWidget: () =>{
        //props.addWidget();
        dispatch({
                    type: 'ADD_WIDGET'
                })
    },
    moveDownWidget: widget =>{
        //props.moveDownWidget(widget);
        dispatch({
        type: 'MOVE_DOWN_WIDGET',
        widget: widget
        })
    },
    togglePreview: widgets => {
        dispatch({
                    type: 'TOGGLE_VIEW',
                    widgets: widgets
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
    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer