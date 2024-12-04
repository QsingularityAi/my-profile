import { FaPython, FaJs, FaDocker, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiMlflow } from 'react-icons/si';

export const skillsData = [
  {
    category: "Languages",
    icon: FaPython,
    items: ["Python", "C", "JavaScript"],
    color: "bg-blue-500"
  },
  {
    category: "ML/AI",
    icon: SiTensorflow,
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"],
    color: "bg-green-500"
  },
  {
    category: "MLOps",
    icon: FaDocker,
    items: ["MLflow", "ClearML", "Docker", "Kubernetes"],
    color: "bg-purple-500"
  },
  {
    category: "Databases",
    icon: FaDatabase,
    items: ["MongoDB", "PostgreSQL", "Neo4j", "VectorDB"],
    color: "bg-yellow-500"
  },
  {
    category: "Cloud",
    icon: FaCloud,
    items: ["Azure", "GCP"],
    color: "bg-cyan-500"
  }
];