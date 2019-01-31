import React, { Component } from  'react';
import UserEvent from './UserEvent'
import FriendEvent from './FriendEvent'

export default class EventList extends Component {

	render() {

		let EventDisplay = (event) => {
			let currentUser = Number(sessionStorage.getItem("User"));

			if (currentUser === event.event.userId) {

				return <div><UserEvent deleteEvent={this.props.deleteEvent} data={{id: event.event.id, eventName: event.event.eventName, eventDate: event.event.eventDate, eventTime: event.event.eventTime, eventLocation: event.event.eventLocation, userId: event.event.userId}}/> <br /></div>

			} else {

				return <div><FriendEvent data={{id: event.event.id, eventName: event.event.eventName, eventDate: event.event.eventDate, eventTime: event.event.eventTime, eventLocation: event.event.eventLocation, userId: event.event.userId}}/> <br /></div>
			}
		}

		return (

			<React.Fragment>
				{
					<section >
					<h1>Events</h1>
					<button type="button" className="addEventButton" onClick={()=> {this.props.history.push("/events/new")}}>Add Event</button>
					{
						this.props.events.map(event =>
								<EventDisplay key={event.id} event={event}/>
						)
					}
				</section>
				}
			</React.Fragment>
		)
	}
}