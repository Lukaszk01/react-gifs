
import React, { Component } from 'react';

import SearchBar from './searchBar';
import Gif from  './gif';
import GifList from './gifList';


const giphy = require('giphy-api')('KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR');


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedGif: "6fScAIQR0P0xW",
      gifIds: ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]
    };
  }

  changeSelectedGif = (newGifId) => {
    this.setState({ selectedGif: newGifId });
  }

  changeGifIds = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifIds: res.data.map(gifObj => gifObj.id) });
    });
  }


  render() {
    const { selectedGif, gifIds } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar changeGifIds={this.changeGifIds}/>
          <div className="selected-gif">
           <Gif gifId={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIds={gifIds} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}