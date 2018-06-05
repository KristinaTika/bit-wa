import React from 'react';
import './App.css';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { UserList } from './users/UserList';

const App = (props) => {

  return (
    <React.Fragment>
      <Header headline="Users React" />
      <UserList />
      <Footer />
    </React.Fragment>

  );
}

export { App };
