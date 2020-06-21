import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <div className='app-header'>
        <h2 className='ui header'>
          <i className='chart line icon'></i>
          <div className='content' id='title'>
            Marco ABC's Polls!
            <div className='sub header' id='sub-title'>
              Check out bellow some cool polls!
            </div>
            <Link to='/new'>
              <button id='new-poll' className='ui right labeled icon button'>
                <i className='right arrow icon'></i>
                click here to add a new poll
              </button>
            </Link>
          </div>
        </h2>
      </div>
    );
  }
}

export default withRouter(AppHeader);
