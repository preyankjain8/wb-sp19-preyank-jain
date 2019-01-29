import React from 'react'
import TopicPillItem from "../components/TopicPillItem";
import courses from "../services/courses.json";

export default class TopicPills
  extends React.Component {
  constructor(props) {
        super(props)

        this.state = {
          courseId: this.props.match.params.courseId,
          moduleTitle: this.props.match.params.title,
          lessonTitle: this.props.match.params.lessonTitle,
          topics: this.findTopics(this.props.match.params.courseId,
                                  this.props.match.params.title,
                                  this.props.match.params.lessonTitle)
        };

        // this.titleChanged = this.titleChanged.bind(this);
      }

  componentDidMount() {
      this.updateTopics();

    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.lessonTitle !== prevProps.match.params.lessonTitle)
        {
               this.updateTopics();
        }
    }

    updateTopics() {
      this.setState(
          {
              courseId: this.props.match.params.courseId,
                        moduleTitle: this.props.match.params.title,
                        lessonTitle: this.props.match.params.lessonTitle,
                        topics: this.findTopics(this.props.match.params.courseId,
                                                this.props.match.params.title,
                                                this.props.match.params.lessonTitle)
          }

      )
    }

    findTopics = (courseId, moduleTitle, lessonTitle) => {
        return courses.find(
            course => course.id === courseId
        ).modules.find(module => module.title === moduleTitle)
        .lessons.find(lesson => lesson.title === lessonTitle).topics;
      }
  render() {
    return(
    <ul className="nav nav-pills">
    {
        this.state.topics.map(
                    (topic) => {
                        return (
                            <TopicPillItem
                                key={topic.title}
                                courseId={this.state.courseId}
                                moduleTitle={this.state.moduleTitle}
                                lessonTitle={this.state.lessonTitle}
                                topicTitle={topic.title}/>
                                                      )
                                                    }
                                                  )
    }

    </ul>
    );}}