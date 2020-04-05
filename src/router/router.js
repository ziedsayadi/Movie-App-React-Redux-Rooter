import React from 'react'
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import MovieList from "../Components/MovieList"
import Discription  from '../Components/Discription'
import Modals from '../Components/Modals'

const AppRouter=()=> {
    return (
        <Router>
            
            <Switch>
                
                <Route exact path="/"  >
                    <MovieList/>
                    <Modals/>
                </Route>
                <Route path="/Discription/:id" exact component={Discription}/>


            </Switch>


        </Router>
    )
}

export default AppRouter
