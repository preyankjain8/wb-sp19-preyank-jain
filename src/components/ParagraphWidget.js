import React from 'react'

const ParagraphWidget = ({widget, updateWidget}) =>
<div classNameName="card">
          	<br />
          	<br />
          	<br />
    <div className="full-width-div">
          		<div class="form-group row">
                          	            <div className="col-sm-2">
                          	               <label for="paragraph-text">
                          	               Paragraph Text
                          	               </label>
                          	            </div>
                                        <div
                                        className="col-sm-10">
                                        <textarea id="paragraph-text"
                                                  cols="1" rows="3"
                                                  className="widget-field"
                                                  placeholder="Put each item in a separate row"
                                                  value={widget.text}
                                                  onChange={event =>
                                                        {widget.text = event.target.value
                                                        updateWidget(widget)}}>
                                        </textarea>
                                        </div>
                </div>
          		<br />
          		<br />

          		<div class="form-group row">
          		<div className="col-sm-2">
          		<label for="widget-name">
          		Widget Name
          		</label>
          		</div>
          		<div
          		className="col-sm-10">
          		<input
          		value={widget.title}
          		onChange={event => {
          		widget.title = event.target.value
          		updateWidget(widget)
          		}}
          		className="widget-field"
          		id="widget-name"/>
          		</div>
                </div>
                	<br />
                	<br />
                	<div style={{display: widget.editing? 'block': 'none'}}>
            		<h3>Preview</h3>
            		<p>{widget.text}</p>
            		</div>

    </div>
</div>

export default ParagraphWidget