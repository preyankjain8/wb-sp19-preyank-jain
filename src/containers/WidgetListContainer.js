import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'




const stateToPropertyMapper = (state, props) => ({
    widgets: state.widgets
})

const dispatchToPropertyMapper = (dispatch, props) => ({
    deleteWidget: widget =>{
        props.deleteWidget(widget.id);
        (dispatch({
                type: 'DELETE_WIDGET',
                widget: widget
                    }))
    },
    addWidget: () =>
        dispatch({
            type: 'ADD_WIDGET'
        }),
    moveDownWidget: widget =>
        dispatch({
            type: 'MOVE_DOWN',
            widget: widget
        }),
    moveUpWidget: widget =>
         dispatch({
            type: 'MOVE_UP',
            widget: widget
         }),
    loadWidget: () =>
        dispatch({
                    type: 'LOAD_WIDGET',
                    widgets: props.widgets
                }),
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