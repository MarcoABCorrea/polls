import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getPollPage } from '../services/poll-api.service';
import PollCard from './PollCard';
import './PollList.css';

class PollList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
    };
  }

  loadPollList(page = 1) {
    const promise = getPollPage(page);
    promise.then((response) => {
      let polls = [];
      response.forEach((poll, i) => {
        polls.push(<PollCard key={i} {...poll} />);
      });

      this.setState({ polls });
    });
  }

  componentDidMount() {
    this.loadPollList();
  }

  render() {
    return (
      <div className='polls-list'>
        <h1>Questions</h1>
        <div className='ui cards'>{this.state.polls}</div>
      </div>
    );
  }
}

export default withRouter(PollList);
