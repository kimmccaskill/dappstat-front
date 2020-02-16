import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return(
    <section className='dashboard'>
      <h2>
        Analytics
      </h2>
      <label>
        Number of users:
      </label>
      <label>
        Organizations of Interest:
      </label>
      <label>
        External Organizations:
      </label>
      <label>
        Unique Users:
      </label>
      <label>
        Shared Users:
      </label>
    </section>
  )
}

export default Dashboard;