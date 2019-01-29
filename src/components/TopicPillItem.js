import React from 'react'

class TopicPillItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <li className="nav-item">
              <a id="TopicPillsNav" className="nav-link active"
                 href="#">{this.props.topicTitle}
              </a>
      </li>
    )
  }
}
export default TopicPillItem;