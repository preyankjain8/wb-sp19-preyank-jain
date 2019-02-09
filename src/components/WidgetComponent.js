import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
import ParagraphWidget from './ParagraphWidget'
import ListWidget from './ListWidget'
import LinkWidget from './LinkWidget'

    const WidgetComponent = ({widget, deleteWidget, updateWidget, moveUpWidget, moveDownWidget}) =>
    <div>
        <br />
        <div className="float-left" id="widget-heading">
            {
            widget.type=='HEADING' && <h1>Heading Widget</h1>||
            widget.type=='IMAGE' && <h1>Image Widget</h1>||
            widget.type=='PARAGRAPH' && <h1>Paragraph Widget</h1>||
            widget.type=='LINK' && <h1>Link Widget</h1>||
            widget.type=='LIST' && <h1>List Widget</h1>
            }
        </div>
        <div className="float-right row">
            <div>
                        <i onClick={(event) => {moveDownWidget(widget)}}
                        className="fa fa-2x fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div>
                        <i onClick={(event) => {moveUpWidget(widget)}}
                        className="fa fa-2x fa-chevron-up" aria-hidden="true"></i>
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
                                    <option value="PARAGRAPH">Paragraph</option>
                                    <option value="LIST">List</option>
                                    <option value="LINK">Link</option>
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
                    widget={widget}/> ||
            widget.type=='PARAGRAPH'   && <ParagraphWidget
                    updateWidget={updateWidget}
                    widget={widget}/>  ||
            widget.type=='LIST'   && <ListWidget
                updateWidget={updateWidget}
                widget={widget}/>   ||
            widget.type=='LINK'   && <LinkWidget
                updateWidget={updateWidget}
                widget={widget}/>

        }
        <hr/>
    </div>

export default WidgetComponent