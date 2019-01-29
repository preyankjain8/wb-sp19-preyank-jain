import React from 'react'

const TopicPills = ({topics, topicTitleChanged, createTopic, deleteTopic}) =>
  <ul className="nav nav-pills">
    {
      topics.map(topic =>
        <li key={topic.id} className="nav-item">
          <a className="nav-link active"
             href="#">{topic.title}
             <i onClick={ () => deleteTopic(topic.id) } class="fa fa-times" aria-hidden="true"></i>
             <i className="fa fa-pencil"></i>
          </a>
        </li>
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