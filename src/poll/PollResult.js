import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getPollResult } from '../services/poll-api.service';
import './PollResult.css';

class PollResult extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.match.params };
  }

  loadPollResult() {
    const promise = getPollResult(this.state.questionId);
    promise.then((response) => {
      let rows = [];
      response.choices.forEach((choice, i) => {
        rows.push(this.tableRow(choice, i));
      });

      this.setState({
        rows,
      });
    });
  }

  componentDidMount() {
    if (parseInt(this.state.questionId) !== NaN) {
      this.loadPollResult();
    } else {
      this.setState({ invalidQuestionId: true });
    }
  }

  tableRow(data, key) {
    return (
      <tr key={key}>
        <td data-label='Choice'>{data.choice}</td>
        <td data-label='Vote'>{data.votes}</td>
      </tr>
    );
  }

  render() {
    if (this.state.invalidQuestionId) {
      return <div>Question Id provided is invalid!</div>;
    }

    return (
      <div className='poll-result'>
        <h1>Results</h1>
        <table id='poll-result' className='ui striped table'>
          <thead>
            <tr>
              <th>Choice</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>{this.state.rows}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(PollResult);
