import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const TopicPillItem = ({topic, deleteTopic, selectedTopic}) =>
    <li key={topic.id} className="nav-item">
              <a className="nav-link active"
                 href="#">{topic.title}
                 <i onClick={ () => deleteTopic(topic) } class="fa fa-times" aria-hidden="true"></i>
                 <i className="fa fa-pencil"></i>
              </a>
    </li>

export default TopicPillItem;