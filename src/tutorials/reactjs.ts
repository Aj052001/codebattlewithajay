import { Tutorial } from '@/types';

export const reactTutorials: Tutorial[] = [
{
  id: '1',
  title: 'Introduction to React.js',
  description: 'Learn the fundamentals of React.js — understand components, JSX, Babel, and set up your first React project using Vite or Create React App.',
  slug: 'introduction-to-react',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">1 : Introduction to React.js </h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Welcome to your first React chapter! In this lesson, you'll learn what <strong style="color:#d93025;">React.js</strong> is, its <strong>key features</strong>, 
      and how to set up your very first React project using <strong style="color:#d93025;">Create React App</strong> or <strong style="color:#d93025;">Vite</strong>.
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">What is React.js?</h2>
      <p style="margin-bottom: 20px; font-size: 1.1rem;">
        <span style="color:#d93025;">React.js</span> is a JavaScript library developed by Facebook for building <strong>user interfaces</strong>, 
        mainly for <strong>single-page applications (SPAs)</strong>. It allows you to create dynamic, component-based UIs efficiently.
      </p>

      <h3 style="margin-bottom: 15px;">Example:</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>function Welcome() {
  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
}

export default Welcome;
</code></pre>

      <ul style="margin-top: 15px; font-size: 1.05rem; line-height: 1.6;">
        <li><strong>Welcome()</strong> is a <span style="color:#d93025;">component</span>.</li>
        <li>It returns <strong>JSX</strong> — a blend of HTML and JavaScript.</li>
        <li>Components are <strong>reusable building blocks</strong> — like Lego pieces.</li>
      </ul>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">⚡ Key Features of React</h2>
      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem;">
        <tr style="background-color:#0073b1; color:#fff; text-align: left;">
          <th style="padding:12px;">Feature</th>
          <th style="padding:12px;">Description</th>
        </tr>
        <tr style="background-color:#eaf4fb;"><td><strong>Components</strong></td><td>Build UI using reusable parts.</td></tr>
        <tr style="background-color:#f5fbfe;"><td><strong>Virtual DOM</strong></td><td>Faster rendering and efficient updates.</td></tr>
        <tr style="background-color:#eaf4fb;"><td><strong>One-way Data Flow</strong></td><td>Predictable and easy to debug.</td></tr>
        <tr style="background-color:#f5fbfe;"><td><strong>JSX</strong></td><td>Mix JavaScript and HTML in one file.</td></tr>
        <tr style="background-color:#eaf4fb;"><td><strong>Tools</strong></td><td>Babel, Webpack, Create React App, Vite.</td></tr>
      </table>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🪄 Setting Up React</h2>
      <p style="margin-bottom: 20px;">You can create a new React project using either of the following methods:</p>

      <h3 style="margin-bottom: 10px;">Option 1: Create React App</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code class="language-bash">npx create-react-app my-react-app
cd my-react-app
npm start
</code></pre>
      <p>Automatically sets up <strong>Babel</strong>, <strong>Webpack</strong>, and a dev server.</p>

      <h3 style="margin-top:20px; margin-bottom:10px;">⚡ Option 2: Vite (Recommended)</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code class="language-bash">npm create vite@latest my-react-app
cd my-react-app
npm install
npm run dev
</code></pre>
      <p><strong style="color:#d93025;">Vite</strong> is faster, lightweight, and ideal for modern React projects .</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">JSX (JavaScript XML)</h2>
      <p style="margin-bottom: 20px;">JSX allows you to write HTML inside JavaScript, making code more readable. Babel then compiles it to regular JavaScript.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>const name = "Ajay";
const element = &lt;h2&gt;Welcome, {name}!&lt;/h2&gt;;

export default function App() {
  return element;
}
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Styling with CSS Modules</h2>
      <p style="margin-bottom: 20px;">
        <strong>CSS Modules</strong> allow local scoping of CSS classes — preventing naming conflicts and keeping styles organized.
      </p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>/* App.module.css */
.title {
  color: royalblue;
  text-align: center;
}
</code></pre>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto; margin-top:10px;"><code>// App.jsx
import styles from "./App.module.css";

export default function App() {
  return &lt;h1 className={styles.title}&gt;Hello CSS Modules &lt;/h1&gt;;
}
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">How Babel Works</h2>
      <p style="margin-bottom: 15px;"><strong>Babel</strong> converts modern JSX and ES6+ syntax into code that browsers understand.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// Original Code
const App = () =&gt; &lt;h1&gt;Hello&lt;/h1&gt;;
</code></pre>
      <p style="margin:10px 0;">Gets converted to:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// After Babel Conversion
const App = function() {
  return React.createElement("h1", null, "Hello");
};
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ What <strong>React.js</strong> is</li>
        <li>✅ Key features — <span style="color:#d93025;">Components, JSX, Virtual DOM</span></li>
        <li>✅ Setting up with <strong>Vite / CRA</strong></li>
        <li>✅ Styling using <strong>CSS Modules</strong></li>
        <li>✅ How <strong style="color:#d93025;">Babel</strong> transforms JSX</li>
      </ul>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>Create a new React project using <strong style="color:#d93025;">Vite</strong> and display:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>&lt;h1&gt;Welcome to My First React App &lt;/h1&gt;
&lt;p&gt;Built with Vite + JSX + CSS Modules&lt;/p&gt;
</code></pre>
      <p>Style it using a CSS Module and make it look attractive .</p>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;"> Next Chapter Preview</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>👉 React Components in depth</li>
        <li>👉 Props & State</li>
        <li>👉 Hands-on Component Practice</li>
      </ul>
    </section>

  </div>
  `,
  duration: '20 min',
  order: 1,
  tags: ['react', 'js', 'jsx', 'vite', 'babel', 'components']
}




  
];
