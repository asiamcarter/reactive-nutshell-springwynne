import React, { Component } from  'react';
import DataManager from '../../modules/DataManager';

export default class Friend extends Component {
  deleteFriend (id) {

    let currentUser = Number(sessionStorage.getItem("User"));

    DataManager.getAll("friends", `userId=${currentUser}&&otherFriendId=${id}`)
    .then(results => {

      results.forEach(result => {
        this.props.deleteFriend(result.id)
      });
    })

  }
  render() {

    return (

      <React.Fragment>
        {
          <div>
            {`Name: `} {this.props.friend.userName}
            <button type="button" onClick={()=> this.deleteFriend(this.props.friend.id)}>Remove Friend</button>
          </div>
        }
      </React.Fragment>
    )
  }
}