import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sendVote } from '../services/poll-api.service';
import './PollCard.css';

class PollCard extends Component {
  choices = [];

  constructor(props) {
    super(props);
    this.state = { ...props };

    this.publishedAt = this.formatDate(this.state.published_at);
    this.questionId = this.state.url.split('/questions/')[1];

    this.state.choices.forEach((item) => {
      this.choices.push(
        <button
          onClick={() => this.vote(item.url)}
          key={item.choice}
          className='ui orange basic button'
        >
          {item.choice}
        </button>
      );
    });
  }

  formatDate = (dateStr) => {
    if (dateStr) {
      const date = new Date(dateStr);

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
    }
    return '';
  };

  vote = (vote) => {
    const promise = sendVote(vote);
    promise.then(() => {
      this.setState({ showResultsButton: true });
    });
  };

  renderExtraContent() {
    if (this.state.showResultsButton) {
      const resultPath = '/results/' + this.questionId;

      return (
        <Link to={resultPath}>
          <button className='ui negative button'>Go to results!</button>
        </Link>
      );
    } else {
      return this.choices;
    }
  }
  render() {
    return (
      <div className='card'>
        <div className='content'>
          <div className='header'>{this.state.question}</div>
          <div className='meta'>{this.publishedAt}</div>
        </div>
        <div className='extra content'>{this.renderExtraContent()}</div>
      </div>
    );
  }
}

export default PollCard;
