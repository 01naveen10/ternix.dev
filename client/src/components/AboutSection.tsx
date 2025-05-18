import { motion } from "framer-motion";
import { Github, Twitter, MessageCircle, FileDigit, Code, Fingerprint } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-ubuntu font-bold mb-4 text-foreground">About Ternix</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Ternix is an immersive, story-driven Linux learning platform disguised as a detective game.
              Solve digital crimes while mastering essential command line skills.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Our mission is to transform Linux learning from intimidating technical exercises into 
              engaging missions that feel like solving a cybersecurity case.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Each challenge introduces new commands naturally within the storyline, building your 
              skills progressively as you solve complex digital mysteries.
            </p>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-accent hover:text-primary transition-colors duration-300" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="#" className="text-accent hover:text-primary transition-colors duration-300" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-accent hover:text-primary transition-colors duration-300" aria-label="Discord">
                <MessageCircle size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-lg shadow-lg p-6 border border-muted">
              <h3 className="font-ubuntu font-bold text-xl mb-6 text-foreground flex items-center">
                <FileDigit className="text-primary mr-2" size={24} />
                <span>Case File: Learning Through Investigation</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Code className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Command-Driven Gameplay</h4>
                    <p className="text-muted-foreground">
                      Progress through cases by mastering Linux commands that unlock new evidence and story elements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Fingerprint className="text-accent mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Evidence-Based Learning</h4>
                    <p className="text-muted-foreground">
                      Each file, directory, and access point contains clues that teach you Linux skills as you investigate.
                    </p>
                  </div>
                </div>
                
                <div className="font-mono text-xs bg-background p-3 rounded border border-muted">
                  <p className="text-primary mb-1"># Sample investigation command sequence</p>
                  <p className="text-secondary mb-1">$ ls -la /evidence/crime_scene</p>
                  <p className="text-muted-foreground mb-1">total 24</p>
                  <p className="text-muted-foreground mb-1">drwxr-xr-x 2 detective cybersec 4096 May 12 14:23 .</p>
                  <p className="text-muted-foreground mb-1">drwxr-xr-x 5 detective cybersec 4096 May 12 14:20 ..</p>
                  <p className="text-muted-foreground mb-1">-rw-r--r-- 1 root root 3284 May 12 14:21 access_logs.txt</p>
                  <p className="text-muted-foreground mb-1">-rw-r----- 1 root cybersec 2048 May 12 13:45 suspect_data.enc</p>
                  <p className="text-secondary mb-1">$ sudo cat /evidence/crime_scene/access_logs.txt</p>
                  <p className="text-accent">CLUE FOUND: Unauthorized access at 13:42...</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
