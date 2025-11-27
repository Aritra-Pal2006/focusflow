import React from 'react';

const Timer = () => {
  return (
    <div className="timer-container">
      <h2>Pomodoro Timer</h2>
      <div className="timer-display">25:00</div>
      <div className="timer-controls">
        <button className="btn">Start</button>
        <button className="btn btn-secondary">Pause</button>
        <button className="btn btn-secondary">Reset</button>
      </div>
    </div>
  );
};

export default Timer;