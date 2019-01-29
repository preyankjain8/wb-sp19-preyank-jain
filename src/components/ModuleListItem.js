import React from 'react'
import {Link} from 'react-router-dom';
import LessonTabs from "../components/LessonTabs";
import ModuleList from "../components/ModuleList";

class ModuleListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="list-group-item">
        <Link to={"/courseEditor/lessons/"+ this.props.courseId +"/" + this.props.title}
            onClick={ () => this.props.reRender()}>{this.props.title}</Link>
        <span className="float-right">
        <i className="fa fa-trash" onClick={ () => this.props.deleteModule(this.props.title) }></i>
        <i className="fa fa-pencil"></i>
        </span>
      </li>
    )
  }
}
export default ModuleListItem;