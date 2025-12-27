import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { path: '#home', label: 'Home' },
    { path: '#about', label: 'About' },
    { path: '#experience', label: 'Experience' },
    { path: '#projects', label: 'Projects' },
    { path: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId.substring(1));
      setIsOpen(false);
    }
  };

  const socialLinks = [
    { href: 'https://github.com/Ajaberr', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/ajaber/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:amj2234@columbia.edu', icon: Mail, label: 'Email' },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        {/* Desktop Menu */}
        <div className="nav-links desktop">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.path); }}
              className={`nav-link ${activeSection === item.path.substring(1) ? 'active' : ''}`}
            >
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.span>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="social-links desktop">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="menu-toggle mobile"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-nav-links">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.path}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.path); }}
                className={`mobile-nav-link ${activeSection === item.path.substring(1) ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </motion.div>
          ))}
          <div className="mobile-social-links">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
