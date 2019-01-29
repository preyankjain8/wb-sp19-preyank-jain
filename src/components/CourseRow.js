import React from 'react'
import {Link} from 'react-router-dom';
import CourseEditor from '../containers/CourseEditor';

const CourseRow = ({courseId,title, deleteCourse, course}) =>
  <tr>
    <td class="empty-column d-none d-md-table-cell"></td>
    <div>
        <td>
                <Link to={"/courseEditor/lessons/"+ courseId+"/Week 1"}>
                    <i class="fa fa-file-text" aria-hidden="true"></i>
                    { title}
                </Link>
        </td>
    </div>
    <td class="d-none d-md-table-cell">me</td>
    <td class="d-none d-md-table-cell">6:45 PM</td>
    <td><i onClick={() => deleteCourse(course)} class="fa fa-times" aria-hidden="true"></i></td>
    <td class="empty-column d-none d-md-table-cell"></td>
  </tr>

export default CourseRow;