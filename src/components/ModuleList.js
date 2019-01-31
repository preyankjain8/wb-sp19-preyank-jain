import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
  constructor(props) {
    super(props)
    this.createModule = this.createModule.bind(this);
    this.state = {
      moduleInput: '',
      module: { title: '' },
      modules: this.props.modules
    };

    // this.titleChanged = this.titleChanged.bind(this);
  }

    componentWillReceiveProps(nextProps) {

           if(nextProps.modules === undefined ) {
              nextProps.modules = []
           }
       }

  createModule = () => {
    var modTitle = 'New Module';
    if(this.state.moduleInput !== ''){
         modTitle = this.state.moduleInput
    }
    this.setState(
      {
        modules: [
          ...this.state.modules,
          {title: modTitle,
          id: (new Date()).getTime()
          }
        ],
        moduleInput:''
      }
    )
    document.getElementById('module-input').innerHTML="";
  }
  titleChanged = (event) => {
    this.setState(
      {
        moduleInput: event.target.value
      });
  }

  deleteModule = (moduleId) => {
      this.setState(
        {
          modules: this.state.modules.filter(
            module => module.id !== moduleId
          )
        }
      )
    }

   isActive = (module) => {
        return this.props.module === module
       }

  render() {
    return(
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              value={this.state.moduleInput}
              onChange={this.titleChanged}
              className="form-control" id="module-input"/>
            <button
              onClick={this.createModule}
              className="btn-webdv-2">Add Module</button>
          </li>
          {
            this.state.modules.map(
              (module) => {
                return (
                  <ModuleListItem
                    selectModule={this.props.selectModule}
                    isActive={this.isActive}
                    key={module.id}
                    module={module}
                    deleteModule={this.deleteModule}/>
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