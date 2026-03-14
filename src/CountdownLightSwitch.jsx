import React from 'react';
import './CountdownLightSwitch.css';

export default function CountdownLightSwitch() {
  return (
    <div className="container light-theme">
      <div className="card">
        {/* Header */}
        <div className="header">
          <h1 className="title">Countdown Timer</h1>
          <div className="theme-toggle">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          {/* Timer Display */}
          <div className="timer-section">
            <div className="timer-display">
              <span className="timer-value">30</span>
              <span className="timer-unit">seconds</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '100%' }}></div>
            </div>
            <p className="timer-status">Ready to start</p>
          </div>

          {/* Control Buttons */}
          <div className="button-group">
            <button className="btn btn-start">Start Timer</button>
            <button className="btn btn-reset">Reset Timer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
