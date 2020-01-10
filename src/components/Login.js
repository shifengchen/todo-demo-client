import React, { Component } from 'react'
import { Tabs, List, InputItem, Button } from 'antd-mobile'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { setLocal } from '../utils'
import { AUTH_TOKEN } from '../constants'
import '../styles/login.css'

const tabs = [
  { title: '登录', sub: '1' },
  { title: '注册', sub: '2' },
]

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($name: String!, $password: String!) {
    signup(name: $name, password: $password) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      token
    }
  }
`

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

  saveToken = token => {
    setLocal(AUTH_TOKEN, token)
  }

  confirm = data => {
    const { token = '' } = data
    this.saveToken(token)
    this.props.history.push('/')
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
                <Mutation
                  mutation={LOGIN_MUTATION}
                  variables={{ name, password }}
                  onCompleted={ data => this.confirm(data.login) }
                >
                  {loginMutation => (
                    <Button type="primary" onClick={loginMutation}>登录</Button>
                  )}
                </Mutation>
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
                <Mutation
                  mutation={SIGNUP_MUTATION}
                  variables={{ name, password }}
                  onCompleted={ data => this.confirm(data.signup) }
                >
                  {signupMutation => (
                    <Button type="primary" onClick={signupMutation}>注册</Button>
                  )}
                </Mutation>
              </List>
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Login
