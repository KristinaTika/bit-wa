import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import {Home} from "./common/Home";


export class App extends Component {

  render() {
    return (
      <Switch>
        <Route path={"/"} component={Home} />
      </Switch>
    );
  }
}

