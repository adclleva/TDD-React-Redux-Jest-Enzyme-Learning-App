import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

describe('Header Component', () => {

    it('It should render without errors', () => {
      
      const component = shallow(<Header/>) 
      // this actually renders the component and debug basically 
      // Returns a string representation of the current shallow render tree for debugging purposes.
      // console.log(component.debug())
     const wrapper = component.find('.headerComponent')
     expect(wrapper.length).toBe(1)
    })

})