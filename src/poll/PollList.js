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
      page: 0,
      size: 10,
      totalElements: 0,
      totalPages: 0,
      last: true,
      currentVotes: [],
      isLoading: false,
    };
    this.loadPollList = this.loadPollList.bind(this);

    this.polls = [];
    for (let i = 0; i < 10; i++) {
      this.polls.push(<PollCard key={i} />);
    }
  }

  loadPollList(page = 1) {
    let promise;

    promise = getPollPage(page);

    if (!promise) {
      return;
    }

    this.setState({
      isLoading: true,
    });

    promise
      .then((response) => {
        console.log('res', response);
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        });
      });
  }

  componentDidMount() {
    this.loadPollList();
  }

  render() {
    return (
      <div className='polls-list'>
        <h1>Questions</h1>
        <div className='ui cards'>{this.polls}</div>
      </div>
    );
  }
}

export default withRouter(PollList);
