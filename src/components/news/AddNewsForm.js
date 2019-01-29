import React, { Component } from 'react'

export default class AddNewsForm extends Component {


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
        const article = {
            userId: this.state.userId,
            url: `http://${this.state.url}`,
            title: this.state.title,
            synopsis: this.state.synopsis,
            timeStamp: new Date()
        }

        // Create the article and redirect user to article list
        this.props.addNewsArticle("newsItems", article).then(() => this.props.history.push("/"))

  }

  render() {
    return(
      <React.Fragment>
                <form className="newNewsForm">
                    <div className="form-group">
                        <label htmlFor="newsTitle">News Title</label>
                        <input type="text" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="title"
                            placeholder="Add News Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newsURL">Add News URL</label>
                        <input type="text" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="url" placeholder="Add News URL" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="synopsis">Add Brief Synopsis</label>
                        <input type="text" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="synopsis" placeholder="Add Brief Synopsis" />
                    </div>
                    <button type="submit" onClick={this.addNewArticle} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
    )
  }
}