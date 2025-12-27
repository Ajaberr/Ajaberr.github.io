import { useState, useEffect } from 'react';
import './NarutoGuide.css';

const NarutoGuide = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check if we're at the very bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        if (currentSection !== 'contact') {
          setCurrentSection('contact');
        }
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (currentSection !== section) {
              setCurrentSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  const messages = {
    home: "Believe it! Welcome to Ahmed's portfolio! 🍜",
    about: "This is Ahmed's ninja way - always learning and growing! 💪",
    experience: "Check out all the amazing missions Ahmed has completed! 🎯",
    projects: "These projects are as cool as my Shadow Clone Jutsu! 🔥",
    contact: "Let's work together, dattebayo! 📬"
  };

  return (
    <div className={`naruto-guide ${currentSection}`}>
      <div id="naruto-sprite">
        <section className="head"></section>
        <section className="torso"></section>
        <section className="legs"></section>
        <section className="shadow"></section>
      </div>


      <div className="speech-bubble">
        {messages[currentSection]}
      </div>
    </div>
  );
};

export default NarutoGuide;
