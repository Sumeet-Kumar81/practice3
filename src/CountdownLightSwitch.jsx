import React, { useState } from 'react';
import './CountdownLightSwitch.css';

export default function CountdownLightSwitch() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  const progressPercentage = ((30 - timeLeft) / 30) * 100;

  const handleThemeToggle = (e) => {
    setIsDarkTheme(e.target.checked);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(30);
  };

  return (
    <div className={`container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="card">
        {/* Header */}
        <div className="header">
          <h1 className="title">Countdown Timer</h1>
          <div className="theme-toggle">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={isDarkTheme}
                onChange={handleThemeToggle}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          {/* Timer Display */}
          <div className="timer-section">
            <div className="timer-display">
              <span className="timer-value">{timeLeft}</span>
              <span className="timer-unit">seconds</span>
            </div>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="timer-status">
              {isRunning ? 'Timer running...' : 'Ready to start'}
            </p>
          </div>

          {/* Control Buttons */}
          <div className="button-group">
            <button 
              className="btn btn-start"
              onClick={handleStart}
              disabled={isRunning}
            >
              Start Timer
            </button>
            <button 
              className="btn btn-reset"
              onClick={handleReset}
            >
              Reset Timer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
