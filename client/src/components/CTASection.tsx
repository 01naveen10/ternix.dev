import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Terminal, ChevronsRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-card border-y border-muted">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-background rounded-lg shadow-lg p-8 md:p-12 border border-muted"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <div className="bg-muted inline-flex items-center px-3 py-1 rounded mb-4 text-accent font-mono text-sm">
                <Shield size={14} className="mr-2" />
                <span>CYBERSEC MISSION BRIEFING</span>
              </div>
              <h2 className="text-3xl font-ubuntu font-bold mb-4 text-foreground">Ready to Join the Investigation?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're a command line rookie or a seasoned operative, 
                Ternix provides the perfect training environment to master Linux skills through engaging detective missions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
                  size="lg"
                  asChild
                >
                  <a href="#features" className="flex items-center">
                    <Terminal size={18} className="mr-2" />
                    <span>View Mission Details</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold"
                  size="lg"
                  asChild
                >
                  <a href="#download" className="flex items-center">
                    <span>Join the Agency</span>
                    <ChevronsRight size={18} className="ml-1" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-card rounded-lg p-5 shadow-lg border border-muted relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                <div className="text-foreground font-mono mb-4 flex items-center">
                  <Terminal size={20} className="text-primary mr-2" />
                  <span className="font-bold">MISSION_STATUS</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1 font-mono">AGENT RECRUITMENT</div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1 font-mono">MISSION PREPARATION</div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1 font-mono">SYSTEM DEPLOYMENT</div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-muted font-mono text-xs text-muted-foreground">
                  <p>LAUNCH WINDOW: <span className="text-primary">INITIATING SOON</span></p>
                  <p className="mt-1">CLEARANCE REQUIRED: <span className="text-accent">LEVEL 1 ACCESS</span></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
