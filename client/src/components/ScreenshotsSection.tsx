import { motion } from "framer-motion";

const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="py-16 bg-card border-y border-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-ubuntu font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mission Previews
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get a glimpse of the Termix interface and the immersive learning experience that awaits.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Screenshot 1 */}
          <motion.div 
            className="rounded-lg overflow-hidden shadow-lg border border-muted"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-2 bg-background border-b border-muted flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <span className="text-muted-foreground font-mono text-sm">case_001_terminal.sh</span>
            </div>
            <div className="bg-background font-mono text-sm p-4 h-64 overflow-y-auto">
              <p className="text-primary mb-2">Welcome, Detective.</p>
              <p className="text-muted-foreground mb-2">You have been assigned to cyber case #4872.</p>
              <p className="text-muted-foreground mb-2">The suspect's computer has been seized. Your task is to recover critical evidence.</p>
              <p className="text-secondary mb-2">$ ls -la /home/suspect</p>
              <p className="text-muted-foreground mb-1">total 36</p>
              <p className="text-muted-foreground mb-1">drwxr-xr-x 5 suspect suspect 4096 May 18 09:42 .</p>
              <p className="text-muted-foreground mb-1">drwxr-xr-x 3 root root 4096 May 10 08:15 ..</p>
              <p className="text-muted-foreground mb-1">-rw------- 1 suspect suspect  220 May 10 08:15 .bash_history</p>
              <p className="text-muted-foreground mb-1">-rw-r--r-- 1 suspect suspect 3284 May 15 23:21 browser_history.txt</p>
              <p className="text-muted-foreground mb-1">drwxr-xr-x 2 suspect suspect 4096 May 17 16:45 documents</p>
              <p className="text-muted-foreground mb-1">-rw------- 1 root root 2048 May 18 02:13 encrypted_messages.data</p>
              <p className="text-muted-foreground mb-1">drwx------ 2 suspect suspect 4096 May 10 08:15 .ssh</p>
              <p className="text-secondary mb-2">$ cd documents</p>
              <p className="text-secondary mb-2">$ ls -la</p>
              <p className="text-muted-foreground mb-1">total 16</p>
              <p className="text-muted-foreground mb-1">drwxr-xr-x 2 suspect suspect 4096 May 17 16:45 .</p>
              <p className="text-muted-foreground mb-1">drwxr-xr-x 5 suspect suspect 4096 May 18 09:42 ..</p>
              <p className="text-muted-foreground mb-1">-rw-r--r-- 1 suspect suspect  485 May 16 11:32 meeting_notes.txt</p>
              <p className="text-muted-foreground mb-1">-rw-r--r-- 1 suspect suspect  0 May 17 16:45 .hidden_contact_list</p>
              <p className="text-secondary mb-2">$ cat meeting_notes.txt</p>
              <p className="text-accent mb-2">MISSION HINT: Try looking for hidden files with 'ls -la' and read their contents!</p>
            </div>
            <div className="p-4 bg-card">
              <h3 className="font-ubuntu font-bold text-xl mb-2 text-foreground">Terminal Investigation Interface</h3>
              <p className="text-muted-foreground">
                Explore evidence, discover clues, and learn essential Linux navigation and file examination commands.
              </p>
            </div>
          </motion.div>
          
          {/* Screenshot 2 */}
          <motion.div 
            className="rounded-lg overflow-hidden shadow-lg border border-muted"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-2 bg-background border-b border-muted flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <span className="text-muted-foreground font-mono text-sm">mission_dashboard.sh</span>
            </div>
            <div className="bg-card p-6 h-64 overflow-y-auto">
              <div className="mb-6">
                <h4 className="text-foreground font-bold text-lg mb-2 font-ubuntu">CASE STATUS: ACTIVE</h4>
                <div className="flex items-center mb-4">
                  <div className="w-full bg-background rounded-full h-2.5 mr-2">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-primary font-mono text-sm">65%</span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">Evidence collected: 13/20</p>
                <p className="text-muted-foreground text-sm mb-2">Commands mastered: 8/12</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-foreground font-bold mb-2 font-ubuntu">CURRENT OBJECTIVE</h4>
                <div className="bg-background p-3 rounded border border-muted mb-2">
                  <p className="text-accent font-mono">Access suspect's encrypted SSH keys to infiltrate remote server.</p>
                </div>
                <div className="text-muted-foreground text-sm">
                  <p>Requires: chmod, ssh-keygen, ssh</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-foreground font-bold mb-2 font-ubuntu">COMMAND HISTORY</h4>
                <div className="bg-background p-2 rounded border border-muted mb-1">
                  <code className="text-secondary text-xs">cd /home/suspect/.ssh</code>
                </div>
                <div className="bg-background p-2 rounded border border-muted mb-1">
                  <code className="text-secondary text-xs">ls -la</code>
                </div>
                <div className="bg-background p-2 rounded border border-muted">
                  <code className="text-secondary text-xs">chmod 600 id_rsa</code>
                </div>
              </div>
            </div>
            <div className="p-4 bg-card">
              <h3 className="font-ubuntu font-bold text-xl mb-2 text-foreground">Mission Progress Dashboard</h3>
              <p className="text-muted-foreground">
                Track your case progress, completed objectives, and the Linux commands you've mastered throughout your investigation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
