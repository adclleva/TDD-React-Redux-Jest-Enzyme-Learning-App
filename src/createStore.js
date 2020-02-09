/** this Creates a Redux store that holds the complete 
 *   state tree of your app. There should only be a single store in the app.
 */
import { createStore } from 'redux'
import RootReducer from './reducers' // it automatically gets from the index

export const store = createStore(RootReducer)