import React from 'react'
import { shallow } from 'enzyme'
import SharedButton from './index'

import { findByDataTestAtrr, checkProps } from '../../../utils/index'

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
})