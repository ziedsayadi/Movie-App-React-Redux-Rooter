import React, { Component } from 'react'
import {Button, Modal, FormControl} from 'react-bootstrap'
import StarsR from './StarsRating'
import Search from './Search'
import Modals from "./Modals";
import {connect} from "react-redux"
import {delet , edit} from "../Actions/actionFunc"


 class MovieList extends Component {
    state={
    search:'',
    index: 0 ,  
    title : this.props.movies? this.props.movies.title : "",
    img : this.props.movies? this.props.movies.img : "",
    rating : this.props.movies? this.props.movies.rating : 3,
    discriptionM:this.props.movies? this.props.movies.discriptionM : "",

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
  //ajoutfilm

  /*addmovie=(title,img,rating)=>{
    this.setState({
      movies:movies.concat({title,img, rating})
    })
  }*/

  
 






 
  








    render() {
    

      const listsearch =this.props.movies.filter(el =>(el.title.toUpperCase().includes(this.state.search.toUpperCase()))).filter(el=>el.rating>=this.state.index);
    
  
        return (
          <>
    
      <Search searchWord={this.searchWords} rate={this.state.index} setRate={this.setRate} />
      <div className="movi-cont">
      { listsearch.map((ele,i)=> (
            <div key = {i} className="container">
             
                <img className="Movi-img" src={ele.img}/>
                <p className="titles">{ele.title}</p>
                <p><StarsR count={ele.rating} /></p>
                <div className="Button-group">
                  
                <button onClick={this.setToggle} className={this.state.toggle ? "btn btn-light ml-3" : "btn btn-warning ml-3"} type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  {this.state.toggle ? "Hid" : "Show"}
                 </button>
                 <button onClick={()=>{
                  this.props.edit({img:this.state.img,
                    title:this.state.title,
                    rating:this.state.rating,
                    id:this.props.movies.id,
                    discriptionM:this.state.discriptionM
                    })

                    &&

                    this.setState({
                      toggle: false
                    })

                  }}  className="btn btn-warning ml-5">Edit</button>

                 <button onClick={()=>{this.props.delet(ele.id)}} className="btn btn-warning ml-5">Delet</button>              
                { this.state.toggle ? 
                 <div className="card card-body mt-2" >{ele.discriptionM}</div>
                 :null}
                 </div>
                
                </div>
               
            
           
            ))
            
      }
      
     </div>
      <Modals movies={this.listsearch}/>
     
       </>      
        )
        
    }
}
const mapReducerProps=state=>{
  return { movies:state.movies}
}



export default connect(mapReducerProps,{delet , edit})(MovieList)