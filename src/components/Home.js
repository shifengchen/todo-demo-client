import React from 'react';
import Header from './Header'
import List from './List'
import Create from './Create'
import { getLocal } from '../utils'
import { AUTH_TOKEN } from '../constants'

class Home extends React.Component {
  token = getLocal(AUTH_TOKEN)

  componentDidMount() {
    if (!this.token) {
      this.props.history.replace('/login')
    }
  }

  render() {
    return (
      <div className="home">
        <Header />
        <List />
        <Create />
      </div>
    )
  }
}

export default Home;
