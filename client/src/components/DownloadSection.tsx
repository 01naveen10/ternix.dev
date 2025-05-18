import { motion } from "framer-motion";
import { useSubscribe } from "@/hooks/use-subscribe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AlertCircle, Check } from "lucide-react";
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
    <section id="download" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-ubuntu font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Coming Soon
        </motion.h2>
        <motion.p 
          className="text-xl mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Termix is currently under development. Sign up to receive updates and be the first to know when it's ready for download.
        </motion.p>
        
        <motion.div 
          className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-primary text-2xl font-ubuntu font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Join our mailing list to receive development updates and early access opportunities.
          </p>
          
          {!isSuccess ? (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-gray-900"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isPending}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                disabled={isPending}
              >
                {isPending ? "Subscribing..." : "Subscribe for Updates"}
              </Button>
              <p className="text-sm text-gray-500">
                We respect your privacy and will never share your information.
              </p>
            </form>
          ) : (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
              <Check size={20} className="mr-2" />
              <span>Thanks for subscribing! We'll keep you updated on Termix development.</span>
            </div>
          )}
          
          {isError && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {error instanceof Error ? error.message : "Failed to subscribe. Please try again."}
              </AlertDescription>
            </Alert>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
