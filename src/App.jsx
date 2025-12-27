import { useState } from 'react';
import Navbar from './components/Navbar';
import SinglePage from './pages/SinglePage';
import NarutoEntrance from './components/NarutoEntrance';
import './App.css';

function App() {
  const [showEntrance, setShowEntrance] = useState(true);

  const handleEnter = (action) => {
    setShowEntrance(false);
    
    // Scroll to section based on menu selection
    setTimeout(() => {
      if (action === 'projects') {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      } else if (action === 'about') {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (showEntrance) {
    return <NarutoEntrance onEnter={handleEnter} />;
  }

  return (
    <div className="app">
      <Navbar />
      <SinglePage />
    </div>
  );
}

export default App;
