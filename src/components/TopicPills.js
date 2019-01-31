import React from 'react'
import TopicPillItem from "./TopicPillItem";

class TopicPills extends React.Component{
    constructor(props){
        super(props)
        if(this.props.lesson.topics === undefined){
                    this.props.lesson.topics = []
                }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.lesson.topics === undefined){
                            nextProps.lesson.topics = []
                        }
    }

    render(){
        return(
            <ul className="nav nav-pills">
                {
                  this.props.lesson.topics.map(topic =>
                    <TopicPillItem
                    topic={topic}
                    deleteTopic={this.props.deleteTopic}/>
                  )
                }
                <li className="nav-item">
                            <input
                              value={this.props.topicInput}
                              onChange={this.props.topicTitleChanged}
                              className="form-control"/>
                </li>
                <li className="nav-item">
                                <button
                                  onClick={this.props.createTopic}
                                  className="btn-webdv"><i class="fa fa-plus" aria-hidden="true"></i></button>
                </li>
              </ul>
        )
    }
}
export default TopicPills