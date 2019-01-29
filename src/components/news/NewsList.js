import React, { Component } from 'react'
import NewsCard from './NewsCard'
import UserNewsCard from './UserNewsCard'
import AddNewsButton from './AddNewsButton';

export default class NewsList extends Component {
  render() {
    const userId = 1
    const userSaved = this.props.news.filter(newsArticles => newsArticles.userId === userId)
    console.log(this.props)
    return(
      <>
        <section>
        <h1 className="newsHeader">Your Saved News</h1>
            {userSaved.map(userArticle =>(
              <UserNewsCard newsArticle={userArticle}/>
            ))}
        </section>
        <section>
        <h1>Friends News Articles</h1>
          {this.props.news.map(newsArticle =>(
            <NewsCard key={newsArticle.id} newsArticle={newsArticle} {...this.props} />
          ))}
        </section>
        <section>
          <AddNewsButton {...this.props} />
        </section>
      </>
    )
  }
}