import React, { Component } from 'react'
import moment from 'moment'
import { InputItem, Calendar, Button } from 'antd-mobile'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { BE_SELECTED } from '../constants'
import { setLocal } from '../utils'

const dateFormat = 'YYYY-MM-DD'

const CREATE_MUTATION = gql`
  mutation CreateMutation($info: String!, $deadline: String!) {
    create(info: $info, deadline: $deadline) {
      id
      createAt
      info
      deadline
    }
  }
`

const UPDATE_MUTATION = gql`
  mutation UpdateMutation($id: String!, $info: String!, $deadline: String!) {
    updateTodo(id: $id, info: $info, deadline: $deadline) {
      id
    }
  }
`

const DELETE_MUTATION = gql`
  mutation DeleteMutation($id: String!) {
    deleteTodo(id: $id) {
      id
      info
      deadline
    }
  }
`

class Create extends Component {
  constructor(props) {
    super(props)
    const { info, deadline } = props.data || {}
    this.state = {
      info: info || '',
      deadline: deadline || '',
      cVisible: false, // 日历控件显示
    }
  }

  handleInput = val => {
    this.setState({ info: val })
  }

  handleCVisible = cVisible => {
    this.setState({ cVisible })
  }

  handleCalendarConfirm = val => {
    this.setState({
      deadline: moment(val).format(dateFormat)
    })
    this.handleCVisible(false)
  }

  handleClick = (mutation, operation) => {
    const { click, data = {} } = this.props
    const { id } = data
    setLocal(BE_SELECTED, {
      operation,
      id
    })
    mutation()
    if (click) {
      click()
    }
    if (operation === 'create') {
      this.setState({
        info: ''
      })
    }
  }

  render() {
    const { data = {} } = this.props
    const { id } = data
    const { cVisible, info, deadline } = this.state

    return (
      <div className="create">
        <InputItem
          placeholder="准备做什么？"
          value={info}
          onChange={this.handleInput}
        />
        <div className="other">
          <div className="tag">
            <span onClick={() => this.handleCVisible(true)}>
              <i className="fa fa-calendar" />
            </span>
            <span>!!!</span>
            {id && (
              <Mutation
                mutation={DELETE_MUTATION}
                variables={{ id }}
              >
                {deleteMutation => (
                  <span onClick={() => this.handleClick(deleteMutation, 'delete')}>
                    <i className="fa fa-trash-o" />
                  </span>
                )}
              </Mutation>
            )}
          </div>
          <Mutation
            mutation={id ? UPDATE_MUTATION : CREATE_MUTATION}
            variables={{ id, info, deadline }}
            onCompleted={() => { console.log('success') }}
          >
            {mutation => {
              const operation = id ? 'update' : 'create'
              return (
                <Button
                  inline
                  size="small"
                  type="primary"
                  onClick={() => this.handleClick(mutation, operation)}
                >
                  确定
                </Button>
              )
            }}
          </Mutation>
        </div>
        <Calendar
          type="one"
          minDate={new Date()}
          visible={cVisible}
          onCancel={() => this.handleCVisible(false)}
          onConfirm={this.handleCalendarConfirm}
        />
      </div>
    )
  }
}

export default Create
