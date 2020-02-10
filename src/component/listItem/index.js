import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListItem extends Component {
  
  render() {
    const { title, description} = this.props

    if (!title) { // if a title is not provided, it will return null(component) as a component
      return null
    }

    return (
      <div data-test-id="listItemComponent">
        <h2 data-test-id="componentTitle">
          {title}
        </h2>
        <p data-test-id="componentDescription">
          {description}
        </p>
      </div>
    )
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default ListItem