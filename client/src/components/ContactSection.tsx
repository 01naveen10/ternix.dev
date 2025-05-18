import { motion } from "framer-motion";
import { Mail, Github, MessageCircle, Shield, Code, FileCode, BugPlay, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-ubuntu font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-primary">[</span> Command Center <span className="text-primary">]</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect with mission control or join our operative network to support Ternix development.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-card rounded-lg p-6 shadow-md border border-muted"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 bg-muted rounded-md text-xs font-mono text-accent mb-4">
              <Shield size={14} className="mr-2" />
              <span>SECURE COMMUNICATIONS</span>
            </div>
            <h3 className="text-xl font-ubuntu font-bold mb-4 text-foreground">Mission Control</h3>
            <p className="mb-6 text-muted-foreground">
              Direct communication channels for inquiries, support, and mission-critical information.
            </p>
            
            <div className="space-y-4">
              <div className="bg-background rounded-md p-3 border border-muted flex items-center">
                <div className="bg-primary/10 p-2 rounded mr-3">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono mb-1">SECURE EMAIL</div>
                  <a 
                    href="mailto:termix.os.project@gmail.com" 
                    className="text-accent hover:text-primary transition-colors duration-300 text-sm"
                  >
                    termix.os.project@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="bg-background rounded-md p-3 border border-muted flex items-center">
                <div className="bg-secondary/10 p-2 rounded mr-3">
                  <Github className="text-secondary" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono mb-1">CODE REPOSITORY</div>
                  <a 
                    href="https://github.com/01naveen10/ternix.dev" 
                    className="text-accent hover:text-primary transition-colors duration-300 text-sm"
                  >
                    github.com/01naveen10/ternix.dev
                  </a>
                </div>
              </div>
              
              <div className="bg-background rounded-md p-3 border border-muted flex items-center">
                <div className="bg-accent/10 p-2 rounded mr-3">
                  <MessageCircle className="text-accent" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono mb-1">AGENT NETWORK</div>
                  <a 
                    href="#" 
                    className="text-accent hover:text-primary transition-colors duration-300 text-sm"
                  >
                    Join our Discord community
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-card rounded-lg p-6 shadow-md border border-muted"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 bg-muted rounded-md text-xs font-mono text-secondary mb-4">
              <Code size={14} className="mr-2" />
              <span>OPERATIVE RECRUITMENT</span>
            </div>
            <h3 className="text-xl font-ubuntu font-bold mb-4 text-foreground">Join Our Network</h3>
            <p className="mb-6 text-muted-foreground">
              Ternix is an open-source operation. We welcome contributions from programmers, 
              story writers, and cybersecurity enthusiasts.
            </p>
            
            <div className="space-y-4">
              <div className="bg-background rounded-md p-4 border border-muted">
                <h4 className="font-bold text-foreground text-lg mb-3">Field Operations:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FileCode size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Code development & feature implementation</span>
                  </li>
                  <li className="flex items-start">
                    <BugPlay size={16} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Testing protocols & bug reports</span>
                  </li>
                  <li className="flex items-start">
                    <Mail size={16} className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Mission scenario & learning content creation</span>
                  </li>
                  <li className="flex items-start">
                    <Share2 size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Network expansion & awareness campaigns</span>
                  </li>
                </ul>
              </div>
              
              <Button 
                className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full"
                asChild
              >
                <a href="#" className="flex items-center justify-center">
                  <Shield size={16} className="mr-2" />
                  <span>Apply For Operative Status</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
