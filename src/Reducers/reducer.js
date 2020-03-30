import {EDIT_MOVIE , ADD_MOVIE , DELET_MOVIE} from "../Actions/actionConst";
import {movies} from "../Components/Data";
const globalState={movies}

 function movieReducer(state=globalState , action){
     switch (action.tpe) {
         case ADD_MOVIE:
            return {...state,
                movies:[...state.movies, action.payload]
    }
        case EDIT_MOVIE:
            return {
                ...state,
                    movies: state.movies.map(el => el.id === action.payload.id ? action.payload: el)
            }
                
            
             
        case DELET_MOVIE:
            return {...state,
                movies:state.movies.filter(el=>el.id==!action.id  )
            }
     
         default:
             return state
     }
 }

export default movieReducer ;