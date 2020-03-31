import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./Components/MovieList"
import AppRouter from "./router/router"



class App extends Component{
 
  render() {
    return (
      <div className="Bigcontainer">          
          <AppRouter />
      </div>
    )
  }
}
export default  App