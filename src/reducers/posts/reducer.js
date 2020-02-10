import { types } from '../../actions/types'

// this will basically get the current state, do someting with the action, and then return the new state
// a reducer is basically a switch statement
// action.types are usually used separately
export default (state=[], action) => { // this action will contain a type and a payload
  switch(action.type) {
    case types.GET_POSTS:
      return action.payload

    default: 
      return state
  }
  
} // since it's a default, we can name it anything when we import it