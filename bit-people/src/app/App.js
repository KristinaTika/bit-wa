import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
// import { Main } from './partials/Main';
import { UserList } from './users/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: true
    };
  }

  checkListView = (view) => {
    if (view === false) {
      this.setState({ listView: true })
    } else {
      this.setState({ listView: false })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header headline="React Users" layout={this.checkListView} viewMode={this.state.listView} />
        {/* <Main viewMode={this.state.listView}/> */}
        <UserList viewMode={this.state.listView} />
        <Footer />
      </React.Fragment>

    );
  }
}
export { App };
