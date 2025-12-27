import { useState, useEffect } from 'react';
import './NarutoEntrance.css';

const NarutoEntrance = ({ onEnter }) => {
  const [phase, setPhase] = useState('menu'); // menu, exiting
  const [selectedOption, setSelectedOption] = useState(0);

  const menuOptions = [
    { label: 'Enter Portfolio', action: 'enter' },
    { label: 'View Projects', action: 'projects' },
    { label: 'About Me', action: 'about' },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (phase !== 'menu') return;
      
      if (e.key === 'ArrowUp') {
        setSelectedOption(prev => (prev - 1 + menuOptions.length) % menuOptions.length);
      } else if (e.key === 'ArrowDown') {
        setSelectedOption(prev => (prev + 1) % menuOptions.length);
      } else if (e.key === 'Enter') {
        handleSelect(menuOptions[selectedOption].action);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, selectedOption]);

  const handleSelect = (action) => {
    setPhase('exiting');
    setTimeout(() => {
      onEnter(action);
    }, 500);
  };

  return (
    <div className={`naruto-entrance ${phase}`}>
      {/* Animated Background */}
      <div className="entrance-bg">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      {/* Konoha Symbol Background */}
      <div className="konoha-symbol">
        <svg viewBox="0 0 100 100" className="konoha-svg">
          <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"/>
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M50 35 Q55 42 50 50 Q45 42 50 35" fill="currentColor"/>
          <path d="M35 50 Q42 45 50 50 Q42 55 35 50" fill="currentColor"/>
          <path d="M50 65 Q45 58 50 50 Q55 58 50 65" fill="currentColor"/>
          <path d="M65 50 Q58 55 50 50 Q58 45 65 50" fill="currentColor"/>
        </svg>
      </div>

      {/* Menu Phase */}
      {(phase === 'menu' || phase === 'exiting') && (
        <div className={`menu-screen ${phase === 'exiting' ? 'exit' : ''}`}>
          {/* Title */}
          <div className="game-title">
            <div className="title-decoration left">
              <span className="kunai">🗡️</span>
            </div>
            <div className="title-content">
              <h1 className="main-title">
                <span className="title-ahmed">AHMED</span>
                <span className="title-jaber">JABER</span>
              </h1>
              <p className="subtitle">~ Way of the Engineer ~</p>
            </div>
            <div className="title-decoration right">
              <span className="kunai">🗡️</span>
            </div>
          </div>

          {/* Menu Options */}
          <nav className="game-menu">
            {menuOptions.map((option, index) => (
              <button
                key={option.action}
                className={`menu-option ${selectedOption === index ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedOption(index);
                  handleSelect(option.action);
                }}
                onMouseEnter={() => setSelectedOption(index)}
              >
                <span className="option-indicator">
                  {selectedOption === index && '▶'}
                </span>
                <span className="option-text">{option.label}</span>
                <span className="option-indicator right">
                  {selectedOption === index && '◀'}
                </span>
              </button>
            ))}
          </nav>

          {/* Bottom Info */}
          <div className="menu-footer">
            <p className="press-start">Press ENTER or Click to Select</p>
            <div className="scroll-decoration">
              <div className="scroll-line"></div>
              <span className="scroll-text">忍</span>
              <div className="scroll-line"></div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="corner-decoration top-left"></div>
          <div className="corner-decoration top-right"></div>
          <div className="corner-decoration bottom-left"></div>
          <div className="corner-decoration bottom-right"></div>
        </div>
      )}

    </div>
  );
};

export default NarutoEntrance;

