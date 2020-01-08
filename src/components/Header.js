import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'

class Header extends Component {
  state = {

  }

  render() {
    return (
      <div className="header">
        <NavBar
          leftContent="三"
          onLeftClick={this.onOpenChange}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          TODO
        </NavBar>
      </div>
    )
  }
}

export default Header
