//https://newsapi.org/v2/top-headlines?country=in&apiKey=25db0bbec75045d29cc54fc69c55603c
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          

          <Switch>
          <Route exact path="/">
          <News key = "gn" pageSize={6} country="in" category="general"></News>
          </Route>
            <Route exact path="/business">
              <News key = "business" pageSize={6} country="in" category="business"></News>
            </Route>
            <Route exact path="/entertainment">
              <News key = "entertainment" pageSize={6} country="in" category="entertainment"></News>
            </Route>
            <Route exact path="/general">
              <News key = "general" pageSize={6} country="in" category="general"></News>
            </Route>
            <Route exact path="/health">
              <News key = "health" pageSize={6} country="in" category="health"></News>
            </Route>
            <Route exact path="/science">
              <News key = "science" pageSize={6} country="in" category="science"></News>
            </Route>
            <Route exact path="/sports">
              <News key = "sports" pageSize={6} country="in" category="sports"></News>
            </Route>

            <Route exact path="/technology">
              <News key = "technology" pageSize={6} country="in" category="technology"></News>
            </Route>
      
          </Switch>
        </Router>
      </div>
    )
  }
}

