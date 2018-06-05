import React from 'react';
import './App.css';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { fetchUsers } from '../service/userService';


const App = () => {
  return (
    <React.Fragment>
      <Header headline="Users React" />
      <Footer />
    </React.Fragment>

  );
}


export { App };
