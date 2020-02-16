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
      selected_cat: '',
    }
  }

  submitInfo = (info) => {
    this.setState({
      address: info.address,
      selected_cat: info.selected_cat
    })
  }

  // componentDidMount() {
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       ‘dapp_address’: <eth contract address>,
  //       ‘dapp_category’: <string from dropdown>,
  //       ‘doi’: [<contract 1>, <contract 2>, …],
  //       ‘timeframe’: <int of days: 7, 31, 90, 365>

  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   fetch('url', options)
  //     .then(response => {
  //       if(!response.ok) {
  //           throw Error('Errow while fetching')
  //       }
  //       return response.json()}
  //   )
  //     .then(data => this.setState({data}))
  //     .catch(err => console.log(error))
  // }
  
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
