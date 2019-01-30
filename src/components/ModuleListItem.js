import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const ModuleListItem = ({module, selectModule, isActive, deleteModule}) =>
    <li onClick={() => selectModule(module)} className="list-group-item" active={isActive(module)}>
      {module.title}
      <span className="float-right">
        <i onClick={ () => deleteModule(module.id) } className="fa fa-trash"></i>
        <i className="fa fa-pencil"></i>
      </span>
    </li>

export default ModuleListItem;