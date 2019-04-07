import React, { Component } from 'react';
import './App.css';
// import { Redirect } from 'react-router-dom'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home'

class App extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    console.log('called before app.js loads')
    if (!this.isLoggedIn()) {
      this.setState({
        redirect: true
      });
    }
  }

  renderRedirect = () => {
    
  }

  isLoggedIn() {
    return localStorage.getItem('isLoggedIn');
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact strict/>
          <Route path="/home" component={Home} exact strict/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
