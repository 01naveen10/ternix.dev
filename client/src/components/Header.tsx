import { useState, useEffect } from "react";
import { Menu, X, Terminal, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling state to add shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-background sticky top-0 z-50 transition-shadow duration-300 border-b border-muted ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <Terminal size={24} className="text-primary mr-2" />
            <span className="text-primary text-2xl font-ubuntu font-bold">Ternix</span>
            <span className="text-accent text-lg ml-1">.dev</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
            Missions
          </a>
          <a href="#about" className="nav-link text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
            About
          </a>
          <a href="#screenshots" className="nav-link text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
            Previews
          </a>
          <a href="#download" className="nav-link text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
            Register
          </a>
          <a href="#contact" className="nav-link text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
            Command
          </a>
          <Button 
            size="sm" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex items-center"
            asChild
          >
            <a href="https://ternix.dev">
              <Shield size={16} className="mr-1" />
              <span>Join Agency</span>
            </a>
          </Button>
          <Button 
            size="sm" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center ml-3"
            asChild
          >
            <a href="https://ternix.dev/download">
              <span>Download Ternix</span>
            </a>
          </Button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu} 
          className="md:hidden text-muted-foreground hover:text-primary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-card shadow-md border-t border-muted ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-xs text-primary font-mono mr-2">&gt;</span>
              <span>Mission Chapters</span>
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-xs text-primary font-mono mr-2">&gt;</span>
              <span>About Termix</span>
            </a>
            <a 
              href="#screenshots" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-xs text-primary font-mono mr-2">&gt;</span>
              <span>Mission Previews</span>
            </a>
            <a 
              href="#download" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-xs text-primary font-mono mr-2">&gt;</span>
              <span>Join Investigation</span>
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-xs text-primary font-mono mr-2">&gt;</span>
              <span>Command Center</span>
            </a>
            <Button 
              className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <a href="https://ternix.dev">
                <Shield size={16} className="mr-1" />
                <span>Join the Agency</span>
              </a>
            </Button>
            
            <Button 
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <a href="https://ternix.dev/download">
                <span>Download Ternix</span>
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
