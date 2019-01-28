import React, { Component } from 'react'
import NewsCard from './NewsCard'
import UserNewsCard from './UserNewsCard'

export default class NewsList extends Component {
  render() {
    const userId = 1
    const userSaved = this.props.news.filter(newsArticles => newsArticles.userId === userId)
    return(
      <>
      <h1 className="newsHeader">News Today</h1>
        <section>
          {this.props.news.map(newsArticle =>(
            <NewsCard key={newsArticle.id} newsArticle={newsArticle} {...this.props} />
          ))}
        </section>
        <h1>Your Saved News</h1>
        <section>
            {userSaved.map(userArticle =>(
              <UserNewsCard newsArticle={userArticle}/>
            ))}
        </section>
      </>
    )
  }
}