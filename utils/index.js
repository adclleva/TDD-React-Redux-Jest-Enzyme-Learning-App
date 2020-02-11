import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../src/reducers'
import { middlewares } from '../src/createStore'


export const findByDataTestAttr = (component, attr) => { // it finds the specific property selector, we find by the test attributes
  const wrapper = component.find(`[data-test-id='${attr}']`)  
  return wrapper
}

export const checkProps = (component, expectedProps) => {
  const propsErrorMessage = checkPropTypes( // this will recieve any error messages
                              component.propTypes, // pass down the component propTypes
                              expectedProps, // the expected props that are being passed down
                              'props', // what we are checking/testing
                              component.name // the name of the component
                            ) 
  return propsErrorMessage
}

// essentially we are utilizing this testStore for our initegration tests
export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}