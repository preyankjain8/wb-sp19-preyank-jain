import React from 'react'
import WidgetComponent from './WidgetComponent'
const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget, loadWidget, moveUpWidget, moveDownWidget}) =>
    <div onLoad={loadWidget()}>
        <div className="list-group">
        {
            widgets.map(widget =>
                <WidgetComponent
                    key={widget.id}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    widget={widget}
                    moveDownWidget={moveDownWidget}
                    moveUpWidget={moveUpWidget}/>
            )
        }
        <button
            onClick={addWidget}
            className="btn btn-success">
            Add
        </button>
        </div>
    </div>

export default WidgetList