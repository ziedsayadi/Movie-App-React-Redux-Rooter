import React, { Component } from 'react'
import StarsR from './StarsRating'
import Search from './Search'
import Modals from "./Modals";
import {connect} from "react-redux"
import {delet , edit} from "../Actions/actionFunc"
import {Link} from "react-router-dom"


 class MovieList extends Component {
    state={
    search:'',
    index: 0 ,  
    toggle:false
  }

  setToggle=()=>{
    this.setState(
      {toggle:! this.state.toggle}
      )
  }

 setRate = (ratestar)=>this.setState({index : ratestar })

  searchWords=(word)=>{

  this.setState({
    
    search:word.target.value,
    
  })  }
  

  
 






 
  








    render() {
      
      const listsearch =this.props.movies.filter(el =>(el.title.toUpperCase().includes(this.state.search.toUpperCase()))).filter(el=>el.rating>=this.state.index);
    
  
        return (
          <>
    
      <Search searchWord={this.searchWords} rate={this.state.index} setRate={this.setRate} />
      <div className="movi-cont">
      { listsearch.map((ele,id)=> (
            <div key = {id} className="container">
             
                <img className="Movi-img" src={ele.img}/>
                <p className="titles">{ele.title}</p>
                <StarsR count={ele.rating} />
                <Link to={`/Discription/${ele.id}`} className="link">Discription Link</Link>
                <div className="Button-group mt-2">  
                <button onClick={this.setToggle} className={this.state.toggle ? "btn btn-light ml-2" : "btn btn-warning ml-2"} type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  {this.state.toggle ? "Hid" : "Show"}
                 </button>                 
                 <button onClick={()=>{this.props.delet(ele.id)}} className="btn btn-warning ml-5">Delet</button>              
                { this.state.toggle ? 
                 <div className="card card-body mt-2" >{ele.discriptionM}</div>
                 :null}
                 </div>
                 <Modals  movie={ele}/>
      
     
      
 
      </div>      
            
           
               ))
               
         }
      <Modals classNmae ="add"/>
      </div>
       </>      
        )
        
    }
}
const mapReducerProps=state=>{
  return { movies:state.movies}
}



export default connect(mapReducerProps,{delet , edit})(MovieList)