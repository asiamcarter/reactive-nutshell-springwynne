import React, { Component } from 'react'
// import NewsCard from './NewsCard'
import UserNewsCard from './UserNewsCard'
import AddNewsButton from './AddNewsButton';

export default class NewsList extends Component {
  render() {
    const userId = 1
    const userSaved = this.props.news.filter(newsArticles => newsArticles.userId === userId)
    const timeSorted = userSaved.sort(function(a,b){
      return new Date(b.timeStamp) - new Date(a.timeStamp);


  });
    return(
      <>
        <section id="userNewsSection">
        <h1 id="usersNews" className="newsHeader">Your Saved News:</h1>
            {timeSorted.map(userArticle =>(
              <UserNewsCard key={userArticle.id}
                newsArticle={userArticle}
                deleteNewsArticle={this.props.deleteNewsArticle} />
            ))}
        </section>
        <section>
          <AddNewsButton {...this.props} />
        </section>
      </>
    )
  }
}