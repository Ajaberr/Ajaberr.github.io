import { useState } from 'react';
import { motion } from 'framer-motion';
import './GlitchText.css';

const GlitchText = ({ children, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleHover = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 200);
  };

  return (
    <motion.div
      className={`glitch-wrapper ${className}`}
      onMouseEnter={handleHover}
    >
      <div className={`glitch-text ${isGlitching ? 'active' : ''}`} data-text={children}>
        {children}
      </div>
    </motion.div>
  );
};

export default GlitchText;
