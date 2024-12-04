import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillCardProps {
  category: string;
  icon: ReactNode;
  items: string[];
  color: string;
}

export default function SkillCard({ category, icon, items, color }: SkillCardProps) {
  return (
    <motion.div
      className={`${color} bg-opacity-10 p-6 rounded-xl`}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-semibold">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <motion.span
            key={skill}
            className={`${color} bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium`}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}