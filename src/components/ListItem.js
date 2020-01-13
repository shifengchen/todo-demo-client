import React, { Component } from 'react'
import moment from 'moment'
import TodoDetail from './TodoDetail'

const dateFormat = 'YYYY-MM-DD'

class ListItem extends Component {
  state = {
    visible: false,
  }

  handleClick = val => {
    this.setState({
      visible: val
    })
  }

  render() {
    const { visible } = this.state
    const { todo = {} } = this.props
    const { info, deadline } = todo

    return (
      <div className="list-item">
        <div
          className="item-info"
          onClick={() => this.handleClick(true)}
        >
          <span>{info}</span>
          <span className="gray-text">
            {deadline ? moment(deadline).format(dateFormat) : ''}
          </span>
        </div>
        <TodoDetail
          visible={visible}
          data={todo}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default ListItem
