import React, { Component } from "react"
import PropTypes from 'prop-types'

class SharedButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <button data-test-id="buttonComponent">

      </button>
    )
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
}

export default SharedButton