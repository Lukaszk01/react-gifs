import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = (event) => {
    const { changeGifIds } = this.props;
    changeGifIds(event.currentTarget.value);
  }

  render() {
    return (
      <input className="form-search form-control" type="text" placeholder="Write your meme" onChange={ this.handleChange} />
    );
  }
}