import React, { Component } from  'react';

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
                        <button>Delete Event</button>
                    </div>
                }
            </React.Fragment>
        )
    }
}