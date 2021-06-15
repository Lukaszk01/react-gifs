import React, { Component } from 'react';
export default class Gif extends Component {

  handleClick = (event) => {
    // console.log("Hello");
    const { changeSelectedGif, gifId } = this.props;
    changeSelectedGif(gifId);
  }

  render() {
    const { gifId } = this.props;
    const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
    return (
      <img className="gif" src={url} alt="gif" onClick={this.handleClick} />
    );
  }
}
