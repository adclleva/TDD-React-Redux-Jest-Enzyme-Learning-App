import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { findByDataTestAttr } from '../../../utils/'

const setUp = (props={}) => { 
  const component = shallow(<Header {...props}/>); // if the props are empty we put it in as an empty object
  return component;
}

describe('Header Component', () => {

    let component;
    beforeEach(() => { // this runs before each test
      component = setUp();
    }) 

    it('Should render without errors', () => {
      // this actually renders the component and debug basically 
      // Returns a string representation of the current shallow render tree for debugging purposes.
      // console.log(component.debug())
      // using classNames for tests is not a good practice
     const wrapper = findByDataTestAttr(component, 'headerComponent')
     expect(wrapper.length).toBe(1);
    })

    it ("Should render a logo", () => {
     const logo = findByDataTestAttr(component, 'logoIMG')
      expect(logo.length).toBe(1);
    })
})