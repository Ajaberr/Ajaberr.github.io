import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Trophy, Users, Heart } from 'lucide-react';
import { useRef } from 'react';
import ParallaxSection from '../components/ParallaxSection';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const highlights = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Full Scholarship & Valedictorian with 4 A*s at A levels (Chemistry, Physics, Mathematics, Further Mathematics), maintaining 4.10/4.0 GPA at Columbia University'
    },
    {
      icon: Trophy,
      title: 'Achievements & Awards',
      description: 'DivHacks 2024 Winner ($1000), Uber Global Hackathon 3rd Place MENA, VEX Robotics National Champions (Morocco), Polygence Maximum Scholarship'
    },
    {
      icon: Users,
      title: 'Leadership & Entrepreneurship',
      description: 'Co-founder of LionStack, led 80+ engineers at Oracle hackathon, Co-President Robotics Club, Co-founder StudentUnifiers & charity soccer league'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Tech Volunteer at FONDATION OMAR TAZI - automated registration for 1200+ patients, Volunteer Tutor at Young Leaders, building platforms to help students'
    }
  ];

  const journey = [
    {
      title: 'Early Life & Education',
      content: "I'm a US citizen who spent most of my life in Morocco, attending London Academy Casablanca (Sep 2020 - Jul 2024). Achieved full scholarship, 4 A*s in A levels (Chemistry, Physics, Mathematics, Further Mathematics), and was valedictorian.",
      image: '/images/Screenshot_20240930_102158_Gallery.jpg'
    },
    {
      title: 'Leadership & Clubs',
      content: 'Co-founded StudentUnifiers (School Spirit Club), created a charity interscholastic soccer league as Web Developer, and served as Co-President of the Robotics Club. These experiences shaped my leadership and teamwork skills.',
      image: '/images/soccer.jpg'
    },
    {
      title: 'VEX Robotics Champions',
      content: 'Led my team to first place in the VEX Robotics competition nationally in Morocco, becoming the only team to represent Morocco internationally. This achievement ignited my passion for engineering and problem-solving.',
      image: '/images/20240930_093842.jpg'
    },
    {
      title: 'Columbia University',
      content: "Currently pursuing Bachelor's degree in Computer Science at Columbia University with a 4.10/4.0 GPA, specializing in Machine Learning, NLP, and AI research. Conducting first-author research at LEAP NSF Research Center.",
      image: '/images/1000012535.jpg'
    },
    {
      title: 'Industry & Entrepreneurship',
      content: 'Co-founded LionStack (Mar 2025), launching LionBay with 100+ users. Gained ML engineering experience at Oracle and LEAP NSF, plus research at Polygence. Building the future of student technology.',
      image: '/images/Final.png'
    }
  ];

  const interests = [
    { emoji: '⚽', text: 'Soccer' },
    { emoji: '🤖', text: 'AI Research' },
    { emoji: '🌍', text: 'Climate Tech' },
    { emoji: '💻', text: 'Open Source' },
    { emoji: '📚', text: 'Learning' },
    { emoji: '🎮', text: 'Hackathons' }
  ];

  return (
    <div className="about-page" ref={ref}>
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>About Me</h1>
        <p className="about-intro">
          I'm a US citizen who has lived in Morocco for most of my life. I attended London Academy Casablanca,
          where I achieved a full ride and 4 A*s at A levels. Currently, I'm a Computer Science student at
          Columbia University with a <span className="highlight">4.10/4.0 GPA</span>, conducting AI research
          and working as an ML Engineer. I pride myself on being an <span className="highlight">independent</span>,
          <span className="highlight"> quick learner</span>, and <span className="highlight">passionate researcher</span>.
        </p>
      </motion.div>

      {/* Highlights Grid */}
      <ParallaxSection speed={0.2}>
        <div className="highlights-section">
        <h2 className="section-title">Highlights</h2>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(100, 255, 218, 0.2)',
                scale: 1.02
              }}
            >
              <motion.div
                className="highlight-icon"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <highlight.icon size={32} />
              </motion.div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </ParallaxSection>

      {/* Journey Timeline */}
      <ParallaxSection speed={0.15}>
        <div className="journey-section">
        <h2 className="section-title">My Journey</h2>
        <div className="journey-timeline">
          {journey.map((step, index) => (
            <motion.div
              key={index}
              className="journey-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="journey-marker"></div>
              <div className="journey-content">
                {step.image && (
                  <div className="journey-image">
                    <img src={step.image} alt={step.title} />
                  </div>
                )}
                <h3>{step.title}</h3>
                <p>{step.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </ParallaxSection>

      {/* Interests */}
      <ParallaxSection speed={0.25}>
        <div className="interests-section">
        <h2 className="section-title">When I'm Not Coding</h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="interest-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="interest-emoji">{interest.emoji}</span>
              <span className="interest-text">{interest.text}</span>
            </motion.div>
          ))}
        </div>
        </div>
      </ParallaxSection>

      {/* Call to Action */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Let's Connect!</h2>
        <p>I'm always open to interesting conversations and collaboration opportunities.</p>
        <motion.a
          href="mailto:amj2234@columbia.edu"
          className="cta-button"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(100, 255, 218, 0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </div>
  );
};

export default About;
