import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections = ['profile', 'skills', 'stats', 'contact'];

  return (
    <nav className="flex justify-center gap-4 mb-8">
      {sections.map((section) => (
        <motion.button
          key={section}
          className={`nav-btn ${activeSection === section ? 'active' : ''}`}
          onClick={() => onSectionChange(section)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </motion.button>
      ))}
    </nav>
  );
}