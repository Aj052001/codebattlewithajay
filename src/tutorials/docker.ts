import { Tutorial } from '@/types';

export const dockerTutorials: Tutorial[] = [
 {
  id: '1',
  title: 'Hello Docker',
  description: 'Install Docker, understand containers vs VMs, and run your first container with hello-world.',
  slug: 'hello-docker',
  courseId: '7',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">1 : Hello Docker</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Welcome to Docker! In this lesson you'll understand <strong style="color:#d93025;">what Docker is</strong>,
      why DevOps teams use it, install it, and run your first container — <code>hello-world</code>.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ What is Docker and why it matters</li>
      <li>✅ Containers vs Virtual Machines</li>
      <li>✅ Install Docker and verify it works</li>
      <li>✅ Run your first container: <code>docker run hello-world</code></li>
      <li>✅ Core ideas: image, container, registry</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📘 What is Docker?</h2>
      <p style="margin-bottom: 20px; font-size: 1.1rem;">
        <strong>Docker</strong> is a platform that packages an application and everything it needs
        (code, runtime, libraries, config) into a lightweight unit called a <strong>container</strong>.
        That package runs the same on your laptop, a CI runner, or a cloud server.
      </p>

      <div style="background-color:#fff3cd; padding:20px; border-radius:8px; border-left:4px solid #ffc107; margin-bottom:20px;">
        <p style="margin:0;"><strong>🤔 Why DevOps loves Docker?</strong></p>
        <ul style="margin:10px 0 0 20px;">
          <li><strong>Works everywhere:</strong> “It works on my machine” becomes “it works in this image”</li>
          <li><strong>Fast:</strong> Containers start in seconds, not minutes like many VMs</li>
          <li><strong>Isolated:</strong> Apps don’t fight over system libraries</li>
          <li><strong>Portable:</strong> Same image from laptop → staging → production</li>
        </ul>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🖥️ Containers vs Virtual Machines</h2>
      <p style="margin-bottom: 15px;">Both isolate apps — but they share resources differently.</p>

      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem; margin-top:20px;">
        <tr style="background-color:#0073b1; color:#fff;">
          <th style="padding:12px;">Point</th>
          <th style="padding:12px;">Virtual Machine</th>
          <th style="padding:12px;">Container</th>
        </tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>OS</strong></td><td style="padding:12px;">Full guest OS per VM</td><td style="padding:12px;">Shares host OS kernel</td></tr>
        <tr style="background-color:#f5fbfe;"><td style="padding:12px;"><strong>Size</strong></td><td style="padding:12px;">GBs</td><td style="padding:12px;">MBs (often)</td></tr>
        <tr style="background-color:#eaf4fb;"><td style="padding:12px;"><strong>Startup</strong></td><td style="padding:12px;">Minutes</td><td style="padding:12px;">Seconds</td></tr>
        <tr style="background-color:#f5fbfe;"><td style="padding:12px;"><strong>Use case</strong></td><td style="padding:12px;">Strong OS-level isolation</td><td style="padding:12px;">App packaging &amp; shipping</td></tr>
      </table>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧩 Image, Container, Registry</h2>
      <ul style="font-size: 1.05rem;">
        <li><strong>Image</strong> — read-only template (like a class / recipe)</li>
        <li><strong>Container</strong> — running instance of an image (like an object)</li>
        <li><strong>Registry</strong> — place to store/share images (Docker Hub is the default public one)</li>
      </ul>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">⚙️ Install &amp; Verify Docker</h2>
      <p style="margin-bottom: 15px;">Install Docker Desktop (Windows/macOS) or Docker Engine (Linux), then check:</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>docker --version
docker info</code></pre>
      <p style="margin: 12px 0 22px; font-size: 1rem; background-color:#f0f9ff; padding:14px; border-radius:8px; border-left:4px solid #2563eb;">
        <strong>Note:</strong> If <code>docker info</code> fails, the Docker daemon/service is not running. Start Docker Desktop or <code>sudo systemctl start docker</code> on Linux.
      </p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🎉 Your First Container — Hello World</h2>
      <p style="margin-bottom: 15px;">Run the official hello-world image:</p>
      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>docker run hello-world</code></pre>
      <p style="margin-bottom: 15px;">What Docker does:</p>
      <ol style="font-size: 1.05rem;">
        <li>Looks for the <code>hello-world</code> image locally</li>
        <li>If missing, pulls it from Docker Hub</li>
        <li>Creates a new container from that image</li>
        <li>Runs it — you see a success message</li>
        <li>Container exits (hello-world is meant to print and stop)</li>
      </ol>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto; margin-top:20px;"><code>docker images          # list downloaded images
docker ps -a           # list all containers (including stopped)
docker rm &lt;container&gt;  # remove a stopped container
docker rmi hello-world # remove the image</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">✅ Practice Tasks</h2>
      <ol style="font-size: 1.05rem; background-color:#f9fafb; padding:25px; border-radius:10px;">
        <li>Install Docker and run <code>docker --version</code></li>
        <li>Run <code>docker run hello-world</code> successfully</li>
        <li>List images and containers with <code>docker images</code> and <code>docker ps -a</code></li>
      </ol>
      <h3 style="color:#0073b1; margin:25px 0 15px;">🔥 Challenge</h3>
      <ol style="font-size: 1.05rem; background-color:#fef3c7; padding:25px; border-radius:10px;">
        <li>Run hello-world again, then remove the stopped container and the image cleanly</li>
        <li>Explain in your own words: image vs container</li>
      </ol>
    </section>

  </div>
  `,
  duration: '20 min',
  order: 1,
  tags: ['docker', 'containers', 'hello-world', 'devops', 'beginner']
 },

 // ---- Structure only (fill content later with OpenCode) ----
 // 2. Images & Containers Basics
 // 3. Dockerfile Fundamentals
 // 4. Build, Tag & Push Images
 // 5. Volumes & Bind Mounts
 // 6. Docker Networking
 // 7. Docker Compose
 // 8. Multi-stage Builds & Best Practices
 // 9. Docker for DevOps Capstone Lab
];
