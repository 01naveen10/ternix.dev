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
              Ternix is an immersive, story-driven Linux learning platform that puts you in the role of a digital detective.
              Log in to suspect terminals, solve crimes, and learn Linux commands as part of your investigative toolkit.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Our mission is to transform Linux learning from intimidating technical exercises into 
              engaging criminal investigations that guide you through command usage in a natural, contextual way.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Upon installation, you'll be assigned to the Cyber Investigation Agency, given cases to solve, 
              and guided through Linux commands as tools to uncover evidence, analyze data, and catch perpetrators.
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
                  <p className="text-primary mb-1">[TERMINAL SESSION - CASE #1: THE VANISHING FILES]</p>
                  <p className="text-muted-foreground mb-1">{'>'} Good morning, Officer. We need your help with a data theft case.</p>
                  <p className="text-muted-foreground mb-1">{'>'} Suspect claims files were deleted by someone else. Let's investigate.</p>
                  <p className="text-secondary mb-1">$ cd /suspect/laptop</p>
                  <p className="text-secondary mb-1">$ ls -la</p>
                  <p className="text-muted-foreground mb-1">total 28</p>
                  <p className="text-muted-foreground mb-1">drwxr-xr-x 3 suspect users 4096 May 15 09:23 .</p>
                  <p className="text-muted-foreground mb-1">drwxr-xr-x 5 root    root  4096 May 15 09:20 ..</p>
                  <p className="text-muted-foreground mb-1">-rw-r--r-- 1 suspect users 3284 May 15 09:21 browser_history.txt</p>
                  <p className="text-muted-foreground mb-1">drwx------ 2 suspect users 4096 May 15 08:42 .hidden_dir</p>
                  <p className="text-secondary mb-1">$ cd .hidden_dir</p>
                  <p className="text-accent mb-1">{'>'} SYSTEM: Permission denied. Try using chmod or sudo.</p>
                  <p className="text-secondary mb-1">$ sudo chmod +rx .hidden_dir</p>
                  <p className="text-accent">{'>'} CLUE FOUND: Accessing hidden directory revealed deleted evidence...</p>
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
