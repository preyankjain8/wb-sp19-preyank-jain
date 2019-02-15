import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const TopicPillItem = ({topic, deleteTopic, selectedTopic, selectTopic, editTopicName}) =>
    <li key={topic.id} className={ selectedTopic(topic)? 'nav-item topic-pill active': 'nav-item topic-pill'}>
             <div className="nav-link">
              <a
                 onClick={() => selectTopic(topic)}
                 >{topic.title}
              </a>
              <i onClick={ () => deleteTopic(topic) } class="fa fa-times" aria-hidden="true"></i>
              <i onClick={ () => editTopicName(topic) } className="fa fa-pencil"></i>
             </div>
    </li>

export default TopicPillItem;