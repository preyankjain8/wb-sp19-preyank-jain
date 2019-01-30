import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
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
    this.setState(
      {
        modules: [
          ...this.state.modules,
          this.state.module
        ]
      }
    )
  }
  titleChanged = (event) => {
    this.setState(
      {
        module: {title: event.target.value}
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
              onChange={this.titleChanged}
              className="form-control"/>
            <button
              onClick={this.createModule}
              className="btn btn-primary btn-block">Add Module</button>
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