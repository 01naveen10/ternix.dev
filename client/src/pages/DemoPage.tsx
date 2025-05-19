import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputText, setInputText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "[SYSTEM] Ternix OS v1.0.3 - Case Investigation Terminal",
    "AI Companion:\n'Hello, Officer. It looks like you've lost your memories, but don't worry. I'm here to help. We're in the middle of a critical investigation, and you're our only hope to solve it. You're in the suspect's laptop, and we need to retrieve the deleted data. You'll need to use the terminal to explore the system and uncover clues.'",
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hintsVisible, setHintsVisible] = useState(false);

  const steps = [
    {
      prompt:
        "Step 1: Waking Up - Amnesia Strikes\nStory:\nYou wake up with a pounding headache. Your mind is clouded with confusion. You have no recollection of who you are. A robotic voice whispers, 'Detective… you've been assigned a case. I'm your assistant. Let's begin.' A terminal sits before you, and you know you have to figure out what's going on. But the password to log in is a mystery. Try typing `login` to get started.",
      command: "login",
      response:
        "Please enter your password: \n(Hint: Try 'password' — it's a common first step.)",
      nextStep: 1,
    },
    {
      prompt:
        "Step 2: Unlocking the System\nStory:\nYou've logged in successfully, but your memory is still fragmented. 'I am here to assist you,' the voice says. 'You are a detective. But you don't remember your details yet. Use the terminal to uncover the truth.' To begin, let's take a look at the files in your home directory. Type `ls` to list the files and see what's inside.",
      command: "ls",
      response:
        "Documents/ Notes/ case_files/ README.txt\n(There's a folder named 'case_files' that might have what you need.)",
      nextStep: 2,
    },
    {
      prompt:
        "Step 3: Exploring the Case Files Directory\nStory:\nThe case files directory looks like the right place to start. 'Open the case files,' the AI instructs. Let's dive in. Type `cd case_files` to enter and see what's inside.",
      command: "cd case_files",
      response:
        "You've entered the 'case_files' directory. Let's see what's in here.",
      nextStep: 3,
    },
    {
      prompt:
        "Step 4: Investigating the Crime - Crime Notes\nStory:\nYou've found the 'crime_notes.txt' file. 'Now, open the crime notes,' the AI says. It may hold details about your case. Type `cat crime_notes.txt` to read the notes.",
      command: "cat crime_notes.txt",
      response: `Crime Notes:
      
Victim: Samuel Walker
Crime: Hacked system, confidential files deleted
Last seen: 3:30 PM at office building
Case assigned: Detective [Unknown] (Your name is missing)
(It seems your name is missing from the case notes. Something's definitely wrong.)`,
      nextStep: 4,
    },
    {
      prompt:
        "Step 5: Who Am I? Check Your Identity\nStory:\nYou still don't remember your own name. 'Let's check your system details,' the AI instructs. Type `id` to view your system identity. It might tell you who you are — or at least give you more clues.",
      command: "id",
      response: `uid=1001(unknown) gid=1001(unknown) groups=1001(unknown)
(It seems your user details have been wiped from the system. You are listed as 'unknown.' This is strange.)`,
      nextStep: 5,
    },
    {
      prompt:
        "Step 6: Suspicious Files - Check the Case Logs\nStory:\nThe AI suggests that the case logs could provide more context. It hints that you've been working on a sensitive case before your memory loss. 'Let's investigate the case logs,' the AI suggests. These logs may hold the answer to why you're missing your memory. Type `cat case_logs.txt` to view the case files.",
      command: "cat case_logs.txt",
      response: `Case Logs:

Case ID: 47-192-5B
Hacking Incident: Files deleted
Suspect: Unknown
Time: 2:30 PM
Last accessed by user: Unknown
(The logs show that someone tampered with sensitive files. The culprit's identity is still unknown, but you seem to be connected to it in some way.)`,
      nextStep: 6,
    },
    {
      prompt:
        "Step 7: A Lead - Check the Deleted Files\nStory:\nIn the case logs, you spot a mention of deleted files. The AI explains that those deleted files might hold the final piece of the puzzle. You need to retrieve them. The AI tells you to look at the system's deleted files and check if any important ones can be recovered. Try typing `ls -la` to view hidden or deleted files in the current directory.",
      command: "ls -la",
      response: `total 32
drwxr-xr-x 2 detective cybersec 4096 May 15 09:23 .
drwxr-xr-x 3 detective cybersec 4096 May 15 09:20 ..
-rw-r--r-- 1 detective cybersec 2148 May 15 09:21 deleted_case_notes.txt
-rw-r--r-- 1 detective cybersec 2148 May 15 09:22 deleted_logs.txt
(There are some deleted files here, including 'deleted_case_notes.txt' and 'deleted_logs.txt'. These could be important.)`,
      nextStep: 7,
    },
    {
      prompt:
        "Step 8: Unlocking the Clue - View Deleted Notes\nStory:\nYou've found deleted_case_notes.txt. The AI prompts, 'The notes might contain vital information regarding the case. It seems you had recovered some leads before your memory was wiped. Let's open the deleted case notes using `cat` to view them.'",
      command: "cat deleted_case_notes.txt",
      response: `Deleted Case Notes:

Victim: Samuel Walker
Last seen: 3:15 PM at office building
Suspect: Unknown, but traces of digital footprints left on the system.
Action: Files accessed at 2:00 PM, 3:00 PM, and 3:10 PM
(It seems there's more to the case than just a hacking incident. Someone with knowledge of the system has been tampering with it.)`,
      nextStep: 8,
    },
    {
      prompt:
        "Step 9: Investigate Recent Activity - Review Last Commands\nStory:\nThe AI suggests something unusual: 'The system logs may have been tampered with, but what about the recent commands? We can see what commands were run by the person who accessed the system last. If we can find any unusual activity, we might identify their next move.' The AI instructs you to check the command `history` to uncover the last actions taken in the system. Type `history` to view the list of recently executed commands.",
      command: "history",
      response: `1 ls
2 cd case_files
3 cat case_logs.txt
4 ls -la
5 cat suspect_info.txt
6 rm -rf sensitive_data/
7 shutdown -h now
(Aha! It looks like someone tried to delete sensitive data right before shutting down the system. This could be the key to understanding the full extent of the crime.)`,
      nextStep: 9,
    },
    {
      prompt:
        "Step 10: The Final Clue - Who Am I Really?\nStory:\nAs you delve deeper into the investigation, something odd happens. A fragmented memory sparks in your mind. A name. A face. The name 'Detective R.' briefly flickers in your mind. Could that be you? Something is coming back to you, but it's still too blurry to fully comprehend. You feel closer to the truth, but not quite there yet.\n\n'Your identity is just out of reach,' the AI says. 'There's more for you to uncover, Detective R... but not here. You'll need the full version of Ternix OS to unlock your memory and solve the case.'\n\nThe terminal now displays:\n'Download the full version of Ternix OS to continue the investigation. Unlock the rest of your memories, and complete your mission.'\n\nThe terminal now displays:\nType `exit` to quit",
      command: "exit",
      response:
        "AI Companion:\n'Congratulations, Detective. You've solved part of the mystery, but the full case is still out there waiting for you. Download the full version of Ternix OS to continue your journey. Your identity, the case, and everything else is just a few steps away. We'll be waiting.'",
      nextStep: null,
    },
  ];

  const handleCommand = () => {
    const command = inputText.trim().toLowerCase();
    if (command === "") return;

    setTerminalHistory((prev) => [...prev, `[ternix@cybersec ~]$ ${command}`]);

    // Special command: hint
    if (command === "hint") {
      if (!hintsVisible) {
        setHintsVisible(true);
        setTerminalHistory((prev) => [...prev, "(Hint shown above 👆)"]);
      } else {
        setHintsVisible(false);
        setTerminalHistory((prev) => [...prev, "(Hint hidden 👇)"]);
      }
      setInputText("");
      return;
    }

    // Correct command
    if (command === steps[currentStep].command) {
      setTerminalHistory((prev) => [...prev, steps[currentStep].response]);

      if (steps[currentStep].nextStep !== null) {
        setCurrentStep(steps[currentStep].nextStep);
      } else {
        setTerminalHistory((prev) => [
          ...prev,
          "\n🔓 You've completed the demo.\nDownload Ternix OS to unlock full features and missions!",
        ]);
      }
    } else {
      setTerminalHistory((prev) => [
        ...prev,
        `⚠️ Unrecognized or wrong command. Type 'hint' if you're stuck.`,
      ]);
    }

    setInputText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand();
    }
  };

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [terminalHistory]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const toggleHints = () => setHintsVisible((prev) => !prev);

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
            Investigate the Case Using Ternix OS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Step into the world of Ternix OS and solve a real-world mystery
            using powerful Linux commands.
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
                <span className="ml-4 font-mono text-sm text-muted-foreground">
                  Ternix Terminal
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleHints}
                className="text-muted-foreground hover:text-foreground text-xs flex items-center"
              >
                <Terminal size={14} className="mr-1" />
                {hintsVisible ? "Hide Hint" : "Show Hint"}
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

              {/* Step Prompt */}
              {steps[currentStep] && (
                <div className="mb-2 whitespace-pre-wrap text-yellow-400">
                  {steps[currentStep].prompt}
                </div>
              )}

              {/* Hint */}
              {hintsVisible && (
                <div className="mb-2 text-blue-400">
                  Hint: Try typing <code>{steps[currentStep].command}</code>
                </div>
              )}

              <div className="flex items-center">
                <span>[ternix@cybersec ~]$</span>
                <input
                  ref={inputRef}
                  type="text"
                  className="bg-transparent text-green-400 outline-none border-none flex-1 ml-2"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                {showCursor && <span className="text-green-400">|</span>}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-6">
          <a
            href="https://ternix.dev" // Link to the homepage
            className="inline-block py-2 px-6 mt-6 text-white bg-secondary hover:bg-primary-dark rounded-md transition-colors"
          >
            Back to Ternix Home
          </a>
        </div>
      </div>
    </section>
  );
}