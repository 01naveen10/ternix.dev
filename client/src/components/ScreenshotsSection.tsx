import { motion } from "framer-motion";

const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-ubuntu font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Screenshots
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A glimpse of the Termix experience, showcasing our intuitive interface and learning tools.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Screenshot 1 */}
          <motion.div 
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
              alt="Termix Desktop Environment" 
              className="w-full"
            />
            <div className="p-4 bg-background">
              <h3 className="font-ubuntu font-bold text-xl mb-2">Modern Desktop Environment</h3>
              <p className="text-gray-600">
                Familiar and clean interface based on Linux Mint with Termix educational enhancements.
              </p>
            </div>
          </motion.div>
          
          {/* Screenshot 2 */}
          <motion.div 
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
              alt="Termix Learning Terminal" 
              className="w-full"
            />
            <div className="p-4 bg-background">
              <h3 className="font-ubuntu font-bold text-xl mb-2">Interactive Learning Terminal</h3>
              <p className="text-gray-600">
                Special terminal with interactive lessons, hints, and real-time feedback as you practice.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
