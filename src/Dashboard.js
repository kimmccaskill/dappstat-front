import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return(
    <form>
      <label>
        Analytics:
      </label>
      <br />
      <label>
        Number of guests:

      </label>
      <br />
      <label>
        Orgainzation of Interest:

      </label>
      <br />
      <label>
        External Org:

      </label>
      <br />
      <label>
        Unique Users:


      </label>
      <br />
      <label>
        Shared Users:

      </label>
    </form>
  )
}

export default Dashboard;