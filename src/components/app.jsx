import React, { Component } from 'react';

import SearchBar from './searchBar';
import GifList from './gifList';
import Gif from './gif';
import dragAndDrop from './dragAndDrop';

const key = process.env.REACT_APP_API_KEY;
const giphy = require('giphy-api')({
  apiKey: key,
  https: true
});

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giIdList: ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"],
      gifIdSelected: "wuk4K58OTyYec"
    };
    this.fetchGiphy("doge");
  }

  fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 100
    }, (err, res) => {
      this.setState({ giIdList: res.data.map(gif => gif.id) });
    });
  }

  changeSelectGif = (newSelectedGifId) => {
    this.setState({ gifIdSelected: newSelectedGifId });
  }

  render() {
    const { gifIdSelected, giIdList } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar fetchGiphy={this.fetchGiphy} />
          <div className="selected-gif">
            <Gif gifId={gifIdSelected} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIdList={giIdList} changeSelectGif={this.changeSelectGif} />
        </div>
        <div className="App">
          <h1>React drag-and-drop component</h1>
          <dragAndDrop />
        </div>
        <div className={data.inDropZone ? 'drag-drop-zone inside-drag-area' : 'drag-drop-zone'}>Text</div>
      </div>
    );
  }
}

export default App;