import React from 'react';
import PollCard from '../poll/PollCard';
import './PollsList.css';

const PollsList = () => {
  let rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(<PollCard key={i} />);
  }

  return (
    <div className='polls-list'>
      <h1>Questions</h1>
      <div className='ui cards'>{rows}</div>
    </div>
  );
};

export default PollsList;
