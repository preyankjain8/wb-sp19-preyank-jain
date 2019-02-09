import React from 'react'

const LinkWidget = ({widget, updateWidget}) =>
<div classNameName="card">
          	<br />
          	<br />
          	<br />
    <div className="full-width-div">
          		<div class="form-group row">
                          	            <div className="col-sm-2">
                          	               <label for="link-url">
                          	               Link URL
                          	               </label>
                          	            </div>
                                        <div
                                        className="col-sm-10">
                                        <input id="link-url"
                                                  cols="1" rows="3"
                                                  className="widget-field"
                                                  placeholder="Link URL"
                                                  value={widget.url}
                                                  onChange={event =>
                                                        {widget.url = event.target.value
                                                        updateWidget(widget)}}>
                                        </input>
                                        </div>
                </div>
          		<br />
          		<br />
          		<div class="form-group row">
          		    <div className="col-sm-2">
          		    <label for="link-text">
          		    Link Text
          		    </label>
          		    </div>
          		    <div
          		    className="col-sm-10">
          		    <input id="link-text"
          		    cols="1" rows="3"
          		    className="widget-field"
          		    placeholder="Link text"
          		    value={widget.text}
          		    onChange={event =>
          		    {widget.text = event.target.value
          		    updateWidget(widget)}}>
          		    </input>
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
          		value={widget.Name}
          		onChange={event => {
          		widget.Name = event.target.value
          		updateWidget(widget)
          		}}
          		className="widget-field"
          		id="widget-name"/>
          		</div>
                </div>
                	<br />
                	<br />
                	<div style={{display: widget.editing? 'block': 'none'}}>
            		<h2>Preview</h2>
            		<a href="#">{widget.text}</a>
            		</div>

    </div>
</div>

export default LinkWidget