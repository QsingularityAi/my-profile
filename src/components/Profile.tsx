import { TypeAnimation } from 'react-type-animation';
import AnimatedSection from './shared/AnimatedSection';
import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <div className="profile-section">
      <AnimatedSection className="header-animation">
        <h1 className="text-4xl font-bold mb-4">
          <TypeAnimation
            sequence={[
              'Hi 👋, I\'m Anurag Trivedi',
              1000,
              'Machine Learning Engineer',
              1000,
              'Drug Discovery Specialist',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <motion.img 
          src="https://github.com/a3ela/Blog-web-app/blob/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(2).gif" 
          alt="header animation" 
          className="header-gif rounded-lg shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatedSection>
      
      <div className="profile-content mt-8">
        <AnimatedSection className="text-content">
          <h3 className="text-2xl font-semibold mb-4">Machine Learning Engineer-LLM at SAXONY.ai</h3>
          <motion.div 
            className="highlight-text"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-lg">
              Specialized in Drug Discovery and Computational Biology, I combine cutting-edge ML techniques 
              with biological research to accelerate breakthroughs in medicine.
            </p>
          </motion.div>
          
          <div className="current-work mt-6">
            <h4 className="text-xl font-semibold mb-2">🔭 Currently working on:</h4>
            <motion.div 
              className="bg-opacity-20 bg-blue-500 p-4 rounded-lg"
              whileHover={{ scale: 1.01 }}
            >
              <p>End to End Gen AI Product</p>
            </motion.div>
          </div>
          
          <div className="interests mt-6">
            <h4 className="text-xl font-semibold mb-2">🌱 Learning:</h4>
            <motion.div 
              className="bg-opacity-20 bg-green-500 p-4 rounded-lg"
              whileHover={{ scale: 1.01 }}
            >
              <p>Javascript, Advanced MLOps</p>
            </motion.div>
          </div>
        </AnimatedSection>
        
        <motion.img 
          src="https://github.com/a3ela/Blog-web-app/blob/main/output-onlinegiftools.gif" 
          alt="profile animation" 
          className="profile-gif rounded-lg shadow-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}