import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skills = ['Python', 'Machine Learning', 'NLP', 'React', 'AWS', 'TensorFlow'];
  const achievements = [
    { icon: Brain, title: '99.87%', subtitle: 'Model Accuracy' },
    { icon: Rocket, title: '400+', subtitle: 'Users Served' },
    { icon: Code, title: '5+', subtitle: 'Major Projects' }
  ];

  return (
    <div className="home">
      <motion.div
        className="hero-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <div className="hero-text">
            <motion.div className="greeting" variants={itemVariants}>
              <span className="wave">👋</span> Hi, I'm
            </motion.div>

            <motion.h1 className="name" variants={itemVariants}>
              Ahmed Jaber
            </motion.h1>

            <motion.div className="title-wrapper" variants={itemVariants}>
              <h2 className="title">
                <span className="highlight">ML Engineer</span> &{' '}
                <span className="highlight">AI Researcher</span>
              </h2>
            </motion.div>

            <motion.p className="description" variants={itemVariants}>
              Computer Science student at{' '}
              <span className="accent">Columbia University</span> (GPA: 4.10/4.0).
              Co-founder of <span className="accent">LionStack</span>, ML Researcher at{' '}
              <span className="accent">LEAP NSF</span> & former ML Engineer at{' '}
              <span className="accent">Oracle</span>. Building the future of AI and student technology.
            </motion.p>

            <motion.div className="cta-buttons" variants={itemVariants}>
              <Link to="/projects" className="primary-btn">
                View My Work <ArrowRight size={20} />
              </Link>
              <a href="mailto:amj2234@columbia.edu" className="secondary-btn">
                Contact Me
              </a>
            </motion.div>

            <motion.div className="skills-container" variants={itemVariants}>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <div key={skill} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="hero-image" variants={itemVariants}>
            <img src="/images/hero-portrait.png" alt="Ahmed Jaber" />
          </motion.div>
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        className="achievements-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <achievement.icon className="achievement-icon" size={32} />
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-subtitle">{achievement.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
