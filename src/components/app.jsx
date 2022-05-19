import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render() {
    const gifs = [
      { id: "8VrtCswiLDNnO" },
      { id: "IwAZ6dvvvaTtdI8SD5" },
      { id: "jp7jSyjNNz2ansuOS8" },
      { id: "4Pdm6XXe4HTHEjCywt" },
      { id: "wqbAfFwjU8laXMWZ09" },
      { id: "WsNbxuFkLi3IuGI9NU" },
      { id: "4YPXOIVxBOlHPJTbCY" },
      { id: "8WGweOeCe1hG5wGoZN" }
    ];

    return(
      <div>
        <div className="left-scene">
          <SearchBar/>
          <div className="selected-gif">
            <Gif id="r69UfGX7faO8bkfhrY"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={ gifs }/>
        </div>
      </div>
    );
  }
}

export default App;
