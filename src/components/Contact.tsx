import AnimatedSection from './shared/AnimatedSection';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <AnimatedSection className="contact-section">
      <h2 className="text-3xl font-bold mb-8">Let's Connect!</h2>
      <div className="contact-content grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          className="contact-info bg-gray-800 p-6 rounded-lg"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-2xl text-primary" />
            <h3 className="text-xl font-semibold">Email</h3>
          </div>
          <a 
            href="mailto:aanuragtrivedi007@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            aanuragtrivedi007@gmail.com
          </a>
        </motion.div>
        
        <motion.div 
          className="social-links bg-gray-800 p-6 rounded-lg"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold mb-4">Social Media</h3>
          <div className="flex gap-4">
            <a 
              href="https://twitter.com/anuragtrivedi07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-[#1DA1F2] hover:opacity-80 transition-opacity"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.linkedin.com/in/anuragtrivedi007/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-[#0A66C2] hover:opacity-80 transition-opacity"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}