import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
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
        className="w-full rounded-lg shadow-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />
    </motion.header>
  );
}