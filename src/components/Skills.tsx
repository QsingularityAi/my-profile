import { motion } from 'framer-motion';
import AnimatedSection from './shared/AnimatedSection';
import { FaPython, FaJs, FaDocker, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiMlflow } from 'react-icons/si';

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      icon: <FaPython />,
      items: ["Python", "C", "JavaScript"],
      color: "bg-blue-500"
    },
    {
      category: "ML/AI",
      icon: <SiTensorflow />,
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"],
      color: "bg-green-500"
    },
    {
      category: "MLOps",
      icon: <FaDocker />,
      items: ["MLflow", "ClearML", "Docker", "Kubernetes"],
      color: "bg-purple-500"
    },
    {
      category: "Databases",
      icon: <FaDatabase />,
      items: ["MongoDB", "PostgreSQL", "Neo4j", "VectorDB"],
      color: "bg-yellow-500"
    },
    {
      category: "Cloud",
      icon: <FaCloud />,
      items: ["Azure", "GCP"],
      color: "bg-cyan-500"
    }
  ];

  return (
    <AnimatedSection className="skills-section">
      <h2 className="text-3xl font-bold mb-8">Technical Expertise</h2>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            className={`skill-category ${skillGroup.color} bg-opacity-10 p-6 rounded-xl`}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{skillGroup.icon}</span>
              <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
            </div>
            <div className="skill-items">
              {skillGroup.items.map((skill) => (
                <motion.span
                  key={skill}
                  className={`skill-tag ${skillGroup.color} bg-opacity-20`}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}