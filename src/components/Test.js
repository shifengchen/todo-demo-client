import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Icon } from 'antd-mobile'

const USER_QUERY = gql`
  {
    user {
      name
    }
  }
`

class Test extends React.Component {
  render() {
    return (
      <div>
        <Query query={USER_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Icon type="loading" />

            if (error) return <div>Error</div>

            const { user = {} } = data
            return <div>{user.name}</div>
          }}
        </Query>
      </div>
    )
  }
}

export default Test
