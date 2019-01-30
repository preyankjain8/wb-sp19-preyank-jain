import React from 'react'

const WidgetList = () =>
  <div className="full-width-div">
          <br />
          <div className="float-right">
          	<button className="btn btn-success">Save</button>
          	<b> Preview<i className="fa fa-2x fa-toggle-off" aria-hidden="true"></i></b>
          </div>
          <br />
          <br />
          <br />
          <div classNameName="card">
          	<div>
          		<h1 className="float-left">Heading widget</h1>
          		<i className="float-right fa fa-2x fa-window-close" aria-hidden="true"></i>
          		<select className="float-right"><option value="heading">Heading</option>
            				 <option value="list">List</option>
            				 <option value="paragraph">Paragraph</option>
            				 <option value="image">Image</option>
            				 <option value="link">Link</option></select>
          		<i className="float-right fa fa-2x fa-chevron-down" aria-hidden="true"></i>
          		<i className="float-right fa fa-2x fa-chevron-up" aria-hidden="true"></i>
          	</div>
          	<br />
          	<br />
          	<br />
          	<div className="full-width-div">
          		<input className="widget-field"
          			   type="text"
          			   placeholder="Heading text">
          	    </input>
          			   <br />
          			   <br />
          		<select className="widget-field"><option value="heading1">Heading 1</option>
            				 <option value="heading2">Heading 2</option>
            				 <option value="heading3">Heading 3</option>
            				 <option value="heading4">Heading 4</option></select>
            			   <br />
            			   <br />
            		<input className="widget-field"
          			   type="text"
          			   placeholder="Widget name">
          			</input>
          			   <br />
            		   <br />
            		<h2>Preview</h2>
            		<h1>Heading text</h1>
          	</div>
          </div>
          <div className="card">
          	<div>
          		<h1 className="float-left">List widget</h1>
          		<i className="float-right fa fa-2x fa-window-close" aria-hidden="true"></i>
          		<select className="float-right"><option value="heading">Heading</option>
            				 <option value="list" selected="selected">List</option>
            				 <option value="paragraph">Paragraph</option>
            				 <option value="image">Image</option>
            				 <option value="link">Link</option></select>
          		<i className="float-right fa fa-2x fa-chevron-down" aria-hidden="true"></i>
          		<i className="float-right fa fa-2x fa-chevron-up" aria-hidden="true"></i>
          	</div>
          	<div className="full-width-div">
          		<textarea cols="1" rows="3" className="widget-field"
          			   placeholder="Put each item in a separate row"></textarea>
          		<br />
          		<br />
          		<select className="widget-field"><option value="unordered-list">Unordered list</option>
            				 <option value="ordered-list">Ordered list</option></select>
            			   <br />
            			   <br />
            		<input className="widget-field"
          			   type="text"
          			   placeholder="Widget name">
          			</input>
          			   <br />
            			   <br />
            		<h2>Preview</h2>
            		<ul>
            		<li>Put each</li>
            		<li>item in</li>
            		<li>a separate row</li>
            		</ul>
          	</div>
          </div>
          <div className="card">
          	<div>
          		<h1 className="float-left">Paragraph widget</h1>
          		<i className="float-right fa fa-2x fa-window-close" aria-hidden="true"></i>
          		<select className="float-right"><option value="heading">Heading</option>
            				 <option value="list">List</option>
            				 <option value="paragraph" selected="selected">Paragraph</option>
            				 <option value="image">Image</option>
            				 <option value="link">Link</option></select>
          		<i className="float-right fa fa-2x fa-chevron-down" aria-hidden="true"></i>
          		<i className="float-right fa fa-2x fa-chevron-up" aria-hidden="true"></i>
          	</div>
          	<div className="full-width-div">
          		<textarea className="widget-field"
          			   placeholder="Lorem ipsum"></textarea>
          		<br />
          		<br />
          		<input className="widget-field"
          			   type="text"
          			   placeholder="Widget name">
          		</input>
          			   <br />
            			   <br />
            		<h2>Preview</h2>
            		<p> Lorem ipsum
            		</p>
          	</div>
          </div>
          <div className="card">
          	<div>
          		<h1 className="float-left">Image widget</h1>
          		<i className="float-right fa fa-2x fa-window-close" aria-hidden="true"></i>
          		<select className="float-right"><option value="heading">Heading</option>
            				 <option value="list">List</option>
            				 <option value="paragraph">Paragraph</option>
            				 <option value="image" selected="selected">Image</option>
            				 <option value="link">Link</option></select>
          		<i className="float-right fa fa-2x fa-chevron-down" aria-hidden="true"></i>
          		<i className="float-right fa fa-2x fa-chevron-up" aria-hidden="true"></i>
          	</div>
          	<div className="full-width-div">
          		<input className="widget-field"
          			   placeholder="http://lorempixel.com/300/150"
          			   value="http://lorempixel.com/300/150">
          		</input>
          		<br />
          		<br />
          		<input className="widget-field"
          			   type="text"
          			   placeholder="Widget name">
          	    </input>
          			   <br />
            			   <br />
            		<h2>Preview</h2>
            		<img alt="example" src="http://lorempixel.com/300/150"></img>
          	</div>
          </div>
          <div className="card">
          	<div>
          		<h1 className="float-left">Link widget</h1>
          		<i className="float-right fa fa-2x fa-window-close" aria-hidden="true"></i>
          		<select className="float-right"><option value="heading">Heading</option>
            				 <option value="list">List</option>
            				 <option value="paragraph">Paragraph</option>
            				 <option value="image">Image</option>
            				 <option value="link" selected="selected">Link</option></select>
          		<i className="float-right fa fa-2x fa-chevron-down" aria-hidden="true"></i>
          		<i className="float-right fa fa-2x fa-chevron-up" aria-hidden="true"></i>
          	</div>
          	<div className="full-width-div">
          		<input className="widget-field"
          			   placeholder="http://example.com/300/150"
          			   value="http://lorempixel.com/300/150">
          	    </input>
          		<br />
          		<br />
          		<input className="widget-field"
          			   type="text"
          			   placeholder="Link text"
          			   value="Link text">
          		</input>
          			   <br />
            			   <br />
            		<input className="widget-field"
          			   type="text"
          			   placeholder="Link"
          			   value="http://lorempixel.com/300/150">
          			</input>
          			   <br />
            			   <br />
            		<input className="widget-field"
          			   type="text"
          			   placeholder="Widget name">
          			</input>
          			   <br />
            			   <br />
            		<h2>Preview</h2>
            		<a href="#">Link text</a>
          	</div>
          </div>
          <div className="float-right">
          <i className="fa fa-2x fa-plus-square" aria-hidden="true"></i>
          </div>
        </div>

export default WidgetList;