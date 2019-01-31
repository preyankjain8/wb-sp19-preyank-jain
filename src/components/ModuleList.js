import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
  constructor(props) {
    super(props)
  }

    componentWillReceiveProps(nextProps) {

           if(nextProps.modules === undefined ) {
              nextProps.modules = []
           }
       }



   isActive = (module) => {
        return this.props.module === module
       }

  render() {
    return(
      <div className="module-list-web-dv">
        <ul className="list-group">
          <li className="list-group-item">
            <input
              placeholder="New module title"
              value={this.props.moduleInput}
              onChange={this.props.titleChanged}
              className="form-control" id="module-input"/>
            <button
              onClick={this.props.createModule}
              className="btn-webdv-2">Add Module</button>
          </li>
          {
            this.props.modules.map(
              (module) => {
                return (
                  <ModuleListItem
                    module={module}
                    selectModule={this.props.selectModule}
                    isActive={this.isActive}
                    key={module.id}
                    deleteModule={this.props.deleteModule}
                    editModuleName={this.props.editModuleName}/>
                )
              }
            )
          }
        </ul>
      </div>
    )
  }
}
export default ModuleList;