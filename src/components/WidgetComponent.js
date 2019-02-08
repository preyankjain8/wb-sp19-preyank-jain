import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'

const WidgetComponent = ({widget, deleteWidget, updateWidget}) =>
    <div>
        <h1 className="float-left">Heading widget</h1>
        <div className="float-right row">
            <div>
                        <i className="fa fa-2x fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div>
                        <i className="fa fa-2x fa-chevron-up" aria-hidden="true"></i>
                        </div>
            <div>
            <select
                        onChange={(event) => {
                                       widget.type = event.target.value
                                       updateWidget(widget)
                                 }}
                                    className="form-control" value={widget.type}>
                                    <option value="HEADING">Heading</option>
                                    <option value="IMAGE">Image</option>
                                </select>
            </div>
            <div><i onClick={() => deleteWidget(widget)} className="fa fa-2x fa-window-close" aria-hidden="true"></i></div>
        </div>
        {
            widget.type=='HEADING' &&
                <HeadingWidget
                    updateWidget={updateWidget}
                    widget={widget}/> ||
            widget.type=='IMAGE'   && <ImageWidget
                    updateWidget={updateWidget}
                    widget={widget}/>
        }
    </div>

export default WidgetComponent