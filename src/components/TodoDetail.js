import React from 'react'
import { Modal } from 'antd-mobile'
import Create from './Create'

class TodoDetail extends React.Component {
  render() {
    const { visible, handleClick, data } = this.props

    return (
      <Modal
        className="todo-detail"
        closable
        visible={visible}
        onClose={() => handleClick(false)}
      >
        <Create data={data} click={() => handleClick(false)} />
      </Modal>
    )
  }
}

export default TodoDetail
