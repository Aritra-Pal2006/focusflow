import React from 'react';

const Stats = ({ completedFocusSessions }) => {
  return (
    <div className="stats-container">
      <h2>Statistics</h2>
      <p>Completed focus sessions (this visit): {completedFocusSessions}</p>
    </div>
  );
};

export default Stats;