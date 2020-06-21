import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className='page-not-found'>
        <h1 className='title'>404</h1>
        <div className='desc'>The Page you're looking for was not found.</div>
        <Link to='/'>
          <button className='ui negative button'>Go Back</button>
        </Link>
      </div>
    );
  }
}

export default NotFound;
