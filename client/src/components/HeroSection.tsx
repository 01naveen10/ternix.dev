import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-ubuntu font-bold mb-4">
              Learn Linux Interactively
            </h1>
            <p className="text-xl mb-8">
              Termix is a custom Linux distribution designed specifically for learning. 
              Explore, experiment, and master Linux in a safe environment.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-white text-primary hover:bg-gray-100 font-bold text-base"
                size="lg"
                asChild
              >
                <a href="#download">Get Started</a>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-base"
                size="lg"
                asChild
              >
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Termix OS on a laptop" 
              className="rounded-lg shadow-xl w-full" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
