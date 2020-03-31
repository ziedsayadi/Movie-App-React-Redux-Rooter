import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Discription extends Component {
    render() {
        if (!this.props.movies){
            return <h4>There is no movie !!!</h4>
        }
       const [movies]=this.props.movies.filter(el=>el.id==this.props.match.params.id)


        return (
            <div>
                <h3>Discription page</h3>
                <h5>{movies.discriptionM}</h5>
            </div>
        )
    }
}
const mapReducerProps=state=>{
    return { movies:state.movies}
}
export default connect(mapReducerProps)(Discription)
