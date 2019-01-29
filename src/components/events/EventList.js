import React, { Component } from  'react';
import UserEvent from './UserEvent'
import FriendEvent from './FriendEvent'

export default class EventList extends Component {

    render() {

        let EventDisplay = (event) => {
            let currentUser = 1;
            if (currentUser === event.event.userId) {

                return <div><UserEvent data={{id: event.event.id, eventName: event.event.eventName, eventDate: event.event.eventDate, eventTime: event.event.eventTime, eventLocation: event.event.eventLocation}}/> <br /></div>

            } else {

                return <div><FriendEvent data={{id: event.event.id, eventName: event.event.eventName, eventDate: event.event.eventDate, eventTime: event.event.eventTime, eventLocation: event.event.eventLocation}}/> <br /></div>
            }
        }

        return (

            <React.Fragment>
            {
                this.props.events.map(event =>
                <section key={event.id}>
                    <EventDisplay event={event}/>
                </section>
                )
            }
            </React.Fragment>
        )
    }
}