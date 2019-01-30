import React, { Component } from 'react'

export default class MessagesAddMessage extends Component {

  state = {
    userId: 1,
    url: "",
    title: "",
    synopsis: "",
    timeStamp: new Date()
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

  addNewArticle = evt => {
    evt.preventDefault()
    let urlCorrected = ""
    if (this.state.url.split(".")[0] === "www") {
        urlCorrected = `http://${this.state.url}`
    } else if (this.state.url.split("/")[0] === "http:" || this.state.url.split("/")[0] === "https:") {
        urlCorrected = this.state.url
    } else {
        urlCorrected = `https://www.${this.state.url}`
    }
        const article = {
            userId: this.state.userId,
            url: urlCorrected,
            title: this.state.title,
            synopsis: this.state.synopsis,
            timeStamp: new Date()
        }

        // Create the article and redirect user to article list
        this.props.addNewsArticle("newsItems", article).then(() => this.props.history.push("/"))
  }

  render() {
    return(
      <>
      <input type="text" placeholder="New Message" />
      <button>Send</button>
      </>
    )
  }
}