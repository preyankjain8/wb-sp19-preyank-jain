import React from 'react'

const ListWidget = ({widget, updateWidget}) =>
<div classNameName="card">
          	<br />
          	<br />
          	<br />
    <div className="full-width-div">
          		<div class="form-group row">
                          	            <div className="col-sm-2">
                          	               <label for="list-text">
                          	               Paragraph Text
                          	               </label>
                          	            </div>
                                        <div
                                        className="col-sm-10">
                                        <textarea id="list-text"
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
                                    <label for="list-type-selector">
                                    List Type
                                    </label>
                                    </div>
                                    <div className="col-sm-10">
                                        <select
                                        id="list-type-selector"
                                        className="widget-field"
                                        onChange={event => {
                                        widget.size = parseInt(event.target.value)
                                        updateWidget(widget)
                                        }}
                                        className="widget-field">
                                        <option value="8">Select List Type</option>
                                        <option value="6">Unordered List</option>
                                        <option value="7">Ordered List</option>
                                        </select>
                                   </div>
                                </div>


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
                	<div style={{display: widget.editing? 'block': 'none'}}>
            		<h2>Preview</h2>
            		<ul>
            		    {widget.size === 6 &&
            		    widget.text.split('\n').map(line =>
                                                   <li>
                                                    {line}
                                                   </li>
                                                )}
                        </ul>
                        <ol>
                        {widget.size === 7 &&
                        widget.text.split('\n').map(line =>
                                    <li>
                                    {line}
                                    </li>
                                    )}
                        </ol>
            		</div>

    </div>
</div>

export default ListWidget