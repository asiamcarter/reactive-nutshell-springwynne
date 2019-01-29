import React, { Component } from 'react'

export default class AddNewsForm extends Component {


  state = {
    userId: 1,
    url: "",
    title: "",
    synopsis: ""
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
            url: this.state.url,
            title: this.state.title,
            synopsis: this.state.synopsis
        }

        // Create the article and redirect user to article list
        this.props.addarticle(article).then(() => this.props.history.push("/"))

  }

  render() {
    return(
      <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="animalName"
                            placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="breed" placeholder="Breed" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        </select>
                    </div>

                </form>
            </React.Fragment>
    )
  }
}