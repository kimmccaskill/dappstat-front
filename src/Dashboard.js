import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = ({ results }) => {
  const ooiArr = results.ooi.map(org => <p>{org.name}</p>);
  const externalArr = results.external_ooi.map(org => <p>{org.name}</p>);

  return(
    <section className='dashboard'>
      <h2 className='analytics-title'>
        Analytics
      </h2>
      <h3>Total Number of users: {results.users.count}</h3>
      <h3>Total Unique users: 16</h3>
      <h3>Total Shared users: 14</h3>
      <div className='card-container'>
        <article>
          <h4>Organizations of Interest:</h4>
          <div className='card'>
            {ooiArr}
          </div>
        </article>
        <article>
          <h4>External Organizations:</h4>
          <div className='card'>
            {externalArr}
          </div>
        </article>
      </div>
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