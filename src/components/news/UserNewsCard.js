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
      <div className={classString}>
        <a href={this.props.newsArticle.url}>
        <h4>{this.props.newsArticle.title}</h4>
        </a>
        <p>{this.props.newsArticle.synopsis}</p>
         <RemoveButton />
        <hr></hr>
      </div>
      </>
    )
  }
}