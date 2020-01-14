import React, { Component } from 'react'
import { NavBar, Icon, Drawer } from 'antd-mobile'
import User from './User'

class Header extends Component {
  state = {
    open: false,
  }

  onOpenChange = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { open } = this.state

    return (
      <div className="header">
        <NavBar
          leftContent={<i className="fa fa-navicon" />}
          onLeftClick={this.onOpenChange}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          TODO
        </NavBar>
        <Drawer
          className="user-drawer"
          style={{
            display: open ? 'block' : 'none',
            minHeight: document.documentElement.clientHeight - 42,
            marginTop: 42
          }}
          enableDragHandle
          contentStyle={{ display: 'none' }}
          sidebar={<User />}
          open={open}
          onOpenChange={this.onOpenChange}
        >
          foo
        </Drawer>
      </div>
    )
  }
}

export default Header
