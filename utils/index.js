import checkPropTypes from 'check-prop-types'

export const findByDataTestAtrr = (component, attr) => { // it finds the specific property selector, we find by the test attributes
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