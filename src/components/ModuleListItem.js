import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const ModuleListItem = ({module, selectModule, isActive, key, deleteModule, editModuleName}) =>
    <li onClick={() => selectModule(module)} className= {isActive(module)? 'list-group-item active':'list-group-item'}>
        {module.title}
      <span className="float-right">
        <i onClick={ () => deleteModule(module.id) } className="fa fa-trash"></i>
        <i onClick={ () => editModuleName(module) } className="fa fa-pencil"></i>
      </span>
    </li>

export default ModuleListItem;