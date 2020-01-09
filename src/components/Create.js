import React, { Component } from 'react'
import moment from 'moment'
import { InputItem, Calendar, Button } from 'antd-mobile'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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

class Create extends Component {
  state = {
    info: '',
    cVisible: false, // 日历控件显示
    deadline: '',
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

  render() {
    const { cVisible, info, deadline } = this.state

    return (
      <div className="create">
        <InputItem
          placeholder="准备做什么？"
          onChange={this.handleInput}
        />
        <div className="other">
          <div className="tag">
            <span onClick={() => this.handleCVisible(true)}>
              <i className="fa fa-calendar" />
            </span>
            <span>!!!</span>
          </div>
          <Mutation
            mutation={CREATE_MUTATION}
            variables={{ info, deadline }}
            onCompleted={() => { console.log('success') }}
          >
            {createMutation => (
              <Button
                inline
                size="small"
                type="primary"
                onClick={createMutation}
              >
                确定
              </Button>
            )}
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
