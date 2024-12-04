import { useState } from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Profile from './components/sections/Profile';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
        
        <main className="content">
          {activeSection === 'profile' && <Profile />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'stats' && <Stats />}
          {activeSection === 'contact' && <Contact />}
        </main>
      </div>
    </div>
  );
}

export default App;