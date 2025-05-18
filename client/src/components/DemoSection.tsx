import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function DemoSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputText, setInputText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "[SYSTEM] Ternix OS v1.0.3 - Interactive Demo",
    "Welcome to the Ternix demo terminal. Try out some basic commands to explore.",
    "Type 'help' for available commands.",
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Define available commands
  const helpText = "Available commands: help, ls, cd, cat, clear, investigate";
  const filesListing = "Documents/  Photos/  case_files/  README.txt";
  const cdResponse = "Changed directory (simulated).";
  const catResponse = "File content displayed (simulated).";
  const investigateResponses = [
    "Accessing case files...", 
    "CASE #1: THE VANISHING FILES", 
    "Evidence has been deleted from the suspect's laptop.", 
    "Use 'ls -la' to look for hidden directories..."
  ];

  // Demo command scenarios
  const demoSteps = [
    { 
      prompt: "[ternix@cybersec ~]$ ", 
      command: "ls", 
      response: filesListing
    },
    { 
      prompt: "[ternix@cybersec ~]$ ", 
      command: "cd case_files", 
      response: cdResponse
    },
    { 
      prompt: "[ternix@cybersec case_files]$ ", 
      command: "ls -la", 
      response: "total 24\ndrwxr-xr-x 2 detective cybersec 4096 May 15 09:23 .\ndrwxr-xr-x 3 detective cybersec 4096 May 15 09:20 ..\n-rw-r--r-- 1 detective cybersec 2148 May 15 09:21 case_notes.txt\ndrwx------ 2 root root 4096 May 15 08:42 .evidence"
    },
    { 
      prompt: "[ternix@cybersec case_files]$ ", 
      command: "cd .evidence", 
      response: "Permission denied. This directory requires elevated privileges."
    },
    { 
      prompt: "[ternix@cybersec case_files]$ ", 
      command: "sudo chmod +rx .evidence", 
      response: "Password: ********\nPermissions modified successfully. The directory is now accessible."
    },
    { 
      prompt: "[ternix@cybersec case_files]$ ", 
      command: "cd .evidence", 
      response: "Directory accessed. You can now examine the hidden evidence."
    },
    { 
      prompt: "[ternix@cybersec .evidence]$ ", 
      command: "ls", 
      response: "deleted_logs.txt  encrypted_messages.gpg  access_timestamps.csv"
    },
    { 
      prompt: "[ternix@cybersec .evidence]$ ", 
      command: "cat deleted_logs.txt", 
      response: "CLUE FOUND: Unauthorized access detected at 02:14 AM from IP 192.168.1.45\nUser 'jsmith' attempted to delete system logs and evidence files.\nCase progress: 35% complete. Continue investigating with 'grep' and 'file' commands."
    }
  ];

  const handleCommand = () => {
    const command = inputText.trim().toLowerCase();
    
    if (command === "") return;
    
    // Add the command to terminal history
    setTerminalHistory(prev => [...prev, `${demoSteps[currentStep].prompt}${command}`]);
    
    // Process demo step
    if (command === demoSteps[currentStep].command) {
      // Show response for the current demo step
      if (demoSteps[currentStep].response === "CLEAR_COMMAND") {
        setTerminalHistory([]);
      } else {
        setTerminalHistory(prev => [...prev, demoSteps[currentStep].response]);
      }
      
      // Move to next step
      if (currentStep < demoSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Loop back to the first step when demo completes
        setCurrentStep(0);
        setTerminalHistory(prev => [...prev, "", "Demo completed! Try again or explore more commands."]);
      }
    } else {
      // For non-demo commands, provide generic responses
      if (command === "clear") {
        setTerminalHistory([]);
      } else if (command === "help") {
        setTerminalHistory(prev => [...prev, helpText]);
      } else if (command === "investigate") {
        // Handle the investigate command manually
        const newHistory = [...terminalHistory];
        for (const line of investigateResponses) {
          newHistory.push(line);
        }
        setTerminalHistory(newHistory);
      } else if (command === "ls") {
        setTerminalHistory(prev => [...prev, filesListing]);
      } else if (command === "cd") {
        setTerminalHistory(prev => [...prev, cdResponse]);
      } else if (command === "cat") {
        setTerminalHistory(prev => [...prev, catResponse]);
      } else {
        setTerminalHistory(prev => [...prev, `Command not found: ${command}. Type 'help' for available commands.`]);
      }
    }
    
    setInputText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand();
    }
  };

  // Auto-scroll terminal to bottom when content changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Focus the input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Function to start a guided demo
  const startGuidedDemo = () => {
    setTerminalHistory([
      "[SYSTEM] Ternix OS v1.0.3 - Case Investigation Demo",
      "Welcome, Officer. You've been assigned to investigate a data theft case.",
      "Follow the terminal prompts to solve the mystery.",
      "Let's start by examining the available files..."
    ]);
    setCurrentStep(0);
    setInputText(demoSteps[0].command);
    
    // Focus the input field
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

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
          <span className="text-primary font-mono text-sm mb-2 inline-block">INTERACTIVE_DEMO</span>
          <h2 className="text-3xl font-ubuntu font-bold text-foreground">Try Ternix in Your Browser</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Experience how Ternix combines Linux learning with detective work. 
            Interact with this simplified terminal to get a feel for the command-line investigation experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background rounded-lg border border-border shadow-lg overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-card p-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 font-mono text-sm text-muted-foreground">Ternix Terminal</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={startGuidedDemo}
                className="text-muted-foreground hover:text-foreground text-xs flex items-center"
              >
                <Terminal size={14} className="mr-1" />
                Start Guided Demo
              </Button>
            </div>
            
            {/* Terminal Content */}
            <div 
              ref={terminalRef}
              className="bg-black p-4 h-80 font-mono text-sm text-green-400 overflow-y-auto"
              onClick={() => inputRef.current?.focus()}
            >
              {terminalHistory.map((line, index) => (
                <div key={index} className="mb-1 whitespace-pre-wrap">
                  {line}
                </div>
              ))}
              <div className="flex items-center">
                <span>{demoSteps[currentStep].prompt}</span>
                <span>{inputText}</span>
                <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>█</span>
              </div>
            </div>
            
            {/* Hidden Input */}
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="opacity-0 absolute"
              aria-label="Terminal input"
            />
          </motion.div>
          
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-mono">Tip:</span> Type commands or click "Start Guided Demo" for an interactive experience
            </p>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center"
            >
              <a href="https://ternix.dev/download">
                <span>Download Full Version</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}