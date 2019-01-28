import React, { Component } from  'react';
import Event from './Event'

export default class EventList extends Component {

    render() {

        return (

            <React.Fragment>
                {
                    this.props.data.events.map(event =>
                    <section key={event.id}>
                        <Event data={{id: event.id, eventName: event.eventName, eventDate: event.eventDate, eventTime: event.eventName, eventLocation: event.eventLocation}}/> <br />
                    </section>
                )}
            </React.Fragment>
        )
    }
}