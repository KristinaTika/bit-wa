import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { UserList } from './users/UserList';
import { fetchUsers } from '.././service/userService';
import { Search } from './partials/Search';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: true,
      users: [],
      inputValue: ""
    };
  }


  componentDidMount() {
    this.loadData();
  }

  loadData = () => {

    fetchUsers()
      .then((users) => {
        this.setState({
          users
        })
      })
  }

  checkListView = (view) => {
    if (view === true) {
      this.setState({ listView: false })
      localStorage.setItem("listView", this.state.listView);
    } else {
      this.setState({ listView: true })
      localStorage.setItem("listView", this.state.listView);
    }
  }

  searchInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header headline="React Users" layout={this.checkListView} viewMode={this.state.listView} loadData={this.loadData} />
        <Search searchInput={this.searchInput} inputValue={this.state.inputValue} />
        <UserList viewMode={this.state.listView} users={this.state.users} inputValue={this.state.inputValue} />
        <Footer />
      </React.Fragment>

    );
  }
}

