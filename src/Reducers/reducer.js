import {EDIT_MOVIE , ADD_MOVIE , DELET_MOVIE, DESCRIPTION_BTN} from "../Actions/actionConst";
import {movies} from "../Components/Data";

const globalState={movies}

 function movieReducer(state=globalState , {type,payload,id}){
     switch (type) {
         case ADD_MOVIE:
            return {...state,
                movies:[...state.movies, payload]
    }
        case EDIT_MOVIE:
            return {
                ...state,
                    movies: state.movies.map(el => el.id === payload.id ? payload: el)
            }
                
                         
        case DELET_MOVIE:
            return {...state,
                movies:state.movies.filter(el=>el.id!==id)
            }
        case DESCRIPTION_BTN :
            return{
                ...state,
                movies: state.movies.map(el => el.id === payload ? {...el,toggle:!el.toggle}: el)
            }
     
         default:
             return state
     }
 }

export default movieReducer ;