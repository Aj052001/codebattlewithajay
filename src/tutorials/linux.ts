import { Tutorial } from '@/types';

export const linuxTutorials: Tutorial[] = [
 {
  id: '1',
  title: 'Introduction to Linux & Filesystem',
  description: 'Understand what Linux is, why DevOps engineers must know it, and master the filesystem — navigating, creating, copying, moving, and finding files.',
  slug: 'introduction-to-linux-filesystem',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">1 : Introduction to Linux & Filesystem</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Linux is the operating system that powers <strong style="color:#d93025;">99% of the cloud</strong>. Every Docker container,
      Kubernetes cluster, and cloud server runs on Linux — so this is where your DevOps journey begins.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ What is Linux and why it rules the server world</li>
      <li>✅ The Linux filesystem structure (everything is a file)</li>
      <li>✅ Navigate with <code>pwd</code>, <code>ls</code>, <code>cd</code></li>
      <li>✅ Create, copy, move and delete with <code>mkdir</code>, <code>touch</code>, <code>cp</code>, <code>mv</code>, <code>rm</code></li>
      <li>✅ Find files with <code>find</code> and <code>locate</code></li>
      <li>✅ Absolute vs relative paths</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📘 What is Linux?</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Linux is the operating system layer that lets programs use a server’s CPU, memory, network, and disks. Think of a distribution such as Ubuntu as a ready-to-use computer built around the Linux kernel. DevOps engineers need this foundation because cloud virtual machines, containers, and most CI runners expose Linux commands when something needs to be configured or repaired.</p>
      <p style="margin-bottom: 20px; font-size: 1.1rem;">
        <strong>Linux</strong> is a free, open-source operating system kernel first released by Linus Torvalds in 1991.
        It's not a single OS — it's the engine inside hundreds of distributions like <strong>Ubuntu</strong>, <strong>Debian</strong>,
        <strong>CentOS</strong>, and <strong>Alpine</strong>.
      </p>

      <div style="background-color:#fff3cd; padding:20px; border-radius:8px; border-left:4px solid #ffc107; margin-bottom:20px;">
        <p style="margin:0;"><strong>🤔 Why does DevOps need Linux?</strong></p>
        <ul style="margin:10px 0 0 20px;">
          <li><strong>Containers are Linux:</strong> Docker images are just packaged Linux filesystems</li>
          <li><strong>Cloud servers are Linux:</strong> AWS, Azure, GCP all default to Linux VMs</li>
          <li><strong>Stability &amp; security:</strong> It can run for years without rebooting</li>
          <li><strong>Free &amp; scriptable:</strong> Perfect for automation with bash</li>
        </ul>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🗂️ The Linux Filesystem</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">The filesystem is Linux’s organized map of files and directories, beginning at one top-level directory called <code>/</code>. It is like the folder tree on a computer, except mounted disks, device information, and process information can also appear as files. DevOps work regularly starts with knowing where an application keeps configuration, logs, persistent data, and temporary files.</p>
      <p style="margin-bottom: 15px;">In Linux, <strong>everything is a file</strong> — even devices and processes. The tree starts at <code>/</code> (root).</p>

      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem; margin-top:20px;">
        <tr style="background-color:#0073b1; color:#fff;">
          <th style="padding:12px;">Directory</th>
          <th style="padding:12px;">Purpose</th>
        </tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>/</strong></td><td style="padding:12px;">Root — top of the filesystem</td></tr>
        <tr style="background-color:#f5fbfe;"><td style="padding:12px;"><strong>/bin</strong></td><td style="padding:12px;">Essential commands (ls, cp, cat)</td></tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>/etc</strong></td><td style="padding:12px;">Configuration files (like Docker daemon config)</td></tr>
        <tr style="background-color:#f5fbfe;"><td style="padding:12px;"><strong>/home</strong></td><td style="padding:12px;">User home directories</td></tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>/var</strong></td><td style="padding:12px;">Variable data — logs, caches, databases</td></tr>
        <tr style="background-color:#f5fbfe;"><td style="padding:12px;"><strong>/tmp</strong></td><td style="padding:12px;">Temporary files, wiped on reboot</td></tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>/proc</strong></td><td style="padding:12px;">Virtual view of running processes</td></tr>
      </table>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧭 Navigation — pwd, ls, cd</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A shell always has a current working directory, which is the starting point for relative paths. Navigation commands let you confirm your location before changing files; this small habit prevents edits in the wrong environment or directory. DevOps engineers use these commands constantly while following incident runbooks on remote hosts.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>pwd            # print working directory (where am I?)
ls             # list files in current directory
ls -la         # list all files including hidden, with details
cd /var/log    # change directory
cd ..          # go up one level
cd ~           # go to home directory
cd -           # go to previous directory</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> Think of <code>pwd</code> as asking Google Maps “where am I now?”; it prints the full current location. <code>ls -la</code> combines <code>-l</code> (long details such as permissions and owner) with <code>-a</code> (also show hidden names beginning with a dot). <code>cd ..</code> moves to the parent folder, <code>cd ~</code> goes home, and <code>cd -</code> swaps back to the last directory.</p>

      <p style="margin-top:20px; margin-bottom: 15px;"><strong>Absolute vs Relative path:</strong></p>
      <p style="margin-bottom: 15px; font-size: 1.05rem;">
        A <strong>path</strong> is the address of a file. An <strong>absolute path</strong> always starts from <code>/</code>,
        so it works the same no matter which folder you are in — like a full home address.
        A <strong>relative path</strong> starts from your current folder — like saying “two streets left from here.”
        In production, prefer absolute paths in scripts and systemd units so a wrong working directory cannot break the job.
      </p>
      <ul style="font-size: 1.05rem;">
        <li><strong>Absolute</strong> — starts from <code>/</code>: <code>cd /etc/docker</code> (same from anywhere)</li>
        <li><strong>Relative</strong> — relative to current dir: <code>cd ../configs</code> (depends where you stand)</li>
        <li><code>.</code> = current dir, <code>..</code> = parent, <code>~</code> = your home directory</li>
        <li>Example: if you are in <code>/home/ajay/app</code>, then <code>../logs</code> means <code>/home/ajay/logs</code></li>
      </ul>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📁 Create, Copy, Move, Delete</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Creating and organizing files is the basic way you prepare deployments, configuration, log locations, and backups. Linux does not have a recycle bin for terminal deletion, so destructive commands deserve an extra path check. Treat a recursive delete as you would deleting a production resource: inspect the target first, then make the smallest change needed.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>mkdir myapp              # create a directory
mkdir -p /a/b/c          # create nested dirs at once (-p = parents)
touch index.html         # create an empty file
cp app.js app-backup.js  # copy a file
cp -r src dist           # copy a whole folder (recursive)
mv old.txt new.txt       # move OR rename
mv file.txt /tmp/        # move a file to a folder
rm file.txt              # delete a file
rm -r folder             # delete a folder
rm -rf folder            # force delete (DANGER — no recycle bin!)</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>mkdir -p</code> creates every missing parent directory. <code>cp -r</code> copies a directory and all its contents; <code>mv</code> renames when the destination is a filename and moves when it is a directory. <code>rm -r</code> removes a directory tree, while <code>-f</code> suppresses prompts—inspect the exact path with <code>ls</code> first.</p>

      <div style="background-color:#fee2e2; padding:20px; border-radius:8px; border-left:4px solid #dc2626;">
        <p style="margin:0;"><strong>⚠️ Warning:</strong> <code>rm -rf /</code> deletes your entire system. Always double-check paths before using <code>rm -rf</code> — a very common production accident.</p>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔍 Finding Files</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Finding files means asking the system to locate a name, type, or size instead of guessing where it lives. This matters during incidents, when a log file, configuration file, socket, or unexpectedly large artifact may be outside the application directory. Start searches in the narrowest sensible directory to make them faster and to avoid noisy permission errors.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>find / -name "docker"              # search from root by name
find . -name "*.log"               # find all log files in current dir
find /var -type f -size +100M      # find big files (+100MB)
which docker                       # where is a command located
whereis nginx                      # locate binaries + configs
locate docker-compose              # fast search (uses database)
sudo updatedb                      # refresh locate database</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>find .</code> starts below the current directory, while <code>find /</code> searches the whole machine. <code>-name</code> matches a filename pattern, <code>-type f</code> limits results to regular files, and <code>-size +100M</code> means larger than 100 MiB. <code>locate</code> is fast because it uses an index, but its results can be stale.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💼 Real-World Example</h2>
      <p>Set up a standard project structure the way a DevOps engineer would for a new deployment:</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>mkdir -p ~/projects/myapp/{src,configs,logs,deploy}
cd ~/projects/myapp
touch src/index.js configs/.env README.md
ls -la
cp src/index.js src/index.js.bak   # backup before changes
find . -name "*.js"                # list all JS files</code></pre>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Create <code>/tmp/practice</code> and move inside it</li>
        <li>Create a folder <code>docs</code> with a file <code>notes.txt</code></li>
        <li>Copy <code>notes.txt</code> to <code>notes-backup.txt</code>, then rename it</li>
        <li>Use <code>find</code> to locate all <code>.conf</code> files in <code>/etc</code></li>
        <li>Navigate to <code>/var/log</code> and back using <code>cd -</code></li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Build <code>~/devops-lab/{apps,configs,logs,scripts,backups}</code> in one command using brace expansion</li>
        <li>Find all files larger than 50MB under <code>/var</code> (use <code>find -size</code>)</li>
        <li>Create a nested path, then delete only the empty directories with <code>rmdir</code> (not <code>rm -rf</code>)</li>
      </ol>
    </section>

  </div>
  `,
  duration: '20 min',
  order: 1,
  tags: ['linux', 'filesystem', 'terminal', 'bash', 'devops', 'commands', 'pwd', 'ls', 'mkdir']
 },
 {
  id: '2',
  title: 'Working with Files & Text Tools',
  description: 'Master the most powerful text tools in Linux — cat, less, head, tail, grep, sort, uniq, cut, awk, and sed — the daily weapons of every DevOps engineer.',
  slug: 'working-with-files-text-tools',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">2 : Working with Files & Text Tools</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Logs, configs, and data files are plain text on Linux. Knowing these tools means you can <strong style="color:#d93025;">debug anything</strong> — from a crashed container to a slow server.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Read files with <code>cat</code> and <code>less</code></li>
      <li>✅ View partial files with <code>head</code> and <code>tail -f</code></li>
      <li>✅ Search with <code>grep</code> (the most important command)</li>
      <li>✅ Transform with <code>sort</code>, <code>uniq</code>, <code>cut</code></li>
      <li>✅ Power tools: <code>awk</code> and <code>sed</code></li>
      <li>✅ Count with <code>wc</code></li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📖 Reading Files</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Linux services usually describe what they are doing in text files: logs record events and configuration files record intended behavior. Choose a reader based on size: printing a small file is fine, but paging or following a large live log is safer and easier to inspect. This is why text inspection is a core DevOps debugging skill rather than a convenience.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>cat file.txt          # print whole file to screen
cat file1 file2       # print multiple files
less file.txt         # scroll file (q to quit, / to search)
head -n 20 file.txt   # first 20 lines
tail -n 20 file.txt   # last 20 lines
tail -f app.log       # FOLLOW live updates (streaming logs!)
wc -l file.txt        # count lines
wc -c file.txt        # count bytes</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>cat</code> prints a small file all at once; <code>less</code> pages through a file (<code>q</code> quits and <code>/text</code> searches). <code>head -n 20</code> asks for the first 20 lines and <code>tail -n 20</code> asks for the last 20. In <code>tail -f</code>, <code>-f</code> means follow until Ctrl+C.</p>
      <p style="margin-top:20px;"><strong>Key insight:</strong> <code>tail -f</code> is how you watch a running service's logs in real time — the DevOps equivalent of watching football live. Press <code>Ctrl+C</code> to stop.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔎 grep — Search Everything</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Searching is how you turn thousands of log lines into evidence. <code>grep</code> selects lines that match a pattern, so it can answer focused questions such as “did this request produce an error?” or “which config sets this value?”. In production, search for a narrow time, request ID, hostname, or error string before drawing conclusions.</p>
      <p><code>grep</code> finds lines matching a pattern. It is your <strong>#1 debugging tool</strong>.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>grep "ERROR" app.log            # lines containing ERROR
grep -i "error" app.log         # case-insensitive
grep -v "DEBUG" app.log         # INVERT — lines NOT matching
grep -n "error" app.log         # show line numbers
grep -r "TODO" src/             # search recursively in a folder
grep -c "ERROR" app.log         # count matching lines
grep "^ERROR" app.log           # lines STARTING with ERROR
grep "error$" app.log           # lines ENDING with error</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>grep -i</code> ignores case, <code>-v</code> selects non-matching lines, <code>-n</code> adds line numbers, <code>-r</code> searches subdirectories, and <code>-c</code> returns a count. <code>^</code> means start of line and <code>$</code> means end of line, which makes a search precise.</p>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># Real-world: find all 500 errors in a log
grep "500" access.log
# Real-world: find containers named app
docker ps | grep app</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>grep -i</code> ignores case, <code>-v</code> selects non-matching lines, <code>-n</code> adds line numbers, <code>-r</code> searches subdirectories, and <code>-c</code> returns a count. <code>^</code> means start of line and <code>$</code> means end of line, which makes a search precise.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📊 sort, uniq, cut</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">These small tools reshape line-oriented data without opening a spreadsheet or writing a program. Sorting makes identical values adjacent, <code>uniq</code> can then count them, and <code>cut</code> pulls out a delimiter-separated column. They are particularly useful for quickly summarizing access logs, user lists, and command output.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>sort names.txt               # sort lines alphabetically
sort -n numbers.txt          # sort numerically
sort -r names.txt            # reverse order
uniq file.txt                # remove duplicate lines (must be sorted first!)
uniq -c file.txt             # count how many times each line appears
cut -d',' -f1 data.csv       # split by comma, show field 1
cut -d' ' -f2 names.txt      # split by space, show field 2</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>sort -n</code> compares numbers as numbers and <code>sort -r</code> reverses the order. <code>uniq</code> only collapses adjacent duplicates, so use <code>sort file | uniq -c</code>. In <code>cut -d',' -f1</code>, <code>-d</code> selects a delimiter and <code>-f1</code> selects the first field.</p>

      <div style="background-color:#f0f9ff; padding:20px; border-radius:8px; border-left:4px solid #2563eb; margin-top:20px;">
        <p style="margin:0;"><strong>💡 Pro tip:</strong> These tools combine beautifully with pipes (next chapter): <code>sort file.txt | uniq -c | sort -rn</code> shows the most frequent lines — perfect for finding the busiest IPs in an access log.</p>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">⚡ awk — Column Processing</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;"><code>awk</code> reads text one record at a time and is especially useful when each line has predictable columns. It lets you select, filter, or calculate values without changing the original file. DevOps engineers use it to turn raw metrics and logs into a short, actionable answer during an incident.</p>
      <p><code>awk</code> is ideal for extracting and processing columns from structured text.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>awk '{print $1}' file.txt     # print first field (default space-split)
awk '{print $2, $3}' file.txt # print fields 2 and 3
awk -F',' '{print $1}' f.csv  # split by comma
awk '$3 &gt; 500 {print $1}' f.txt  # conditional — print field1 if field3 &gt; 500
awk '{sum += $1} END {print sum}' nums.txt  # sum a column</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>awk</code> splits each line on whitespace by default: <code>$1</code> is field one and <code>$2</code> is field two. <code>-F','</code> changes the separator to a comma; <code>$3 &gt; 500</code> is a condition; and an <code>END</code> block runs once after all input to calculate totals.</p>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># Real-world: print only IP addresses from access.log
awk '{print $1}' access.log | sort | uniq -c | sort -rn</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>awk</code> splits each line on whitespace by default: <code>$1</code> is field one and <code>$2</code> is field two. <code>-F','</code> changes the separator to a comma; <code>$3 &gt; 500</code> is a condition; and an <code>END</code> block runs once after all input to calculate totals.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">✂️ sed — Find & Replace</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;"><code>sed</code> is a stream editor: it transforms text as it passes through. It is helpful for repeatable edits to generated configuration, but an in-place replacement can change many lines quickly. Preview the result first and keep a backup when changing a production configuration.</p>
      <p><code>sed</code> (stream editor) does find-and-replace across files — critical for config changes.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>sed 's/old/new/' file.txt        # replace first 'old' per line (print to screen)
sed 's/old/new/g' file.txt       # replace ALL occurrences (g = global)
sed -i 's/old/new/g' file.txt    # -i = edit the file IN PLACE
sed -i 's/port 80/port 8080/' nginx.conf   # change nginx port
sed -n '5,10p' file.txt          # print only lines 5-10</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>s/old/new/</code> substitutes one match per line; adding <code>g</code> substitutes every match on that line. <code>-i</code> writes changes back to the file, while without it sed previews them. <code>-n '5,10p'</code> prints only lines 5 through 10.</p>

      <div style="background-color:#fff3cd; padding:20px; border-radius:8px; border-left:4px solid #ffc107; margin-top:20px;">
        <p style="margin:0;"><strong>⚠️ Careful:</strong> Without <code>-i</code>, sed only prints changes to screen and does NOT modify the file. Always test without <code>-i</code> first.</p>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💼 Real-World Example — Debug a Crashed App</h2>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># 1. Watch the live log
tail -f /var/log/myapp.log

# 2. Find the last 50 errors
grep "ERROR" /var/log/myapp.log | tail -n 50

# 3. Count how many errors happened today
grep "$(date +%F)" /var/log/myapp.log | grep -c "ERROR"

# 4. Extract just the error messages
grep "ERROR" /var/log/myapp.log | cut -d']' -f2

# 5. Which user caused the most errors?
grep "ERROR" /var/log/myapp.log | awk '{print $5}' | sort | uniq -c | sort -rn</code></pre>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Create a file with 20 random lines and view only the first 5</li>
        <li>Use <code>grep -c</code> to count lines containing the word "error"</li>
        <li>Use <code>awk '{print $1}'</code> on any log file to extract first column</li>
        <li>Use <code>sed -i</code> to replace a word across a file</li>
        <li>Use <code>sort | uniq -c</code> to find duplicate lines in a file</li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Generate a fake access log (IP + status code), then find the top 5 IPs with most requests</li>
        <li>Count how many lines in <code>/etc/passwd</code> use bash as the shell (<code>grep</code> or <code>awk</code>)</li>
        <li>Use <code>sed</code> to change every occurrence of <code>localhost</code> to <code>127.0.0.1</code> in a config copy</li>
      </ol>
    </section>

  </div>
  `,
  duration: '25 min',
  order: 2,
  tags: ['linux', 'text tools', 'grep', 'awk', 'sed', 'tail', 'head', 'sort', 'uniq', 'cut', 'logs', 'devops']
 },
 {
  id: '3',
  title: 'File Permissions & Ownership',
  description: 'Learn read, write, and execute permissions, the chmod numbers (755, 644), chown, chgrp, and umask — how Linux controls who can touch what.',
  slug: 'file-permissions-ownership',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">3 : File Permissions & Ownership</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Security on Linux is all about permissions. Most "Permission denied" errors you'll face in DevOps
      are fixed by understanding <strong style="color:#d93025;">chmod</strong>, <strong style="color:#d93025;">chown</strong>, and <strong style="color:#d93025;">umask</strong>.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ The meaning of <code>r</code>, <code>w</code>, <code>x</code></li>
      <li>✅ Reading <code>ls -l</code> output</li>
      <li>✅ <code>chmod</code> with numbers (755, 644) and symbols (u+x)</li>
      <li>✅ <code>chown</code> and <code>chgrp</code> for ownership</li>
      <li>✅ <code>umask</code> and default permissions</li>
      <li>✅ Owner, Group, Others</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔐 The rwx Model</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Permissions answer a simple security question: which users may read, change, or run this object? Linux evaluates that question separately for the owner, the file’s group, and everyone else. DevOps engineers rely on this model to protect secrets while still allowing a service account to read exactly the files it needs.</p>
      <p>Every file has permissions for <strong>three classes</strong>:</p>
      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem; margin-top:20px;">
        <tr style="background-color:#0073b1; color:#fff;">
          <th style="padding:12px;">Class</th>
          <th style="padding:12px;">Meaning</th>
        </tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>Owner (u)</strong></td><td style="padding:12px;">The user who owns the file</td></tr>
        <tr style="background-color:#f5fbfe;"><td style="padding:12px;"><strong>Group (g)</strong></td><td style="padding:12px;">Users in the file's group</td></tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>Others (o)</strong></td><td style="padding:12px;">Everyone else on the system</td></tr>
      </table>

      <p style="margin-top:25px;"><strong>And three actions:</strong></p>
      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem; margin-top:20px;">
        <tr style="background-color:#0073b1; color:#fff;">
          <th style="padding:12px;">Permission</th>
          <th style="padding:12px;">Value</th>
          <th style="padding:12px;">Meaning</th>
        </tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>r</strong> (read)</td><td style="padding:12px;">4</td><td style="padding:12px;">View the file's contents</td></tr>
        <tr style="background-color:#f5fbfe;"><td style="padding:12px;"><strong>w</strong> (write)</td><td style="padding:12px;">2</td><td style="padding:12px;">Modify the file</td></tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>x</strong> (execute)</td><td style="padding:12px;">1</td><td style="padding:12px;">Run it (for scripts/programs)</td></tr>
      </table>

      <p style="margin-top:25px;">Values add up: <code>r+w+x = 4+2+1 = 7</code>, <code>r+w = 6</code>, <code>r = 4</code>.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔍 Reading ls -l</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">The long listing is a compact security report for each file. It shows the object type, three permission groups, owner, group, size, and timestamp, so it is usually the first check after “permission denied.” Directories are slightly different from regular files: entering a directory requires execute permission even if it can be listed.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>ls -l
-rw-r--r-- 1 root root 1024 Aug 10 09:00 config.yaml
drwxr-xr-x 2 ajay ajay 4096 Aug 10 09:01 scripts

# First character: d = directory, - = file
# Then 3 groups of rwx:  owner | group | others
# rw- r-- r--   →  owner r+w, group read-only, others read-only
# drwxr-xr-x    →  directory, owner all, group+others read &amp; execute</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> The first mode character is the type (<code>d</code> directory, <code>-</code> regular file), followed by owner, group, and others permissions. On a directory, <code>r</code> lists names, <code>w</code> changes entries, and <code>x</code> lets you enter it. That is why a readable directory can still reject <code>cd</code>.</p>
      <p style="margin-top:15px;">Note: on directories, <code>x</code> means "can you enter this directory" and <code>r</code> means "can you list it".</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🛠️ chmod — Change Permissions</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;"><code>chmod</code> changes who may read, write, or execute a file. Numeric modes are compact permission recipes; symbolic modes are useful when you only want to add or remove one capability. Use the least access that works, because a convenient broad permission is often a security defect.</p>
      <p><strong>Numeric mode (the classic):</strong></p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>chmod 755 script.sh   # owner:rwx(7) group:r-x(5) others:r-x(5)
chmod 644 config.yaml # owner:rw-  group:r--  others:r--
chmod 600 secret.key  # owner:rw-  group:---  others:---  (private!)
chmod 777 file.txt    # EVERYONE full access (avoid — security risk!)</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> Each digit sums <code>r=4</code>, <code>w=2</code>, and <code>x=1</code>, in owner/group/others order. <code>755</code> is owner <code>rwx</code> plus <code>r-x</code> for group and others; <code>644</code> is owner read/write plus read-only for everyone else; <code>600</code> is private owner read/write. Think house keys: owner, family/team, strangers—do not give strangers a key to solve a temporary issue.</p>

      <p><strong>Symbolic mode (intuitive):</strong></p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>chmod +x script.sh    # add execute for everyone
chmod u+x script.sh   # add execute for owner only
chmod g-w file.txt    # remove write from group
chmod -R 755 deploy/  # apply recursively to a whole folder</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> Each digit sums <code>r=4</code>, <code>w=2</code>, and <code>x=1</code>, in owner/group/others order. <code>755</code> is owner <code>rwx</code> plus <code>r-x</code> for group and others; <code>644</code> is owner read/write plus read-only for everyone else; <code>600</code> is private owner read/write. Think house keys: owner, family/team, strangers—do not give strangers a key to solve a temporary issue.</p>

      <div style="background-color:#f0f9ff; padding:20px; border-radius:8px; border-left:4px solid #2563eb; margin-top:20px;">
        <p style="margin:0;"><strong>💡 The golden rule:</strong> <code>755</code> for folders/scripts, <code>644</code> for configs, <code>600</code> for secrets. Never use <code>777</code> in production.</p>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">👤 chown & chgrp — Ownership</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Ownership identifies the user and group that Linux checks before the “others” permissions. It is separate from the permission bits, so a file can have safe modes yet still be inaccessible to the process that runs the app. This frequently appears with containers and mounted volumes because the host and container must agree on numeric user IDs.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>chown ajay file.txt        # change owner to ajay (needs sudo)
chown ajay:devteam file.txt  # change owner AND group
chgrp devteam file.txt     # change group only
chown -R ajay:ajay /app/   # change owner of entire folder tree</code></pre>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># Real-world: fix "permission denied" on Docker volume
sudo chown -R 1000:1000 ./data
# (container runs as UID 1000 — file ownership must match)</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🖥️ umask — Default Permissions</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A umask is a default safety filter applied when new files and directories are created. It prevents every new item from starting out world-writable or unnecessarily visible. Teams choose an appropriate mask so normal work is convenient without exposing credentials, build artifacts, or customer data.</p>
      <p><code>umask</code> decides the default permissions of every new file you create. It subtracts from the maximum (files: 666, directories: 777).</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>umask           # show current mask (usually 022)
umask 022       # files → 644, directories → 755  (common default)
umask 077       # files → 600, directories → 700  (private)
umask 002       # files → 664, directories → 775  (team-friendly)</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> New files begin from <code>666</code> and directories from <code>777</code>; umask removes permissions. <code>022</code> produces files <code>644</code> and directories <code>755</code>; <code>077</code> produces private <code>600</code> files and <code>700</code> directories.</p>
      <p style="margin-top:15px;">Calculation: <code>new_file = 666 - umask</code>. So with <code>umask 022</code>, new files get <code>644</code> — readable by everyone but writable only by the owner.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💼 Real-World Example — Deploy a Script</h2>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># You wrote deploy.sh but get "Permission denied" when running it
./deploy.sh
# bash: ./deploy.sh: Permission denied

# Fix: make it executable
chmod +x deploy.sh
./deploy.sh

# Verify permissions
ls -l deploy.sh
# -rwxr-xr-x 1 ajay ajay 340 Aug 10 09:00 deploy.sh</code></pre>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Create a script file and make it executable with <code>chmod +x</code></li>
        <li>Set a secret file to <code>600</code> so only you can read it</li>
        <li>Change a folder's owner to your user with <code>chown</code></li>
        <li>Explain the difference between <code>644</code> and <code>755</code></li>
        <li>Check your <code>umask</code> and predict what a new file's permissions will be</li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Create <code>deploy.sh</code>, set it to <code>750</code>, and verify with <code>ls -l</code> that others have no access</li>
        <li>Create a <code>secrets/</code> folder with <code>700</code> and a key file with <code>600</code></li>
        <li>Set <code>umask 077</code>, create a file, then confirm its permissions are private</li>
      </ol>
    </section>

  </div>
  `,
  duration: '25 min',
  order: 3,
  tags: ['linux', 'permissions', 'chmod', 'chown', 'umask', 'security', 'files', 'owner', 'group', 'devops']
 },
 {
  id: '4',
  title: 'Linux Processes & Signals',
  description: 'Master process management — ps, top, htop, kill, pkill, jobs, bg, fg, nohup — plus PID, PPID, daemons, and why SIGKILL is different from SIGTERM.',
  slug: 'linux-processes-signals',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">4 : Linux Processes & Signals</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Every container, service, and CI job is a <strong style="color:#d93025;">process</strong>.
      If you cannot inspect, stop, or background processes safely, you are not ready for production DevOps.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ What a process is — PID, PPID, daemon, foreground vs background</li>
      <li>✅ Inspect with <code>ps</code>, <code>top</code>, and <code>htop</code></li>
      <li>✅ Stop processes with <code>kill</code> and <code>pkill</code></li>
      <li>✅ Job control — <code>jobs</code>, <code>bg</code>, <code>fg</code>, <code>nohup</code></li>
      <li>✅ Signals — especially SIGTERM vs SIGKILL</li>
      <li>✅ Why <code>kill -9</code> is a last resort in production</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📘 What is a Process?</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A process is a program that is currently executing, with its own identity and allocated resources. The operating system tracks its parent, state, open files, CPU use, and memory use. DevOps engineers diagnose services at this level because an application, a container entrypoint, and a background worker are all processes.</p>
      <p style="margin-bottom: 20px; font-size: 1.1rem;">
        A <strong>process</strong> is a running instance of a program. When you start nginx, Docker, or a Node app,
        the OS creates a process with memory, CPU time, and an ID.
      </p>

      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem; margin-top:20px;">
        <tr style="background-color:#0073b1; color:#fff;">
          <th style="padding:12px;">Concept</th>
          <th style="padding:12px;">Meaning</th>
        </tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>PID</strong></td><td style="padding:12px;">Process ID — unique number for this process</td></tr>
        <tr style="background-color:#f5fbfe;"><td style="padding:12px;"><strong>PPID</strong></td><td style="padding:12px;">Parent Process ID — who started this process</td></tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>Daemon</strong></td><td style="padding:12px;">Background service (docker, sshd, nginx) that runs without a terminal</td></tr>
        <tr style="background-color:#f5fbfe;"><td style="padding:12px;"><strong>Foreground</strong></td><td style="padding:12px;">Runs in your terminal — you wait until it finishes</td></tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>Background</strong></td><td style="padding:12px;">Runs behind the scenes — terminal stays free</td></tr>
        <tr style="background-color:#f5fbfe;"><td style="padding:12px;"><strong>Signal</strong></td><td style="padding:12px;">Message the OS sends to a process (stop, reload, kill)</td></tr>
      </table>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔍 Inspect Processes — ps, top, htop</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Process inspection answers “what is running and what is consuming resources?” A one-time listing is useful for evidence and scripts, while an interactive view helps spot a changing problem. Check the full command and owner before stopping anything; similar process names can serve very different workloads.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>ps                 # processes in current terminal
ps aux             # all processes (BSD style) — most used
ps -ef             # all processes (System V style)
ps aux | grep nginx   # find a specific process
ps -o pid,ppid,cmd -p 1234   # show PID, PPID, command for one process

top                # live CPU/memory view (press q to quit)
htop               # nicer interactive top (install: sudo apt install htop)</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>ps aux</code> is a snapshot: <code>a</code> includes other users’ terminal processes, <code>x</code> includes processes without a terminal, and <code>u</code> uses a human-friendly format. <code>ps -o ... -p 1234</code> requests chosen columns for one PID. <code>top</code> refreshes continuously; press <code>q</code> to exit.</p>

      <p style="margin-top:20px; margin-bottom: 10px;"><strong>Reading <code>ps aux</code> columns:</strong></p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root      1234  0.5  1.2  45678  23456 ?       Ss   09:00   0:12 /usr/bin/dockerd

# PID  = process ID
# %CPU / %MEM = resource usage
# STAT = state (R=running, S=sleeping, Z=zombie)
# COMMAND = what is actually running</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>ps aux</code> is a snapshot: <code>a</code> includes other users’ terminal processes, <code>x</code> includes processes without a terminal, and <code>u</code> uses a human-friendly format. <code>ps -o ... -p 1234</code> requests chosen columns for one PID. <code>top</code> refreshes continuously; press <code>q</code> to exit.</p>

      <div style="background-color:#f0f9ff; padding:20px; border-radius:8px; border-left:4px solid #2563eb; margin-top:20px;">
        <p style="margin:0;"><strong>💡 DevOps tip:</strong> <code>ps aux --sort=-%mem | head</code> finds memory hogs. <code>ps aux --sort=-%cpu | head</code> finds CPU hogs — first step when a server is slow.</p>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🛑 Stopping Processes — kill &amp; pkill</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Stopping a process should be deliberate: identify the exact target, request a graceful shutdown, and then verify the result. A signal is not automatically a kill; it is a message that gives the program a chance to close files and finish work. Name-based commands are convenient but risk matching more than one process, so inspect matches first.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>kill 1234              # send SIGTERM (15) — polite "please shut down"
kill -15 1234          # same as above (explicit SIGTERM)
kill -TERM 1234        # same — by name
kill -9 1234           # send SIGKILL — force kill, cannot be caught
kill -KILL 1234        # same as -9

pkill nginx            # kill by process name
pkill -9 -f "node app" # force kill matching full command line
killall nginx          # kill all processes named nginx</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>kill 1234</code> sends the default SIGTERM to one PID; <code>pkill nginx</code> matches process names, while <code>pkill -f</code> matches full command lines and needs extra care. Use <code>pgrep -a</code> first to see exactly what a name-based command would target.</p>

      <p style="margin-top:20px; margin-bottom: 10px;"><strong>Find then kill (common workflow):</strong></p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># 1. Find the PID
ps aux | grep myapp
# or
pgrep -a myapp

# 2. Try graceful stop first
kill 1234

# 3. Wait a few seconds, check if still alive
ps -p 1234

# 4. Only if still running — force kill
kill -9 1234</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>kill 1234</code> sends the default SIGTERM to one PID; <code>pkill nginx</code> matches process names, while <code>pkill -f</code> matches full command lines and needs extra care. Use <code>pgrep -a</code> first to see exactly what a name-based command would target.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">⚠️ SIGTERM vs SIGKILL — Critical Difference</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Signals are messages from the kernel or a user to a running process. SIGTERM is like politely asking someone to leave: the application can save work and exit cleanly. SIGKILL is like force-closing the process: it cannot run cleanup code, so it is reserved for a process that refuses to stop.</p>
      <p style="margin-bottom: 15px;">This is one of the most important production concepts for DevOps and Docker.</p>

      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem; margin-top:20px;">
        <tr style="background-color:#0073b1; color:#fff;">
          <th style="padding:12px;">Signal</th>
          <th style="padding:12px;">Number</th>
          <th style="padding:12px;">Behavior</th>
        </tr>
        <tr style="background-color:#eaf4fb;">
          <td style="padding:12px;"><strong>SIGTERM</strong></td>
          <td style="padding:12px;">15</td>
          <td style="padding:12px;">Graceful stop. Process can catch it, flush logs, close DB, finish requests, then exit.</td>
        </tr>
        <tr style="background-color:#f5fbfe;">
          <td style="padding:12px;"><strong>SIGKILL</strong></td>
          <td style="padding:12px;">9</td>
          <td style="padding:12px;">Instant death. Cannot be caught or ignored. No cleanup. Risk of corrupted data / open connections.</td>
        </tr>
        <tr style="background-color:#eaf4fb;">
          <td style="padding:12px;"><strong>SIGHUP</strong></td>
          <td style="padding:12px;">1</td>
          <td style="padding:12px;">Often used to reload config (nginx -s reload / kill -HUP).</td>
        </tr>
        <tr style="background-color:#f5fbfe;">
          <td style="padding:12px;"><strong>SIGINT</strong></td>
          <td style="padding:12px;">2</td>
          <td style="padding:12px;">Ctrl+C in terminal — interrupt foreground process.</td>
        </tr>
      </table>

      <div style="background-color:#fee2e2; padding:20px; border-radius:8px; border-left:4px solid #dc2626; margin-top:20px;">
        <p style="margin:0;"><strong>⚠️ Never start with <code>kill -9</code>.</strong> Always try <code>kill</code> (SIGTERM) first. <code>kill -9</code> skips cleanup — databases may leave locks, containers may leave orphaned resources. Docker's default stop also sends SIGTERM, then SIGKILL after a timeout (<code>docker stop</code> → wait → SIGKILL).</p>
      </div>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto; margin-top:20px;"><code># Why SIGKILL is different from SIGTERM
kill 1234      # SIGTERM — process can handle it and exit cleanly
kill -9 1234   # SIGKILL — kernel destroys the process immediately

# List common signals
kill -l</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> SIGTERM is a polite leave request: the process can finish requests, flush logs, and close connections. SIGKILL is a force-close with no goodbye: the kernel removes the process immediately and the application cannot catch it. Start with SIGTERM; use SIGKILL only for a verified stuck process, especially cautiously around databases.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🎛️ Job Control — jobs, bg, fg, nohup</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Job control manages processes started from your current shell. It is useful for short-lived operator tasks, but it is not a replacement for a supervised production service. A production service should have a restart policy, logs, and a defined owner through systemd, a container runtime, or Kubernetes.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># Start in background with &amp;
sleep 300 &amp;
# [1] 4567   ← job number 1, PID 4567

jobs                 # list background jobs in this shell
bg %1                # resume job 1 in background
fg %1                # bring job 1 to foreground
Ctrl+Z               # suspend current foreground job
bg                   # resume the suspended job in background

# nohup — keep running after you close the terminal
nohup ./long-script.sh &amp;
# output goes to nohup.out by default
nohup ./long-script.sh &gt; script.log 2&gt;&amp;1 &amp;</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> Appending <code>&amp;</code> starts a background job; <code>jobs</code> shows its job number and <code>fg %1</code> returns job 1 to the foreground. Ctrl+Z pauses a foreground process, then <code>bg</code> resumes it in the background. <code>nohup</code> survives terminal logout and <code>2&gt;&amp;1</code> puts errors in the same log as normal output.</p>

      <div style="background-color:#fff3cd; padding:20px; border-radius:8px; border-left:4px solid #ffc107; margin-top:20px;">
        <p style="margin:0;"><strong>🤔 When to use what?</strong> Use <code>&amp;</code> / <code>jobs</code> for temporary shell jobs. Use <code>nohup</code> if you must survive logout. For real services in production, prefer <strong>systemd</strong>, Docker, or Kubernetes — not nohup.</p>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💼 Real-World Example — Stuck Process in Production</h2>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># Server is slow — find CPU hog
ps aux --sort=-%cpu | head -10

# App won't stop — graceful then force
ps aux | grep myapp
kill 2841                # SIGTERM first
sleep 5
ps -p 2841 &gt; /dev/null && kill -9 2841   # still alive? then SIGKILL

# Or by name
pkill -TERM myapp
sleep 5
pkill -KILL myapp

# Run a one-off migration that must survive SSH disconnect
nohup python migrate.py &gt; migrate.log 2&gt;&amp;1 &amp;
tail -f migrate.log</code></pre>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Run <code>ps aux | head</code> and identify PID and COMMAND for any process</li>
        <li>Start <code>sleep 60 &amp;</code>, then use <code>jobs</code> and <code>fg</code> to bring it back</li>
        <li>Use <code>pgrep -a</code> to find a process by name</li>
        <li>Explain in one sentence why <code>kill -9</code> is worse than <code>kill</code> for a database</li>
        <li>Start a script with <code>nohup</code> and confirm it writes to a log file</li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Find the top 5 memory-consuming processes on your machine</li>
        <li>Start <code>sleep 120</code>, suspend with Ctrl+Z, resume with <code>bg</code>, then kill it by PID</li>
        <li>Write the exact order you would use to stop a hung Node app: SIGTERM first, then SIGKILL</li>
      </ol>
    </section>

  </div>
  `,
  duration: '25 min',
  order: 4,
  tags: ['linux', 'processes', 'signals', 'kill', 'ps', 'top', 'htop', 'sigterm', 'sigkill', 'jobs', 'nohup', 'devops']
 },
 {
  id: '5',
  title: 'Pipes, Redirection, Env Vars & Links',
  description: 'Connect commands with pipes, redirect stdin/stdout/stderr, manage environment variables, and master hard vs soft links — core shell skills for every senior DevOps engineer.',
  slug: 'pipes-redirection-env-links',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">5 : Pipes, Redirection, Env Vars &amp; Links</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Senior DevOps work is chaining tools. Pipes, redirection, and env vars turn single commands into
      <strong style="color:#d93025;">production-grade workflows</strong>.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Pipes <code>|</code> to chain commands</li>
      <li>✅ Redirect stdout/stderr with <code>&gt;</code>, <code>&gt;&gt;</code>, <code>2&gt;</code>, <code>2&gt;&amp;1</code></li>
      <li>✅ Environment variables — <code>export</code>, <code>PATH</code>, <code>.env</code></li>
      <li>✅ Soft links vs hard links</li>
      <li>✅ <code>xargs</code> for bulk operations</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔗 Pipes</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A pipe sends the output of one command directly into the input of another. It is like connecting a series of small, single-purpose factory stations: each command does one job and passes its result onward. DevOps engineers use pipes to build inspectable one-liners for logs, processes, and system reports.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>ps aux | grep nginx
cat access.log | grep "500" | wc -l
df -h | grep -v tmpfs
history | grep docker
echo "hello world" | tr 'a-z' 'A-Z'
cat file.txt | tee copy.txt | wc -l   # tee = save AND pass through</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> A pipe (<code>|</code>) is an assembly line: the left command produces text and the right command consumes it. It does not save data by itself. In <code>cat file.txt | tee copy.txt | wc -l</code>, <code>tee</code> writes a copy and still passes the same text to <code>wc -l</code>.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📤 Redirection</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Every command has standard input, standard output, and standard error. Redirection chooses where those streams go: a file, another command, or nowhere. Separating normal output from errors makes automation easier to audit and makes failed deployments easier to investigate.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>echo "hi" &gt; out.txt          # overwrite stdout
echo "more" &gt;&gt; out.txt       # append stdout
ls /nofile 2&gt; err.txt        # redirect stderr only
cmd &gt; out.txt 2&gt;&amp;1           # both stdout + stderr to out.txt
cmd &gt;&gt; app.log 2&gt;&amp;1          # append both (common for services)
cmd &gt; /dev/null 2&gt;&amp;1         # discard all output
cmd &lt; input.txt               # feed file as stdin</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> Redirection changes where streams go: <code>&gt;</code> overwrites standard output, <code>&gt;&gt;</code> appends it, <code>2&gt;</code> writes standard error, and <code>2&gt;&amp;1</code> combines errors with normal output. Unlike pipes, redirection normally connects a command to a file or input source; <code>cmd &lt; input.txt</code> feeds standard input.</p>
      <div style="background-color:#f0f9ff; padding:20px; border-radius:8px; border-left:4px solid #2563eb; margin-top:20px;">
        <p style="margin:0;"><strong>💡 Production pattern:</strong> <code>./deploy.sh &gt;&gt; deploy.log 2&gt;&amp;1</code> keeps a full audit trail of a deployment.</p>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🌍 Environment Variables</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Environment variables are named values passed from a shell to programs it starts. They are a convenient way to vary an app’s behavior between development, staging, and production without changing source code. They can contain secrets, so avoid printing them in logs and prefer a proper secret manager for sensitive production values.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>echo $HOME
echo $PATH
echo $USER
export APP_ENV=production
export DB_HOST=db.internal
printenv                 # list all env vars
unset DB_HOST            # remove a variable
env | grep PATH

# Temporary for one command
DB_HOST=localhost node app.js

# Persist for your user (bash)
echo 'export APP_ENV=production' &gt;&gt; ~/.bashrc
source ~/.bashrc</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>export APP_ENV=production</code> makes a value available to child processes; <code>DB_HOST=localhost node app.js</code> sets it for one command only. <code>source ~/.bashrc</code> reloads shell settings now, but do not put passwords in shell history or shared dotfiles.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📎 Soft Links vs Hard Links</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A link gives a file another way to be reached. A symbolic link is like a shortcut that points to a path, while a hard link is another directory entry for the same underlying data. Release deployments often use a symbolic <code>current</code> link so a rollback can switch paths quickly.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>ln -s /etc/nginx/sites-available/app.conf /etc/nginx/sites-enabled/app.conf   # soft (symlink)
ln original.txt hardcopy.txt   # hard link (same inode)
ls -l                          # soft links show -&gt; target
readlink -f /etc/nginx/sites-enabled/app.conf</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> A soft link is a shortcut containing a target path: <code>ln -s target link</code> can cross filesystems but breaks when the target is deleted. A hard link is another name for the same inode/data, must stay on one filesystem, and normally cannot link directories. <code>readlink -f</code> follows a symlink to its final real path.</p>
      <p style="margin-top:15px;"><strong>Soft link</strong> = shortcut (can cross filesystems, can break). <strong>Hard link</strong> = same file, another name (same filesystem only).</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📦 xargs</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;"><code>xargs</code> converts incoming text into arguments for another command. It is powerful for bulk work, but filenames can contain spaces, quotes, and newlines. Prefer null-delimited input with <code>-print0</code> and <code>-0</code> when processing filenames, especially before deletion.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>find . -name "*.log" | xargs rm
find . -name "*.tmp" -print0 | xargs -0 rm -f
echo "a b c" | xargs -n1 echo
cat hosts.txt | xargs -I{} ssh {} uptime</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>xargs</code> turns input items into command arguments; <code>-n1</code> runs one item per command and <code>-I{}</code> substitutes each item at <code>{}</code>. For filenames, <code>find -print0 | xargs -0</code> safely handles spaces and newlines. Test deletion commands by replacing <code>rm</code> with <code>echo</code> first.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💼 Real-World Example</h2>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>export APP_ENV=staging
./scripts/migrate.sh &gt;&gt; logs/migrate.log 2&gt;&amp;1
grep -i error logs/migrate.log | tee logs/errors-only.txt | wc -l
ln -s /opt/myapp/releases/v1.2.3 /opt/myapp/current</code></pre>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Save <code>ps aux</code> output to a file, then append a timestamped note</li>
        <li>Run a command that fails and capture only stderr</li>
        <li>Export <code>MY_PORT=8080</code> and print it with <code>echo</code></li>
        <li>Create a symlink from <code>~/current</code> to a folder you create</li>
        <li>Pipe <code>ls</code> into <code>wc -l</code> to count entries</li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Build a one-liner that finds <code>.log</code> files and deletes those older than 7 days using <code>find</code> + <code>xargs</code></li>
        <li>Redirect both stdout and stderr of a failing command into <code>debug.log</code></li>
        <li>Explain what breaks if you delete the target of a soft link</li>
      </ol>
    </section>

  </div>
  `,
  duration: '25 min',
  order: 5,
  tags: ['linux', 'pipes', 'redirection', 'environment', 'symlinks', 'xargs', 'bash', 'devops']
 },
 {
  id: '6',
  title: 'Users, Groups & sudo',
  description: 'Create and manage users and groups, understand /etc/passwd and /etc/shadow, and use sudo safely — the identity layer every secure Linux server depends on.',
  slug: 'users-groups-sudo',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">6 : Users, Groups &amp; sudo</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In production you never run apps as root. Understanding users, groups, and
      <strong style="color:#d93025;">sudo</strong> is mandatory senior DevOps skill.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Create/modify/delete users and groups</li>
      <li>✅ Read <code>/etc/passwd</code>, <code>/etc/group</code>, <code>/etc/shadow</code></li>
      <li>✅ <code>sudo</code>, <code>su</code>, and least privilege</li>
      <li>✅ Service accounts for apps and containers</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">👤 User Management</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Users are identities under which people and programs run. Giving each application its own identity limits the damage if that application is compromised or misconfigured. Before creating or removing users on a real host, understand whether an identity is human, a service account, or managed by your organization’s identity provider.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>whoami
id
id ajay
cat /etc/passwd | grep ajay

sudo adduser deploy                 # interactive (Debian/Ubuntu)
sudo useradd -m -s /bin/bash deploy # portable form (-m = home)
sudo passwd deploy
sudo usermod -aG sudo deploy        # add to sudo group
sudo usermod -aG docker deploy      # add to docker group
sudo userdel -r deploy              # delete user + home</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>whoami</code> prints your identity and <code>id</code> shows numeric UID, GID, and groups. <code>useradd -m -s /bin/bash</code> creates a home directory and Bash login shell; <code>usermod -aG</code> appends a supplementary group. <code>userdel -r</code> also removes the home directory, so verify the account first.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">👥 Groups</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Groups let several users or services share a permission boundary without making files public. They are a cleaner answer than repeatedly changing individual file owners when a team needs controlled access. Membership normally takes effect in a new login session, so verify it before assuming a permission issue is fixed.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>groups
cat /etc/group
sudo groupadd devops
sudo usermod -aG devops ajay
sudo gpasswd -d ajay devops   # remove from group
newgrp devops                 # activate new group in current shell</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>groupadd</code> creates a shared permission group; <code>usermod -aG</code> adds a member, where <code>-a</code> means append and <code>-G</code> selects supplementary groups. Without <code>-a</code>, you can accidentally replace other groups. <code>newgrp</code> starts a shell with the selected group.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔐 sudo &amp; Privilege</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;"><code>sudo</code> temporarily runs a single command with another user’s privileges, usually root. It creates a clearer audit boundary than working in a permanent root shell and supports least-privilege rules. Use it only for the command that needs elevation, then return to an unprivileged account.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>sudo apt update           # run one command as root
sudo -i                   # root interactive shell
sudo -u www-data bash     # run as another user
su - deploy               # switch user (needs password)
sudo visudo               # edit sudoers safely
sudo -l                   # list your sudo privileges</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>sudo command</code> elevates one command after checking policy, while <code>sudo -i</code> opens a root shell where every later command has full power. Root is the all-access account; sudo is the controlled temporary key. <code>visudo</code> validates sudoers syntax before saving.</p>
      <div style="background-color:#fee2e2; padding:20px; border-radius:8px; border-left:4px solid #dc2626; margin-top:20px;">
        <p style="margin:0;"><strong>⚠️ Never</strong> give passwordless sudo to everyone. Use least privilege: app users get only the commands they need.</p>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💼 Real-World — App Service User</h2>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>sudo useradd -r -m -d /opt/myapp -s /usr/sbin/nologin myapp
sudo mkdir -p /opt/myapp/{bin,config,logs}
sudo chown -R myapp:myapp /opt/myapp
sudo chmod 750 /opt/myapp
sudo -u myapp /opt/myapp/bin/start.sh</code></pre>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Run <code>id</code> and list your UID, GID, and groups</li>
        <li>Create a group <code>devops-lab</code> (needs sudo)</li>
        <li>Inspect one line of <code>/etc/passwd</code> and explain each field</li>
        <li>Run <code>sudo -l</code> and note what you can do</li>
        <li>Explain why containers often run as non-root UID 1000</li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Create a nologin service user and a directory owned only by that user</li>
        <li>Add your user to a custom group and verify with <code>id</code> after <code>newgrp</code> or re-login</li>
        <li>Document a least-privilege sudo rule you would give a deploy user (even if you don't apply it)</li>
      </ol>
    </section>

  </div>
  `,
  duration: '25 min',
  order: 6,
  tags: ['linux', 'users', 'groups', 'sudo', 'security', 'passwd', 'devops']
 },
 {
  id: '7',
  title: 'Linux Networking for DevOps',
  description: 'Master IP addressing, ports, DNS, curl, ss/netstat, firewalls, and connectivity debugging — the networking toolkit you use daily with Docker, Kubernetes, and the cloud.',
  slug: 'linux-networking-devops',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">7 : Linux Networking for DevOps</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Most production outages are networking. Senior DevOps engineers debug
      <strong style="color:#d93025;">ports, DNS, firewalls, and routes</strong> before blaming the app.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Interfaces &amp; IPs with <code>ip</code></li>
      <li>✅ Ports &amp; sockets with <code>ss</code> / <code>netstat</code></li>
      <li>✅ DNS with <code>dig</code>, <code>nslookup</code>, <code>/etc/resolv.conf</code></li>
      <li>✅ HTTP debugging with <code>curl</code></li>
      <li>✅ Firewall basics (<code>ufw</code> / <code>iptables</code>)</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🌐 Interfaces &amp; Routing</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Networking starts with an interface, an IP address, and a route that tells the kernel where traffic should go. An address alone does not prove reachability: a missing route, gateway, or firewall can still block traffic. DevOps engineers inspect this layer before changing application code when a host cannot reach a dependency.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>ip addr                 # show IPs (modern)
ip a                    # short form
ip link                 # interfaces up/down
ip route                # routing table
hostname -I             # quick IP list
ping -c 4 8.8.8.8
traceroute google.com
tracepath google.com</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>ip addr</code> shows addresses and <code>ip link</code> shows interface state. <code>ip route</code> shows the kernel’s delivery plan, including the default gateway. <code>ping -c 4</code> sends exactly four probes; a failed ping does not prove HTTP is unavailable because many networks block ICMP.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔌 Ports &amp; Listening Services</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A port identifies a network endpoint on a host, and a listening socket means a process has asked the kernel to accept connections there. Checking listeners distinguishes “the app never started” from “the app started but traffic cannot reach it.” Always confirm both the address it binds to and the owning process.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>ss -tulpn               # listening TCP/UDP + process (preferred)
ss -tulpn | grep :80
sudo lsof -i :8080      # which process owns a port
netstat -tulpn          # older equivalent
nc -zv localhost 22     # check if port is open
telnet localhost 5432</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>ss -tulpn</code> combines TCP, UDP, listening sockets, process ownership, and numeric addresses. Filter with <code>grep :80</code> for one port. <code>nc -zv</code> tests whether a connection can open without sending application data; it proves reachability, not a healthy HTTP response.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧭 DNS</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">DNS translates a service name into an address, much like a contacts list turns a name into a phone number. A healthy application can still fail if it resolves the wrong address, has stale records, or cannot reach its configured resolver. Test the name from the same server or container that reports the failure.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>cat /etc/resolv.conf
dig google.com
dig +short api.github.com
nslookup kubernetes.io
getent hosts db.internal
cat /etc/hosts          # local overrides</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>dig +short</code> prints only answer addresses, while plain <code>dig</code> shows the full response. <code>getent hosts</code> uses Linux’s configured resolver rules, so it reflects what an application sees. <code>/etc/hosts</code> can override DNS locally.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📡 curl — API &amp; Health Checks</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;"><code>curl</code> makes an HTTP request from the command line and exposes the response your application actually receives. It is ideal for validating status codes, headers, TLS, redirects, and request bodies without a browser. In a runbook, a small curl check often separates a broken network path from a broken application endpoint.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>curl https://example.com
curl -I https://example.com          # headers only
curl -v https://api.example.com/health
curl -X POST -H "Content-Type: application/json" \\
  -d '{"name":"ajay"}' https://httpbin.org/post
curl -o file.tgz https://example.com/file.tgz
curl -w "%{http_code}\\n" -o /dev/null -s https://example.com</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>curl -I</code> requests headers only; <code>-v</code> shows connection detail; <code>-X POST</code> selects method; <code>-H</code> adds a header; and <code>-d</code> sends a body. For the status-only command, <code>-s</code> hides progress, <code>-o /dev/null</code> drops the body, and <code>-w</code> prints the metric. Debug in order: DNS, <code>ss</code> listener, then curl status/body.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔥 Firewall Basics</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A firewall is a policy gate that decides which network traffic a host accepts or sends. Opening a port is necessary only when a real service needs outside traffic; every additional open port increases attack surface. Change rules carefully on a remote host so you do not lock yourself out of SSH.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># Ubuntu UFW
sudo ufw status
sudo ufw allow 22/tcp
sudo ufw allow 80,443/tcp
sudo ufw enable

# iptables quick view
sudo iptables -L -n -v
sudo iptables -S</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>ufw allow 22/tcp</code> permits SSH TCP traffic; the comma form permits both web ports. Check <code>ufw status</code> before and after remote changes. <code>iptables -L -n -v</code> lists counters using numeric addresses, while <code>-S</code> prints rule syntax.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💼 Real-World Debugging Flow</h2>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># App not reachable?
1. curl -v http://host:port/health
2. ss -tulpn | grep port
3. dig hostname
4. ping / traceroute host
5. sudo ufw status / security group check
6. journalctl -u myapp -n 50</code></pre>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Show your machine's IP with <code>ip a</code></li>
        <li>List listening ports with <code>ss -tulpn</code></li>
        <li>Resolve a domain with <code>dig +short</code></li>
        <li>Fetch headers of a website with <code>curl -I</code></li>
        <li>Check if port 22 is open locally with <code>nc</code> or <code>ss</code></li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Write a 5-step checklist you would use when "site is down"</li>
        <li>Use <code>curl -w</code> to print only the HTTP status code of a URL</li>
        <li>Find which process is bound to a busy port on your system</li>
      </ol>
    </section>

  </div>
  `,
  duration: '30 min',
  order: 7,
  tags: ['linux', 'networking', 'curl', 'dns', 'ss', 'firewall', 'ports', 'devops']
 },
 {
  id: '8',
  title: 'Disk, Storage & Archives',
  description: 'Monitor disk usage, understand mounts and inodes, and package backups with tar/gzip — essential for capacity planning and incident response.',
  slug: 'disk-storage-archives',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">8 : Disk, Storage &amp; Archives</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Disk-full alerts wake DevOps engineers at 3 AM. Learn to measure, clean, mount, and
      <strong style="color:#d93025;">archive</strong> before production burns.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ <code>df</code>, <code>du</code>, inodes</li>
      <li>✅ Mounts &amp; <code>/etc/fstab</code> basics</li>
      <li>✅ <code>tar</code>, <code>gzip</code>, <code>zip</code> for backups</li>
      <li>✅ Finding what fills the disk</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💾 Disk Usage</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Disk capacity is not only bytes. Filesystems also have inodes, which are records used to track individual files, so millions of tiny files can exhaust a filesystem with plenty of byte space remaining. DevOps engineers monitor both numbers and locate the largest consumers before deleting anything.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>df -h                  # disk free (human)
df -i                  # inode usage (files count limit!)
du -sh *               # size of each item in current dir
du -sh /var/log
du -h --max-depth=1 /var | sort -h
ncdu /var              # interactive (if installed)</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>df -h</code> reports capacity for mounted filesystems; <code>du -sh</code> totals a chosen directory, so use df to find the full filesystem and du to find the culprit. <code>-h</code> makes sizes readable, <code>-s</code> summarizes, and <code>--max-depth=1</code> limits the tree. <code>df -i</code> reports inode use: millions of tiny files can block new files even with free gigabytes.</p>
      <div style="background-color:#fff3cd; padding:20px; border-radius:8px; border-left:4px solid #ffc107; margin-top:20px;">
        <p style="margin:0;"><strong>🤔 Inodes matter:</strong> A disk can be "full" with free space left if you create millions of tiny files (common with container layers / caches).</p>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📀 Mounts</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A mount attaches a filesystem to a directory so its contents become part of the single Linux directory tree. This is how an attached cloud volume, a network share, or a separate data disk becomes available to an application. Persistent mounts must be configured carefully because an incorrect boot-time entry can stop a server from starting normally.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>lsblk
mount | column -t
findmnt
cat /etc/fstab
# Example mount (careful on real disks)
# sudo mount /dev/sdb1 /mnt/data
# sudo umount /mnt/data</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>lsblk</code> shows disks and partitions, <code>findmnt</code> shows the mounted tree, and <code>/etc/fstab</code> describes persistent mounts. <code>mount device directory</code> attaches a filesystem and <code>umount</code> detaches it. Verify devices by UUID before changing a production fstab.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📦 Archives — tar &amp; gzip</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">An archive bundles many files and directories into one transferable object; compression reduces its size. Backups and releases commonly use tar archives because they preserve directory structure and, when run with appropriate privileges, metadata such as permissions. A backup is only useful if you can list it and restore it to a separate location.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>tar -czvf backup.tar.gz myapp/     # create compressed archive
tar -tzvf backup.tar.gz            # list contents
tar -xzvf backup.tar.gz            # extract
tar -xzvf backup.tar.gz -C /opt/   # extract to path
gzip file.txt                      # compress single file -&gt; file.txt.gz
gunzip file.txt.gz
zip -r app.zip app/
unzip app.zip</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> In <code>tar -czvf</code>, <code>-c</code> creates, <code>-z</code> gzip-compresses, <code>-v</code> lists progress, and <code>-f</code> names the archive. <code>-t</code> lists contents, <code>-x</code> extracts, and <code>-C</code> selects the extraction directory. A backup is trustworthy only after a test listing and restore.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💼 Real-World — Disk Full Incident</h2>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>df -h
df -i
sudo du -xh / --max-depth=1 2&gt;/dev/null | sort -h
sudo du -xh /var/log --max-depth=1 | sort -h
sudo journalctl --vacuum-time=7d
sudo find /var/log -name "*.gz" -mtime +30 -delete
tar -czvf /backups/logs-$(date +%F).tar.gz /var/log/myapp</code></pre>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Run <code>df -h</code> and note which filesystem is fullest</li>
        <li>Use <code>du -sh *</code> in your home directory</li>
        <li>Create a <code>.tar.gz</code> of a practice folder and extract it elsewhere</li>
        <li>Check inode usage with <code>df -i</code></li>
        <li>List block devices with <code>lsblk</code></li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Find the 10 largest directories under <code>/home</code> or <code>/var</code></li>
        <li>Write a backup one-liner that includes today's date in the archive name</li>
        <li>Explain a case where <code>df -h</code> looks fine but the system still cannot create files</li>
      </ol>
    </section>

  </div>
  `,
  duration: '25 min',
  order: 8,
  tags: ['linux', 'disk', 'storage', 'tar', 'gzip', 'df', 'du', 'mount', 'devops']
 },
 {
  id: '9',
  title: 'Package Management & Software Install',
  description: 'Install, update, and remove software with apt/dnf/yum, manage repositories, and pin versions — how real servers stay patched and reproducible.',
  slug: 'package-management',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">9 : Package Management &amp; Software Install</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Senior DevOps engineers don't random-download binaries. They use package managers for
      <strong style="color:#d93025;">reproducible, patchable</strong> systems.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ apt (Debian/Ubuntu) essentials</li>
      <li>✅ dnf/yum (RHEL/CentOS/Fedora) essentials</li>
      <li>✅ Search, install, remove, update, hold</li>
      <li>✅ Why Alpine <code>apk</code> matters for containers</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📦 apt (Ubuntu/Debian)</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A package manager installs signed software along with the dependencies it needs and records what is installed. On Debian-based systems, refresh the repository index before deciding what versions are available. This makes server setup repeatable and patching traceable instead of relying on unverified manual downloads.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>sudo apt update
sudo apt upgrade
sudo apt install nginx curl htop
sudo apt remove nginx
sudo apt purge nginx          # remove config too
sudo apt autoremove
apt search docker
apt show nginx
apt list --installed | grep nginx
sudo apt-mark hold nginx      # prevent accidental upgrade</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>apt update</code> refreshes the available-package catalog but installs nothing. <code>apt upgrade</code> applies upgrades; <code>remove</code> keeps configuration, while <code>purge</code> removes it too. <code>apt-mark hold</code> freezes a package during normal upgrades and should be documented as a temporary operational decision.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📦 dnf / yum (RHEL family)</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">RHEL-family systems use <code>dnf</code> (and older systems may use <code>yum</code>) to manage RPM packages and their dependencies. The intent is the same as apt even though repository files and package names can differ. Automation should detect or declare its target distribution rather than assuming one package manager exists everywhere.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>sudo dnf update
sudo dnf install nginx
sudo dnf remove nginx
dnf search htop
dnf info nginx
# older systems use yum with similar commands</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>dnf update</code> applies available updates; <code>install</code> adds a package and dependencies; <code>remove</code> removes it. <code>search</code> finds candidate names and <code>info</code> reports version, repository, and description. Older yum uses similar verbs.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🐳 Alpine apk (containers)</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Alpine Linux is popular in containers because its base image and package tooling are small. Its <code>apk</code> commands install software inside that Alpine environment, not on an Ubuntu or RHEL host. Keep container build dependencies minimal and remove temporary packages when they are no longer needed.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>apk update
apk add --no-cache curl bash
apk del curl</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>apk add --no-cache</code> installs without keeping the downloaded index cache, keeping images smaller. <code>apk update</code> refreshes indexes and <code>apk del</code> removes packages. Do not leave temporary build tools in the final runtime image.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💼 Real-World — Golden Image Prep</h2>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>sudo apt update && sudo apt -y upgrade
sudo apt install -y curl wget git vim htop net-tools jq unzip
sudo apt autoremove -y
# then snapshot / bake AMI / packer image</code></pre>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Update package index on your distro</li>
        <li>Search for a package like <code>jq</code> or <code>htop</code></li>
        <li>Show package info before installing</li>
        <li>List a few installed packages related to networking</li>
        <li>Read about <code>apt-mark hold</code> and when you'd use it</li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Write a bootstrap script that installs your "must-have" DevOps CLI tools</li>
        <li>Compare apt vs apk and explain why Docker images prefer Alpine/slim</li>
        <li>Document how you would pin a package version in CI</li>
      </ol>
    </section>

  </div>
  `,
  duration: '20 min',
  order: 9,
  tags: ['linux', 'apt', 'dnf', 'yum', 'apk', 'packages', 'devops']
 },
 {
  id: '10',
  title: 'systemd, Logs & Cron',
  description: 'Manage services with systemctl, read logs with journalctl, and schedule jobs with cron — how Linux keeps production workloads running and observable.',
  slug: 'systemd-logs-cron',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">10 : systemd, Logs &amp; Cron</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Services, logs, and schedules are the heartbeat of servers. Master
      <strong style="color:#d93025;">systemctl</strong>, <strong style="color:#d93025;">journalctl</strong>, and <strong style="color:#d93025;">cron</strong>.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Start/stop/enable services with <code>systemctl</code></li>
      <li>✅ Read logs with <code>journalctl</code></li>
      <li>✅ Write a simple unit file</li>
      <li>✅ Schedule jobs with crontab</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">⚙️ systemctl</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;"><code>systemd</code> is the service manager on many modern Linux distributions, and <code>systemctl</code> is its control interface. It keeps long-running processes supervised, starts them in a known order, and can restart them after failure. That is much more reliable than leaving a service attached to an administrator’s terminal.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>systemctl status nginx
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx      # reload config without full restart
sudo systemctl enable nginx      # start on boot
sudo systemctl disable nginx
systemctl is-active nginx
systemctl list-units --type=service --state=running
systemctl cat nginx              # show unit file</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>start</code> launches a service now; <code>enable</code> makes it start after future boots; <code>enable --now</code> does both. <code>restart</code> stops then starts, while <code>reload</code> asks a supporting service to reread config without a full stop. Validate configuration before reloading.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📜 journalctl</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">The systemd journal stores structured logs from services, the kernel, and boot events. Querying by unit, time range, severity, or boot narrows a large log history to the event you are investigating. This is often faster and more reliable than guessing which file in <code>/var/log</code> contains the answer.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>journalctl -u nginx
journalctl -u nginx -f           # follow live
journalctl -u nginx -n 100
journalctl -u nginx --since "1 hour ago"
journalctl -u nginx --since today
journalctl -p err -b             # errors since boot
journalctl --disk-usage
sudo journalctl --vacuum-time=7d</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>-u nginx</code> filters to one unit, <code>-f</code> follows live output, <code>-n 100</code> asks for the last 100 records, and <code>--since</code> limits time. <code>-p err -b</code> means errors from the current boot. Vacuum commands delete history, so confirm retention requirements first.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧾 Simple Unit File</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A unit file is a declarative description of how systemd should start and supervise a service. It documents the executable, working directory, service user, dependencies, restart behavior, and environment in one reviewable place. Keep applications unprivileged and make changes through a staged, tested deployment path.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># /etc/systemd/system/myapp.service
[Unit]
Description=My App
After=network.target

[Service]
User=myapp
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/node /opt/myapp/server.js
Restart=always
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target

# Then:
sudo systemctl daemon-reload
sudo systemctl enable --now myapp</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>After=network.target</code> orders startup after basic networking, <code>User=</code> avoids root, and <code>WorkingDirectory=</code> makes relative paths predictable. <code>Restart=always</code> supervises a stopped process and <code>RestartSec=5</code> avoids a tight crash loop. Run <code>daemon-reload</code> before <code>enable --now</code> after editing a unit.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">⏰ Cron</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Cron runs commands on a schedule, even when no one is logged in. It is useful for simple recurring work such as backups, reports, and cleanup, but jobs run with a limited environment and need explicit paths and logging. Make scheduled tasks idempotent where possible so a retry does not cause harm.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>crontab -e
crontab -l

# min hour day month weekday command
0 2 * * * /opt/scripts/backup.sh &gt;&gt; /var/log/backup.log 2&gt;&amp;1
*/5 * * * * curl -fsS https://example.com/health || echo fail
0 0 * * 0 tar -czf /backups/weekly.tar.gz /data

# System-wide: /etc/crontab , /etc/cron.d/</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> Cron fields are minute, hour, day of month, month, and day of week. <code>0 2 * * *</code> is 02:00 daily; <code>*/5 * * * *</code> is every five minutes. Cron has a minimal environment, so use absolute paths and redirect output to a known log.</p>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Check status of a service like <code>ssh</code> or <code>cron</code></li>
        <li>Read last 50 journal lines for that service</li>
        <li>List running services with <code>systemctl</code></li>
        <li>Open <code>crontab -e</code> and add a job that writes the date to a file every minute (then remove it)</li>
        <li>Explain <code>enable</code> vs <code>start</code></li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Draft a systemd unit for a simple script that should restart on failure</li>
        <li>Write a cron expression for "every day at 02:30"</li>
        <li>Use journalctl to show only errors from the current boot</li>
      </ol>
    </section>

  </div>
  `,
  duration: '30 min',
  order: 10,
  tags: ['linux', 'systemd', 'journalctl', 'cron', 'services', 'logs', 'devops']
 },
 {
  id: '11',
  title: 'Bash Scripting for DevOps',
  description: 'Write reliable bash scripts with variables, conditionals, loops, functions, exit codes, and set -euo pipefail — automation that seniors trust in CI/CD.',
  slug: 'bash-scripting-devops',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">11 : Bash Scripting for DevOps</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      YAML and Terraform are great — but bash is still the glue of DevOps.
      Write scripts that are <strong style="color:#d93025;">safe, idempotent, and readable</strong>.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Shebang, variables, quoting</li>
      <li>✅ if/else, loops, functions</li>
      <li>✅ Exit codes &amp; <code>set -euo pipefail</code></li>
      <li>✅ Practical deploy / health-check scripts</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📝 Script Basics</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A Bash script records a sequence of shell commands so people and automation can run the same procedure consistently. The shebang selects the interpreter, variables make values reusable, and quoting protects values containing spaces or special characters. Reliable scripts turn a manual runbook into a repeatable operational tool.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>#!/usr/bin/env bash
set -euo pipefail

NAME="Ajay"
echo "Hello, \${NAME}"
echo "Args: \$1 \$2"
echo "Arg count: \$#"
echo "All args: \$@"
echo "Last exit code: \$?"</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> The shebang selects Bash. <code>set -e</code> stops after an unhandled failing command, <code>-u</code> makes unset variables errors, and <code>-o pipefail</code> fails a pipeline if any command in it fails—not only the last one. Together they catch silent CI/CD failures; use <code>|| true</code> only for failures you truly expect.</p>
      <p style="margin-top:15px;"><code>set -e</code> exit on error, <code>-u</code> error on unset vars, <code>-o pipefail</code> catch pipe failures.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔀 Conditionals &amp; Loops</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Conditionals let a script choose an action based on the system’s current state, while loops apply one safe action repeatedly. They are the foundations of idempotent automation: a script can check first instead of assuming every machine looks the same. Quote variables and use explicit tests so unusual input does not change the meaning of a command.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>if [[ -f /etc/nginx/nginx.conf ]]; then
  echo "nginx config exists"
elif [[ -d /etc/nginx ]]; then
  echo "dir exists, config missing"
else
  echo "nginx not installed"
fi

for host in web1 web2 web3; do
  echo "Checking \$host"
  ping -c1 "\$host" || true
done

while read -r line; do
  echo "IP: \$line"
done &lt; hosts.txt</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>[[ -f path ]]</code> tests for a regular file and <code>[[ -d path ]]</code> tests for a directory. Quote <code>"$host"</code> so it remains one value. <code>|| true</code> deliberately prevents a failed ping from stopping a script using <code>set -e</code>.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧩 Functions &amp; Useful Tests</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Functions package repeated behavior under meaningful names, which makes a script easier to read and test. Small helpers for logging, validation, and failure handling make operational scripts safer because error behavior is consistent. Check prerequisites before making changes so failure is early and understandable.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>log() { echo "[$(date +%F\ %T)] $*"; }
die() { echo "ERROR: $*" &gt;&amp;2; exit 1; }

require_cmd() {
  command -v "\$1" &gt;/dev/null || die "Missing \$1"
}

# Tests: -f file, -d dir, -z empty string, -n non-empty, -eq numbers
[[ -z "\${API_KEY:-}" ]] && die "API_KEY not set"</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> Functions make repeated error handling consistent. <code>$*</code> means all function arguments, <code>&gt;&amp;2</code> writes to standard error, and <code>exit 1</code> tells CI or systemd the script failed. <code>command -v</code> checks prerequisites, while <code>\${API_KEY:-}</code> safely becomes empty when unset.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💼 Real-World Health Check Script</h2>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>#!/usr/bin/env bash
set -euo pipefail

URL="\${1:-http://localhost:8080/health}"
TRIES=5

for i in \$(seq 1 \$TRIES); do
  code=\$(curl -s -o /dev/null -w "%{http_code}" "\$URL" || true)
  if [[ "\$code" == "200" ]]; then
    echo "OK (\$code)"
    exit 0
  fi
  echo "Attempt \$i failed (\$code), retrying..."
  sleep 2
done

echo "Health check failed" &gt;&amp;2
exit 1</code></pre>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Create <code>hello.sh</code>, add shebang, <code>chmod +x</code>, run it</li>
        <li>Accept a name as <code>\$1</code> and print a greeting</li>
        <li>Write an if statement that checks if a file exists</li>
        <li>Loop over three directory names and create them</li>
        <li>Add <code>set -euo pipefail</code> and intentionally trigger an unset-variable error</li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Build the health-check script above and test it against a real URL</li>
        <li>Write a backup script: tar a folder, name it with date, keep only last 5 backups</li>
        <li>Add a <code>die</code> helper and use it for missing arguments</li>
      </ol>
    </section>

  </div>
  `,
  duration: '35 min',
  order: 11,
  tags: ['linux', 'bash', 'scripting', 'automation', 'ci-cd', 'devops']
 },
 {
  id: '12',
  title: 'SSH, Security & Production Troubleshooting',
  description: 'Use SSH keys safely, harden access, read critical logs, and follow a senior-level troubleshooting playbook for CPU, memory, disk, and network incidents.',
  slug: 'ssh-security-troubleshooting',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">12 : SSH, Security &amp; Production Troubleshooting</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      This is the senior layer: secure remote access and calm, systematic
      <strong style="color:#d93025;">incident debugging</strong>.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ SSH keys, config, and tunneling</li>
      <li>✅ Basic hardening checklist</li>
      <li>✅ CPU / memory / disk / network triage</li>
      <li>✅ Where to look when production breaks</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔑 SSH</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">SSH provides an encrypted remote terminal and secure file transfer channel. Key pairs authenticate you without sending a reusable password to the server, and a client configuration file makes approved connections consistent. DevOps engineers use SSH for controlled maintenance, but access should be logged, limited, and revocable.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>ssh-keygen -t ed25519 -C "ajay@devops"
ssh-copy-id user@server
ssh user@server
ssh -i ~/.ssh/prod.pem ubuntu@10.0.1.5

# ~/.ssh/config
Host prod
  HostName 10.0.1.5
  User ubuntu
  IdentityFile ~/.ssh/prod.pem

ssh prod
scp file.txt prod:/tmp/
rsync -avz ./app/ prod:/opt/app/
ssh -L 8080:localhost:8080 prod    # local port forward</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>ssh-keygen -t ed25519</code> creates a modern key pair; protect the private key and distribute only the public key. <code>-i</code> chooses a key file. <code>rsync -avz</code> preserves metadata, is verbose, and compresses transfer data; <code>ssh -L</code> forwards a local port through SSH to a private target.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🛡️ Hardening Basics</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Hardening reduces the ways an attacker or mistake can reach a system. It is not a single setting; it combines strong authentication, limited privileges, timely patches, narrow network exposure, and protected secrets. Apply changes carefully with a rollback path, especially for SSH settings that could remove your own access.</p>
      <ul style="font-size: 1.05rem;">
        <li>Disable password SSH login (keys only)</li>
        <li>Disable root SSH login</li>
        <li>Keep packages updated</li>
        <li>Open only required ports</li>
        <li>Run apps as non-root</li>
        <li>Secrets: mode <code>600</code>, never in git</li>
      </ul>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># /etc/ssh/sshd_config (concepts)
PasswordAuthentication no
PermitRootLogin no
AllowUsers deploy
sudo systemctl reload ssh</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>PasswordAuthentication no</code> requires keys, <code>PermitRootLogin no</code> blocks direct root SSH, and <code>AllowUsers deploy</code> limits login accounts. Keep a second working SSH session open while testing a reload so you can recover from a bad rule.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🩺 Troubleshooting Playbook</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">A playbook is a repeatable sequence of checks that turns an alarming outage into a bounded investigation. Start with observed symptoms, then collect evidence about service health, resources, logs, and dependencies before making disruptive changes. This order avoids the common mistake of restarting a service and erasing the clues needed to find the cause.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code># CPU
top / htop
ps aux --sort=-%cpu | head

# Memory
free -h
ps aux --sort=-%mem | head

# Disk
df -h && df -i
du -xh /var --max-depth=1 | sort -h

# Network
ss -tulpn
curl -v health-endpoint
dig hostname

# Service / logs
systemctl status myapp
journalctl -u myapp -n 100 --no-pager
tail -f /var/log/myapp/app.log

# Kernel / OOM
dmesg | tail
journalctl -k | grep -i oom</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> <code>free -h</code> checks RAM and swap; <code>df -h</code>/<code>df -i</code> checks bytes and inodes; <code>ps --sort</code> finds resource-heavy processes. Then use <code>ss</code> for listeners, <code>curl -v</code> for HTTP evidence, and <code>journalctl</code> for service logs. <code>journalctl -k | grep -i oom</code> looks for kernel out-of-memory kills.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💼 Real-World Incident Order</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">Incident response prioritizes restoring a safe service while preserving enough evidence to understand what failed. The order below moves from user-visible symptoms to recent changes, host resources, dependencies, and logs. Each step narrows the hypothesis, so record results and avoid changing several variables at once.</p>
      <ol style="font-size: 1.05rem;">
        <li>Is it up? <code>curl</code> / health check / <code>systemctl status</code></li>
        <li>Did it change? recent deploy, config, cert expiry</li>
        <li>Resources: CPU, RAM, disk, inodes</li>
        <li>Dependencies: DB, DNS, network, certificates</li>
        <li>Logs: app + journal + reverse proxy</li>
        <li>Mitigate: restart gracefully, scale, rollback</li>
        <li>Write a short postmortem note</li>
      </ol>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Generate an ed25519 SSH key (don't overwrite existing keys blindly)</li>
        <li>Create a sample <code>~/.ssh/config</code> Host entry</li>
        <li>Run <code>free -h</code> and <code>df -h</code> and interpret them</li>
        <li>Find top CPU and memory processes</li>
        <li>List 5 hardening steps you would apply to a new VPS</li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge Tasks</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Write your own 1-page incident playbook for "API 502"</li>
        <li>Practice an rsync dry-run (<code>-n</code>) of a folder to another path</li>
        <li>Explain how SSH port forwarding helps debug a private DB</li>
      </ol>
    </section>

  </div>
  `,
  duration: '35 min',
  order: 12,
  tags: ['linux', 'ssh', 'security', 'troubleshooting', 'production', 'devops']
 },
 {
  id: '13',
  title: 'Senior DevOps Linux Capstone Lab',
  description: 'Put everything together: provision a mini app layout, permissions, systemd-style thinking, networking checks, backups, scripts, and a full troubleshooting drill.',
  slug: 'senior-devops-linux-capstone-lab',
  courseId: '6',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">13 : Senior DevOps Linux Capstone Lab</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      No new theory — only practice. Complete this lab and you have Level 0 → senior Linux
      muscle memory for Docker, Kubernetes, and cloud work.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🎯 Lab Goals</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Build a realistic app directory layout</li>
      <li>✅ Lock down permissions</li>
      <li>✅ Write automation scripts</li>
      <li>✅ Simulate monitoring &amp; backup</li>
      <li>✅ Run a troubleshooting drill</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Task A — Bootstrap the App Tree</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">This task creates the predictable filesystem layout that operations teams expect from a deployable application. Separating executable code, configuration, logs, scripts, and backups makes access controls and incident investigation much simpler. Work one line at a time, then inspect the resulting tree and modes before moving on.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>mkdir -p ~/devops-capstone/{app/{bin,config,logs},scripts,backups}
cd ~/devops-capstone
touch app/bin/start.sh app/config/app.env app/logs/app.log
chmod 750 app/bin/start.sh
chmod 600 app/config/app.env
chmod 755 app scripts backups
ls -laR</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> The brace expression makes the layout reproducible. <code>750</code> lets owner fully use the script and group run it, while <code>600</code> keeps the environment file private. This mirrors real deployments, where code, secrets, logs, and backups need different access rules.</p>
      <p><strong>Done when:</strong> tree exists, secret file is <code>600</code>, start script is executable by owner/group only.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Task B — Fake App + Logs</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">This task simulates a small service that writes normal events and an error to a log. The point is not the five-second script; it is practicing how application behavior leaves evidence you can search later. Create the file exactly as shown, run it, then use the final commands to prove that you can isolate the failure message.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>cat &gt; app/bin/start.sh &lt;&lt;'EOF'
#!/usr/bin/env bash
set -euo pipefail
LOG_FILE="$(dirname "\$0")/../logs/app.log"
echo "[\$(date +%F\ %T)] app started" &gt;&gt; "\$LOG_FILE"
for i in 1 2 3 4 5; do
  echo "[\$(date +%F\ %T)] heartbeat ok" &gt;&gt; "\$LOG_FILE"
  sleep 1
done
echo "[\$(date +%F\ %T)] ERROR simulated failure" &gt;&gt; "\$LOG_FILE"
EOF
chmod 750 app/bin/start.sh
./app/bin/start.sh
grep ERROR app/logs/app.log
tail -n 5 app/logs/app.log</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> The quoted heredoc writes variables literally, so they expand later when the script runs. <code>dirname "$0"</code> finds the script directory, making the log path independent of the launch directory. The loop creates normal events and one planned error so you can practice finding known evidence.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Task C — Backup Script</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">This task turns a manual archive into a safe, repeatable backup operation. A dated name prevents accidental overwrites, and rotation prevents backups from eventually consuming the disk they are supposed to protect. Run it more than once and inspect the archive list so you understand both creation and retention.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>cat &gt; scripts/backup.sh &lt;&lt;'EOF'
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "\$0")/.." && pwd)"
STAMP=\$(date +%F-%H%M)
ARCHIVE="\$ROOT/backups/app-\$STAMP.tar.gz"
tar -czf "\$ARCHIVE" -C "\$ROOT" app
# keep last 5
ls -1t "\$ROOT"/backups/app-*.tar.gz | tail -n +6 | xargs -r rm --
echo "Created \$ARCHIVE"
EOF
chmod +x scripts/backup.sh
./scripts/backup.sh
./scripts/backup.sh
ls -lh backups/</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> The ROOT command calculates the project root from the script location, so the script does not depend on your current directory. <code>tar -czf</code> makes a compressed archive; <code>ls -1t | tail -n +6</code> selects archives older than the five newest. <code>xargs -r</code> prevents an empty deletion command.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Task D — Health &amp; Network Checks</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">This health check collects a compact snapshot of the host’s most common failure domains: capacity, memory, listeners, DNS, and HTTP reachability. It is useful because an incident responder can run one script before deciding where to investigate deeply. Some utilities may be unavailable on a minimal system, so the script deliberately tolerates noncritical DNS or HTTP failures.</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>cat &gt; scripts/healthcheck.sh &lt;&lt;'EOF'
#!/usr/bin/env bash
set -euo pipefail
echo "== disk =="; df -h | head
echo "== memory =="; free -h
echo "== listeners =="; ss -tulpn | head
echo "== dns =="; dig +short example.com || true
echo "== http =="; curl -s -o /dev/null -w "%{http_code}\\n" https://example.com || true
EOF
chmod +x scripts/healthcheck.sh
./scripts/healthcheck.sh</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;"><strong>Command notes:</strong> The script covers capacity (<code>df</code>), memory (<code>free</code>), listeners (<code>ss</code>), DNS (<code>dig</code>), and HTTP (<code>curl</code>). <code>|| true</code> reports optional external failures without aborting the full snapshot. Save real incident output with a timestamp.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Task E — Troubleshooting Drill</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">This drill is deliberately small so you can practice a complete diagnostic loop without risking a real service. Each action maps to a common incident symptom: noisy logs, a stuck process, release indirection, and a disk alert. Write down the command, the evidence it produced, and the next decision you would make.</p>
      <ol style="font-size: 1.05rem; background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <li>Intentionally fill a practice log with repeated lines, then find top patterns with <code>sort | uniq -c | sort -rn</code></li>
        <li>Start <code>sleep 300 &amp;</code>, find its PID, stop with SIGTERM</li>
        <li>Create a soft link <code>~/devops-capstone/current -&gt; app</code></li>
        <li>Write a short markdown note: symptoms → checks → fix for a fake "disk full" incident</li>
      </ol>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🏁 Acceptance Checklist</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">The checklist is evidence that the lab produces the operational behaviors it claims to teach. Verify each item rather than assuming the commands succeeded: inspect modes, read logs, list archives, and run the health script. Being able to demonstrate and explain a result is what makes a procedure usable in production.</p>
      <ul style="font-size: 1.05rem; background-color:#ecfdf5; padding:25px; border-radius:10px;">
        <li>✅ Directory layout + correct permissions</li>
        <li>✅ start.sh writes logs and includes an ERROR line</li>
        <li>✅ backup.sh creates dated archives and rotates old ones</li>
        <li>✅ healthcheck.sh reports disk/mem/ports/dns/http</li>
        <li>✅ You can explain SIGTERM vs SIGKILL and when to use each</li>
      </ul>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔥 Bonus Senior Challenges</h2>
      <p style="margin: 15px 0 20px; font-size: 1.05rem;">These extensions connect the lab to production practices: service supervision, scheduling, policy checks, and port-conflict diagnosis. Complete them only after the core lab works, because they build on its filesystem layout and scripts. The goal is to explain why each control exists, not merely to make each command run.</p>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Convert start.sh into a systemd unit draft (file content only)</li>
        <li>Add a cron line that runs backup.sh every night at 02:00</li>
        <li>Add a script that fails CI if any file under <code>app/config</code> is not mode 600</li>
        <li>Simulate "port already in use" and document how you identified the process</li>
      </ol>
    </section>

  </div>
  `,
  duration: '60 min',
  order: 13,
  tags: ['linux', 'capstone', 'lab', 'practice', 'devops', 'senior', 'bash']
 }
];

