import React from 'react'
import WidgetComponent from './WidgetComponent'


const WidgetList = ({widgets, preview, addWidget, deleteWidget, updateWidget, loadWidget, moveUpWidget,
                     togglePreview, moveDownWidget}) =>
    <div onLoad={loadWidget()}>

        <div className="row float-right">
            <div className="">
                <button className="btn btn-success">Save</button>
                <div> Preview <Toggle defaultChecked={preview}
                      onChange={() => togglePreview(widgets)}/>
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
                        Add
                    </button>
                    </div>

        </div>
    </div>

export default WidgetList