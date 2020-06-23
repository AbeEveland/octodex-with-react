import React from 'react'

export class Octocat extends React.Component {
  render() {
    return (
      <>
        <div class="grid-container">
          <div class="grid-item1">
            <img src={this.props.picture}></img>
            <div class="smalltextposition">
              <p>{this.props.number}</p>
              <p>{this.props.name}</p>
              <span>
                <img class="smallimageposition" src={this.props.author1}></img>
                <img class="smallimageposition" src={this.props.author2}></img>
                <img class="smallimageposition" src={this.props.author3}></img>
              </span>
            </div>
          </div>
        </div>
      </>
    )
  }
}
