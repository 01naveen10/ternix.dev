import { 
  Terminal, 
  ShieldCheck, 
  Trophy, 
  GitFork, 
  BookOpen, 
  Users 
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Terminal size={40} />,
    title: "Interactive Terminal Lessons",
    description: "Step-by-step guided terminal lessons with real-time feedback and hints to help you master command line skills."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Safe Learning Environment",
    description: "Practice system administration and advanced commands in a safe, isolated environment without risking your main system."
  },
  {
    icon: <Trophy size={40} />,
    title: "Achievement System",
    description: "Earn badges and track your progress as you complete challenges and master new Linux skills and concepts."
  },
  {
    icon: <GitFork size={40} />,
    title: "Real-world Projects",
    description: "Apply your skills with practical projects that simulate real-world scenarios and system administration tasks."
  },
  {
    icon: <BookOpen size={40} />,
    title: "Comprehensive Documentation",
    description: "Access detailed documentation and references right from the desktop to support your learning journey."
  },
  {
    icon: <Users size={40} />,
    title: "Community Support",
    description: "Connect with other learners and experienced Linux users for help, collaboration, and knowledge sharing."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-ubuntu font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover how Termix makes learning Linux intuitive and engaging with these powerful features.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card bg-background rounded-lg p-6 shadow-md"
              variants={item}
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-ubuntu font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
