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
    title: "Chapter 1: The Vanishing Files",
    description: "Solve the case of mysteriously disappearing data by mastering navigation (cd, ls), file permissions (chmod), and text editing (vim) to recover critical evidence.",
    status: "AVAILABLE AT LAUNCH",
    link: "https://ternix.dev/cases/vanishing-files"
  },
  {
    icon: <Search size={40} />,
    title: "Chapter 2: The Encrypted Message",
    description: "Decrypt a hidden communication by using grep, find, and date commands to analyze files, identify modification patterns, and extract concealed information.",
    status: "AVAILABLE AT LAUNCH",
    link: "https://ternix.dev/cases/encrypted-message"
  },
  {
    icon: <UserPlus size={40} />,
    title: "Chapter 3: The Insider Threat",
    description: "Identify a corporate spy by learning user management (useradd, usermod, passwd) to investigate suspicious accounts and access restricted systems.",
    status: "COMING SOON",
    link: "https://ternix.dev/cases/insider-threat"
  },
  {
    icon: <FileLock size={40} />,
    title: "Chapter 4: The Remote Breach",
    description: "Trace a network intrusion using SSH, SCP, and secure tunneling techniques to access compromised servers and collect network evidence.",
    status: "IN DEVELOPMENT",
    link: "https://ternix.dev/cases/remote-breach"
  },
  {
    icon: <Folder size={40} />,
    title: "Chapter 5: The Data Heist",
    description: "Recover stolen intellectual property by mastering archiving (tar, zip), compression, and data management techniques to reconstruct fragmented evidence.",
    status: "IN DEVELOPMENT",
    link: "https://ternix.dev/cases/data-heist"
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Chapter 6: The Cyber Syndicate",
    description: "Take down a hacking organization by combining all your Linux skills in a complex investigation that spans multiple systems and requires advanced techniques.",
    status: "PLANNED",
    link: "https://ternix.dev/cases/cyber-syndicate"
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
