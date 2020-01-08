import React, { Component } from 'react'
import { Tabs, DatePicker, List, InputItem } from 'antd-mobile'
import '../styles/login.css'

const tabs = [
  { title: '登录', sub: '1' },
  { title: '注册', sub: '2' },
]

class Login extends Component {
  state = {
    name: '',
    password: ''
  }

  handleInput = (key, val) => {
    this.setState({
      [key]: val
    })
  }

  render() {
    const { name, password } = this.state

    return (
      <div className="login">
        <h1>TODO</h1>
        <div style={{ width: '90%' }}>
          <Tabs
            tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => { console.log('onChange', index, tab) }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              <List>
                <InputItem
                  placeholder="请输入姓名"
                  clear={true}
                  value={name}
                  onChange={val => this.handleInput('name', val)}
                >
                  姓名
                </InputItem>
                <InputItem
                  type="password"
                  placeholder="请输入密码"
                  clear={true}
                  value={password}
                  onChange={val => this.handleInput('password', val)}
                >
                  密码
                </InputItem>
              </List>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              <List>
                <InputItem
                  placeholder="请输入姓名"
                  clear={true}
                  value={name}
                  onChange={val => this.handleInput('name', val)}
                >
                  姓名
                </InputItem>
                <InputItem
                  type="password"
                  placeholder="请输入密码"
                  clear={true}
                  value={password}
                  onChange={val => this.handleInput('password', val)}
                >
                  密码
                </InputItem>
              </List>
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Login
