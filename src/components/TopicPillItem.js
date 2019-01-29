import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const TopicPillItem = ({topic, selectTopic}) =>
    <li onClick={() => selectTopic(topic)} className="nav-item">
      {topic.title}
    </li>

export default TopicPillItem;