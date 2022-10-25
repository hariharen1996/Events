// Write your code here
import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  render() {
    const {item, clickEventDetails} = this.props
    const {imageUrl, name, location} = item

    const changeEvent = () => {
      clickEventDetails(item)
    }
    return (
      <li className="event-items">
        <button type="button" className="btn" onClick={changeEvent}>
          <img src={imageUrl} alt="event" className="event-img" />
        </button>

        <p className="heading">{name}</p>
        <p className="text">{location}</p>
      </li>
    )
  }
}

export default EventItem
