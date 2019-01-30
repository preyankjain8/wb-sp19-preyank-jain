import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import WidgetList from "../components/WidgetList";
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
      lessons: course.modules[0].lessons,
      topic: course.modules[0].lessons[0].topics[0],
      topics: course.modules[0].lessons[0].topics
    }
  }
  selectModule = module =>
    this.setState({
      module: module,
      lessons: module.lessons
    })

  selectLesson = lesson =>
      this.setState({
        lesson: lesson,
        topics: lesson.topics
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

  deleteLesson = (lessonId) => {
        this.setState(
          {
            lessons: this.state.lessons.filter(
                lesson => lesson.id !== lessonId
            )
          }
        )
      }

  deleteTopic = (topicId) => {
          this.setState(
            {
              topics: this.state.topics.filter(
                  topic => topic.id !== topicId
              )
            }
          )
        }


  lessonTitleChanged = (event) => {
      this.setState(
        {
          lesson: {title: event.target.value}
        });
  }

  topicTitleChanged = (event) => {
        this.setState(
          {
            topic: {title: event.target.value}
          });
    }

   createTopic = () => {
         this.setState(
           {
             topics: [
               ...this.state.topics,
               this.state.topic
             ]
           }
         )
       }


  render() {
    return (
      <div>
      <div className="row" id="course-editor-second-row">
        <div className="col-4">
            <h4 id="course-editor-heading">Course Editor: {this.state.course.title}</h4>
        </div>
        <div className="col-8">
            <LessonTabs
                        selectLesson={this.selectLesson}
                        lesson={this.state.lesson}
                        lessons={this.state.lessons}
                        createLesson={this.createLesson}
                        lessonTitleChanged={this.lessonTitleChanged}
                        deleteLesson={this.deleteLesson}/>
        </div>
      </div>
      <div className="row">
        <div className="col-4" id="course-editor-module-list">
          <ModuleList
            courseTitle={this.state.course.title}
            selectModule={this.selectModule}
            module={this.state.module}
            modules={this.state.course.modules}/>
        </div>
        <div className="col-8">
          <TopicPills
            topics={this.state.topics}
            selectedTopic={this.state.topic}
            createTopic={this.createTopic}
            topicTitleChanged={this.topicTitleChanged}
            deleteTopic={this.deleteTopic}/>
          <WidgetList />
        </div>
      </div>
    </div>
    )
  }
}
export default CourseEditor