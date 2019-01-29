import React, { Component } from  'react';
import { Link } from 'react-router-dom';

export default class UserEvent extends Component {

  render() {

    return (

      <React.Fragment>
        {
          <div key={this.props.data.id} className="event">
            {`Event: `} {this.props.data.eventName} <br />
            {`Date:`} {this.props.data.eventDate}<br />
            {`Time: `} {this.props.data.eventTime}<br />
            {`Location: `} {this.props.data.eventLocation}<br />
            <button type="button" onClick={()=> this.props.deleteEvent(this.props.data.id, "events")}>Delete Event</button>
            <Link to={`/events/editevent/${this.props.data.id}`}><button type="button" >Edit Event</button></Link>
          </div>
        }
      </React.Fragment>
    )
  }
}