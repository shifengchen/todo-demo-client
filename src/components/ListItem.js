import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    const { todo = {} } = this.props
    const { info, deadline } = todo

    return (
      <div className="list-tiem">
        <span>{info}</span>
        <span>{deadline}</span>
      </div>
    )
  }
}

export default ListItem
