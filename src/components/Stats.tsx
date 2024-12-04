import AnimatedSection from './shared/AnimatedSection';
import { motion } from 'framer-motion';

export default function Stats() {
  return (
    <AnimatedSection className="stats-section">
      <h2 className="text-3xl font-bold mb-8">GitHub Statistics</h2>
      <div className="stats-container flex flex-col items-center gap-8">
        <motion.img 
          src="https://github-readme-stats.vercel.app/api?username=QsingularityAi&show_icons=true&theme=radical" 
          alt="GitHub stats" 
          className="stats-card max-w-full rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img 
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=QsingularityAi" 
          alt="Top Languages" 
          className="stats-card max-w-full rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </AnimatedSection>
  );
}