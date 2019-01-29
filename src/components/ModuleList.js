import React from 'react'
import ModuleListItem from "./ModuleListItem";
import CourseService from "../services/CourseService";
import courses from "../services/courses.json";

class ModuleList extends React.Component {
  constructor(props) {
    super(props)
    this.titleChanged = this.titleChanged.bind(this);
    this.createModule = this.createModule.bind(this);
    this.state = {
      module: {title: ''},
      courseId: this.props.courseId,
      modules: this.findModuleByCourseId(this.props.courseId)
    };

    // this.titleChanged = this.titleChanged.bind(this);
  }


  findModuleByCourseId = (courseId) => {
    return courses.find(
        course => course.id === courseId
    ).modules;
  }

  deleteModule = (moduleTitle) => {
        this.setState(
                  {
                    modules: this.state.modules.filter(module => module.title != moduleTitle)

                  }
                )
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
  render() {
    return(
      <div>
        <h3 id="ModuleListTitle">{this.props.title}</h3>
        <ul id="wbdv-ModuleList" className="list-group">
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
                    reRender={this.props.reRender}
                    key={module.title}
                    deleteModule={this.deleteModule}
                    courseId={this.state.courseId}
                    title={module.title}/>
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