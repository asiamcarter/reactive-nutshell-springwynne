import React, { Component } from 'react'
import Friend from './Friend';

export default class Friends  extends Component {

	render() {

		return (
			<section className="friends">
			<h1>Friends</h1>
				{
					this.props.friends.map(friend =>
						<div key={friend.id} className="friend">
							<Friend key={friend.id} friend={friend} deleteFriend={this.props.deleteFriend}/>
						</div>
				)}
			</section>
		)
	}
}
