import React, { Component } from "react"
import PropTypes from 'prop-types'

class SharedButton extends Component {

  submitEvent = () => {
    if (this.props.emitEvent) { // when this event is called, it will run
      this.props.emitEvent()
    }
  }

  render() {
    const { buttonText } = this.props

    return (
      <button 
        onClick={() => this.submitEvent()}
        data-test-id="buttonComponent"
      >
        <p data-test-id="buttonText">
          {buttonText}
        </p>
      </button>
    )
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
}

export default SharedButton