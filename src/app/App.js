import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import PollList from '../poll/PollList';
import PollResult from '../poll/PollResult';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='polls-app-container'>
        <AppHeader />

        <div className='app-content'>
          <div className='container'>
            <Switch>
              <Route exact path='/' render={() => <PollList />}></Route>
              <Route
                exact
                path='/results/:questionId'
                render={() => <PollResult />}
              ></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
