
import React from 'react'
import StarsR from './StarsRating'

function Search({searchWord , rate , setRate }) {
    return (
        <div className="Bar">
            <span className="SearchStars">Minimum rating </span>
            <input className="Searchmovie" onChange={(e)=>searchWord(e)} type="text" placeholder="Please type a movie name to search"></input>
            <StarsR count={rate} setRate={setRate} />
        </div>

    )   
}

export default Search
