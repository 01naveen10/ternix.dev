import { motion } from "framer-motion";
import { useSubscribe } from "@/hooks/use-subscribe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AlertCircle, Check, FileWarning, Mail, Lock, Terminal } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DownloadSection = () => {
  const { subscribe, isPending, isSuccess, isError, error } = useSubscribe();
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribe({ email });
    }
  };

  return (
    <section id="download" className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-ubuntu font-bold mb-4 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary">[</span> Recruitment In Progress <span className="text-secondary">]</span>
        </motion.h2>
        <motion.p 
          className="text-xl mb-10 max-w-3xl mx-auto text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ternix is currently assembling its detective agency. Join our secure network to receive mission briefings and be among the first to access the program.
        </motion.p>
        
        <motion.div 
          className="max-w-lg mx-auto bg-card border border-muted rounded-lg shadow-xl p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-muted py-2 px-4 rounded-md mb-6 text-muted-foreground font-mono text-sm flex items-center">
            <FileWarning size={18} className="text-accent mr-2" />
            <span>// CLASSIFIED COMMUNICATION CHANNEL</span>
          </div>
          
          <h3 className="text-primary text-2xl font-ubuntu font-bold mb-4 flex items-center justify-center">
            <Terminal className="mr-2" size={28} />
            <span>Secure Registration</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            Enter your contact details to receive mission briefings and early access codes.
          </p>
          
          {!isSuccess ? (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your secure email address"
                  className="w-full pl-10 py-3 bg-background border border-muted rounded-lg focus:ring-2 focus:ring-primary text-foreground"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isPending}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                disabled={isPending}
              >
                {isPending ? "Establishing Connection..." : "Register For Missions"}
              </Button>
              <div className="flex items-center text-muted-foreground">
                <Lock size={14} className="mr-2" />
                <p className="text-sm">
                  Secure channel. Your information will remain classified.
                </p>
              </div>
            </form>
          ) : (
            <div className="mt-4 p-4 bg-primary/20 text-primary rounded-lg flex items-center">
              <Check size={20} className="mr-2" />
              <span>Identity confirmed! Mission briefings will be transmitted to your secure channel.</span>
            </div>
          )}
          
          {isError && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {error instanceof Error ? error.message : "Connection failed. Retry transmission."}
              </AlertDescription>
            </Alert>
          )}
          
          <div className="mt-6 pt-6 border-t border-muted">
            <p className="text-muted-foreground text-sm">
              <span className="text-primary font-mono">[ADMIN]:</span> Termix launches soon. Your skills are needed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
