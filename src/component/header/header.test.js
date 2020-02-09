import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

const setUp = (props={}) => {
  const component = shallow(<Header {...props}/>);
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
     const wrapper = component.find('.headerComponent'); // the .HeaderComponent is a class basically it finds the selector
     expect(wrapper.length).toBe(1);
    })

    it ("Should render a logo", () => {
      const logo = component.find('.logoIMG');
      expect(logo.length).toBe(1);
    })
})