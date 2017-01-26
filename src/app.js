// Components
var HomeContainer = require("./components/Home/HomeContainer");

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

ReactDOM.render((
      <Router history={hashHistory}>
          <Route path="/" component={HomeContainer}>
          </Route>
      </Router>
    ),
    document.getElementById('app')
);
