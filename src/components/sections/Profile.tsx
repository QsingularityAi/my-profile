import { motion } from 'framer-motion';
import AnimatedSection from '../shared/AnimatedSection';

export default function Profile() {
  return (
    <AnimatedSection className="profile-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-300">
              Machine Learning Engineer-LLM at SAXONY.ai, specializing in Drug Discovery 
              and Computational Biology. I combine cutting-edge ML techniques with biological 
              research to accelerate breakthroughs in medicine.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
            <p className="text-gray-300">
              Working on End to End Gen AI Product and exploring advanced MLOps practices.
            </p>
          </motion.div>
        </div>
        
        <motion.img 
          src="https://github.com/a3ela/Blog-web-app/blob/main/output-onlinegiftools.gif"
          alt="profile animation"
          className="w-full rounded-lg shadow-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </AnimatedSection>
  );
}