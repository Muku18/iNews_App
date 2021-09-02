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
  apiKey = process.env.REACT_APP_NEWS_API
  // apiKey = "25db0bbec75045d29cc54fc69c55603c"
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          

          <Switch>
          <Route exact path="/">
          <News apiKey = {this.apiKey}  key = "gn"   pageSize={6} country="in" category="general"></News>
          </Route>
            <Route exact path="/business">
              <News apiKey = {this.apiKey}  key = "business" pageSize={6} country="in" category="business"></News>
            </Route>
            <Route exact path="/entertainment">
              <News apiKey = {this.apiKey}  key = "entertainment" pageSize={6} country="in" category="entertainment"></News>
            </Route>
            <Route exact path="/general">
              <News apiKey = {this.apiKey}  key = "general" pageSize={6} country="in" category="general"></News>
            </Route>
            <Route exact path="/health">
              <News apiKey = {this.apiKey}  key = "health" pageSize={6} country="in" category="health"></News>
            </Route>
            <Route exact path="/science">
              <News apiKey = {this.apiKey}  key = "science" pageSize={6} country="in" category="science"></News>
            </Route>
            <Route exact path="/sports">
              <News apiKey = {this.apiKey}  key = "sports" pageSize={6} country="in" category="sports"></News>
            </Route>

            <Route exact path="/technology">
              <News apiKey = {this.apiKey}  key = "technology" pageSize={6} country="in" category="technology"></News>
            </Route>
      
          </Switch>
        </Router>
      </div>
    )
  }
}

