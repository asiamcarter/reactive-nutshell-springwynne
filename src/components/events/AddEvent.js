import React, { Component } from 'react'

export default class AddEvent extends Component {

	constructor (props) {
		super(props)
		this.state = {

			eventName: "",
			eventDate: "",
			eventTime: "",
			eventLocation: ""

		}
		this.handleInputChange = this.handleInputChange.bind(this)

	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
    const name = target.name;

    console.log(target)

		this.setState({
			[name]: value
		});
	}

	addEvent = evt =>{
		evt.preventDefault()
		let userId = 1
		let eventObject = {

			userId: userId,
			eventName: this.state.eventName,
			eventDate: this.state.eventDate,
			eventTime: this.state.eventTime,
			eventLocation: this.state.eventLocation
		}

		this.props.addEvent(eventObject)
		this.props.history.push("/events")
	}
	render() {

		return (

			<React.Fragment>
				<form className="addEvent" onSubmit={this.addEvent}  >
					<label>Event:
					<input type="text" name="eventName" onChange={this.handleInputChange} />
					</label><br />
					<label>Date:
					<input type="date" name="eventDate" onChange={this.handleInputChange} />
					</label><br />
					<label>Time:
					<input type="time" name="eventTime" onChange={this.handleInputChange} />
					</label><br />
					<label>Location:
					<input type="text" name="eventLocation" onChange={this.handleInputChange} />
					</label><br />
					<input type="submit" />
				</form>
			</React.Fragment>
		)
	}
}

// {eventName: this.state.eventName, eventDate: this.state.eventDate, eventTime: this.state.eventTime, eventLocation: this.state.eventLocation}