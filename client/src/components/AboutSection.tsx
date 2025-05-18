import { motion } from "framer-motion";
import { Github, Twitter, MessageCircle } from "lucide-react";

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
            <h2 className="text-3xl font-ubuntu font-bold mb-4">About Termix</h2>
            <p className="text-lg mb-6">
              Termix is an educational Linux distribution built on the solid foundation of Linux Mint, 
              but specifically tailored for beginners and those looking to expand their Linux skills.
            </p>
            <p className="text-lg mb-6">
              Our mission is to make Linux learning accessible, interactive, and enjoyable for everyone - 
              from complete beginners to those looking to deepen their command line expertise.
            </p>
            <p className="text-lg mb-6">
              Termix combines a familiar desktop environment with specialized learning tools, 
              guided challenges, and a supportive community to help you become proficient in Linux.
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
            className="md:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern Linux workstation" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Learning Linux on Termix" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
