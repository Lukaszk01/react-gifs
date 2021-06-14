import React, { Component } from 'react';

import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function

export default class GifList extends Component {
  render() {
    // const giIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
    const { gifIds, changeSelectedGif } = this.props;
    return (
      <div className="gif-list">
        { gifIds.map(gifId => <Gif gifId={gifId} key={gifIds} changeSelectedGif={changeSelectedGif} />) }
      </div>
    );
  }
}