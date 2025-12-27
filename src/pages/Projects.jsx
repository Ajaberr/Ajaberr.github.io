import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Briefcase, Code } from 'lucide-react';
import TerminalOverlay from '../components/TerminalOverlay';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: 'Machine Learning Researcher',
      company: 'LEAP NSF Research Center',
      period: 'Jan 2025 - Present',
      location: 'Columbia University, New York, NY',
      description: [
        'Engineered an Agentic AI pipeline for climate science; first-author paper in collab with Amazon',
        'Built a GraphRAG (KG) supporting multi-step climate research queries, improving workflows for 30+ researchers',
        'Trained a ClimateBERT transformer to map 2,391 CESM variables across climate datasets with 99.87% accuracy',
        'Deployed an AWS pipeline (Neptune, Lambda, S3) to serve 2 TB+ of climate data across 50,000+ datasets'
      ],
      skills: ['Python', 'AWS', 'GraphRAG', 'BERT', 'NLP', 'Climate Science'],
      github: 'https://github.com/Ajaberr/AutoClimDS',
      image: '/images/1000012535.jpg'
    },
    {
      title: 'Founder & Tech/AI Lead',
      company: 'LionStack',
      period: 'Mar 2025 - Present',
      location: 'New York, NY',
      description: [
        'Co-founded LionStack, a student-run company building tools and platforms to solve real-world problems',
        'Launched LionBay (lionbay.org) - Columbia\'s student marketplace with 100+ users in first weeks',
        'Led full-stack development using React, Node.js, and modern web technologies',
        'Built with team: Abdullah Alzahrani (Co-Founder), Begad Abouelnaga & Peyton Harvey (Business/Finance)'
      ],
      skills: ['Full-Stack Development', 'React', 'Node.js', 'Product Management', 'Leadership'],
      image: '/images/asljasdjk.png'
    },
    {
      title: 'Machine Learning Researcher',
      company: 'Oracle',
      period: 'Aug 2025 - Oct 2025',
      location: 'Internship - New York, NY',
      description: [
        'Deployed Oracle Cloud agentic ML workflows automating threat detection, cutting incident resolution time by 40%',
        'Engineered a zero-downtime ML CI/CD pipeline with automated retraining loop and predictive drifting',
        'Tested and optimized workflow performance via red team data, achieving over 99.6% precision in threat detection',
        'Led an internal Agentic AI hackathon for 80+ engineers, designing challenges and building the event platform'
      ],
      skills: ['OCI', 'MLOps', 'CI/CD', 'Cybersecurity', 'Python', 'ML Deployment']
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Mayor Transportation',
      period: 'Sep 2024 - Jan 2025',
      location: 'Internship - New York, NY (On-site)',
      description: [
        'Developed an algorithm to optimize bus routes for student pickups, improving scheduling efficiency by 30%',
        'Built a React frontend with dynamic Recharts.js dashboards for real-time transport metrics analysis',
        'Enhanced routing with ML-driven scheduling, optimizing daily bus operations for over 1,000 NJ students'
      ],
      skills: ['React', 'Python', 'ML Optimization', 'Data Visualization']
    },
    {
      title: 'Research Scholar',
      company: 'Polygence',
      period: 'Sep 2023 - Feb 2024',
      location: 'Remote - Part-time',
      description: [
        'Mentored by a Stanford graduate, obtained maximum scholarship for exceptional research potential',
        'Researched stylometry and statistical patterns in GPT text generation',
        'Published findings in a student journal and presented at a conference',
        'Analyzed GPT-4\'s linguistic characteristics using Zipf\'s law and statistical analysis'
      ],
      skills: ['Scholarly Research', 'Python', 'NLP', 'Statistics', 'Academic Writing'],
      image: '/images/GPT.png'
    }
  ];

  const projects = [
    {
      title: 'LionBay - Columbia Student Marketplace',
      period: 'March 2025 - Present',
      description: [
        'Part of LionStack - Columbia\'s student marketplace built by students, for students',
        'Platform for Columbia students to buy, sell, trade, and connect - launched with 100+ users',
        'Built with React, Node.js, Express, and SQL backend for scalability',
        'Visit: lionbay.org | Instagram: @lionbay.columbia'
      ],
      skills: ['React', 'Node.js', 'Express', 'SQL', 'Full-Stack Development'],
      type: 'Startup Product',
      image: '/images/asljasdjk.png'
    },
    {
      title: 'Hallucination Mitigation on HotPotQA',
      period: 'Sept 2025 - Dec 2025',
      description: [
        'Co-authored NLP paper; engineered RLVF training pipeline achieving 97.8% abstention precision on HotPotQA',
        'Integrated DeBERTa NLI verifier for policy-gradient RL modeling, achieving 27% EM improvement over baseline',
        'Designed asymmetric reward function (10×/5× scaling) combining factuality verification with entropy-based confidence signals'
      ],
      skills: ['PyTorch', 'NLP', 'Reinforcement Learning', 'DeBERTa', 'Research'],
      github: 'https://github.com/Ajaberr/HallucinationMitigationHotpotQA',
      type: 'Research Project',
      image: '/images/GPT.png'
    },
    {
      title: 'Columbia DivHacks 2024 Winner - PennyPals',
      period: 'October 2024',
      description: [
        '3rd Place Overall & 1st Place in Best Financial Hack Track by Capital One ($1000)',
        'Competed against top graduate and undergraduate students across the US',
        'Built PennyPals - an investment game promoting financial literacy for children',
        'Frontend Developer (HTML, CSS, EJS) - Parents simulate deposits while children make investment decisions'
      ],
      skills: ['HTML', 'CSS', 'EJS', 'Node.js', 'LLaMA Integration', 'Frontend Development'],
      github: 'https://github.com/Ajaberr/PennyPals',
      type: 'Hackathon Winner',
      image: '/images/DivHacks2024.jpeg'
    },
    {
      title: 'Uber Global Hackathon - 3rd Place MENA',
      period: 'September 2023',
      description: [
        '3rd Place in Middle East, Africa & Russia region',
        'Team Leader and Frontend Developer for eco-friendly ride optimization platform',
        'Created solution for emerging markets promoting sustainable transportation',
        'Presented to Uber regional executives'
      ],
      skills: ['Leadership', 'Frontend Development', 'HTML', 'CSS', 'JavaScript'],
      type: 'Hackathon Finalist',
      image: '/images/Final.png'
    },
    {
      title: 'PlantCare AI',
      period: 'Ongoing',
      description: [
        'PlantCare automates plant care by providing soil with water, nutrients, and ensuring optimum pH',
        'Trained a Deep Learning model with 95% accuracy to detect 4 different levels of nitrogen deficiency',
        'Using Arduino code and sensors to respond to abnormal soil humidity and pH levels'
      ],
      skills: ['Python', 'Deep Learning', 'NumPy', 'Matplotlib', 'Arduino C++', 'IoT'],
      github: 'https://github.com/Ajaberr/PlantML',
      type: 'Personal Project',
      image: '/images/Screenshot_20240928_221451_Samsu.jpg'
    },
    {
      title: 'Tazi Medical Foundation',
      period: 'June 2023 - Present',
      description: [
        'Automated patient registration for 1200+ patients using OCR, LayoutLM, SQL, reducing manual errors by 80%',
        'Lead Registrar at a Medical Volunteering trip in the underprivileged desert area in Morocco',
        'Created a Python program that automatically inputs patient details onto Google Sheets'
      ],
      skills: ['Python', 'OCR', 'LayoutLM', 'SQL', 'Leadership'],
      github: 'https://github.com/Ajaberr/VolunteerWork',
      type: 'Volunteer Work',
      image: '/images/Screenshot_20240928_224730_WhatsApp.jpg'
    }
  ];

  const renderCards = (items, type) => (
    <div className="cards-grid">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TerminalOverlay item={item} type={type} />
          {item.image && (
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>
          )}

          <div className="card-content">
            <div className="card-header">
              <div className="card-icon">
                {type === 'experience' ? <Briefcase size={20} /> : <Code size={20} />}
              </div>
              <div>
                <h3 className="card-title">{item.title}</h3>
                {item.company && <h4 className="card-company">{item.company}</h4>}
                {item.type && <span className="project-type">{item.type}</span>}
              </div>
            </div>

            <div className="card-meta">
              <span className="card-period">{item.period}</span>
              {item.location && <span className="card-location">{item.location}</span>}
            </div>

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
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <Github size={18} /> View on GitHub
                </a>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="projects-page">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>My Journey</h1>
        <p>Experiences, projects, and achievements in AI & ML</p>
      </motion.div>

      <div className="tab-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('experience');
              setVisibleItems([]);
            }}
          >
            <Briefcase size={20} /> Experience
          </button>
          <button
            className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('projects');
              setVisibleItems([]);
            }}
          >
            <Code size={20} /> Projects
          </button>
        </div>
      </div>

      <div className="cards-container">
        {activeTab === 'experience' && renderCards(experiences, 'experience')}
        {activeTab === 'projects' && renderCards(projects, 'projects')}
      </div>
    </div>
  );
};

export default Projects;
