import { useState } from 'react';
import { ArrowRight, Code, Brain, Rocket, Github, Briefcase, Linkedin, Mail, Search, Trophy, GraduationCap, Users, Dribbble, ExternalLink, Youtube } from 'lucide-react';
import NarutoGuide from '../components/NarutoGuide';
import './SinglePage.css';

const SinglePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const skills = ['Python', 'TensorFlow', 'PyTorch', 'React', 'AWS', 'Docker', 'NLP', 'LangChain'];

  const experiences = [
    {
      title: 'ML Engineer & Research Fellow',
      company: 'LEAP NSF Research Center',
      period: 'Jan 2025 - Present',
      location: 'Columbia University, New York, NY',
      description: [
        'Engineered an Agentic AI pipeline for climate science; first-author paper in collaboration with Amazon',
        'Built a GraphRAG (KG) supporting multi-step climate research queries, improving workflows for 30+ researchers',
        'Trained a ClimateBERT transformer to map 2,391 CESM variables across climate datasets with 99.87% accuracy',
        'Deployed an AWS pipeline (Neptune, Lambda, S3) to serve 2 TB+ of climate data across 50,000+ datasets',
        'First-author paper submitted to the IEEE Conference on Artificial Intelligence (CAI)',
      ],
      skills: ['Python', 'AWS', 'GraphRAG', 'BERT', 'NLP'],
      github: 'https://github.com/Ajaberr/AutoClimDS',
      image: '/images/conference.jpeg'
    },
    {
      title: 'ML Engineer Intern',
      company: 'Oracle',
      period: 'Aug 2025 - Oct 2025',
      location: 'New York, NY',
      description: [
        'Deployed Oracle Cloud agentic ML workflows automating threat detection, cutting incident resolution time by 40%',
        'Engineered a zero-downtime ML CI/CD pipeline with automated retraining loop with predictive drifting',
        'Tested and optimized workflow performance via red team data, achieving over 99.6% precision in threat detection',
        'Led an internal Agentic AI hackathon for 80+ engineers, designing challenges and building the event platform',
      ],
      skills: ['OCI', 'MLOps', 'CI/CD', 'Python', 'Kubernetes'],
      image: '/images/oracle-logo.png'
    },
    {
      title: 'ML Engineer',
      company: 'Mayor Transportation',
      period: 'Sept 2024 - Jan 2025',
      location: 'New York, NY',
      description: [
        'Developed an algorithm to optimize bus routes for student pickups, improving scheduling efficiency by 30%',
        'Built a React frontend with dynamic Recharts.js dashboards for real-time transport metrics analysis',
        'Enhanced routing with ML-driven scheduling, optimizing daily bus operations for over 1,000 NJ students',
      ],
      skills: ['Python', 'React', 'ML', 'Recharts.js'],
      image: '/images/mtlogox0111.webp'
    }
  ];

  const projects = [
    {
      title: 'LionBay - Columbia Student Marketplace',
      period: 'March 2025 - November 2025',
      description: [
        'Co-founded LionStack and launched LionBay, scaling to 100+ users in first weeks',
        'Engineered a real-time chat with WebSockets & built a collaborative filtering recommendation engine',
        'Built a secure payment system with Stripe, using a Node.js, Express, and SQL backend',
      ],
      skills: ['React', 'Node.js', 'SQL', 'WebSockets', 'Stripe'],
      type: 'Startup',
      image: '/images/collegebay.jpeg',
      website: 'https://lionbay.org',
      linkedin: 'https://www.linkedin.com/posts/ajaber_so-remember-that-post-about-two-sleep-deprived-activity-7326024467934027777-MUrb'
    },
    {
      title: 'Hallucination Mitigation on HotPotQA',
      period: 'Sept 2025 - Dec 2025',
      description: [
        'Co-authored NLP paper; engineered RLVF training pipeline achieving 97.8% abstention precision on HotPotQA',
        'Integrated DeBERTa NLI verifier for policy-gradient RL modeling, achieving 27% EM improvement over baseline',
        'Designed asymmetric reward function combining factuality verification with entropy-based confidence signals',
      ],
      skills: ['PyTorch', 'NLP', 'RLHF', 'DeBERTa', 'Transformers'],
      github: 'https://github.com/Ajaberr/HallucinationMitigationHotpotQA',
      type: 'Research',
      image: '/images/paper.png'
    },
    {
      title: 'DivHacks 2024 - PennyPals',
      period: 'November 2024',
      description: [
        '1st Place Capital One Track ($1000) & 3rd Place Overall at Columbia DivHacks',
        'Built a financial literacy app with real-time stock simulations and Llama-powered chatbot',
      ],
      skills: ['JavaScript', 'LLaMA', 'Node.js', 'EJS'],
      github: 'https://github.com/ld0rn76/PennyPals',
      type: 'Hackathon',
      image: '/images/divhacks-2024.jpg'
    },
    {
      title: 'Uber Global Hackathon',
      period: 'September 2024',
      description: [
        'Top 3 Finalist - Middle East, Africa & Russia region',
        'Created eco-friendly ride optimization platform for emerging markets, presenting to Uber regional executives',
      ],
      skills: ['Python', 'React', 'ML', 'Optimization'],
      type: 'Hackathon',
      image: '/images/uber-logo.png',
      github: 'https://github.com/Ajaberr/EcoWaysUberHackathon',
      video: 'https://www.youtube.com/embed/Wh0OGSTwHQc'
    },
    {
      title: 'Tazi Medical Foundation - OCR System',
      period: 'June 2023 - Present',
      description: [
        'Automated patient registration for 1200+ patients using OCR, LayoutLM, and SQL',
        'Reduced manual data entry errors by 80% through intelligent document processing',
      ],
      skills: ['Python', 'OCR', 'LayoutLM', 'SQL'],
      type: 'Volunteer',
      image: '/images/Screenshot_20240928_224730_WhatsApp.jpg'
    }
  ];

  const filterItems = (items) => {
    if (!searchQuery) return items;
    return items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.some(desc => desc.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  const filteredExperiences = filterItems(experiences);
  const filteredProjects = filterItems(projects);

  return (
    <div className="single-page">
      <NarutoGuide />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-layout">
          <div className="hero-content-box">
            <div className="hero-text">
              <div className="greeting">
                <span className="wave">🍜</span> Hi, I'm
              </div>

              <h1 className="name">Ahmed Jaber</h1>

              <h2 className="title">Believe it!</h2>

              <p className="description">
                Computer Science student at <span className="accent">Columbia University</span>.
                ML Research Fellow at <span className="accent">LEAP NSF</span>, former ML Engineer at{' '}
                <span className="accent">Oracle</span>. First-author AI research in collaboration with Amazon.
              </p>
            </div>
          </div>

          <div className="hero-image">
            <img src="/images/hero-portrait.png" alt="Ahmed Jaber" />
          </div>
        </div>
      </section>

      {/* About Section - Timeline */}
      <section id="about" className="section about-section">
        <div className="section-header">
          <h2>About Me</h2>
          <p>From Morocco to Columbia, building the future with AI</p>
        </div>

        <div className="about-intro-box">
          <p>
            I'm a <strong>US citizen</strong> who has lived in Morocco for most of my life. I attended
            London Academy Casablanca, where I achieved a <strong>full ride and 4 A*s at A levels</strong>.
            Currently, I'm a Computer Science student at <strong>Columbia University</strong>, conducting AI research and working as an ML Engineer.
          </p>
        </div>

        <div className="timeline">
          {/* Leadership & Research */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <GraduationCap size={24} />
            </div>
            <div className="timeline-content">
              <div className="timeline-text">
                <h3>Leadership & Research</h3>
                <p>
                  I have led multiple school clubs and organizations, and was the <strong>valedictorian</strong>,
                  delivering a memorable graduation speech. At Columbia, I conduct first-author AI research at
                  LEAP NSF Research Center, lead hackathon teams to victory (DivHacks 1st Place, Uber Top 3
                  Finalist), and previously led an internal Agentic AI hackathon for 80+ engineers at Oracle.
                </p>
              </div>
              <div className="timeline-gallery">
                <img src="/images/Screenshot_20240930_102158_Gallery.jpg" alt="Club Leadership" />
                <div className="timeline-video">
                  <iframe 
                    src="https://www.youtube.com/embed/SM-0S27KyUY?si=a47DgdQCrFMSRu3x" 
                    title="Graduation Speech" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Player & Engineer */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <Users size={24} />
            </div>
            <div className="timeline-content">
              <div className="timeline-text">
                <h3>Team Player & Engineer</h3>
                <p>
                  My team and I achieved <strong>first place</strong> in the VEX Robotics competition nationally
                  and qualified to be the only team to represent Morocco internationally. This experience taught
                  me the value of collaboration, technical excellence, and pushing boundaries.
                </p>
              </div>
              <div className="timeline-gallery">
                <img src="/images/20240930_093842.jpg" alt="VEX Robotics Team" />
                <img src="/images/20240930_091419.png" alt="International Stage" />
              </div>
            </div>
          </div>

          {/* Athlete */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <Dribbble size={24} />
            </div>
            <div className="timeline-content">
              <div className="timeline-text">
                <h3>Athlete</h3>
                <p>
                  Outside of coding, I enjoy playing soccer in my free time - it's a passion I've had since I
                  was a young child. Soccer teaches me discipline, teamwork, and the importance of practice,
                  lessons I carry into my engineering work.
                </p>
              </div>
              <div className="timeline-gallery">
                <img src="/images/soccer.jpg" alt="Playing Soccer" />
                <img src="/images/Screenshot_20240930_122910_Instagram.jpg" alt="Soccer Club" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search projects, experiences, skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="clear-search">×</button>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-header">
          <h2>Experience</h2>
          <p>Where I've worked and what I've built</p>
        </div>

        {filteredExperiences.length === 0 ? (
          <p className="no-results">No experiences found matching "{searchQuery}"</p>
        ) : (
          <div className="cards-grid">
            {filteredExperiences.map((item, index) => (
            <div key={index} className="project-card">
              {item.image && (
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
              )}

              <div className="card-content">
                <div className="card-header">
                  <div className="card-icon">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="card-title">{item.title}</h3>
                    <h4 className="card-company">{item.company}</h4>
                  </div>
                </div>

                <div className="card-meta">
                  <span className="card-period">{item.period}</span>
                  <span className="card-location">{item.location}</span>
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
                      <Github size={18} /> GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
            ))}
          </div>
        )}
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Hackathons, research, and personal projects</p>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="no-results">No projects found matching "{searchQuery}"</p>
        ) : (
          <div className="cards-grid">
            {filteredProjects.map((item, index) => (
            <div key={index} className="project-card">
              {item.image && (
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
              )}

              <div className="card-content">
                <div className="card-header">
                  <div className="card-icon">
                    <Code size={20} />
                  </div>
                  <div>
                    <h3 className="card-title">{item.title}</h3>
                    {item.type && <span className="project-type">{item.type}</span>}
                  </div>
                </div>

                <div className="card-meta">
                  <span className="card-period">{item.period}</span>
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

                {(item.github || item.website || item.linkedin || item.video) && (
                  <div className="card-links">
                    {item.website && (
                      <a href={item.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} /> Website
                      </a>
                    )}
                    {item.github && (
                      <a href={item.github} target="_blank" rel="noopener noreferrer">
                        <Github size={18} /> GitHub
                      </a>
                    )}
                    {item.video && (
                      <a href={item.video.replace('/embed/', '/watch?v=')} target="_blank" rel="noopener noreferrer">
                        <Youtube size={18} /> Video
                      </a>
                    )}
                    {item.linkedin && (
                      <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={18} /> Post
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            ))}
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="contact-content">
          <h2>Let's work together, dattebayo! 📬</h2>
          <p>I'm always open to new opportunities and collaborations</p>

          <div className="social-links-large">
            <a href="https://github.com/Ajaberr" target="_blank" rel="noopener noreferrer">
              <Github size={24} /> GitHub
            </a>
            <a href="https://linkedin.com/in/ajaber/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} /> LinkedIn
            </a>
            <a href="mailto:amj2234@columbia.edu">
              <Mail size={24} /> Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
