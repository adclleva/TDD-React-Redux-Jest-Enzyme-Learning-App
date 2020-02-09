export const findByDataTestAtrr = (component, attr) => { // it finds the specific property selector, we find by the test attributes
  const wrapper = component.find(`[data-test='${attr}']`)  
  return wrapper
}