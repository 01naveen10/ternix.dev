import { 
  Terminal, 
  ShieldCheck, 
  Trophy, 
  Folder, 
  FileLock, 
  Users,
  Search,
  UserPlus 
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Terminal size={40} />,
    title: "Chapter 1: Basic Investigation",
    description: "Learn navigation, file permissions, and text editing as you explore crime scene evidence. Use cd, ls, chmod, vim and other basic commands."
  },
  {
    icon: <Search size={40} />,
    title: "Chapter 2: Digital Forensics",
    description: "Master file analysis with grep, find, and date commands to uncover clues. Identify when files were modified and search for hidden evidence."
  },
  {
    icon: <UserPlus size={40} />,
    title: "Chapter 3: Identity & Access",
    description: "Learn user management with useradd, usermod, and passwd to establish aliases and infiltrate suspect systems with proper credentials."
  },
  {
    icon: <FileLock size={40} />,
    title: "Chapter 4: Secure Communications",
    description: "Access remote systems with SSH, SCP, and secure tunnels to retrieve evidence while maintaining operational security."
  },
  {
    icon: <Folder size={40} />,
    title: "Chapter 5: Evidence Collection",
    description: "Learn archiving, compression, and data management to properly collect and preserve digital evidence for your case."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Chapter 6: Final Mission",
    description: "Apply all learned skills in a complex case that requires combining commands and techniques from previous chapters to solve the mystery."
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
    <section id="features" className="py-16 bg-card border-y border-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-ubuntu font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mission Chapters
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Each chapter introduces new Linux skills through an engaging detective storyline that builds your command-line expertise.
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
              className="feature-card bg-background rounded-lg p-6 shadow-md border border-muted"
              variants={item}
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-ubuntu font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className="mt-4 text-xs font-mono text-primary pt-3 border-t border-muted">
                <code>MISSION_STATUS: AWAITING_OFFICER</code>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
