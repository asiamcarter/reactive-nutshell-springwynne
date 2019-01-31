import React, { Component } from 'react'

export default class FriendsSearchResults extends Component {


  addFriend = id => {

		let userId = Number(sessionStorage.getItem("User"))

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
					<button className="link-button" href='#' onClick={() => this.addFriend(potentialFriend.id)}>{`Name: `}{potentialFriend.userName}</button>
				</div>
			)}
		</section>
		)
	}
}