import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'

import { findByDataTestAtrr, checkProps } from '../../../utils/index'

const setUp = (props={}) => {
  const component = shallow(<Headline {...props}/>);
  return component;
}

// this describe is for the headline component
 describe('Headline Component', () => {

  describe('Checking PropTypes', () => {
     
    it('Should not throw a warning', () => {
      const expectedProps = { // these are the expected proptypes
        header: "Test Header",
        description: 'Test Description',
        tempArr: [
          {
            fName: 'Test fName',
            lName: 'Test lName',
            email: 'test@email.com',
            age: 25,
            onlineStatus: false
          }
        ]
      }

      const propsErrorMessage = checkProps(Headline, expectedProps) // this is a function that we got from the utils folder

      expect(propsErrorMessage).toBeUndefined(); // this will expect the test to be undefined since there shouldn't be an error
    })

  })  

  // the reason why we have different describe functions is because the beforeEach function will be different
  describe('Have props', () => {
    let wrapper;

    beforeEach(() => { // this is before each it test within this desribe block
      const props = { // setting up the initial props
        header: "Test Header",
        description: "Test Description"
      }

      wrapper = setUp(props)
    });

    it('Should render without errors', () => {
      const component = findByDataTestAtrr(wrapper, 'headLineComponent')
      expect(component.length).toBe(1)
    })
    
    it('Should render the header', () => {
      const header = findByDataTestAtrr(wrapper, 'header') // this will reference to the data-test attribute that implemented
      expect(header.length).toBe(1)
    })

    it('Should render the description', () => {
      const description = findByDataTestAtrr(wrapper, 'description') // this will reference to the data-test attribute that implemented
      expect(description.length).toBe(1)
    })

  })

  describe('Have no props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp() // this is without the props
    });


    it('Should not render without errors', () => {
      const component = findByDataTestAtrr(wrapper, 'headLineComponent')
      expect(component.length).toBe(0)
    })
    
    it('Should not render the header', () => {
      const header = findByDataTestAtrr(wrapper, 'header') // this will reference to the data-test attribute that implemented
      expect(header.length).toBe(0)
    })

    it('Should not render the description', () => {
      const description = findByDataTestAtrr(wrapper, 'description') // this will reference to the data-test attribute that implemented
      expect(description.length).toBe(0)
    })
  })
 })