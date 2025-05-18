import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-primary text-3xl font-ubuntu font-bold">Termix</span>
            <span className="text-secondary text-lg ml-1">.dev</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link text-secondary hover:text-primary transition-colors duration-300 font-medium">
            Features
          </a>
          <a href="#about" className="nav-link text-secondary hover:text-primary transition-colors duration-300 font-medium">
            About
          </a>
          <a href="#screenshots" className="nav-link text-secondary hover:text-primary transition-colors duration-300 font-medium">
            Screenshots
          </a>
          <a href="#download" className="nav-link text-secondary hover:text-primary transition-colors duration-300 font-medium">
            Download
          </a>
          <a href="#contact" className="nav-link text-secondary hover:text-primary transition-colors duration-300 font-medium">
            Contact
          </a>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu} 
          className="md:hidden text-secondary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-secondary hover:text-primary transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#about" 
              className="text-secondary hover:text-primary transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#screenshots" 
              className="text-secondary hover:text-primary transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Screenshots
            </a>
            <a 
              href="#download" 
              className="text-secondary hover:text-primary transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </a>
            <a 
              href="#contact" 
              className="text-secondary hover:text-primary transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
