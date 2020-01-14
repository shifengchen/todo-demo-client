import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Icon } from 'antd-mobile'
import { removeLocal } from '../utils'
import { AUTH_TOKEN } from '../constants'

const USER_QUERY = gql`
  {
    user {
      name
    }
  }
`

class User extends React.Component {
  logout = () => {
    removeLocal(AUTH_TOKEN)
    window.location.href = `${window.location.origin}/login`
  }

  renderUserInfo = userData => {
    const { name } = userData
    return (
      <div className="user-info">
        <div>
          <div className="item">
            <div className="avatar" />
          </div>
          <div className="item">{name}</div>
        </div>
        <div
          className="item"
          onClick={this.logout}
        >
          退出登录
        </div>
      </div>
    )
  }

  render() {
    return (
      <div style={{ height: '100%', background: '#fff' }}>
        <Query query={USER_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Icon type="loading" />

            if (error) return <div>Error</div>

            const { user = {} } = data
            return this.renderUserInfo(user)
          }}
        </Query>
      </div>
    )
  }
}

export default User
