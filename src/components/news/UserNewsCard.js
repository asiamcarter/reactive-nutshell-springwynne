import React, { Component } from 'react'
import RemoveUserArticleButton from './RemoveUserArticleButton'

export default class UserNewsCard extends Component {

  render() {

    let currentUser = Number(sessionStorage.getItem("User"));
    console.log(currentUser)
    let classString = (currentUser === this.props.newsArticle.userId) ? "userArticle" : "friendArticle"

    let RemoveButton = () => {

      if (currentUser === this.props.newsArticle.userId) {
        return  <RemoveUserArticleButton deleteNewsArticle={this.props.deleteNewsArticle} newsArticle={this.props.newsArticle} />
      } else {
        return null
      }
    }

    return(
      <>
      <div className="container taskContainer">
      <div className="row">
      <div className="col-md-12 .col-sm-6">
      <div className="offer newsoffer-default">
      <div className="shape">
      <div className="shape-text">
      </div>
      </div>

      <div className={classString}>
      <div className="offer-content">
        <a href={this.props.newsArticle.url}>
        <h3 className="lead">{this.props.newsArticle.title}</h3>
        </a>
        <p>{this.props.newsArticle.synopsis}</p>
         <RemoveButton />
         </div>
        <hr></hr>

        </div>
        </div>
      </div>
      </div>
      </div>
      </>
    )
  }
}