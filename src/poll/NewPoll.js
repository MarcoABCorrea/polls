import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { createPoll } from '../services/poll-api.service';
import './NewPoll.css';

class NewPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidData: false,
      pollCreationError: false,
      redirect: false,
      options: [{ key: 1, value: '' }],
      question: '',
    };
  }

  showError() {
    if (this.state.invalidData) {
      return (
        <div className='ui error message'>
          <div className='header'>Form invalid!</div>
          <p>Please fill alll the fields</p>
        </div>
      );
    }

    if (this.state.pollCreationError) {
      return (
        <div className='ui error message'>
          <div className='header'>Server error!</div>
          <p>
            One error occurred while processing the request. Please check the
            parameters and test again
          </p>
        </div>
      );
    }
  }

  addOption() {
    const key = this.state.options.length + 1;
    this.setState((prevState) => ({
      options: prevState.options.concat([{ key }]),
    }));
  }

  isFormInvalid() {
    if (this.state.question === '') {
      return true;
    }

    for (let index = 0; index < this.state.options.length; index++) {
      const option = this.state.options[index];
      if (option.value === undefined || option.value.trim() === '') {
        return true;
      }
    }

    return false;
  }

  getPoll() {
    let poll = { question: this.state.question, choices: [] };
    poll.choices = this.state.options.map((opt) => opt.value);
    return poll;
  }

  submitNewPoll() {
    const invalidData = this.isFormInvalid();

    if (!invalidData) {
      const poll = this.getPoll();
      createPoll(poll)
        .then(() => {
          this.setState({ redirect: true });
        })
        .catch(() => {
          this.setState({ pollCreationError: true });
        });
    }

    this.setState({ invalidData });
  }

  handleChangeQuestion(e) {
    this.setState({ question: e.target.value });
  }

  handleChange(i, event) {
    let options = [...this.state.options];
    options[i].value = event.target.value;
    this.setState({ options });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }

    return (
      <div className='new-poll-container'>
        <div className='ui form error'>
          <div className='field'>
            <label>Question:</label>
            <input
              type='text'
              placeholder='E.g Favourite programming language?'
              value={this.state.question}
              onChange={this.handleChangeQuestion.bind(this)}
            />
          </div>
          <div className='field'>
            <label>Options:</label>
            <div id='new-option-container'>
              <div className='option-input-container'>
                {this.state.options.map((input, i) => (
                  <input
                    key={input.key}
                    type='text'
                    placeholder='E.g JavaScript'
                    value={input.value || ''}
                    onChange={this.handleChange.bind(this, i)}
                  />
                ))}
              </div>
              <button
                id='new-option-poll'
                onClick={() => this.addOption()}
                className='ui right labeled icon button'
              >
                <i className='plus icon'></i>
                New option
              </button>
            </div>
          </div>
        </div>
        {this.showError()}
        <button
          id='submit-new-poll'
          onClick={() => this.submitNewPoll()}
          className='ui submit button'
        >
          Submit
        </button>
        <Link to='/'>
          <button className='ui negative button'>Go Back</button>
        </Link>
      </div>
    );
  }
}

export default NewPoll;
