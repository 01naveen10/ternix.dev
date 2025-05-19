import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function DemoSection() {
  const [, navigate] = useLocation();

  return (
    <section id="demo" className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm mb-2 inline-block">
            INTERACTIVE_DEMO
          </span>
          <h2 className="text-3xl font-ubuntu font-bold text-foreground">
            Try Ternix in Your Browser
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Experience how Ternix combines Linux learning with detective work.
          </p>
        </motion.div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={() => navigate("/demo")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm flex items-center px-6 py-3"
          >
            <Terminal className="mr-2" size={16} />
            Try the Interactive Terminal Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
