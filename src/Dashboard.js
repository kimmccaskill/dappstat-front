import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = ({ results }) => {
  return(
    <section className='dashboard'>
      <h2 className='analytics-title'>
        Analytics
      </h2>
      <h3>Total Number of users: {results.users.count}</h3>
      <h3>Total Unique users: 16</h3>
      <h3>Total Shared users: 14</h3>
      <ul className='card'>
        <h4>Organizations of Interest:</h4>
        <li>My Crypto Heroes</li>
        <li>Brave Frontier Heroes</li>
      </ul>
      <ul className='card'>
        <h4>External Organizations:</h4>
        <li>0xUniverse</li>
        <li>Knight Story</li>
      </ul>
      <div className='nav-btns'>
        <Link to="/">
          <button>Back</button>
        </Link>
        <Link to="/graphs">
          <button>Next</button>
        </Link>
      </div>

    </section>
  )
}

export default Dashboard;