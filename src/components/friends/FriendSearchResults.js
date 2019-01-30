import React, { Component } from 'react'

export default class FriendsSearchResults extends Component {


  addFriend = id => {

		let userId = 1

		let friend = {

			userId: userId,
			otherFriendId: id,
		}
		console.log(friend)
		this.props.addFriend(friend)
		this.props.history.push("/friends")
	}

	render () {

		return (

			<section>
				<h2>Click A Users Name to Add as a Friend</h2>
			{
				this.props.results.map(potentialFriend =>
				<div key={potentialFriend.id} className="friendsSearchResults">
					<a href='#' onClick={() => this.addFriend(potentialFriend.id)}>{`Name: `}{potentialFriend.userName}</a>
				</div>
			)}
		</section>
		)
	}
}