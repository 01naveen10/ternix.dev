import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-background border-b border-muted py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Terminal size={36} className="text-primary mr-3" />
              <span className="text-accent font-mono text-lg">mission_os</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-ubuntu font-bold mb-4 text-foreground">
              Solve Cases.<br/>Master Linux.
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Ternix is an immersive, story-driven Linux learning experience. 
              Become a digital detective and solve cases using command line skills.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base"
                size="lg"
                asChild
              >
                <a href="#download">Join the Investigation</a>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold text-base"
                size="lg"
                asChild
              >
                <a href="#features">View Mission Details</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card rounded-lg shadow-xl p-4 border border-muted">
              <div className="bg-background rounded-t-md p-2 flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span className="text-muted-foreground font-mono text-sm">ternix@cybersec:~</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <p className="text-primary mb-2">[SYSTEM] <span className="text-foreground">Mission initialization...</span></p>
                <p className="text-foreground mb-2">Good day, officer. It seems you've forgotten your details.</p>
                <p className="text-foreground mb-2">Please identify yourself:</p>
                <p className="flex"><span className="text-secondary mr-2">$</span> <span className="text-accent">name</span><span className="text-primary animate-pulse">_</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
