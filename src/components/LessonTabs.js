import React from 'react'
import courses from "../services/courses.json";
import LessonTabItem from "../components/LessonTabItem";

export default class LessonTabs
  extends React.Component {

  constructor(props) {
      super(props)

      this.state = {
        courseId: this.props.match.params.courseId,
        moduleTitle: this.props.match.params.title,
        lessons: this.findLessons(this.props.match.params.courseId, this.props.match.params.title)
      };

      // this.titleChanged = this.titleChanged.bind(this);
    }

  componentDidMount() {
    this.updateLessons();

  }

  componentDidUpdate(prevProps) {
      if(this.props.match.params.title !== prevProps.match.params.title)
      {
             this.updateLessons();
      }
  }

  updateLessons() {
    this.setState(
        {
            courseId: this.props.match.params.courseId,
            moduleTitle: this.props.match.params.title,
            lessons : this.findLessons(this.props.match.params.courseId, this.props.match.params.title)
        }

    )
  }

  findLessons = (courseId, moduleTitle) => {
      return courses.find(
          course => course.id === courseId
      ).modules.find(module => module.title === moduleTitle).lessons;
    }
  render() { return(
    <ul id="LessonTabsNav" className="nav nav-tabs">
      {
        this.state.lessons.map(
            (lesson) => {
                return (
                    <LessonTabItem
                        key={lesson.title}
                        courseId={this.state.courseId}
                        moduleTitle={this.state.moduleTitle}
                        lessonTitle={lesson.title}/>
                                              )
                                            }
                                          )
      }

    </ul>
  );}}