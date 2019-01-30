import React from 'react'
import TopicPillItem from "./TopicPillItem";

const TopicPills = ({topics, selectedTopic, topicTitleChanged, createTopic, deleteTopic}) =>
  <ul className="nav nav-pills">
    {
      topics.map(topic =>
        <TopicPillItem
        topic={topic}
        deleteTopic={deleteTopic}
        selectedTopic={selectedTopic}/>
      )
    }
    <li className="nav-item">
                <input
                  onChange={topicTitleChanged}
                  className="form-control"/>
    </li>
    <li className="nav-item">
                    <button
                      onClick={createTopic}
                      className="btn btn-primary btn-block"><i class="fa fa-plus" aria-hidden="true"></i></button>
    </li>
  </ul>
export default TopicPills