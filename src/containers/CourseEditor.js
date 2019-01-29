import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
  }
  reRender = () => {
    console.log("rendering")
    this.render();
  }
  render() {
    return (
    <Router>
      <div>
      <div className="row">
        <div className="col-4">
          <ModuleList title="WebDev"
                      courseId="123"
                      reRender={this.reRender}/>
        </div>
        <div className="col-8">
                      <Route path="/courseEditor/lessons/:courseId/:title"
                      component={LessonTabs}/>
                      <Route path="/courseEditor/lessons/:courseId/:title/:lessonTitle"
                                component={TopicPills}/>
                </div>
      </div>
      </div>
    </Router>
    )
  }
}
export default CourseEditor