import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseService from "../services/CourseService"

class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
    this.courseService = new CourseService()
    const courseId = parseInt(props.match.params.id)
    const course = this.courseService.findCourseById(courseId)
    this.state = {
      course: course,
      module: course.modules[0],
      lesson: course.modules[0].lessons[0],
      lessons:  course.modules[0].lessons
    }
  }
  selectModule = module =>
    this.setState({
      module: module,
      lessons: module.lessons
    })

  createLesson = () => {
      this.setState(
        {
          lessons: [
            ...this.state.lessons,
            this.state.lesson
          ]
        }
      )
    }
  lessonTitleChanged = (event) => {
      this.setState(
        {
          lesson: {title: event.target.value}
        });
  }


  render() {
    return (
      <div>
        <h2>Course Editor: {this.state.course.title}</h2>
      <div className="row">
        <div className="col-4">
          <ModuleList
            selectModule={this.selectModule}
            modules={this.state.course.modules}/>
        </div>
        <div className="col-8">
          <LessonTabs
            lessons={this.state.lessons}
            createLesson={this.createLesson}
            lessonTitleChanged={this.lessonTitleChanged}/>
          <TopicPills
            topics={this.state.topics}/>
        </div>
      </div>
      </div>
    )
  }
}
export default CourseEditor