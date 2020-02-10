// before we can start the TDD approach, we need to start with a bare bones function
import { types } from '../../actions/types'
import postsReducer from './reducer'


describe('Posts Reducer', () => {
  /* testing reducers are pretty straight forward as we test for a few things
    and one of this is testing for returning a default state 
*/
  it('Should return the default state', () => {
    // here we pass in undefined for the default and also an empty object so the 'actions' doesnt match any of the actions within the switch statement
    const newState = postsReducer(undefined, {})// here we have to import the reducer itself
    expect(newState).toEqual([]) // this initially fails because our reducer returns null and not the state
  })

  /**
   * Another thing that we will test is that it returns a new piece of state with the correct action type
   */

   it('Should return the new state given the correct action type', () => {
     const posts = [ // this is what we are passing in for the payload
      { title: 'Test 1' },
      { title: 'Test 2' },
      { title: 'Test 3' }
     ];

     const newState = postsReducer(undefined, { // we pass in a undefined because it doesn't matter what we pass in for this case
      type: types.GET_POSTS, // this is the action
      payload: posts // this is the payload or the data that we'll input
     }) 

     expect(newState).toEqual(posts)
   })

})