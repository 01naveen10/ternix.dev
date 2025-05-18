import { Github, Twitter, MessageCircle, Terminal, Shield, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSubscribe } from "@/hooks/use-subscribe";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { subscribe, isPending } = useSubscribe();
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    try {
      await subscribe({ email });
      setEmail("");
      toast({
        title: "Connection Established",
        description: "Your secure channel has been registered successfully.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: error instanceof Error ? error.message : "Communication error. Please retry.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-muted py-12 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Terminal size={24} className="text-primary mr-2" />
              <span className="text-primary text-2xl font-ubuntu font-bold">Ternix</span>
              <span className="text-accent text-lg ml-1">.dev</span>
            </div>
            <p className="text-muted-foreground mb-4">
              An immersive detective-themed Linux learning platform that transforms command-line education into engaging missions and investigations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Discord"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground text-lg font-ubuntu font-bold mb-4 flex items-center">
              <Shield size={18} className="text-secondary mr-2" />
              <span>Mission Briefings</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center">
                  <span className="text-xs text-primary font-mono mr-2">&gt;</span>
                  <span>Mission Chapters</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center">
                  <span className="text-xs text-primary font-mono mr-2">&gt;</span>
                  <span>About Termix</span>
                </a>
              </li>
              <li>
                <a href="#screenshots" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center">
                  <span className="text-xs text-primary font-mono mr-2">&gt;</span>
                  <span>Mission Previews</span>
                </a>
              </li>
              <li>
                <a href="#download" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center">
                  <span className="text-xs text-primary font-mono mr-2">&gt;</span>
                  <span>Join Investigation</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center">
                  <span className="text-xs text-primary font-mono mr-2">&gt;</span>
                  <span>Command Center</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground text-lg font-ubuntu font-bold mb-4 flex items-center">
              <Mail size={18} className="text-accent mr-2" />
              <span>Secure Network</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our encrypted channel for classified mission updates and early access codes.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <Input
                  type="email"
                  id="footerEmail"
                  name="email"
                  placeholder="Your secure email"
                  className="w-full px-3 py-2 bg-background border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary text-foreground pl-9"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isPending}
                />
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90"
                disabled={isPending}
              >
                {isPending ? "Encrypting..." : "Establish Connection"}
              </Button>
            </form>
            <div className="mt-3 text-xs text-muted-foreground flex items-center">
              <Shield size={12} className="mr-1" />
              <span>End-to-end secure communication protocol</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-muted text-center text-muted-foreground font-mono text-xs">
          <p>SYSTEM:// &copy; {new Date().getFullYear()} Ternix Project <span className="text-primary">|</span> ACCESS_LEVEL: PUBLIC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
