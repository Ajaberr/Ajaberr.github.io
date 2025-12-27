import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TerminalOverlay.css';

const TerminalOverlay = ({ item, type }) => {
  const [showTerminal, setShowTerminal] = useState(false);

  const getTerminalLogs = () => {
    if (type === 'experience') {
      return [
        '> Initializing experience module...',
        `> Loading ${item.company || 'organization'}...`,
        `> Role: ${item.title}`,
        `> Period: ${item.period}`,
        `> Skills: ${item.skills.slice(0, 3).join(', ')}`,
        `> Status: ✓ Ready`,
      ];
    } else {
      return [
        '> Booting project system...',
        `> Project: ${item.title}`,
        `> Type: ${item.type || 'Development'}`,
        `> Technologies: ${item.skills.slice(0, 3).join(', ')}`,
        `> Status: ✓ Deployed`,
      ];
    }
  };

  return (
    <div
      className="terminal-trigger"
      onMouseEnter={() => setShowTerminal(true)}
      onMouseLeave={() => setShowTerminal(false)}
    >
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            className="terminal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="terminal-content">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="terminal-title">system.log</span>
              </div>
              <div className="terminal-body">
                {getTerminalLogs().map((log, index) => (
                  <motion.div
                    key={index}
                    className="terminal-line"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                  >
                    {log}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TerminalOverlay;
