import './App.css';
import Cast from './Cast';
import { v4 as uuidv4 } from 'uuid';
import Data from  './Data.json';
import React, { Component } from 'react';
let movieData = Data.slice(0,5);


// uuidv4(); 
class App extends React.Component {
  state = {
    Data2 : movieData
  }
  rand = ()=> {

    let r = Math .round((Math.random())*Data.length)
    movieData.push(Data[r])
    this.setState({Data2: movieData})
  }
  render() { 
    return (
      <div className="App">
        <div className="sortItems">
          <button onClick={this.rand}>Add Random contact</button>
        </div>
        <div className="castC" id='castC'>
        {
          this.state.Data2.map((i) => <Cast 
            key={uuidv4()}
            pic={i.pictureUrl}
            name = {i.name}
            popularity = {i.popularity}
          />)
        }
        </div>

      </div>
    )
  }
}
 
export default App ;
