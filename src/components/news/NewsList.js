import React, { Component } from 'react'
import NewsCard from './NewsCard'

export default class NewsList extends Component {
  render() {
    return(
      <>
      <h1 className="newsHeader">News Today</h1>
        <section>
          {this.props.news.map(newsArticle =>(
            <NewsCard key={newsArticle.id} newsArticle={newsArticle} {...this.props} />
          ))}
        </section>
      </>
    )
  }
}