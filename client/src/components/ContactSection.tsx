import { motion } from "framer-motion";
import { Mail, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-ubuntu font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have questions or want to contribute to the Termix project? We'd love to hear from you.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-background rounded-lg p-6 shadow-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-ubuntu font-bold mb-4">Get in Touch</h3>
            <p className="mb-6 text-gray-600">
              Send us a message and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-primary mr-3" size={20} />
                <a 
                  href="mailto:termix.os.project@gmail.com" 
                  className="text-accent hover:text-primary transition-colors duration-300"
                >
                  termix.os.project@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Github className="text-primary mr-3" size={20} />
                <a 
                  href="#" 
                  className="text-accent hover:text-primary transition-colors duration-300"
                >
                  github.com/termix-project
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="text-primary mr-3" size={20} />
                <a 
                  href="#" 
                  className="text-accent hover:text-primary transition-colors duration-300"
                >
                  Join our Discord community
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-background rounded-lg p-6 shadow-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-ubuntu font-bold mb-4">Contribute</h3>
            <p className="mb-6 text-gray-600">
              Termix is an open-source project. We welcome contributions from developers, 
              content creators, and Linux enthusiasts.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Ways to Contribute:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Code contributions</li>
                  <li>Documentation improvements</li>
                  <li>Creating learning content</li>
                  <li>Testing and reporting bugs</li>
                  <li>Spreading the word</li>
                </ul>
              </div>
              
              <Button 
                className="mt-4 bg-primary text-white hover:bg-primary/90"
                asChild
              >
                <a href="#">Learn How to Contribute</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
