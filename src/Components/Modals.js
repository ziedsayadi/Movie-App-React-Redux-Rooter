import React, { Component } from "react";
import {Button, Modal, FormControl} from 'react-bootstrap'
import {connect} from "react-redux"
import {addmovie , edit} from "../Actions/actionFunc"


class Modals extends Component {
    state={
    
    title : this.props.movie? this.props.movie.title : "",

    img : this.props.movie? this.props.movie.img : "",

    rating : this.props.movie? this.props.movie.rating : "",

    

    discriptionM:this.props.movie? this.props.movie.discriptionM : "",

      show:false
    }
//ajout un movieName
    movieName=(e)=>{

      this.setState({

        title: e.target.value
      })

    }
 //Movie discription 
 movieDiscription=(e)=>{
   this.setState({
     discriptionM:e.target.value
   })
 }   
//Movie url
moviImage=(e)=>{
  this.setState({
    img: e.target.value
  })
}

//movie rate

moviRate=(e)=>{
  this.setState({
    rating: Number(e.target.value)
  })
}

hundelInput=(e)=>{
  this.props.movie?
  this.props.edit({img:this.state.img,
    title:this.state.title,
    rating:this.state.rating,
    id:this.props.movie.id,
    discriptionM:this.state.discriptionM
    })

    &&

    this.setState({
      show: false
    })
    :
    this.props.addmovie({title:this.state.title,
      img:this.state.img,
      rating:this.state.rating,
      discriptionM:this.state.discriptionM})
      &&
  
      this.setState({
        show: false

      })
      this.setState({
        title : "",

    img :  "",

    rating : "",

    

    discriptionM: "",
      })

}


  handleShow = () =>{
    
        this.setState({
            show: !this.state.show
    })};
  render() {
    return (
      <>
    <Button variant="secondary" className="Modal-cont" onClick={this.handleShow}>
    <img className="Modal-img" src="https://cdn3.iconfinder.com/data/icons/glyph/227/Button-Add-1-512.png"/>
     
    </Button>
    <Modal className="Modal-content" show={this.state.show} onHide={this.handleShow} animation={false} >
      <Modal.Header style={{background: "#D8DEDE"}} closeButton>
        <Modal.Title style={{marginLeft: "25%"}}>Insert New Movie</Modal.Title>
      </Modal.Header>

      <Modal.Body className="Modal-input" >
        
        <form >
          <label className="MN fname">Please enter a movie name:</label>
          <input className="title-input input"  placeholder=" " name='title' type='text' onChange={this.movieName} value={this.state.title}/>
          <label className="MI fname">Please enter an image for your movie</label>
          <input className="img-input input" placeholder=" " name='image' type='text' onChange={this.moviImage} value={this.state.img}/>
          <label className="MR fname">Please give a rate to your movie:</label>
          <input className="rating-input input" placeholder=" " name='rating' type='text'  onChange={this.moviRate} value={this.state.rating}/>
          <label className="MD fname">Please give a discription </label>
          <input className="rating-input input" placeholder=" " name='rating' type='text'  onChange={this.movieDiscription} value={this.state.discriptionM}/>

          
          </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleShow}>
          Close
        </Button>
        <Button variant="primary" onClick={
          ()=>{this.hundelInput()}
           
           }>

          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
    );
  }
}




export default connect(null,{addmovie , edit})(Modals)