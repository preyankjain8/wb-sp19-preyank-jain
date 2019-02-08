import React from 'react'

const ImageWidget = ({widget, updateWidget}) =>
<div classNameName="card">
          	<br />
          	<br />
          	<br />
    <div className="full-width-div">
          		<div class="form-group row">
                          	            <div className="col-sm-2">
                          	               <label for="image-url-text">
                          	               Image URL
                          	               </label>
                          	            </div>
                                        <div
                                        className="col-sm-10">
                                        <input
                                          id="image-url-text"
                                          className="widget-field"
                                          placeholder="Image URL"
                                          value={widget.text}
                                                                  onChange={event => {
                                                                      widget.text = event.target.value
                                                                      updateWidget(widget)
                                                                  }}>
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
                                                                                    widget.text = event.target.value
                                                                                    updateWidget(widget)
                                                                                }}
                                                                        className="widget-field"
                                                                        id="widget-name"/>
                                                        </div>
                </div>
                	<br />
                	<br />
            		<h2>Preview</h2>
            		{
            		widget.text === undefined && <h5>No preview available</h5> ||
            		widget.text !== undefined && <img alt="example" src={widget.text}></img>
                    }

    </div>
</div>

export default ImageWidget