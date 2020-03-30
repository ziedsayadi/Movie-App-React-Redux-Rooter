import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./Components/MovieList"



class App extends Component{
 
  render() {
    return (
      <div className="Bigcontainer">          
          <MovieList />
      </div>
    )
  }
}
export default  App