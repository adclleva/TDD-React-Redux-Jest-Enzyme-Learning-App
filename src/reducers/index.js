// this file is our root reducers
/** As the app grows more complex, you'll want to split your reducing function 
 * into separate functions, each managing independent parts of the state.
 *  The combineReducers helper function turns an object whose values are different 
 *  reducing functions into a single reducing function you can pass to createStore.
 */

import { combineReducers } from 'redux'
import success from './successReducer'

export default combineReducers({
  success 
})