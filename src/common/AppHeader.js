import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <div className='app-header'>
        <h2 className='ui header'>
          <i className='chart line icon'></i>
          <div className='content'>
            Marco ABC's Polls!
            <div className='sub header'>Check out bellow some cool polls!</div>
          </div>
        </h2>
      </div>
    );
  }
}

export default withRouter(AppHeader);
