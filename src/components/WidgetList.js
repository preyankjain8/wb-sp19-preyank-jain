import React from 'react'
import WidgetComponent from './WidgetComponent'
import ToggleButton from 'react-toggle-button'

const WidgetList = ({widgets, preview, addWidget, deleteWidget, updateWidget, loadWidget, moveUpWidget,
                     togglePreview, moveDownWidget, saveWidgets}) =>
    <div onLoad={loadWidget()}>

        <div className="float-right">
            <div className="row">
                <button onClick={() => saveWidgets(widgets)}
                className="btn btn-success">Save</button>
                <div> Preview
                <ToggleButton
                  value={preview}
                  onToggle={togglePreview}/>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <div>
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
                        Add New Widget
                    </button>
                    </div>

        </div>
    </div>

export default WidgetList