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
    description: "Critical evidence has vanished from a suspect's laptop. After logging in, you'll receive: 'Officer, we need to access hidden directories. Try using cd and ls to navigate. These files are locked - we'll need chmod to reveal what's been concealed.'",
    commandsLearned: "cd, ls, chmod, vim, find, mkdir",
    status: "AVAILABLE AT LAUNCH",
    link: "https://ternix.dev/cases/vanishing-files"
  },
  {
    icon: <Search size={40} />,
    title: "Case #2: The Encrypted Message",
    description: "A suspicious encoded message has been intercepted. Your terminal prompts: 'We've got partial data. Use grep to search these log files for patterns. The dates look suspicious - check when these were last modified with date and stat commands.'",
    commandsLearned: "grep, find, cat, date, stat, sort",
    status: "AVAILABLE AT LAUNCH",
    link: "https://ternix.dev/cases/encrypted-message"
  },
  {
    icon: <UserPlus size={40} />,
    title: "Case #3: The Insider Threat",
    description: "A corporate spy is leaking classified info. Terminal alert: 'We need to create an undercover identity to access their system. Use useradd to create a profile, and passwd to set credentials. Check who else has access with usermod.'",
    commandsLearned: "useradd, usermod, passwd, groups, id, sudo",
    status: "COMING SOON",
    link: "https://ternix.dev/cases/insider-threat"
  },
  {
    icon: <FileLock size={40} />,
    title: "Case #4: The Remote Breach",
    description: "A secure server has been compromised. Your mission brief: 'We need to connect to the breached system remotely. Establish an SSH connection to the server, then use SCP to securely transfer evidence files without alerting the intruder.'",
    commandsLearned: "ssh, scp, rsync, netstat, ifconfig, ping",
    status: "IN DEVELOPMENT",
    link: "https://ternix.dev/cases/remote-breach"
  },
  {
    icon: <Folder size={40} />,
    title: "Case #5: The Data Heist",
    description: "Valuable IP has been stolen and scattered. Terminal message: 'The thief fragmented the stolen data into archives. Use tar and zip to extract these compressed files, then reconstruct the timeline of this elaborate digital heist.'",
    commandsLearned: "tar, zip, unzip, gzip, du, df",
    status: "IN DEVELOPMENT",
    link: "https://ternix.dev/cases/data-heist"
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Case #6: The Cyber Syndicate",
    description: "A hacking group has left digital fingerprints across systems. Senior agent message: 'This is your final test. Use everything you've learned to track their network, expose their operations, and bring down the entire organization.'",
    commandsLearned: "All previous commands plus advanced techniques",
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
              <div className="mt-3 text-xs font-mono pt-2 border-t border-muted">
                <div className="flex items-center mb-2">
                  <span className="text-accent">COMMANDS_LEARNED:</span> 
                  <code className="ml-2 text-primary">{feature.commandsLearned}</code>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-primary">STATUS: {feature.status}</code>
                  <a href={feature.link} className="text-accent hover:text-primary transition-colors">CASE_DETAILS →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
