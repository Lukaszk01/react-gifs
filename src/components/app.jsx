import React, { Component } from 'react';

import SearchBar from './searchBar';
import GifList from './gifList';
import Gif from './gif';


const key = process.env.REACT_APP_API_KEY
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


const DragAndDrop = props => {
  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DROP_DEPTH':
      return { ...state, dropDepth: action.dropDepth }
    case 'SET_IN_DROP_ZONE':
      return { ...state, inDropZone: action.inDropZone };
    case 'ADD_FILE_TO_LIST':
      return { ...state, fileList: state.fileList.concat(action.files) };
    default:
      return state;
  }
};
const [data, dispatch] = React.useReducer(
  reducer, { dropDepth: 0, inDropZone: false, fileList: [] }
)
  return (
    <div className={'drag-drop-zone'}
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
      onDragEnter={e => handleDragEnter(e)}
      onDragLeave={e => handleDragLeave(e)}
    >
      <p>Drag files here to upload</p>
    </div>
  );
};  

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
          <h1>Drag-and-drop component</h1>
          <DragAndDrop />
        </div>
      </div>
    );
  }
}

export default App;