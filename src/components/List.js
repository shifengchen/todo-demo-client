import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Icon } from 'antd-mobile'
import _ from 'lodash';
import ListItem from './ListItem'
import { BE_SELECTED } from '../constants'
import { getLocal } from '../utils'

const LIST_QUERY = gql`
  {
    list {
      id
      info
      deadline
    }
  }
`

const NEW_LIST_SUBSCRIPTION = gql`
  subscription {
    newTodo {
      id
      info
      deadline
      createBy {
        id
        name
      }
    }
  }
`

class List extends Component {
  _subscribeToNewList = subscribeToMore => {
    subscribeToMore({
      document:  NEW_LIST_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        const beSelected = getLocal(BE_SELECTED) || {}
        const { operation } = beSelected

        switch (operation) {
          case 'create':
            if (!subscriptionData.data || !subscriptionData.data.newTodo) return prev
            const newTodo = subscriptionData.data.newTodo
            const exists = prev.list.find(({ id }) => id === newTodo.id)
            if (exists) return prev

            return {
              ...prev,
              list: [newTodo, ...prev.list]
            }
          case 'update':
            return prev
          case 'delete':
            console.log('prev', prev);
            console.log('subscriptionData', subscriptionData);
            return prev
          default:
            return prev
        }
      }
    })
  }

  render() {
    return (
      <div className="list">
        <Query query={LIST_QUERY}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return (
              <div className="list-loading">
                <Icon type="loading" />
              </div>
            )
            if (error) return <div>Error</div>

            this._subscribeToNewList(subscribeToMore)

            const list = data.list
            console.log('listtttttttt', list);

            return list.map(item => <ListItem key={item.id} todo={item} />)
          }}
        </Query>
      </div>
    )
  }
}

export default List
