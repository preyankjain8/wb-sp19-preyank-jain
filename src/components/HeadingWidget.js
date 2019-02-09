import React from 'react'

const HeadingWidget = ({widget, updateWidget}) =>
<div classNameName="card">
          	<br />
          	<br />
          	<br />
          	<div className="full-width-div">
          	    <div class="form-group row">
          	            <div className="col-sm-2">
          	               <label for="heading-text">
          	               Heading Text
          	               </label>
          	            </div>
                        <div
                        className="col-sm-10">
                        <input
                          id="heading-text"
                          className="widget-field"
                          type="text"
                          placeholder="Heading text"
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
                    <label for="heading-size-selector">
                    Heading Size
                    </label>
                    </div>
                    <div className="col-sm-10">
                        <select
                                            id="heading-size-selector"
                                            className="widget-field"
                                            onChange={event => {
                                                                    widget.size = parseInt(event.target.value)
                                                                        updateWidget(widget)
                                                                    }}
                                                                    className="widget-field">
                                                                    <option value="1">Heading 1</option>
                                                                    <option value="2">Heading 2</option>
                                                                    <option value="3">Heading 3</option>
                                                                    <option value="4">Heading 4</option>
                                                                    <option value="5">Heading 5</option>
                                                            </select>
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
                <h3>Preview</h3>
                    {
                        widget.size === 1 && <h1>{widget.text}</h1> ||
                        widget.size === 2 && <h2>{widget.text}</h2> ||
                        widget.size === 3 && <h3>{widget.text}</h3> ||
                        widget.size === 4 && <h4>{widget.text}</h4> ||
                        widget.size === 5 && <h5>{widget.text}</h5>
                    }
          	</div>
</div>

export default HeadingWidget