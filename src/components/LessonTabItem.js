import React from 'react'
import {Link} from 'react-router-dom';
class LessonTabItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <li className="nav-item">
        <Link className="nav-link active"
        to={"/courseEditor/lessons/"+ this.props.courseId +"/" + this.props.moduleTitle+"/"+this.props.lessonTitle}>
            {this.props.lessonTitle}
        </Link  >
      </li>
    )
  }
}
export default LessonTabItem;