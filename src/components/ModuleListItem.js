import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const ModuleListItem = ({module, selectModule}) =>
    <li onClick={() => selectModule(module)} className="list-group-item">
      {module.title}
      <span className="float-right">
        <i className="fa fa-trash"></i>
        <i className="fa fa-pencil"></i>
      </span>
    </li>

export default ModuleListItem;