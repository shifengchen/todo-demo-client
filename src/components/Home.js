import React from 'react';
import Header from './Header'
import List from './List'
import Create from './Create'

function Home() {
  return (
    <div className="home">
      <Header />
      <List />
      <Create />
    </div>
  );
}

export default Home;
