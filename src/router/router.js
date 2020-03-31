import React from 'react'
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import MovieList from "../Components/MovieList"
import Discription  from '../Components/Discription'

const AppRouter=()=> {
    return (
        <Router>
            
            <Switch>
                
                <Route path="/" exact component={MovieList}/>
                <Route path="/Discription/:id" exact component={Discription}/>


            </Switch>


        </Router>
    )
}

export default AppRouter
