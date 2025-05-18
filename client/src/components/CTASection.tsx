import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-ubuntu font-bold mb-4">Ready to Master Linux?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're a complete beginner or looking to expand your skills, 
                Termix provides the tools and environment you need to become proficient with Linux.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-primary text-white hover:bg-primary/90 font-bold"
                  size="lg"
                  asChild
                >
                  <a href="#features">Explore Features</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold"
                  size="lg"
                  asChild
                >
                  <a href="#download">Get Notified</a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
                alt="Technology background" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
