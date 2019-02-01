import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const ModuleListItem = ({module, selectModule, isActive, key, deleteModule, editModuleName}) =>
    <li className= {isActive(module)? 'list-group-item module-item active':'list-group-item module-item'}
        id="web-dv-list-item">
        <div onClick={() => selectModule(module)}>
        {module.title}
        </div>
      <span className="float-right">
        <i onClick={ () => deleteModule(module.id) } className="fa fa-trash"></i>
        <i onClick={ () => editModuleName(module) } className="fa fa-pencil"></i>
      </span>
    </li>

export default ModuleListItem;