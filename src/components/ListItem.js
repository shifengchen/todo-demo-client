import React, { Component } from 'react'
import moment from 'moment'

const dateFormat = 'YYYY-MM-DD'

class ListItem extends Component {
  render() {
    const { todo = {} } = this.props
    const { info, deadline } = todo

    return (
      <div className="list-tiem">
        <span>
          <span>{info}</span>
        </span>
        <span className="gray-text">
          {deadline ? moment(deadline).format(dateFormat) : ''}
        </span>
      </div>
    )
  }
}

export default ListItem
