import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { UserList } from './users/UserList';
import { fetchUsers } from '.././service/userService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: true,
      users: []
    };
  }



  componentDidMount() {
    this.loadData();
  }

  loadData = () => {

    fetchUsers()
      .then(users => {
        this.setState({
          users
        })
      })
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
        <Header headline="React Users" layout={this.checkListView} viewMode={this.state.listView} loadData={this.loadData} />
        <UserList viewMode={this.state.listView} users={this.state.users} />
        <Footer />
      </React.Fragment>

    );
  }
}
export { App };
