import React, { Component } from 'react'
import DataManager from '../../modules/DataManager';

export default class EditEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {

			userId: 1, //pull from sessionStorage
			eventName: "",
			eventDate: "",
			eventLocation: "",
			eventTime: ""
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
	const target = event.target;
	const value = target.value;
	const name = target.name;

	this.setState({
		[name]: value
	});
	}

	handleSubmit = evt => {
		evt.preventDefault();
		let dataset = "events";
		let id = this.state.id;
		let eventObject = {
			"id": this.state.id,
			"userId": this.state.userId,
			"eventName": this.state.eventName,
			"eventDate": this.state.eventDate,
			"eventLocation": this.state.eventLocation,
			"eventTime": this.state.eventTime,
			}

		console.log(eventObject)
		this.props.editEvent(id, dataset, eventObject)
		this.props.history.push("/events")

	}

	componentDidMount() {
		let eventToEdit = this.props.events.find(a => a.id === parseInt(this.props.match.params.id)) || {}
		this.setState({
			id: parseInt(this.props.match.params.id),
			eventName: eventToEdit.eventName,
			eventDate: eventToEdit.eventDate,
			eventLocation: eventToEdit.eventLocation,
			eventTime: eventToEdit.eventTime
		})
	}

	render () {

		return (
			<form key={this.state.id} className="addEvent" onSubmit={this.handleSubmit}  >
				<label>Event:
				<input type="text" name="eventName" onChange={this.handleInputChange} value={this.state.eventName} />
				</label><br />
				<label>Date:
				<input type="date" name="eventDate" onChange={this.handleInputChange} value={this.state.eventDate}/>
				</label><br />
				<label>Time:
				<input type="time" name="eventTime" onChange={this.handleInputChange} value={this.state.eventTime}/>
				</label><br />
				<label>Location:
				<input type="text" name="eventLocation" onChange={this.handleInputChange} value={this.state.eventLocation}/>
				</label><br />
				<input type="submit" />
			</form>
		);
	}
}