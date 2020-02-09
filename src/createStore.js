/** this Creates a Redux store that holds the complete 
 *   state tree of your app. There should only be a single store in the app.
 */
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers' // it automatically gets from the index

/** With a plain basic Redux store, you can only do simple synchronous updates 
 * by dispatching an action. Middleware extend the store's abilities, 
 * and let you write async logic that interacts with the store.
 * Thunks are the recommended middleware for basic Redux side effects logic,
 * including complex synchronous logic that needs access to the store, 
 * and simple async logic like AJAX requests.
 */
import ReduxThunk from 'redux-thunk' // we just have to pass this middlewar to our store

// we create a separate array that contains our middlewar so we are able to test it, so we can 
// reference to a single middleware 
export const middlewares = [ReduxThunk];

// this currying function, this allows you to deal with undecied arguments without repeating your code
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore) 

export const store = createStoreWithMiddleware(RootReducer) 