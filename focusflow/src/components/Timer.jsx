import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ onFocusComplete }) => {
  // Timer constants
  const FOCUS_TIME = 25 * 60; // 25 minutes in seconds
  const BREAK_TIME = 5 * 60;   // 5 minutes in seconds

  // Timer state
  const [currentMode, setCurrentMode] = useState('focus'); // 'focus' or 'break'
  const [remainingSeconds, setRemainingSeconds] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  
  // Ref to hold interval reference for cleanup
  const intervalRef = useRef(null);

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Clear interval on cleanup
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Timer effect
  useEffect(() => {
    if (isRunning) {
      // Create interval for timer countdown
      intervalRef.current = setInterval(() => {
        setRemainingSeconds(prev => {
          // If timer reaches zero
          if (prev <= 1) {
            // Clear the interval
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            
            // Handle mode switching
            if (currentMode === 'focus') {
              // Focus session completed - increment counter and switch to break
              onFocusComplete();
              setCurrentMode('break');
              setIsRunning(true); // Automatically start break
              return BREAK_TIME;
            } else {
              // Break ended - switch back to focus mode but don't start automatically
              setCurrentMode('focus');
              setIsRunning(false);
              return FOCUS_TIME;
            }
          }
          
          // Decrement timer
          return prev - 1;
        });
      }, 1000);
    } else {
      // Clear interval when paused
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    // Cleanup function to clear interval when effect re-runs
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, currentMode, onFocusComplete]);

  // Start timer
  const handleStart = () => {
    setIsRunning(true);
  };

  // Pause timer
  const handlePause = () => {
    setIsRunning(false);
  };

  // Reset timer
  const handleReset = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Reset to focus mode
    setCurrentMode('focus');
    setRemainingSeconds(FOCUS_TIME);
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h2>Pomodoro Timer</h2>
      <div className="timer-mode">
        {currentMode === 'focus' ? 'Focus Mode' : 'Break Mode'}
      </div>
      <div className="timer-display">{formatTime(remainingSeconds)}</div>
      <div className="timer-controls">
        {!isRunning ? (
          <button className="btn" onClick={handleStart} disabled={isRunning}>
            Start
          </button>
        ) : (
          <button className="btn" onClick={handlePause}>
            Pause
          </button>
        )}
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;