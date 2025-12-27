import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Briefcase, Code } from 'lucide-react';
import './FlipCard3D.css';

const FlipCard3D = ({ item, type }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flip-card-3d-container">
      <motion.div
        className={`flip-card-3d ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.02 }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Front of card */}
        <motion.div
          className="flip-card-front"
          initial={false}
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{
            duration: 0.6,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <div className="card-icon">
            {type === 'experience' ? <Briefcase size={32} /> : <Code size={32} />}
          </div>
          {item.image && (
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>
          )}
          <div className="card-header">
            <h3 className="card-title">{item.title}</h3>
            {item.company && <h4 className="card-company">{item.company}</h4>}
            {item.type && <span className="project-type">{item.type}</span>}
          </div>
          <div className="card-meta">
            <span className="card-period">{item.period}</span>
            {item.location && <span className="card-location">{item.location}</span>}
          </div>
          <div className="flip-hint">Click to see details →</div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="flip-card-back"
          initial={false}
          animate={{
            rotateY: isFlipped ? 0 : -180,
          }}
          transition={{
            duration: 0.6,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <ul className="card-description">
            {item.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          <div className="card-skills">
            {item.skills.map((skill, i) => (
              <span key={i} className="skill-badge">{skill}</span>
            ))}
          </div>
          {item.github && (
            <div className="card-links">
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          )}
          <div className="flip-hint">Click to flip back ←</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard3D;
