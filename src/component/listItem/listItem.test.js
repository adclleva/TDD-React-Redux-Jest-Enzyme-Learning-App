import React from 'react'
import ListItem from './index'

import { shallow } from 'enzyme'
import { findByDataTestAttr, checkProps }  from '../../../utils/index'

const setUp = (props={}) => {
  const component = shallow(<ListItem {...props}/>)
  return component
}

describe('ListItem Component', () => {

  describe('Checking PropTypes', () => {

    it('Should NOT throw a warning', () => {
      const expectedProps = {
        title: 'Test Title',
        description: 'Test Description'
      }
      
      const propsErrorMessage = checkProps(ListItem, expectedProps)
      expect(propsErrorMessage).toBeUndefined();
    })    
  })

  describe('Render', () => {

    let component;
    beforeEach(() => {
      const props = {
        title: "Test Title",
        description: "Test Description"
      }

      component = setUp(props)
    })

    it('Should render a ListItem', () => {
      const listItem = findByDataTestAttr(component, 'listItemComponent')
      expect(listItem.length).toBe(1)
    })

    it('Should render a title', () => {
      const title = findByDataTestAttr(component, "componentTitle")
      expect(title.length).toBe(1)
    })

    it('Should render a description', () => {
      const description = findByDataTestAttr(component, "componentDescription")
      expect(description.length).toBe(1)
    })
  })

  describe('Should NOT render', () => {
    
    let component
    beforeEach(() => {
      component = setUp() // this is if there is no props being passed down
    })

    it('Should NOT render a ListItem Component', () => {
      const listItem = findByDataTestAttr(component, 'listItemComponent')
      expect(listItem.length).toBe(0)
    })

    it('Should NOT render a title', () => {
      const title = findByDataTestAttr(component, "componentTitle")
      expect(title.length).toBe(0)
    })

    it('Should NOT render a description', () => {
      const description = findByDataTestAttr(component, "componentDescription")
      expect(description.length).toBe(0)
    })
  })
})
