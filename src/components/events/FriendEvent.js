import React, { Component } from  'react';

export default class FriendEvend extends Component {

    render() {

        return (

            <React.Fragment>
                {
                    <div key={this.props.data.id} className="friendEvent">
                        {`Event: `} {this.props.data.eventName} <br />
                        {`Date:`} {this.props.data.eventDate}<br />
                        {`Time: `} {this.props.data.eventTime}<br />
                        {`Location: `} {this.props.data.eventLocation}<br />
                    </div>
                }
            </React.Fragment>
        )
    }
}