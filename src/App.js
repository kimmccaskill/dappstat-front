import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import Dashboard from './Dashboard.js'

import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
      selected_cat: ''
    }
  }

  submitInfo = (info) => {
    this.setState({
      address: info.address,
      selected_cat: info.selected_cat
    })
  }
  
  render() {
    return (
      <main className='app'>
        <header className='header'>
          <h1>DappStat</h1>
        </header>
        <Route exact path='/' render={() => <Form submitInfo={this.submitInfo} />} />
        <Route exact path='/dashboard' render={() => <Dashboard />} />
      </main>
    );
  }

}

export default App;
