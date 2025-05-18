import { Github, Twitter, MessageCircle } from "lucide-react";
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
        title: "Subscribed!",
        description: "You've been added to our mailing list.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Failed to subscribe",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-primary text-2xl font-ubuntu font-bold">Termix</span>
              <span className="text-white text-lg ml-1">.dev</span>
            </div>
            <p className="text-gray-300 mb-4">
              An interactive Linux OS designed specifically for learning, 
              making Linux accessible to everyone.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors duration-300"
                aria-label="Discord"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Site Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#screenshots" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Screenshots
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Download
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on Termix development.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div>
                <label htmlFor="footerEmail" className="sr-only">Email Address</label>
                <Input
                  type="email"
                  id="footerEmail"
                  name="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isPending}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-white font-bold hover:bg-primary/90"
                disabled={isPending}
              >
                {isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Termix Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
