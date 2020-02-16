import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import Dashboard from './Dashboard.js'

import { Route } from 'react-router-dom';

function App() {
  return (
    <main className='app'>
      <Route exact path='/' render={() => <Form />} />
      <Route exact path='/dashboard' render={() => <Dashboard />} />
    </main>
  );
}

export default App;
