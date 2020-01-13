import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Icon } from 'antd-mobile'
import ListItem from './ListItem'

const LIST_QUERY = gql`
  {
    list {
      id
      info
      deadline
    }
  }
`

class List extends Component {
  render() {
    return (
      <div className="list">
        <Query query={LIST_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return (
              <div className="list-loading">
                <Icon type="loading" />
              </div>
            )
            if (error) return <div>Error</div>

            const list = data.list

            return list.map(item => <ListItem key={item.id} todo={item} />)
          }}
        </Query>
      </div>
    )
  }
}

export default List
