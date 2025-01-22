import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Courtify</h1>
      <Link to="/lawyer">Go to Lawyer Page</Link>
    </div>
  );
};

export default HomePage;
