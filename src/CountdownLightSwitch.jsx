import React, { useState, useEffect } from 'react';
import './CountdownLightSwitch.css';

export default function TrafficLight() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [currentLight, setCurrentLight] = useState('red');
  const [isAutomatic, setIsAutomatic] = useState(false);

  // Traffic light effect - cycles through red, yellow, green
  useEffect(() => {
    let interval;
    
    if (isAutomatic) {
      interval = setInterval(() => {
        setCurrentLight(prev => {
          if (prev === 'red') return 'yellow';
          if (prev === 'yellow') return 'green';
          return 'red';
        });
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isAutomatic]);

  const handleThemeToggle = (e) => {
    setIsDarkTheme(e.target.checked);
  };

  const handleAutomatic = () => {
    setIsAutomatic(!isAutomatic);
  };

  const handleManualLight = (light) => {
    setIsAutomatic(false);
    setCurrentLight(light);
  };

  return (
    <div className={`container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="card">
        {/* Header */}
        <div className="header">
          <h1 className="title">Traffic Light</h1>
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
          {/* Traffic Light Display */}
          <div className="traffic-light-container">
            <div className="traffic-light">
              <div 
                className={`light red-light ${currentLight === 'red' ? 'active' : ''}`}
              ></div>
              <div 
                className={`light yellow-light ${currentLight === 'yellow' ? 'active' : ''}`}
              ></div>
              <div 
                className={`light green-light ${currentLight === 'green' ? 'active' : ''}`}
              ></div>
            </div>
            <p className="light-status">
              {currentLight === 'red' && '🛑 STOP'}
              {currentLight === 'yellow' && '🟡 CAUTION'}
              {currentLight === 'green' && '✅ GO'}
            </p>
          </div>

          {/* Control Buttons */}
          <div className="light-controls">
            <button 
              className="btn btn-red"
              onClick={() => handleManualLight('red')}
              disabled={isAutomatic}
            >
              Red
            </button>
            <button 
              className="btn btn-yellow"
              onClick={() => handleManualLight('yellow')}
              disabled={isAutomatic}
            >
              Yellow
            </button>
            <button 
              className="btn btn-green"
              onClick={() => handleManualLight('green')}
              disabled={isAutomatic}
            >
              Green
            </button>
          </div>

          {/* Automatic Mode Button */}
          <div className="button-group">
            <button 
              className={`btn btn-auto ${isAutomatic ? 'active' : ''}`}
              onClick={handleAutomatic}
            >
              {isAutomatic ? '⏸ Stop Auto' : '▶ Auto Mode'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
