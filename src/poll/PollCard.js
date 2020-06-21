import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PollCard.css';

class PollCard extends Component {
  choices = [];

  constructor(props) {
    super(props);

    this.state = {
      question: 'How are you?',
      publishedAt: '21/6/2020 12:22',
      choices: [
        { id: 1, name: 'op1' },
        { id: 2, name: 'op2' },
      ],
      votes: 1200,
      route: '/a',
    };

    this.state.choices.map((choice) => {
      this.choices.push(
        <button key={choice.id} className='ui blue basic button'>
          {choice.name}
        </button>
      );
    });
  }

  render() {
    return (
      <div className='card'>
        <div className='content'>
          <div className='header'>{this.state.question}</div>
          <div className='meta'>{this.state.publishedAt}</div>
        </div>
        <div className='extra content'>
          {this.choices}

          <div className='divider'>
            <div className='ui labeled button' tabIndex='0'>
              <div className='ui button'>
                <i className='check icon'></i>
              </div>
              <Link to={this.state.route} className='ui basic label'>
                {this.state.votes} votes
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PollCard;
