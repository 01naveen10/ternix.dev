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
    title: "Case #1: The Vanishing Files",
    description: "Critical evidence has mysteriously disappeared from a suspect's laptop. As a digital detective, you'll navigate hidden directories, reveal concealed files, and recover deleted evidence to track down the culprit.",
    status: "AVAILABLE AT LAUNCH",
    link: "https://ternix.dev/cases/vanishing-files"
  },
  {
    icon: <Search size={40} />,
    title: "Case #2: The Encrypted Message",
    description: "A suspicious encoded message has been intercepted. Search through intercepted communications, analyze file patterns, and crack the encryption to reveal a plot that threatens national security.",
    status: "AVAILABLE AT LAUNCH",
    link: "https://ternix.dev/cases/encrypted-message"
  },
  {
    icon: <UserPlus size={40} />,
    title: "Case #3: The Insider Threat",
    description: "Someone in the organization is leaking classified information. Create undercover identities, manage access permissions, and infiltrate secured systems to unmask the corporate spy before more damage is done.",
    status: "COMING SOON",
    link: "https://ternix.dev/cases/insider-threat"
  },
  {
    icon: <FileLock size={40} />,
    title: "Case #4: The Remote Breach",
    description: "A high-security server has been compromised. Establish secure connections to breach sites, transfer evidence securely, and follow the digital breadcrumbs to identify the sophisticated attack vector.",
    status: "IN DEVELOPMENT",
    link: "https://ternix.dev/cases/remote-breach"
  },
  {
    icon: <Folder size={40} />,
    title: "Case #5: The Data Heist",
    description: "Valuable intellectual property has been stolen and scattered across multiple systems. Recover fragmented archives, extract compressed evidence, and reconstruct the timeline of this elaborate digital heist.",
    status: "IN DEVELOPMENT",
    link: "https://ternix.dev/cases/data-heist"
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Case #6: The Cyber Syndicate",
    description: "A notorious hacking group has left digital fingerprints across the dark web. Deploy your full arsenal of investigative techniques to infiltrate their network, expose their operations, and bring down the entire organization.",
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
              <div className="mt-4 text-xs font-mono pt-3 border-t border-muted flex justify-between items-center">
                <code className="text-primary">STATUS: {feature.status}</code>
                <a href={feature.link} className="text-accent hover:text-primary transition-colors">CASE_DETAILS →</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
