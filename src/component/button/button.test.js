import React from 'react'
import { shallow } from 'enzyme'
import SharedButton from './index'

import { findByDataTestAttr, checkProps } from '../../../utils/index'

const setUp = (props={}) => {
  
  const component = shallow(<SharedButton {...props}/>)
  return component
}

describe('SharedButton Componet', () => {
  
  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: "Test Text",
        emitEvent: () => {}
      };

      const propsErrorMessage = checkProps(SharedButton, expectedProps)

      expect(propsErrorMessage).toBeUndefined();
    })
  })

  describe('Renders', () => {
    
    let component;
    beforeEach(() => {
      const props = {
        buttonText: "Test Text",
        emitEvent: () => {}
      }
  
      component = setUp(props)

    })

    it('Should render a button', () => {
      const button = findByDataTestAttr(component, 'buttonComponent')
      expect(button.length).toBe(1)
    })
    
    it('Should render text for the button', () => {
      const text = findByDataTestAttr(component, 'buttonText')
      expect(text.length).toBe(1)
    })

  })
})