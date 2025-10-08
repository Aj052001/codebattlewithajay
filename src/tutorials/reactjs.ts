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


  </div>
  `,
  duration: '20 min',
  order: 1,
  tags: ['react', 'js', 'jsx', 'vite', 'babel', 'components']
},
{
  id: '2',
  title: 'React Props & Events',
  description: 'Master props and events in React. Learn how to pass data between components, handle user interactions, render lists efficiently, and create dynamic, interactive applications.',
  slug: 'react-props-and-events',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">2 : React Props & Events ⚛️</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, you'll learn about <strong style="color:#d93025;">props</strong> and <strong style="color:#d93025;">events</strong> in React. 
      Understand how to pass data between components, handle user interactions, render lists efficiently, and make your apps interactive. 🚀✨
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">What are Props?</h2>
      <p style="margin-bottom: 20px; font-size: 1.1rem;">
        <strong>Props</strong> (short for "properties") are used to pass <strong>data from a parent component to a child component</strong>. 
        Props are <strong>read-only</strong> — child components cannot modify them. Think of props as function arguments for components.
      </p>

      <h3 style="margin-bottom: 15px;">Example: Passing props from parent to child</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// Parent.jsx
import Child from './Child';

export default function Parent() {
  return &lt;Child name="Ajay" age={22} /&gt;;
}

// Child.jsx
export default function Child({ name, age }) {
  return &lt;p&gt;Hello, my name is {name} and I am {age} years old.&lt;/p&gt;;
}
</code></pre>

      <ul style="margin-top: 15px; font-size: 1.05rem; line-height: 1.6;">
        <li>Use <strong>destructuring</strong> to extract props easily.</li>
        <li>Props can be <strong>string, number, object, array, or even functions</strong>.</li>
        <li>Props are <strong>immutable inside child</strong>. To change, use state in parent.</li>
      </ul>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Default Props</h2>
      <p style="margin-bottom: 20px;">You can set a <strong>default value</strong> for props if the parent doesn't pass them.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>function Child({ name = "Guest" }) {
  return &lt;p&gt;Hello, {name}!&lt;/p&gt;;
}

export default Child;
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Children Props</h2>
      <p>You can pass JSX content between opening and closing tags of a component using <strong>children</strong> prop.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>function Container({ children }) {
  return &lt;div className="container"&gt;{children}&lt;/div&gt;;
}

// Usage
&lt;Container&gt;
  &lt;p&gt;This is a child element.&lt;/p&gt;
&lt;/Container&gt;
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Rendering Lists & Key Prop</h2>
      <p>Use <strong>map()</strong> to render lists dynamically. Always add a <strong>key prop</strong> to help React identify items efficiently.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>const fruits = ["Apple", "Banana", "Mango"];

export default function FruitList() {
  return (
    &lt;ul&gt;
      {fruits.map((fruit, index) =&gt; (
        &lt;li key={index}&gt;{fruit}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
</code></pre>
      <p><strong>Note:</strong> For static lists, <code>index</code> as key is okay. For dynamic lists that may change, use unique IDs to avoid bugs.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Handling Events</h2>
      <p>React allows handling user events like <strong>click, change, submit</strong>. Event handlers are functions passed to JSX attributes.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>function Button() {
  const handleClick = () =&gt; {
    alert("Button clicked!");
  };

  return &lt;button onClick={handleClick}&gt;Click Me&lt;/button&gt;;
}

export default Button;
</code></pre>
      <ul style="margin-top: 10px; font-size: 1.05rem;">
        <li>Event handler functions can be <strong>normal functions</strong> or <strong>arrow functions</strong>.</li>
        <li>The event object is passed automatically to the function if needed (<code>e</code>).</li>
        <li>Use arrow functions for concise syntax and to avoid <code>this</code> binding issues.</li>
      </ul>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Create a parent component passing <strong>props</strong> to multiple child cards. Each card should display:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>Name: (string)
Age: (number)
Description: (string)
</code></pre>
      <p>2️⃣ Add a button inside each card with an <strong>onClick</strong> event that shows an alert with the card name.</p>
      <p>3️⃣ Render the list of cards dynamically using <strong>map()</strong> and ensure proper <strong>key</strong> usage.</p>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ Props allow passing data from parent to child.</li>
        <li>✅ Default props can set fallback values.</li>
        <li>✅ Children props enable nested content.</li>
        <li>✅ Lists should use <strong>key prop</strong> for performance.</li>
        <li>✅ React events handle user interactions efficiently.</li>
      </ul>
    </section>


  </div>
  `,
  duration: '25 min',
  order: 2,
  tags: ['react', 'props', 'events', 'jsx', 'components']
},
{
  id: '3',
  title: 'React State Management',
  description: 'Learn state management in React. Understand how to use the useState hook to handle dynamic data in functional components and create interactive applications.',
  slug: 'react-state-management',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">3 : React State Management ⚛️</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, you'll learn about <strong style="color:#d93025;">state</strong> in React. 
      Understand how to store and update dynamic data inside components using the <strong style="color:#d93025;">useState hook</strong> and create interactive user interfaces. 🚀✨
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">What is State?</h2>
      <p style="margin-bottom: 20px; font-size: 1.1rem;">
        <strong>State</strong> is a way to store and manage data inside a component that can change over time. Unlike props, <strong>state is mutable</strong> — you can update it and React will automatically re-render the component with the new state. Think of state as the component’s memory.
      </p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Introducing useState Hook</h2>
      <p>The <strong>useState hook</strong> lets you add state to functional components.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); // Initialize state

  const increment = () =&gt; setCount(count + 1);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;Increase&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
      <ul style="margin-top: 15px; font-size: 1.05rem; line-height: 1.6;">
        <li><strong>useState()</strong> returns an array with two elements: <code>[state, setState]</code>.</li>
        <li><strong>state</strong> is the current value.</li>
        <li><strong>setState</strong> is the function used to update state.</li>
        <li>Whenever you call <strong>setState</strong>, React re-renders the component automatically.</li>
      </ul>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Updating State</h2>
      <p>You can update state using the <code>setState</code> function. For objects or arrays, always create a new copy before updating to avoid unexpected behavior.</p>

      <h3>Example: State with Array</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function FruitList() {
  const [fruits, setFruits] = useState(['Apple', 'Banana']);

  const addFruit = () =&gt; {
    setFruits([...fruits, 'Mango']); // Spread operator creates new array
  };

  return (
    &lt;div&gt;
      &lt;ul&gt;
        {fruits.map((fruit, index) =&gt; &lt;li key={index}&gt;{fruit}&lt;/li&gt;)}
      &lt;/ul&gt;
      &lt;button onClick={addFruit}&gt;Add Mango&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <h3>Example: State with Object</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState({ name: 'Ajay', age: 22 });

  const increaseAge = () =&gt; {
    setUser({ ...user, age: user.age + 1 }); // Spread operator to update age
  };

  return (
    &lt;div&gt;
      &lt;p&gt;Name: {user.name}&lt;/p&gt;
      &lt;p&gt;Age: {user.age}&lt;/p&gt;
      &lt;button onClick={increaseAge}&gt;Increase Age&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Tips for State Management</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ Always initialize state with a meaningful value.</li>
        <li>✅ Use functional updates for dependent state: <code>setCount(prev =&gt; prev + 1)</code>.</li>
        <li>✅ Never mutate state directly — always create a new object/array.</li>
        <li>✅ Keep state minimal and only store what is necessary.</li>
      </ul>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Create a <strong>Todo List</strong> component:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// Each todo: { id, title, completed }</code></pre>
      <p>2️⃣ Add a form to input a new todo and a button to add it to the list using <strong>useState</strong>.</p>
      <p>3️⃣ Render the list dynamically using <strong>map()</strong> and display the todo title with a checkbox.</p>
      <p>4️⃣ When the checkbox is clicked, update the todo's <code>completed</code> status.</p>
      <p>5️⃣ Bonus: Add a button to delete a todo from the list.</p>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ State stores dynamic data in a component.</li>
        <li>✅ useState hook is used to create and update state.</li>
        <li>✅ Always update state immutably for arrays and objects.</li>
        <li>✅ React automatically re-renders components on state changes.</li>
        <li>✅ State allows building interactive and dynamic UI components.</li>
      </ul>
    </section>

  </div>
  `,
  duration: '30 min',
  order: 3,
  tags: ['react', 'state', 'useState', 'components', 'hooks']
},
{
  id: '4',
  title: 'React Hooks Mastery',
  description: 'Learn all essential React hooks — useState, useEffect, useRef, useContext, useReducer, useMemo, useCallback, and custom hooks. Build interactive and optimized React applications.',
  slug: 'react-hooks-mastery',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">4 : React Hooks Mastery ⚛️</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, you'll learn all the essential <strong style="color:#d93025;">React hooks</strong> to manage state, side effects, context, and performance optimizations. 🚀✨
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- useState -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣ useState</h2>
      <p>Manages dynamic state in functional components. You’ve already learned this in previous module.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>const [count, setCount] = useState(0);
setCount(count + 1);</code></pre>
    </section>

    <!-- useEffect -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">2️⃣ useEffect</h2>
      <p>Handles <strong>side effects</strong> like fetching data, subscriptions, or updating the DOM.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() =&gt; {
    const interval = setInterval(() =&gt; setSeconds(prev =&gt; prev + 1), 1000);
    return () =&gt; clearInterval(interval); // Cleanup
  }, []); // Empty dependency runs once

  return &lt;p&gt;Seconds: {seconds}&lt;/p&gt;;
}
</code></pre>
      <ul>
        <li>Empty dependency array <code>[]</code> → run once on mount.</li>
        <li>Dependencies array <code>[value]</code> → run when value changes.</li>
        <li>Return function → cleanup effects to prevent memory leaks.</li>
      </ul>
    </section>

    <!-- useRef -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">3️⃣ useRef</h2>
      <p>Stores mutable values that persist across renders without triggering re-renders.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useRef } from 'react';

export default function InputFocus() {
  const inputRef = useRef();

  const focusInput = () =&gt; inputRef.current.focus();

  return (
    &lt;div&gt;
      &lt;input ref={inputRef} type="text" /&gt;
      &lt;button onClick={focusInput}&gt;Focus Input&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
      <p>Useful for accessing DOM elements or storing values between renders.</p>
    </section>

    <!-- useContext -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">4️⃣ useContext</h2>
      <p>Allows sharing state globally between components without prop drilling.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

export default function App() {
  return (
    &lt;ThemeContext.Provider value="dark"&gt;
      &lt;Child /&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return &lt;p&gt;Theme: {theme}&lt;/p&gt;;
}
</code></pre>
    </section>

    <!-- useReducer -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">5️⃣ useReducer</h2>
      <p>For complex state logic, similar to Redux.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useReducer } from 'react';

const initialState = 0;
function reducer(state, action) {
  switch(action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    default: return state;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; dispatch({type:'increment'})}&gt;+&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({type:'decrement'})}&gt;-&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- useMemo -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">6️⃣ useMemo</h2>
      <p>Memoizes expensive computations to avoid recalculating on every render.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useMemo, useState } from 'react';

function expensiveCalculation(num) {
  console.log('Calculating...');
  return num * 2;
}

export default function App() {
  const [count, setCount] = useState(0);
  const result = useMemo(() =&gt; expensiveCalculation(count), [count]);

  return &lt;div&gt;
    &lt;p&gt;Result: {result}&lt;/p&gt;
    &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
  &lt;/div&gt;;
}
</code></pre>
    </section>

    <!-- useCallback -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">7️⃣ useCallback</h2>
      <p>Memoizes functions to prevent unnecessary re-creations on each render.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useCallback } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() =&gt; setCount(prev =&gt; prev + 1), []);

  return &lt;div&gt;
    &lt;p&gt;Count: {count}&lt;/p&gt;
    &lt;button onClick={increment}&gt;Increment&lt;/button&gt;
  &lt;/div&gt;;
}
</code></pre>
    </section>

    <!-- Custom Hooks -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">8️⃣ Custom Hooks</h2>
      <p>Create reusable logic across components.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() =&gt; {
    const handleResize = () =&gt; setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () =&gt; window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

export default function App() {
  const width = useWindowWidth();
  return &lt;p&gt;Window width: {width}&lt;/p&gt;;
}
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Build a <strong>Movie App</strong>:</p>
      <ul style="line-height: 1.6;">
        <li>Fetch movies from an API using <strong>useEffect</strong>.</li>
        <li>Store movies using <strong>useState</strong>.</li>
        <li>Filter movies by genre using <strong>useMemo</strong>.</li>
        <li>Store user-selected favorite movie in <strong>useReducer</strong>.</li>
        <li>Use <strong>useContext</strong> to provide theme (light/dark) across app.</li>
        <li>Bonus: Add a <strong>custom hook</strong> for window width or API fetching logic.</li>
      </ul>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ useState: store dynamic state.</li>
        <li>✅ useEffect: handle side effects.</li>
        <li>✅ useRef: access DOM or persist values.</li>
        <li>✅ useContext: share state globally.</li>
        <li>✅ useReducer: manage complex state logic.</li>
        <li>✅ useMemo: memoize expensive values.</li>
        <li>✅ useCallback: memoize functions.</li>
        <li>✅ Custom Hooks: reuse logic across components.</li>
      </ul>
    </section>

  </div>
  `,
  duration: '45 min',
  order: 4,
  tags: ['react', 'hooks', 'useState', 'useEffect', 'useRef', 'useContext', 'useReducer', 'useMemo', 'useCallback', 'custom-hooks']
},
{
  id: '5',
  title: 'React Forms & Handling User Input',
  description: 'Learn how to handle forms in React. Master controlled components, event handling, form data management, and form submissions.',
  slug: 'react-forms-handling',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">5 : React Forms & User Input 📝</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, you'll learn how to handle forms in React. Understand <strong style="color:#d93025;">controlled components</strong>, manage form state efficiently, and handle submissions. 💻✨
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Controlled Components -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣ Controlled Components</h2>
      <p>A controlled component is a form element (input, textarea, select) whose value is controlled by React state.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (e) =&gt; setName(e.target.value);

  return (
    &lt;div&gt;
      &lt;input type="text" value={name} onChange={handleChange} placeholder="Enter your name" /&gt;
      &lt;p&gt;Hello, {name}!&lt;/p&gt;
    &lt;/div&gt;
  );
}
</code></pre>
      <ul>
        <li>React state (<code>useState</code>) stores input value.</li>
        <li><code>onChange</code> updates state on user input.</li>
        <li>Component is "controlled" by React state.</li>
      </ul>
    </section>

    <!-- Handling Multiple Inputs -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">2️⃣ Handling Multiple Inputs</h2>
      <p>Use a single state object to manage multiple input fields.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function MultiInputForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) =&gt; {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    &lt;form&gt;
      &lt;input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /&gt;
      &lt;input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" /&gt;
      &lt;p&gt;Email: {formData.email}, Password: {formData.password}&lt;/p&gt;
    &lt;/form&gt;
  );
}
</code></pre>
    </section>

    <!-- Form Submission -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">3️⃣ Form Submission</h2>
      <p>Handle the <code>onSubmit</code> event to process form data.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) =&gt; {
    e.preventDefault(); // Prevent page reload
    alert(\`Form submitted with email: \${email}\`);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input type="email" value={email} onChange={(e) =&gt; setEmail(e.target.value)} placeholder="Email" /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>
      <ul>
        <li>Use <code>e.preventDefault()</code> to stop default form behavior.</li>
        <li>Process or validate form data inside the submit handler.</li>
      </ul>
    </section>

    <!-- Form Validation -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">4️⃣ Form Validation</h2>
      <p>Validate input before submission for better UX.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>const handleSubmit = (e) =&gt; {
  e.preventDefault();
  if(!email.includes('@')) {
    alert('Please enter a valid email');
  } else {
    alert('Form submitted successfully!');
  }
}</code></pre>
    </section>

    <!-- Practice Task -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Create a <strong>Registration Form</strong> with the following fields:</p>
      <ul style="line-height: 1.6;">
        <li>Name (text)</li>
        <li>Email (email)</li>
        <li>Password (password)</li>
        <li>Confirm Password (password)</li>
      </ul>
      <p>2️⃣ Make all inputs controlled components using <strong>useState</strong>.</p>
      <p>3️⃣ Add <strong>validation</strong> to ensure:</p>
      <ul style="line-height: 1.6;">
        <li>Email contains '@'</li>
        <li>Password and Confirm Password match</li>
        <li>No field is empty</li>
      </ul>
      <p>4️⃣ Display success or error messages when submitting the form.</p>
      <p>5️⃣ Bonus: Store all submitted data in an array and display it below the form.</p>
    </section>

    <!-- Summary -->
    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ Controlled components store form values in state.</li>
        <li>✅ Use <code>onChange</code> to update state dynamically.</li>
        <li>✅ <code>onSubmit</code> handles form submissions and prevents default behavior.</li>
        <li>✅ Validate inputs before processing data for better UX.</li>
        <li>✅ Forms are essential for user input and interactive applications.</li>
      </ul>
    </section>

  </div>
  `,
  duration: '35 min',
  order: 5,
  tags: ['react', 'forms', 'input', 'controlled-components', 'validation', 'onSubmit']
},
{
  id: '6',
  title: 'Building a Todo List Application',
  description: 'Create an exciting todo list application using React. Learn to manage state, add/remove todos, implement checkboxes, and style your components.',
  slug: 'react-todo-list-app',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">6 : Building a Todo List Application 📋</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, we will create an exciting <strong style="color:#d93025;">todo list application</strong> using React. Dive into the practical implementation of React state as you learn how to structure the application, add new todos, create checkboxes, remove todos, and style the todo form. 💻✨
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Application Structure -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣ Application Structure</h2>
      <p>Start by setting up the basic structure of our todo list application with proper state management.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  return (
    &lt;div className="todo-container"&gt;
      &lt;h1&gt;My Todo List&lt;/h1&gt;
      {/* Todo form will go here */}
      {/* Todo list will go here */}
    &lt;/div&gt;
  );
}
</code></pre>
      <ul>
        <li><code>todos</code> array stores all todo items.</li>
        <li><code>input</code> stores the current text being typed.</li>
        <li>State management with <code>useState</code> hook.</li>
      </ul>
    </section>

    <!-- Adding New Todos -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">2️⃣ Adding New Todos</h2>
      <p>Implement the functionality to add new todos to the list.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>const addTodo = () =&gt; {
  if(input.trim() !== '') {
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInput(''); // Clear input field
  }
};

return (
  &lt;div&gt;
    &lt;input 
      type="text" 
      value={input} 
      onChange={(e) =&gt; setInput(e.target.value)}
      placeholder="Enter a new todo"
    /&gt;
    &lt;button onClick={addTodo}&gt;Add Todo&lt;/button&gt;
  &lt;/div&gt;
);</code></pre>
      <ul>
        <li>Each todo has a unique <code>id</code>, <code>text</code>, and <code>completed</code> status.</li>
        <li>Use <code>trim()</code> to prevent empty todos.</li>
        <li>Clear input after adding a todo.</li>
      </ul>
    </section>

    <!-- Displaying Todos with Checkboxes -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">3️⃣ Displaying Todos with Checkboxes</h2>
      <p>Render the todo list with checkboxes to mark items as completed.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>const toggleComplete = (id) =&gt; {
  setTodos(todos.map(todo =&gt; 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
};

return (
  &lt;ul&gt;
    {todos.map(todo =&gt; (
      &lt;li key={todo.id}&gt;
        &lt;input 
          type="checkbox" 
          checked={todo.completed}
          onChange={() =&gt; toggleComplete(todo.id)}
        /&gt;
        &lt;span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}&gt;
          {todo.text}
        &lt;/span&gt;
      &lt;/li&gt;
    ))}
  &lt;/ul&gt;
);</code></pre>
      <ul>
        <li>Map through todos to render each item.</li>
        <li>Toggle <code>completed</code> status on checkbox click.</li>
        <li>Apply line-through style for completed todos.</li>
      </ul>
    </section>

    <!-- Removing Todos -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">4️⃣ Removing Todos</h2>
      <p>Add functionality to delete todos from the list.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>const deleteTodo = (id) =&gt; {
  setTodos(todos.filter(todo =&gt; todo.id !== id));
};

return (
  &lt;ul&gt;
    {todos.map(todo =&gt; (
      &lt;li key={todo.id}&gt;
        &lt;input 
          type="checkbox" 
          checked={todo.completed}
          onChange={() =&gt; toggleComplete(todo.id)}
        /&gt;
        &lt;span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}&gt;
          {todo.text}
        &lt;/span&gt;
        &lt;button onClick={() =&gt; deleteTodo(todo.id)}&gt;Delete&lt;/button&gt;
      &lt;/li&gt;
    ))}
  &lt;/ul&gt;
);</code></pre>
      <ul>
        <li>Use <code>filter()</code> to remove todo by id.</li>
        <li>Add delete button for each todo item.</li>
      </ul>
    </section>

    <!-- Complete Todo App -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">5️⃣ Complete Todo Application</h2>
      <p>Here's the complete todo list application with all features combined.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () =&gt; {
    if(input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (id) =&gt; {
    setTodos(todos.map(todo =&gt; 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) =&gt; {
    setTodos(todos.filter(todo =&gt; todo.id !== id));
  };

  return (
    &lt;div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}&gt;
      &lt;h1&gt;My Todo List&lt;/h1&gt;
      &lt;div style={{ marginBottom: '20px' }}&gt;
        &lt;input 
          type="text" 
          value={input} 
          onChange={(e) =&gt; setInput(e.target.value)}
          placeholder="Enter a new todo"
          style={{ padding: '10px', width: '70%' }}
        /&gt;
        &lt;button onClick={addTodo} style={{ padding: '10px 20px', marginLeft: '10px' }}&gt;
          Add
        &lt;/button&gt;
      &lt;/div&gt;
      &lt;ul style={{ listStyle: 'none', padding: 0 }}&gt;
        {todos.map(todo =&gt; (
          &lt;li key={todo.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}&gt;
            &lt;input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() =&gt; toggleComplete(todo.id)}
            /&gt;
            &lt;span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginLeft: '10px',
              flex: 1
            }}&gt;
              {todo.text}
            &lt;/span&gt;
            &lt;button onClick={() =&gt; deleteTodo(todo.id)} style={{ padding: '5px 10px' }}&gt;
              Delete
            &lt;/button&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- Styling the Todo App -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">6️⃣ Styling the Todo App</h2>
      <p>Enhance the appearance with custom CSS styling.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>/* styles.css */
.todo-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: #f9fafb;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.todo-input {
  width: 70%;
  padding: 12px;
  border: 2px solid #0073b1;
  border-radius: 5px;
  font-size: 16px;
}

.add-button {
  padding: 12px 24px;
  margin-left: 10px;
  background: #0073b1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.add-button:hover {
  background: #005a8d;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.delete-button {
  padding: 6px 12px;
  background: #d93025;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background: #b8251f;
}
</code></pre>
    </section>

    <!-- Practice Task -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Build an <strong>Enhanced Todo List</strong> with these additional features:</p>
      <ul style="line-height: 1.6;">
        <li>Add an "Edit" button to modify existing todos</li>
        <li>Implement a filter to show All, Active, or Completed todos</li>
        <li>Add a counter to display total and completed todos</li>
        <li>Add a "Clear Completed" button to remove all completed todos</li>
        <li>Implement keyboard support (press Enter to add todo)</li>
      </ul>
      <p>2️⃣ Use <strong>localStorage</strong> to persist todos across page refreshes.</p>
      <p>3️⃣ Add <strong>validation</strong> to prevent duplicate todos.</p>
      <p>4️⃣ Bonus: Add categories or tags to organize todos better.</p>
      <p>5️⃣ Bonus: Implement drag-and-drop to reorder todos.</p>
    </section>

    <!-- Summary -->
    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ Structure React applications with proper state management.</li>
        <li>✅ Add and manage todo items using arrays and objects.</li>
        <li>✅ Implement checkboxes to track completion status.</li>
        <li>✅ Remove items from state using filter method.</li>
        <li>✅ Style React components with inline styles or CSS.</li>
        <li>✅ Handle user interactions with event handlers.</li>
        <li>✅ Use unique keys when rendering lists in React.</li>
        <li>✅ Build practical, real-world applications with React.</li>
      </ul>
    </section>

  </div>
  `,
  duration: '40 min',
  order: 6,
  tags: ['react', 'todo-app', 'state-management', 'user-interaction', 'practical-project', 'styling']
},
{
  id: '7',
  title: 'More About Forms',
  description: 'Dive deeper into form handling in React and explore advanced techniques. Learn how to create radio buttons for selecting options, utilize the useRef hook to manage input state efficiently, and create uncontrolled components.',
  slug: 'react-advanced-forms',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">7 : More About Forms 📚</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, we will dive deeper into <strong style="color:#d93025;">form handling in React</strong> and explore advanced techniques. You will learn how to create radio buttons for selecting options, utilize the useRef hook to manage input state efficiently, and even create uncontrolled components. 🌟💪
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Radio Buttons -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣ Radio Buttons in React</h2>
      <p>Radio buttons allow users to select one option from multiple choices. Learn how to handle radio button groups effectively.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function RadioButtonForm() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) =&gt; {
    setSelectedOption(e.target.value);
  };

  return (
    &lt;div&gt;
      &lt;h3&gt;Choose your favorite framework:&lt;/h3&gt;
      &lt;label&gt;
        &lt;input 
          type="radio" 
          value="react" 
          checked={selectedOption === 'react'}
          onChange={handleChange}
        /&gt;
        React
      &lt;/label&gt;
      &lt;label&gt;
        &lt;input 
          type="radio" 
          value="vue" 
          checked={selectedOption === 'vue'}
          onChange={handleChange}
        /&gt;
        Vue
      &lt;/label&gt;
      &lt;label&gt;
        &lt;input 
          type="radio" 
          value="angular" 
          checked={selectedOption === 'angular'}
          onChange={handleChange}
        /&gt;
        Angular
      &lt;/label&gt;
      &lt;p&gt;Selected: {selectedOption}&lt;/p&gt;
    &lt;/div&gt;
  );
}
</code></pre>
      <ul>
        <li>Use the same <code>name</code> attribute for radio buttons in a group.</li>
        <li>Control selection with <code>checked</code> prop based on state.</li>
        <li>Update state using <code>onChange</code> handler.</li>
        <li>Radio buttons ensure only one option is selected at a time.</li>
      </ul>
    </section>

    <!-- Introduction to useRef -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">2️⃣ Introduction to useRef Hook</h2>
      <p>The <code>useRef</code> hook creates a mutable reference that persists across renders without causing re-renders.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useRef } from 'react';

export default function RefExample() {
  const inputRef = useRef(null);

  const focusInput = () =&gt; {
    inputRef.current.focus();
  };

  const getInputValue = () =&gt; {
    alert('Input value: ' + inputRef.current.value);
  };

  return (
    &lt;div&gt;
      &lt;input 
        ref={inputRef} 
        type="text" 
        placeholder="Type something..."
      /&gt;
      &lt;button onClick={focusInput}&gt;Focus Input&lt;/button&gt;
      &lt;button onClick={getInputValue}&gt;Get Value&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
      <ul>
        <li><code>useRef</code> returns an object with a <code>current</code> property.</li>
        <li>Access DOM elements directly using <code>.current</code>.</li>
        <li>Does not trigger re-renders when the ref value changes.</li>
        <li>Perfect for accessing DOM elements imperatively.</li>
      </ul>
    </section>

    <!-- Uncontrolled Components -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">3️⃣ Uncontrolled Components</h2>
      <p>Uncontrolled components store their own state internally using refs instead of React state.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useRef } from 'react';

export default function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log('Name:', name, 'Email:', email);
    
    // Reset form
    nameRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input 
        ref={nameRef} 
        type="text" 
        placeholder="Name" 
      /&gt;
      &lt;input 
        ref={emailRef} 
        type="email" 
        placeholder="Email" 
      /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>
      <ul>
        <li>Form data is handled by the DOM itself, not React state.</li>
        <li>Access values using refs when needed.</li>
        <li>Less code compared to controlled components.</li>
        <li>Useful for simple forms or when integrating with non-React code.</li>
      </ul>
    </section>

    <!-- Controlled vs Uncontrolled -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">4️⃣ Controlled vs Uncontrolled Components</h2>
      <p>Understanding when to use controlled or uncontrolled components is crucial for effective form handling.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// Controlled Component
const [value, setValue] = useState('');
&lt;input 
  value={value} 
  onChange={(e) =&gt; setValue(e.target.value)} 
/&gt;

// Uncontrolled Component
const inputRef = useRef();
&lt;input ref={inputRef} defaultValue="initial" /&gt;
</code></pre>
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
        <h4 style="color: #0073b1; margin-bottom: 10px;">Controlled Components:</h4>
        <ul>
          <li>✅ React state is the single source of truth</li>
          <li>✅ Easy to perform validation and formatting</li>
          <li>✅ Can enforce input rules dynamically</li>
          <li>✅ Better for complex forms with dependencies</li>
        </ul>
        <h4 style="color: #0073b1; margin-top: 20px; margin-bottom: 10px;">Uncontrolled Components:</h4>
        <ul>
          <li>✅ Less boilerplate code</li>
          <li>✅ Better performance for large forms</li>
          <li>✅ Easier integration with non-React libraries</li>
          <li>✅ Suitable for simple forms</li>
        </ul>
      </div>
    </section>

    <!-- Advanced Form with Multiple Input Types -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">5️⃣ Complete Registration Form</h2>
      <p>Here's a comprehensive form combining radio buttons, refs, and controlled inputs.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useRef } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    gender: '',
    agree: false
  });
  const passwordRef = useRef();

  const handleChange = (e) =&gt; {
    const { name, value, type, checked } = e.target;
    setFormData(prev =&gt; ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    const password = passwordRef.current.value;
    console.log({
      ...formData,
      password
    });
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;div&gt;
        &lt;label&gt;Username:&lt;/label&gt;
        &lt;input 
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        /&gt;
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label&gt;Password:&lt;/label&gt;
        &lt;input 
          ref={passwordRef}
          type="password"
          defaultValue=""
        /&gt;
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label&gt;Gender:&lt;/label&gt;
        &lt;label&gt;
          &lt;input 
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          /&gt;
          Male
        &lt;/label&gt;
        &lt;label&gt;
          &lt;input 
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          /&gt;
          Female
        &lt;/label&gt;
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label&gt;
          &lt;input 
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          /&gt;
          I agree to terms and conditions
        &lt;/label&gt;
      &lt;/div&gt;

      &lt;button type="submit"&gt;Register&lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>
    </section>

    <!-- useRef for Non-Input Cases -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">6️⃣ useRef Beyond Forms</h2>
      <p>useRef is versatile and can be used for storing values that don't require re-renders.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useRef, useState } from 'react';

export default function TimerExample() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  const startTimer = () =&gt; {
    intervalRef.current = setInterval(() =&gt; {
      setCount(c =&gt; c + 1);
    }, 1000);
  };

  const stopTimer = () =&gt; {
    clearInterval(intervalRef.current);
  };

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={startTimer}&gt;Start&lt;/button&gt;
      &lt;button onClick={stopTimer}&gt;Stop&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
      <ul>
        <li>Store interval/timeout IDs to clear them later.</li>
        <li>Keep track of previous state values.</li>
        <li>Store any mutable value without causing re-renders.</li>
      </ul>
    </section>

    <!-- Practice Task -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Build a <strong>Survey Form</strong> with these features:</p>
      <ul style="line-height: 1.6;">
        <li>Name field (controlled component)</li>
        <li>Rating selection using radio buttons (1-5 stars)</li>
        <li>Comments textarea using useRef (uncontrolled)</li>
        <li>Multiple choice questions with checkboxes</li>
        <li>Submit button that displays all collected data</li>
      </ul>
      <p>2️⃣ Create a <strong>Login Form</strong> that:</p>
      <ul style="line-height: 1.6;">
        <li>Uses useRef for password field</li>
        <li>Validates email format in real-time</li>
        <li>Shows/hides password with a toggle button</li>
        <li>Focuses on first empty field on submit failure</li>
      </ul>
      <p>3️⃣ Implement <strong>form validation</strong> that prevents submission if required fields are empty.</p>
      <p>4️⃣ Bonus: Create a multi-step form wizard using radio buttons to navigate between steps.</p>
      <p>5️⃣ Bonus: Build a form that auto-saves draft data using refs to avoid unnecessary re-renders.</p>
    </section>

    <!-- Summary -->
    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ Create radio button groups for single-choice selections.</li>
        <li>✅ Use useRef hook to access DOM elements directly.</li>
        <li>✅ Build uncontrolled components with refs for simpler forms.</li>
        <li>✅ Understand differences between controlled and uncontrolled components.</li>
        <li>✅ Combine multiple input types in comprehensive forms.</li>
        <li>✅ Leverage useRef for non-rendering state like timers.</li>
        <li>✅ Choose appropriate form handling strategy based on requirements.</li>
        <li>✅ Master advanced form techniques for real-world applications.</li>
      </ul>
    </section>

  </div>
  `,
  duration: '45 min',
  order: 7,
  tags: ['react', 'forms', 'useRef', 'radio-buttons', 'uncontrolled-components', 'controlled-components']
},
{
  id: '8',
  title: 'Deeper Dive into React State And Rendering',
  description: 'Dive deeper into React state management. Grasp the asynchronous nature of setState, understand component updates, and master key considerations for list rendering. Learn about React\'s reconciliation algorithm, React Fiber, and the art of "lifting state up" to optimize data flow between components.',
  slug: 'react-state-rendering-deep-dive',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">8 : Deeper Dive into React State And Rendering 📚</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, we'll dive deeper into <strong style="color:#d93025;">React state management</strong>. You'll grasp the asynchronous nature of setState, understand component updates, and master key considerations for list rendering. We'll demystify React's reconciliation algorithm and introduce React Fiber for enhanced performance. Plus, learn the art of "lifting state up" to optimize data flow between components. Elevate your React skills and build more efficient applications! 🚀💡📊
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Asynchronous Nature of setState -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣ The Asynchronous Nature of setState</h2>
      <p>Understanding that state updates are <strong>asynchronous</strong> is crucial for avoiding common bugs in React applications.</p>
      
      <h3 style="color:#d93025; margin-top: 30px;">❌ Common Mistake - Direct State Access After Update</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () =&gt; {
    setCount(count + 1);
    console.log(count); // ❌ Still logs OLD value!
    // State hasn't updated yet
  };

  return &lt;button onClick={handleClick}&gt;Count: {count}&lt;/button&gt;;
}
</code></pre>

      <h3 style="color:#28a745; margin-top: 30px;">✅ Correct Approach - Using Functional Updates</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>const handleClick = () =&gt; {
  setCount(prevCount =&gt; {
    const newCount = prevCount + 1;
    console.log('New count will be:', newCount);
    return newCount;
  });
};

// Multiple updates in a row
const increment3Times = () =&gt; {
  setCount(prev =&gt; prev + 1); // ✅ Works correctly
  setCount(prev =&gt; prev + 1); // ✅ Uses updated value
  setCount(prev =&gt; prev + 1); // ✅ Final increment
};
</code></pre>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin-top: 20px;">
        <strong>💡 Key Insight:</strong> React batches state updates for performance. Always use the functional form <code>setState(prev =&gt; ...)</code> when the new state depends on the previous state.
      </div>

      <ul style="margin-top: 20px;">
        <li><strong>State updates are queued</strong>, not applied immediately.</li>
        <li>React batches multiple setState calls for better performance.</li>
        <li>Use functional updates when new state depends on old state.</li>
        <li>Use useEffect to react to state changes.</li>
      </ul>
    </section>

    <!-- Understanding Component Updates -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">2️⃣ Understanding Component Updates</h2>
      <p>React components re-render when state or props change. Let's understand the update lifecycle.</p>
      
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

export default function UpdateExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Runs after EVERY render
  useEffect(() =&gt; {
    console.log('Component rendered!');
  });

  // Runs only when 'count' changes
  useEffect(() =&gt; {
    console.log('Count changed to:', count);
  }, [count]);

  // Runs only once (on mount)
  useEffect(() =&gt; {
    console.log('Component mounted!');
  }, []);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
      
      &lt;input 
        value={name} 
        onChange={(e) =&gt; setName(e.target.value)}
        placeholder="Type your name"
      /&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin-top: 20px;">
        <h4 style="color: #0073b1; margin-bottom: 15px;">Component Update Cycle:</h4>
        <ol style="line-height: 2;">
          <li><strong>State/Props Change</strong> → Triggers re-render</li>
          <li><strong>React Re-renders</strong> → Calculates new virtual DOM</li>
          <li><strong>Reconciliation</strong> → Compares old and new virtual DOM</li>
          <li><strong>DOM Update</strong> → Only changed elements are updated</li>
          <li><strong>useEffect Runs</strong> → Side effects execute after render</li>
        </ol>
      </div>
    </section>

    <!-- List Rendering and Keys -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">3️⃣ Key Considerations for List Rendering</h2>
      <p>Proper key usage is essential for optimal React performance when rendering lists.</p>

      <h3 style="color:#d93025; margin-top: 30px;">❌ Bad Practice - Using Index as Key</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// ❌ Problems with reordering, adding, or removing items
const items = ['Apple', 'Banana', 'Cherry'];

return (
  &lt;ul&gt;
    {items.map((item, index) =&gt; (
      &lt;li key={index}&gt;{item}&lt;/li&gt; // ❌ Avoid index as key!
    ))}
  &lt;/ul&gt;
);
</code></pre>

      <h3 style="color:#28a745; margin-top: 30px;">✅ Best Practice - Using Unique IDs</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
];

return (
  &lt;ul&gt;
    {items.map(item =&gt; (
      &lt;li key={item.id}&gt;{item.name}&lt;/li&gt; // ✅ Unique, stable key
    ))}
  &lt;/ul&gt;
);
</code></pre>

      <h3 style="margin-top: 30px;">📊 Why Keys Matter - Visual Example</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function TodoListExample() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Project', completed: false }
  ]);

  const toggleTodo = (id) =&gt; {
    setTodos(todos.map(todo =&gt;
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const addTodo = () =&gt; {
    const newTodo = {
      id: Date.now(), // Unique ID
      text: 'New Task',
      completed: false
    };
    setTodos([newTodo, ...todos]); // Add to beginning
  };

  return (
    &lt;div&gt;
      &lt;button onClick={addTodo}&gt;Add Todo&lt;/button&gt;
      &lt;ul&gt;
        {todos.map(todo =&gt; (
          &lt;li key={todo.id}&gt; {/* ✅ Stable key */}
            &lt;input 
              type="checkbox"
              checked={todo.completed}
              onChange={() =&gt; toggleTodo(todo.id)}
            /&gt;
            {todo.text}
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin-top: 20px;">
        <strong>⚠️ Key Rules:</strong>
        <ul style="margin-top: 10px;">
          <li>Keys must be <strong>unique</strong> among siblings</li>
          <li>Keys should be <strong>stable</strong> (don't change between renders)</li>
          <li>Keys should be <strong>predictable</strong> (same item = same key)</li>
          <li>Avoid using array index unless list is static and never reordered</li>
        </ul>
      </div>
    </section>

    <!-- React's Reconciliation Algorithm -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">4️⃣ React's Reconciliation Algorithm (Diffing)</h2>
      <p>React uses a smart algorithm to figure out what changed and update only those parts of the DOM.</p>

      <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="color: #0073b1; margin-bottom: 15px;">How Reconciliation Works:</h4>
        <ol style="line-height: 2;">
          <li><strong>Element Type Comparison:</strong> If types differ, React rebuilds the entire tree</li>
          <li><strong>Key-based Matching:</strong> Uses keys to match children between renders</li>
          <li><strong>Prop Comparison:</strong> Only updates changed props</li>
          <li><strong>Component Identity:</strong> Same component type = update, different = unmount & remount</li>
        </ol>
      </div>

      <h3 style="margin-top: 30px;">Example: Element Type Changes</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// Before
&lt;div&gt;
  &lt;Counter /&gt;
&lt;/div&gt;

// After - Different type, entire tree is rebuilt
&lt;span&gt;
  &lt;Counter /&gt;  // ❌ Counter unmounts and remounts (state is lost!)
&lt;/span&gt;

// Better approach - Keep same type
&lt;div className="changed-style"&gt;
  &lt;Counter /&gt;  // ✅ Counter persists (state is preserved!)
&lt;/div&gt;
</code></pre>

      <h3 style="margin-top: 30px;">Example: Keys Help Reconciliation</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// Without keys - React doesn't know items moved
&lt;ul&gt;
  &lt;li&gt;Apple&lt;/li&gt;
  &lt;li&gt;Banana&lt;/li&gt;
&lt;/ul&gt;

// Add Cherry at beginning
&lt;ul&gt;
  &lt;li&gt;Cherry&lt;/li&gt;  // React thinks Apple changed to Cherry
  &lt;li&gt;Apple&lt;/li&gt;   // React thinks Banana changed to Apple
  &lt;li&gt;Banana&lt;/li&gt;  // React thinks this is new
&lt;/ul&gt;

// With keys - React knows items just moved
&lt;ul&gt;
  &lt;li key="cherry"&gt;Cherry&lt;/li&gt;  // ✅ New item
  &lt;li key="apple"&gt;Apple&lt;/li&gt;    // ✅ Moved, not changed
  &lt;li key="banana"&gt;Banana&lt;/li&gt;  // ✅ Moved, not changed
&lt;/ul&gt;
</code></pre>
    </section>

    <!-- React Fiber -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">5️⃣ Introduction to React Fiber</h2>
      <p>React Fiber is the reimplementation of React's core algorithm that enables better performance and new features.</p>

      <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="color: #0073b1; margin-bottom: 15px;">🚀 What is React Fiber?</h4>
        <p>React Fiber is the new reconciliation engine introduced in React 16. It makes React more efficient by:</p>
        <ul style="margin-top: 10px; line-height: 2;">
          <li><strong>Incremental Rendering:</strong> Splits rendering work into chunks</li>
          <li><strong>Pausable Work:</strong> Can pause work and resume later</li>
          <li><strong>Priority-based Updates:</strong> Urgent updates happen first</li>
          <li><strong>Better Error Handling:</strong> Error boundaries for graceful failures</li>
        </ul>
      </div>

      <h3 style="margin-top: 30px;">Before Fiber vs After Fiber</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// OLD React (Before Fiber)
// ❌ All rendering was synchronous and blocking
// If you had 10,000 components to render, the browser would freeze

// NEW React (With Fiber)
// ✅ Work is broken into small units
// ✅ Browser can handle user interactions during rendering
// ✅ High-priority updates (like typing) interrupt low-priority ones

import { useState, useTransition } from 'react';

export default function FiberExample() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) =&gt; {
    setInput(e.target.value); // High priority - updates immediately
    
    // Low priority - can be interrupted
    startTransition(() =&gt; {
      const newList = Array(20000).fill(e.target.value);
      setList(newList); // This won't block typing!
    });
  };

  return (
    &lt;div&gt;
      &lt;input value={input} onChange={handleChange} /&gt;
      {isPending ? &lt;p&gt;Loading...&lt;/p&gt; : null}
      &lt;ul&gt;
        {list.map((item, i) =&gt; &lt;li key={i}&gt;{item}&lt;/li&gt;)}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <div style="background-color: #d4edda; padding: 15px; border-left: 4px solid #28a745; margin-top: 20px;">
        <strong>💡 Benefits of Fiber:</strong>
        <ul style="margin-top: 10px;">
          <li>Smoother animations and interactions</li>
          <li>Better perceived performance</li>
          <li>Improved responsiveness for complex UIs</li>
          <li>Enables features like Suspense and Concurrent Mode</li>
        </ul>
      </div>
    </section>

    <!-- Lifting State Up -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">6️⃣ Lifting State Up</h2>
      <p>When two components need to share state, move the state to their closest common parent.</p>

      <h3 style="color:#d93025; margin-top: 30px;">❌ Problem: Sibling Components Can't Share State</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// Component A and B can't communicate directly
function ComponentA() {
  const [data, setData] = useState('Hello');
  return &lt;div&gt;{data}&lt;/div&gt;;
}

function ComponentB() {
  // ❌ Can't access ComponentA's state!
  return &lt;button&gt;Update&lt;/button&gt;;
}
</code></pre>

      <h3 style="color:#28a745; margin-top: 30px;">✅ Solution: Lift State to Parent</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

// Parent component manages shared state
export default function Parent() {
  const [sharedData, setSharedData] = useState('Hello');

  return (
    &lt;div&gt;
      &lt;ComponentA data={sharedData} /&gt;
      &lt;ComponentB onUpdate={setSharedData} /&gt;
    &lt;/div&gt;
  );
}

// Child A displays the data
function ComponentA({ data }) {
  return &lt;div&gt;Data: {data}&lt;/div&gt;;
}

// Child B can update the data
function ComponentB({ onUpdate }) {
  return (
    &lt;button onClick={() =&gt; onUpdate('Updated!')}&gt;
      Update Data
    &lt;/button&gt;
  );
}
</code></pre>

      <h3 style="margin-top: 30px;">🎯 Real-World Example: Temperature Converter</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');

  const fahrenheit = celsius ? (celsius * 9/5 + 32).toFixed(1) : '';

  return (
    &lt;div&gt;
      &lt;CelsiusInput 
        value={celsius} 
        onChange={setCelsius} 
      /&gt;
      &lt;FahrenheitDisplay value={fahrenheit} /&gt;
    &lt;/div&gt;
  );
}

function CelsiusInput({ value, onChange }) {
  return (
    &lt;div&gt;
      &lt;label&gt;Celsius: &lt;/label&gt;
      &lt;input 
        type="number"
        value={value}
        onChange={(e) =&gt; onChange(e.target.value)}
      /&gt;
    &lt;/div&gt;
  );
}

function FahrenheitDisplay({ value }) {
  return &lt;p&gt;Fahrenheit: {value || '—'}&lt;/p&gt;;
}
</code></pre>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin-top: 20px;">
        <strong>💡 When to Lift State Up:</strong>
        <ul style="margin-top: 10px;">
          <li>Multiple components need to reflect the same changing data</li>
          <li>Child components need to communicate with each other</li>
          <li>You want a single source of truth for data</li>
          <li>Parent needs to control child component behavior</li>
        </ul>
      </div>
    </section>

    <!-- Practice Task -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Build a <strong>Shopping Cart</strong> that demonstrates state management:</p>
      <ul style="line-height: 1.6;">
        <li>Product list component (displays available products)</li>
        <li>Cart component (shows added items)</li>
        <li>Lift state up to parent to share cart data</li>
        <li>Use proper keys for list items</li>
        <li>Implement add/remove with functional state updates</li>
      </ul>
      
      <p>2️⃣ Create a <strong>Multi-step Form Wizard</strong>:</p>
      <ul style="line-height: 1.6;">
        <li>3 steps: Personal Info, Address, Review</li>
        <li>Lift form data to parent component</li>
        <li>Pass data down to each step component</li>
        <li>Use functional updates to modify form data</li>
      </ul>

      <p>3️⃣ Build a <strong>Search and Filter App</strong>:</p>
      <ul style="line-height: 1.6;">
        <li>Search input and filtered results list</li>
        <li>Demonstrate async state updates</li>
        <li>Use useTransition for smooth filtering of large lists</li>
        <li>Implement proper key management</li>
      </ul>

      <p>4️⃣ Bonus: Create a task manager where parent tracks completion status of multiple child tasks.</p>
      <p>5️⃣ Bonus: Build a color theme switcher using lifted state to change theme across multiple components.</p>
    </section>

    <!-- Summary -->
    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ State updates are asynchronous and batched for performance.</li>
        <li>✅ Use functional updates when new state depends on previous state.</li>
        <li>✅ Components re-render when state or props change.</li>
        <li>✅ Always use unique, stable keys for list items.</li>
        <li>✅ React's reconciliation algorithm efficiently updates the DOM.</li>
        <li>✅ React Fiber enables incremental rendering and better performance.</li>
        <li>✅ Lift state up to share data between sibling components.</li>
        <li>✅ Keep state at the lowest common ancestor that needs it.</li>
        <li>✅ Understanding these concepts leads to more efficient React apps.</li>
      </ul>
    </section>

  </div>
  `,
  duration: '60 min',
  order: 8,
  tags: ['react', 'state-management', 'reconciliation', 'fiber', 'lifting-state', 'performance', 'rendering']
}
,
{
  id: '9',
  title: 'Side Effects Using useEffect',
  description: 'Explore the power of useEffect in React and learn how to effectively manage side effects within your applications. Gain a comprehensive understanding of the useEffect hook, including its callback execution in different scenarios and how to handle data fetching, error handling, and loading states.',
  slug: 'react-useeffect-side-effects',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">9 : Side Effects Using useEffect 📚</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, we will explore the power of <strong style="color:#d93025;">useEffect in React</strong> and learn how to effectively manage side effects within our applications. You will gain a comprehensive understanding of the useEffect hook, including its callback execution in different scenarios and how to handle data fetching, error handling, and loading states. 🌟🔁🚀
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- What are Side Effects -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣ What are Side Effects?</h2>
      <p>Side effects are operations that interact with the outside world or affect something beyond the component's return value.</p>
      
      <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="color: #0073b1; margin-bottom: 15px;">Common Side Effects:</h4>
        <ul style="line-height: 2;">
          <li>🌐 <strong>Data Fetching:</strong> Making API calls to fetch data</li>
          <li>📝 <strong>DOM Manipulation:</strong> Directly updating the DOM</li>
          <li>⏰ <strong>Timers:</strong> Setting up setInterval or setTimeout</li>
          <li>🔔 <strong>Subscriptions:</strong> Listening to events or data streams</li>
          <li>💾 <strong>Local Storage:</strong> Reading/writing to localStorage</li>
          <li>📊 <strong>Logging:</strong> Sending analytics or error logs</li>
          <li>📄 <strong>Document Title:</strong> Updating the page title</li>
        </ul>
      </div>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useEffect } from 'react';

export default function SideEffectExample() {
  useEffect(() =&gt; {
    // This is a side effect
    document.title = 'Welcome to My App';
    console.log('Component rendered!');
  });

  return &lt;h1&gt;Hello World&lt;/h1&gt;;
}
</code></pre>
    </section>

    <!-- Understanding useEffect Basics -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">2️⃣ Understanding useEffect Basics</h2>
      <p>The useEffect hook lets you perform side effects in function components. It takes two arguments: a callback function and a dependency array.</p>

      <h3 style="margin-top: 30px;">Basic Syntax</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>useEffect(() =&gt; {
  // Side effect code here
  
  return () =&gt; {
    // Cleanup code here (optional)
  };
}, [dependencies]); // Dependency array
</code></pre>

      <h3 style="margin-top: 30px;">Three Ways to Use useEffect</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

export default function EffectExamples() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 1️⃣ Runs after EVERY render (no dependency array)
  useEffect(() =&gt; {
    console.log('Runs on every render');
  });

  // 2️⃣ Runs only ONCE after initial render (empty array)
  useEffect(() =&gt; {
    console.log('Runs only once on mount');
  }, []);

  // 3️⃣ Runs when specific dependencies change
  useEffect(() =&gt; {
    console.log('Count changed:', count);
  }, [count]); // Only runs when count changes

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
      
      &lt;input 
        value={name}
        onChange={(e) =&gt; setName(e.target.value)}
        placeholder="Type your name"
      /&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin-top: 20px;">
        <strong>💡 Key Point:</strong> The dependency array tells React when to re-run the effect. If a value in the array changes between renders, the effect runs again.
      </div>
    </section>

    <!-- Effect Execution Timing -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">3️⃣ Effect Execution Timing</h2>
      <p>Understanding when effects run is crucial for avoiding bugs and infinite loops.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

export default function ExecutionTiming() {
  const [count, setCount] = useState(0);

  console.log('1. Component rendering');

  useEffect(() =&gt; {
    console.log('2. Effect runs AFTER render');
    console.log('   DOM is updated and painted');
  });

  return (
    &lt;div&gt;
      {console.log('3. JSX being created')}
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

// Console output order:
// 1. Component rendering
// 3. JSX being created
// 2. Effect runs AFTER render
</code></pre>

      <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin-top: 20px;">
        <h4 style="color: #0073b1; margin-bottom: 15px;">Execution Order:</h4>
        <ol style="line-height: 2;">
          <li><strong>Component Function Runs</strong> → React calls your component</li>
          <li><strong>JSX is Created</strong> → Return statement builds virtual DOM</li>
          <li><strong>DOM is Updated</strong> → React updates actual DOM</li>
          <li><strong>Browser Paints</strong> → User sees the update</li>
          <li><strong>Effects Run</strong> → useEffect callbacks execute</li>
        </ol>
      </div>
    </section>

    <!-- Cleanup Functions -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">4️⃣ Cleanup Functions</h2>
      <p>Cleanup functions prevent memory leaks and unwanted behavior by cleaning up after effects.</p>

      <h3 style="margin-top: 30px;">When Cleanup Runs</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

export default function CleanupExample() {
  const [count, setCount] = useState(0);

  useEffect(() =&gt; {
    console.log('Effect runs, count is:', count);

    // Cleanup function
    return () =&gt; {
      console.log('Cleanup runs before next effect');
      console.log('Previous count was:', count);
    };
  }, [count]);

  return (
    &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
      Count: {count}
    &lt;/button&gt;
  );
}

// Console output when clicking button twice:
// Effect runs, count is: 0
// Cleanup runs before next effect (when count changes)
// Previous count was: 0
// Effect runs, count is: 1
// Cleanup runs before next effect
// Previous count was: 1
// Effect runs, count is: 2
</code></pre>

      <h3 style="margin-top: 30px;">Common Cleanup Scenarios</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useEffect } from 'react';

// 1️⃣ Cleanup Timers
function TimerComponent() {
  useEffect(() =&gt; {
    const timer = setInterval(() =&gt; {
      console.log('Tick');
    }, 1000);

    return () =&gt; clearInterval(timer); // ✅ Cleanup
  }, []);

  return &lt;div&gt;Timer Running&lt;/div&gt;;
}

// 2️⃣ Cleanup Event Listeners
function ScrollTracker() {
  useEffect(() =&gt; {
    const handleScroll = () =&gt; {
      console.log('Scrolled!');
    };

    window.addEventListener('scroll', handleScroll);

    return () =&gt; {
      window.removeEventListener('scroll', handleScroll); // ✅ Cleanup
    };
  }, []);

  return &lt;div&gt;Scroll the page&lt;/div&gt;;
}

// 3️⃣ Cleanup Subscriptions
function WebSocketComponent() {
  useEffect(() =&gt; {
    const ws = new WebSocket('ws://example.com');
    
    ws.onmessage = (event) =&gt; {
      console.log('Message:', event.data);
    };

    return () =&gt; ws.close(); // ✅ Cleanup
  }, []);

  return &lt;div&gt;Connected&lt;/div&gt;;
}
</code></pre>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin-top: 20px;">
        <strong>⚠️ Important:</strong> Always cleanup timers, event listeners, and subscriptions to prevent memory leaks and unexpected behavior!
      </div>
    </section>

    <!-- Data Fetching with useEffect -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">5️⃣ Data Fetching with useEffect</h2>
      <p>One of the most common use cases for useEffect is fetching data from APIs.</p>

      <h3 style="margin-top: 30px;">Basic Data Fetching</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() =&gt; {
    // Fetch data when component mounts
    fetch('https://api.example.com/user/1')
      .then(response =&gt; response.json())
      .then(data =&gt; setUser(data));
  }, []); // Empty array = run once on mount

  if (!user) return &lt;p&gt;Loading...&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;h2&gt;{user.name}&lt;/h2&gt;
      &lt;p&gt;{user.email}&lt;/p&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <h3 style="margin-top: 30px;">Data Fetching with Loading and Error States</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

export default function DataFetchingExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    // Reset states when fetching starts
    setLoading(true);
    setError(null);

    fetch('https://api.example.com/posts')
      .then(response =&gt; {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data =&gt; {
        setData(data);
        setLoading(false);
      })
      .catch(err =&gt; {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Run once on mount

  if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (error) return &lt;div&gt;Error: {error}&lt;/div&gt;;

  return (
    &lt;div&gt;
      &lt;h2&gt;Posts&lt;/h2&gt;
      &lt;ul&gt;
        {data.map(post =&gt; (
          &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <h3 style="margin-top: 30px;">Async/Await Pattern</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

export default function AsyncDataFetching() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    // Create async function inside useEffect
    const fetchPosts = async () =&gt; {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setPosts(data.slice(0, 5)); // Get first 5 posts
        setError(null);
      } catch (err) {
        setError(err.message);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return &lt;div style={{ padding: '20px' }}&gt;Loading posts...&lt;/div&gt;;
  }

  if (error) {
    return &lt;div style={{ padding: '20px', color: 'red' }}&gt;Error: {error}&lt;/div&gt;;
  }

  return (
    &lt;div style={{ padding: '20px' }}&gt;
      &lt;h2&gt;Recent Posts&lt;/h2&gt;
      &lt;ul&gt;
        {posts.map(post =&gt; (
          &lt;li key={post.id}&gt;
            &lt;strong&gt;{post.title}&lt;/strong&gt;
            &lt;p&gt;{post.body}&lt;/p&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- Fetching with Dependencies -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">6️⃣ Fetching Data Based on Dependencies</h2>
      <p>Sometimes you need to fetch data when a specific value changes, like a search query or user ID.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

export default function SearchPosts() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() =&gt; {
    // Don't fetch if query is empty
    if (!query) {
      setResults([]);
      return;
    }

    // Fetch data when query changes
    const fetchResults = async () =&gt; {
      setLoading(true);
      try {
        const response = await fetch(
          \`https://api.example.com/search?q=\${query}\`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]); // Re-run when query changes

  return (
    &lt;div&gt;
      &lt;input
        type="text"
        value={query}
        onChange={(e) =&gt; setQuery(e.target.value)}
        placeholder="Search posts..."
      /&gt;
      
      {loading && &lt;p&gt;Searching...&lt;/p&gt;}
      
      &lt;ul&gt;
        {results.map(result =&gt; (
          &lt;li key={result.id}&gt;{result.title}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <h3 style="margin-top: 30px;">Debouncing API Calls</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

export default function DebouncedSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() =&gt; {
    // Wait 500ms after user stops typing
    const timer = setTimeout(() =&gt; {
      if (query) {
        fetch(\`https://api.example.com/search?q=\${query}\`)
          .then(res =&gt; res.json())
          .then(data =&gt; setResults(data));
      }
    }, 500);

    // Cleanup: cancel previous timer if user keeps typing
    return () =&gt; clearTimeout(timer);
  }, [query]);

  return (
    &lt;div&gt;
      &lt;input
        type="text"
        value={query}
        onChange={(e) =&gt; setQuery(e.target.value)}
        placeholder="Search with debounce..."
      /&gt;
      &lt;ul&gt;
        {results.map(result =&gt; (
          &lt;li key={result.id}&gt;{result.title}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <div style="background-color: #d4edda; padding: 15px; border-left: 4px solid #28a745; margin-top: 20px;">
        <strong>💡 Pro Tip:</strong> Debouncing prevents making too many API calls while the user is typing, improving performance and reducing server load.
      </div>
    </section>

    <!-- Handling Race Conditions -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">7️⃣ Handling Race Conditions</h2>
      <p>Race conditions occur when multiple async operations complete in an unexpected order. Use cleanup to handle them.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

export default function UserProfile() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() =&gt; {
    let ignore = false; // Flag to ignore stale responses

    const fetchUser = async () =&gt; {
      const response = await fetch(\`https://api.example.com/users/\${userId}\`);
      const data = await response.json();
      
      // Only update if this effect hasn't been cleaned up
      if (!ignore) {
        setUser(data);
      }
    };

    fetchUser();

    // Cleanup function sets ignore to true
    return () =&gt; {
      ignore = true; // Ignore response if component unmounts or userId changes
    };
  }, [userId]);

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setUserId(1)}&gt;User 1&lt;/button&gt;
      &lt;button onClick={() =&gt; setUserId(2)}&gt;User 2&lt;/button&gt;
      &lt;button onClick={() =&gt; setUserId(3)}&gt;User 3&lt;/button&gt;
      
      {user && (
        &lt;div&gt;
          &lt;h2&gt;{user.name}&lt;/h2&gt;
          &lt;p&gt;{user.email}&lt;/p&gt;
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
}
</code></pre>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin-top: 20px;">
        <strong>⚠️ Why This Matters:</strong> Without the ignore flag, if a user clicks rapidly between users, a slower request might finish after a faster one, showing the wrong user data!
      </div>
    </section>

    <!-- Common Pitfalls -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">8️⃣ Common Pitfalls and How to Avoid Them</h2>

      <h3 style="color:#d93025; margin-top: 30px;">❌ Pitfall 1: Infinite Loops</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// ❌ BAD: Creates infinite loop
function InfiniteLoop() {
  const [count, setCount] = useState(0);

  useEffect(() =&gt; {
    setCount(count + 1); // Changes state on every render!
  }); // No dependency array = runs on every render

  return &lt;p&gt;{count}&lt;/p&gt;;
}

// ✅ GOOD: Controlled execution
function ControlledEffect() {
  const [count, setCount] = useState(0);

  useEffect(() =&gt; {
    // Runs only once
    console.log('Component mounted');
  }, []); // Empty array = runs once

  return &lt;button onClick={() =&gt; setCount(count + 1)}&gt;{count}&lt;/button&gt;;
}
</code></pre>

      <h3 style="color:#d93025; margin-top: 30px;">❌ Pitfall 2: Missing Dependencies</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// ❌ BAD: Missing dependency
function MissingDep() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  useEffect(() =&gt; {
    console.log(count * multiplier); // Uses multiplier but not in deps!
  }, [count]); // Missing multiplier

  return &lt;div&gt;...&lt;/div&gt;;
}

// ✅ GOOD: All dependencies included
function CorrectDeps() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  useEffect(() =&gt; {
    console.log(count * multiplier);
  }, [count, multiplier]); // Both dependencies included

  return &lt;div&gt;...&lt;/div&gt;;
}
</code></pre>

      <h3 style="color:#d93025; margin-top: 30px;">❌ Pitfall 3: Not Cleaning Up</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// ❌ BAD: Memory leak
function MemoryLeak() {
  useEffect(() =&gt; {
    const interval = setInterval(() =&gt; {
      console.log('Tick');
    }, 1000);
    // No cleanup! Interval keeps running even after unmount
  }, []);

  return &lt;div&gt;Timer&lt;/div&gt;;
}

// ✅ GOOD: Proper cleanup
function ProperCleanup() {
  useEffect(() =&gt; {
    const interval = setInterval(() =&gt; {
      console.log('Tick');
    }, 1000);

    return () =&gt; clearInterval(interval); // Cleanup!
  }, []);

  return &lt;div&gt;Timer&lt;/div&gt;;
}
</code></pre>
    </section>

    <!-- Practice Task -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Build a <strong>Weather App</strong>:</p>
      <ul style="line-height: 1.6;">
        <li>Fetch weather data from an API when component mounts</li>
        <li>Show loading state while fetching</li>
        <li>Display error message if fetch fails</li>
        <li>Allow user to search for different cities</li>
        <li>Fetch new data when city changes</li>
      </ul>
      
      <p>2️⃣ Create a <strong>Real-time Clock</strong>:</p>
      <ul style="line-height: 1.6;">
        <li>Display current time that updates every second</li>
        <li>Use setInterval inside useEffect</li>
        <li>Clean up interval when component unmounts</li>
        <li>Add start/stop functionality</li>
      </ul>

      <p>3️⃣ Build an <strong>Auto-save Form</strong>:</p>
      <ul style="line-height: 1.6;">
        <li>Save form data to localStorage after user stops typing</li>
        <li>Use debouncing to avoid saving on every keystroke</li>
        <li>Load saved data when component mounts</li>
        <li>Show "Saved!" indicator after successful save</li>
      </ul>

      <p>4️⃣ Bonus: Create a live search that fetches results as user types, with proper race condition handling.</p>
      <p>5️⃣ Bonus: Build a scroll tracker that shows how far down the page the user has scrolled.</p>
    </section>

    <!-- Summary -->
    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ useEffect manages side effects like data fetching, subscriptions, and DOM manipulation.</li>
        <li>✅ Effects run after the component renders and the DOM is updated.</li>
        <li>✅ Dependency array controls when effects re-run.</li>
        <li>✅ Always cleanup timers, event listeners, and subscriptions.</li>
        <li>✅ Handle loading and error states for better user experience.</li>
        <li>✅ Use async/await for cleaner asynchronous code.</li>
        <li>✅ Debounce API calls to improve performance.</li>
        <li>✅ Handle race conditions with cleanup functions.</li>
        <li>✅ Avoid infinite loops by carefully managing dependencies.</li>
        <li>✅ Include all values used inside effect in dependency array.</li>
      </ul>
    </section>

  </div>
  `,
  duration: '50 min',
  order: 9,
  tags: ['react', 'useEffect', 'side-effects', 'data-fetching', 'async', 'cleanup', 'hooks']
},
{
  id: '10',
  title: 'Reducers And Context API',
  description: 'Dive into advanced state management techniques in React by exploring the useReducer and useContext hooks. Learn how to effectively utilize useReducer to handle complex state logic and leverage useContext to share state across components. Build a todo list application using context and reducer for efficient state management.',
  slug: 'react-reducer-context-api',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">10 : Reducers And Context API 📚</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, we will dive into <strong style="color:#d93025;">advanced state management techniques</strong> in React by exploring the useReducer and useContext hooks. You will learn how to effectively utilize useReducer to handle complex state logic and leverage useContext to share state across components. Additionally, you will apply these concepts in building a todo list application using context and reducer, enabling efficient state management. 🔁🌟🚀
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Introduction to useReducer -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣ Introduction to useReducer</h2>
      <p>useReducer is an alternative to useState for managing complex state logic. It's perfect when you have multiple related state values or complex state transitions.</p>
      
      <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="color: #0073b1; margin-bottom: 15px;">When to Use useReducer:</h4>
        <ul style="line-height: 2;">
          <li>✅ State has complex update logic</li>
          <li>✅ Multiple sub-values in state object</li>
          <li>✅ Next state depends on previous state</li>
          <li>✅ Want to optimize performance with deep updates</li>
          <li>✅ Need to pass down update logic to nested components</li>
        </ul>
      </div>

      <h3 style="margin-top: 30px;">Basic useReducer Syntax</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>const [state, dispatch] = useReducer(reducer, initialState);

// reducer: function that determines how state updates
// dispatch: function to trigger state updates
// state: current state value
// initialState: starting state value
</code></pre>

      <h3 style="margin-top: 30px;">Simple Counter Example</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useReducer } from 'react';

// Reducer function: takes current state and action, returns new state
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {state.count}&lt;/p&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'INCREMENT' })}&gt;
        +1
      &lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'DECREMENT' })}&gt;
        -1
      &lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'RESET' })}&gt;
        Reset
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin-top: 20px;">
        <strong>💡 Key Concept:</strong> Instead of directly setting state, you dispatch actions that describe what happened. The reducer function decides how to update state based on the action.
      </div>
    </section>

    <!-- Actions with Payloads -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">2️⃣ Actions with Payloads</h2>
      <p>Actions can carry additional data (payload) needed for the state update.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'ADD':
      // Use payload to add custom amount
      return { count: state.count + action.payload };
    case 'SET':
      // Set to specific value
      return { count: action.payload };
    default:
      return state;
  }
}

export default function FlexibleCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {state.count}&lt;/p&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'INCREMENT' })}&gt;
        +1
      &lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'ADD', payload: 5 })}&gt;
        +5
      &lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'ADD', payload: 10 })}&gt;
        +10
      &lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'SET', payload: 100 })}&gt;
        Set to 100
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- Complex State Management -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">3️⃣ Managing Complex State</h2>
      <p>useReducer shines when managing state objects with multiple properties.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useReducer } from 'react';

// Initial state with multiple properties
const initialState = {
  user: null,
  loading: false,
  error: null
};

function userReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'LOGOUT':
      return {
        user: null,
        loading: false,
        error: null
      };
    default:
      return state;
  }
}

export default function UserProfile() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const fetchUser = async () =&gt; {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch('https://api.example.com/user');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  return (
    &lt;div&gt;
      {state.loading && &lt;p&gt;Loading...&lt;/p&gt;}
      {state.error && &lt;p style={{ color: 'red' }}&gt;Error: {state.error}&lt;/p&gt;}
      {state.user && (
        &lt;div&gt;
          &lt;h2&gt;{state.user.name}&lt;/h2&gt;
          &lt;button onClick={() =&gt; dispatch({ type: 'LOGOUT' })}&gt;
            Logout
          &lt;/button&gt;
        &lt;/div&gt;
      )}
      {!state.user && !state.loading && (
        &lt;button onClick={fetchUser}&gt;Load User&lt;/button&gt;
      )}
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- Introduction to Context API -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">4️⃣ Introduction to Context API</h2>
      <p>Context allows you to share data across the component tree without passing props manually at every level.</p>

      <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="color: #0073b1; margin-bottom: 15px;">Problem: Prop Drilling</h4>
        <p>Passing data through many layers of components is tedious and error-prone:</p>
        <pre style="background-color:#ffffff; padding:10px; border-radius:4px; margin-top:10px;"><code>App → Header → Nav → UserMenu → UserName
// UserName needs user data from App
// Must pass through all intermediate components!
</code></pre>
      </div>

      <h3 style="margin-top: 30px;">Creating and Using Context</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { createContext, useContext, useState } from 'react';

// 1️⃣ Create Context
const ThemeContext = createContext();

// 2️⃣ Create Provider Component
export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    &lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;
      &lt;Header /&gt;
      &lt;Content /&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}

// 3️⃣ Use Context in Nested Components
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    &lt;header style={{ background: theme === 'light' ? '#fff' : '#333' }}&gt;
      &lt;button onClick={() =&gt; setTheme(theme === 'light' ? 'dark' : 'light')}&gt;
        Toggle Theme
      &lt;/button&gt;
    &lt;/header&gt;
  );
}

function Content() {
  const { theme } = useContext(ThemeContext);
  
  return (
    &lt;main style={{ background: theme === 'light' ? '#f0f0f0' : '#222' }}&gt;
      &lt;p&gt;Current theme: {theme}&lt;/p&gt;
    &lt;/main&gt;
  );
}
</code></pre>

      <div style="background-color: #d4edda; padding: 15px; border-left: 4px solid #28a745; margin-top: 20px;">
        <strong>✅ Benefits:</strong> Any component can access context data without prop drilling. Changes to context automatically update all consumers.
      </div>
    </section>

    <!-- Combining useReducer and Context -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">5️⃣ Combining useReducer with Context</h2>
      <p>The most powerful pattern: use useReducer for state logic and Context to share it globally.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { createContext, useContext, useReducer } from 'react';

// Create Context
const CounterContext = createContext();

// Reducer
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

// Provider Component
export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    &lt;CounterContext.Provider value={{ state, dispatch }}&gt;
      {children}
    &lt;/CounterContext.Provider&gt;
  );
}

// Custom Hook for easy access
export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within CounterProvider');
  }
  return context;
}

// Usage in App
export default function App() {
  return (
    &lt;CounterProvider&gt;
      &lt;Display /&gt;
      &lt;Controls /&gt;
    &lt;/CounterProvider&gt;
  );
}

function Display() {
  const { state } = useCounter();
  return &lt;h1&gt;Count: {state.count}&lt;/h1&gt;;
}

function Controls() {
  const { dispatch } = useCounter();
  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'INCREMENT' })}&gt;+&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'DECREMENT' })}&gt;-&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'RESET' })}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- Todo App with Context and Reducer -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">6️⃣ Building a Todo App with Context & Reducer</h2>
      <p>Let's build a complete todo application using useReducer and Context for state management.</p>

      <h3 style="margin-top: 30px;">Step 1: Create Todo Context and Reducer</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { createContext, useContext, useReducer } from 'react';

// Todo Context
const TodoContext = createContext();

// Initial State
const initialState = {
  todos: [],
  filter: 'all' // all, active, completed
};

// Reducer
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false
          }
        ]
      };
    
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =&gt;
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo =&gt; todo.id !== action.payload)
      };
    
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =&gt;
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        )
      };
    
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo =&gt; !todo.completed)
      };
    
    default:
      return state;
  }
}

// Provider Component
export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    &lt;TodoContext.Provider value={{ state, dispatch }}&gt;
      {children}
    &lt;/TodoContext.Provider&gt;
  );
}

// Custom Hook
export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider');
  }
  return context;
}
</code></pre>

      <h3 style="margin-top: 30px;">Step 2: Todo Input Component</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';
import { useTodos } from './TodoContext';

export default function TodoInput() {
  const [text, setText] = useState('');
  const { dispatch } = useTodos();

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        type="text"
        value={text}
        onChange={(e) =&gt; setText(e.target.value)}
        placeholder="What needs to be done?"
      /&gt;
      &lt;button type="submit"&gt;Add&lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>

      <h3 style="margin-top: 30px;">Step 3: Todo List Component</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useTodos } from './TodoContext';

export default function TodoList() {
  const { state, dispatch } = useTodos();

  // Filter todos based on current filter
  const filteredTodos = state.todos.filter(todo =&gt; {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  return (
    &lt;ul&gt;
      {filteredTodos.map(todo =&gt; (
        &lt;li key={todo.id}&gt;
          &lt;input
            type="checkbox"
            checked={todo.completed}
            onChange={() =&gt; dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          /&gt;
          &lt;span style={{ 
            textDecoration: todo.completed ? 'line-through' : 'none' 
          }}&gt;
            {todo.text}
          &lt;/span&gt;
          &lt;button onClick={() =&gt; dispatch({ type: 'DELETE_TODO', payload: todo.id })}&gt;
            Delete
          &lt;/button&gt;
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
</code></pre>

      <h3 style="margin-top: 30px;">Step 4: Filter Component</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useTodos } from './TodoContext';

export default function TodoFilter() {
  const { state, dispatch } = useTodos();

  const filters = ['all', 'active', 'completed'];

  return (
    &lt;div&gt;
      {filters.map(filter =&gt; (
        &lt;button
          key={filter}
          onClick={() =&gt; dispatch({ type: 'SET_FILTER', payload: filter })}
          style={{ 
            fontWeight: state.filter === filter ? 'bold' : 'normal' 
          }}
        &gt;
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        &lt;/button&gt;
      ))}
      &lt;button onClick={() =&gt; dispatch({ type: 'CLEAR_COMPLETED' })}&gt;
        Clear Completed
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <h3 style="margin-top: 30px;">Step 5: Main App Component</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { TodoProvider } from './TodoContext';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

export default function App() {
  return (
    &lt;TodoProvider&gt;
      &lt;div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}&gt;
        &lt;h1&gt;Todo List&lt;/h1&gt;
        &lt;TodoInput /&gt;
        &lt;TodoList /&gt;
        &lt;TodoFilter /&gt;
      &lt;/div&gt;
    &lt;/TodoProvider&gt;
  );
}
</code></pre>
    </section>

    <!-- Best Practices -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">7️⃣ Best Practices</h2>

      <div style="background-color: #d4edda; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="color: #0073b1; margin-bottom: 15px;">✅ Do's:</h4>
        <ul style="line-height: 2;">
          <li>Use descriptive action type names (e.g., 'ADD_TODO', not just 'ADD')</li>
          <li>Keep reducers pure - no side effects inside</li>
          <li>Use action creators for complex payloads</li>
          <li>Create custom hooks for easier context access</li>
          <li>Split contexts by concern (auth, theme, data, etc.)</li>
          <li>Add error boundaries around context providers</li>
        </ul>
      </div>

      <div style="background-color: #f8d7da; padding: 20px; border-radius: 8px;">
        <h4 style="color: #d93025; margin-bottom: 15px;">❌ Don'ts:</h4>
        <ul style="line-height: 2;">
          <li>Don't mutate state directly in reducer</li>
          <li>Don't put everything in one context (performance issues)</li>
          <li>Don't forget default case in reducer</li>
          <li>Don't use context for frequently changing values</li>
          <li>Don't make API calls directly in reducer</li>
        </ul>
      </div>

      <h3 style="margin-top: 30px;">Action Creators Pattern</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// Action creators make dispatching easier and more consistent
export const todoActions = {
  addTodo: (text) =&gt; ({ type: 'ADD_TODO', payload: text }),
  toggleTodo: (id) =&gt; ({ type: 'TOGGLE_TODO', payload: id }),
  deleteTodo: (id) =&gt; ({ type: 'DELETE_TODO', payload: id }),
  setFilter: (filter) =&gt; ({ type: 'SET_FILTER', payload: filter })
};

// Usage
dispatch(todoActions.addTodo('Learn React'));
dispatch(todoActions.toggleTodo(123));
</code></pre>
    </section>

    <!-- Practice Task -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Build a <strong>Shopping Cart Application</strong>:</p>
      <ul style="line-height: 1.6;">
        <li>Use useReducer to manage cart state (items, quantities, total)</li>
        <li>Use Context to share cart across components</li>
        <li>Implement add, remove, update quantity, and clear cart actions</li>
        <li>Create separate components: ProductList, Cart, CartItem</li>
        <li>Display total price that updates automatically</li>
      </ul>
      
      <p>2️⃣ Create a <strong>Theme Manager</strong>:</p>
      <ul style="line-height: 1.6;">
        <li>Manage multiple theme properties (colors, fonts, spacing)</li>
        <li>Use Context to apply theme globally</li>
        <li>Create theme switcher component</li>
        <li>Save theme preference to localStorage</li>
      </ul>

      <p>3️⃣ Build a <strong>Multi-step Form Wizard</strong>:</p>
      <ul style="line-height: 1.6;">
        <li>Use useReducer to manage form data and current step</li>
        <li>Share state across step components with Context</li>
        <li>Implement validation for each step</li>
        <li>Add progress indicator</li>
      </ul>

      <p>4️⃣ Bonus: Create a notification system using Context and Reducer that can show/hide/stack multiple notifications.</p>
      <p>5️⃣ Bonus: Build a blog app with posts, comments, and likes using Context API for global state.</p>
    </section>

    <!-- Summary -->
    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ useReducer manages complex state logic with actions and reducers.</li>
        <li>✅ Reducers are pure functions that take state and action, return new state.</li>
        <li>✅ Actions describe what happened; reducers decide how to update state.</li>
        <li>✅ Context API eliminates prop drilling for global state.</li>
        <li>✅ Combine useReducer with Context for powerful state management.</li>
        <li>✅ Create custom hooks for easier context consumption.</li>
        <li>✅ Keep reducers pure and avoid side effects inside them.</li>
        <li>✅ Split contexts by domain for better performance.</li>
        <li>✅ Use action creators for consistency and maintainability.</li>
        <li>✅ This pattern works great for medium-sized applications.</li>
      </ul>
    </section>

  </div>
  `,
  duration: '55 min',
  order: 10,
  tags: ['react', 'useReducer', 'context-api', 'useContext', 'state-management', 'advanced', 'hooks']
}
,
{
  id: '11',
  title: 'Custom Hooks',
  description: 'Learn to build your own Hooks and extract component logic into reusable functions. Master the art of creating custom hooks to share logic across components, handle complex side effects, and build a library of reusable functionality.',
  slug: 'react-custom-hooks',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">11 : Custom Hooks 📚</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, you will learn to <strong style="color:#d93025;">build your own Hooks</strong> and extract component logic into reusable functions. Master the art of creating custom hooks to share logic across components, handle complex side effects, and build a library of reusable functionality. 🚀💡📊
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Introduction to Custom Hooks -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣ What Are Custom Hooks?</h2>
      <p>Custom Hooks are JavaScript functions that use React Hooks internally and allow you to extract and reuse stateful logic across multiple components.</p>
      
      <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="color: #0073b1; margin-bottom: 15px;">Why Custom Hooks?</h4>
        <ul style="line-height: 2;">
          <li>✅ <strong>Reusability:</strong> Share logic between multiple components</li>
          <li>✅ <strong>Clean Code:</strong> Keep components focused and readable</li>
          <li>✅ <strong>Separation of Concerns:</strong> Separate UI from logic</li>
          <li>✅ <strong>Testability:</strong> Test logic independently from UI</li>
          <li>✅ <strong>Composition:</strong> Combine multiple hooks together</li>
        </ul>
      </div>

      <h3 style="margin-top: 30px;">Rules for Custom Hooks</h3>
      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin-bottom: 20px;">
        <ol style="line-height: 2;">
          <li><strong>Must start with "use":</strong> useWindowSize, useFetch, useLocalStorage</li>
          <li><strong>Can call other Hooks:</strong> useState, useEffect, useContext, etc.</li>
          <li><strong>Follow Hook rules:</strong> Only call at the top level, only in React functions</li>
          <li><strong>Return what's needed:</strong> State, functions, or both</li>
        </ol>
      </div>

      <h3 style="margin-top: 30px;">Basic Structure</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

// Custom Hook naming: must start with "use"
function useCustomHook(initialValue) {
  // 1. Use React Hooks inside
  const [state, setState] = useState(initialValue);

  // 2. Add your logic
  useEffect(() => {
    // Side effects here
  }, []);

  // 3. Return what components need
  return [state, setState];
}

// Usage in component
function MyComponent() {
  const [value, setValue] = useCustomHook('initial');
  
  return <div>{value}</div>;
}
</code></pre>
    </section>

    <!-- Creating Your First Custom Hook -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">2️⃣ Creating Your First Custom Hook</h2>
      <p>Let's create a simple <strong>useCounter</strong> hook to understand the basics.</p>

      <h3 style="margin-top: 30px;">Problem: Repetitive Counter Logic</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// Without Custom Hook - Same logic repeated in multiple components
function ComponentA() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;{count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;+&lt;/button&gt;
      &lt;button onClick={decrement}&gt;-&lt;/button&gt;
      &lt;button onClick={reset}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}

// ComponentB has the same logic... repetitive! 😫
</code></pre>

      <h3 style="margin-top: 30px;">Solution: useCounter Custom Hook</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

// Custom Hook: Extract counter logic
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  const setValue = (value) => setCount(value);

  return { count, increment, decrement, reset, setValue };
}

// Usage - Much cleaner! 🎉
function ComponentA() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;{count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;+&lt;/button&gt;
      &lt;button onClick={decrement}&gt;-&lt;/button&gt;
      &lt;button onClick={reset}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}

function ComponentB() {
  const { count, increment } = useCounter(10); // Start from 10
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;Add One&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <div style="background-color: #d4edda; padding: 15px; border-left: 4px solid #28a745; margin-top: 20px;">
        <strong>✅ Benefits:</strong> Logic is written once, tested once, and reused everywhere. Components become simpler and more focused on rendering.
      </div>
    </section>

    <!-- useToggle Hook -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">3️⃣ useToggle Hook</h2>
      <p>A simple hook to toggle boolean values (great for modals, menus, dark mode, etc.).</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(v => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, toggle, setTrue, setFalse];
}

// Usage Examples
function ModalExample() {
  const [isOpen, toggleModal, openModal, closeModal] = useToggle(false);

  return (
    &lt;div&gt;
      &lt;button onClick={openModal}&gt;Open Modal&lt;/button&gt;
      
      {isOpen && (
        &lt;div className="modal"&gt;
          &lt;h2&gt;Modal Content&lt;/h2&gt;
          &lt;button onClick={closeModal}&gt;Close&lt;/button&gt;
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
}

function DarkModeExample() {
  const [isDark, toggleDarkMode] = useToggle(false);

  return (
    &lt;div style={{ background: isDark ? '#333' : '#fff' }}&gt;
      &lt;button onClick={toggleDarkMode}&gt;
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- useLocalStorage Hook -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">4️⃣ useLocalStorage Hook</h2>
      <p>Persist state in localStorage automatically - perfect for user preferences, settings, and form data.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use default
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error loading \${key} from localStorage:\`, error);
      return initialValue;
    }
  });

  // Update localStorage when value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(\`Error saving \${key} to localStorage:\`, error);
    }
  }, [key, value]);

  return [value, setValue];
}

// Usage Examples
function UserPreferences() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);
  const [language, setLanguage] = useLocalStorage('language', 'en');

  return (
    &lt;div&gt;
      &lt;select value={theme} onChange={(e) => setTheme(e.target.value)}&gt;
        &lt;option value="light"&gt;Light&lt;/option&gt;
        &lt;option value="dark"&gt;Dark&lt;/option&gt;
      &lt;/select&gt;
      
      &lt;input 
        type="number" 
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
      /&gt;
      
      {/* Settings persist across page refreshes! */}
    &lt;/div&gt;
  );
}

function TodoApp() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Todos automatically saved to localStorage! 🎉
  return &lt;div&gt;{/* Todo UI */}&lt;/div&gt;;
}
</code></pre>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin-top: 20px;">
        <strong>💡 Pro Tip:</strong> This hook syncs state with localStorage automatically. Any changes to the state will be persisted and loaded on page refresh!
      </div>
    </section>

    <!-- useFetch Hook -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">5️⃣ useFetch Hook</h2>
      <p>Handle API calls with loading, error, and data states elegantly.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset states when URL changes
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage Examples
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(
    \`https://api.example.com/users/\${userId}\`
  );

  if (loading) return &lt;p&gt;Loading user...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error}&lt;/p&gt;;
  if (!user) return &lt;p&gt;No user found&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;h2&gt;{user.name}&lt;/h2&gt;
      &lt;p&gt;{user.email}&lt;/p&gt;
    &lt;/div&gt;
  );
}

function PostsList() {
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) return &lt;p&gt;Loading posts...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error}&lt;/p&gt;;

  return (
    &lt;ul&gt;
      {posts.map(post => (
        &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
</code></pre>

      <h3 style="margin-top: 30px;">Enhanced useFetch with Refetch</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetchIndex, setRefetchIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url, refetchIndex]);

  const refetch = () => setRefetchIndex(prev => prev + 1);

  return { data, loading, error, refetch };
}

// Usage with refetch
function Posts() {
  const { data, loading, error, refetch } = useFetch('/api/posts');

  return (
    &lt;div&gt;
      &lt;button onClick={refetch}&gt;Refresh Posts&lt;/button&gt;
      {/* Render posts */}
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- useWindowSize Hook -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">6️⃣ useWindowSize Hook</h2>
      <p>Track window dimensions for responsive behavior (perfect for responsive designs without CSS media queries).</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// Usage Examples
function ResponsiveComponent() {
  const { width, height } = useWindowSize();

  return (
    &lt;div&gt;
      &lt;p&gt;Window width: {width}px&lt;/p&gt;
      &lt;p&gt;Window height: {height}px&lt;/p&gt;
      
      {width < 768 ? (
        &lt;MobileMenu /&gt;
      ) : (
        &lt;DesktopMenu /&gt;
      )}
    &lt;/div&gt;
  );
}

function AdaptiveGrid() {
  const { width } = useWindowSize();
  
  // Determine columns based on width
  const columns = width < 640 ? 1 : width < 1024 ? 2 : 3;

  return (
    &lt;div style={{ 
      display: 'grid', 
      gridTemplateColumns: \`repeat(\${columns}, 1fr)\` 
    }}&gt;
      {/* Grid items */}
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- useDebounce Hook -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">7️⃣ useDebounce Hook</h2>
      <p>Delay updating a value until after the user stops typing (essential for search inputs and API calls).</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set timeout to update debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear timeout if value changes (cleanup)
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// Usage: Search with API call
function SearchUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (debouncedSearch) {
      // API call only happens after user stops typing for 500ms
      fetch(\`/api/users?search=\${debouncedSearch}\`)
        .then(res => res.json())
        .then(setResults);
    } else {
      setResults([]);
    }
  }, [debouncedSearch]); // Only runs when debounced value changes

  return (
    &lt;div&gt;
      &lt;input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
      /&gt;
      
      &lt;p&gt;Searching for: {debouncedSearch}&lt;/p&gt;
      
      &lt;ul&gt;
        {results.map(user => (
          &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
</code></pre>

      <div style="background-color: #d4edda; padding: 15px; border-left: 4px solid #28a745; margin-top: 20px;">
        <strong>✅ Performance Win:</strong> Without debounce, typing "react" would make 5 API calls. With debounce, only 1 call is made after the user stops typing!
      </div>
    </section>

    <!-- useOnClickOutside Hook -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">8️⃣ useOnClickOutside Hook</h2>
      <p>Detect clicks outside an element (perfect for closing modals, dropdowns, and menus).</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useEffect, useRef } from 'react';

function useOnClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // If click is outside the ref element, call callback
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
}

// Usage: Dropdown Menu
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useOnClickOutside(() => setIsOpen(false));

  return (
    &lt;div&gt;
      &lt;button onClick={() => setIsOpen(!isOpen)}&gt;
        Menu
      &lt;/button&gt;
      
      {isOpen && (
        &lt;div ref={dropdownRef} className="dropdown-menu"&gt;
          &lt;ul&gt;
            &lt;li&gt;Profile&lt;/li&gt;
            &lt;li&gt;Settings&lt;/li&gt;
            &lt;li&gt;Logout&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
}

// Usage: Modal
function Modal({ onClose }) {
  const modalRef = useOnClickOutside(onClose);

  return (
    &lt;div className="modal-overlay"&gt;
      &lt;div ref={modalRef} className="modal-content"&gt;
        &lt;h2&gt;Modal Title&lt;/h2&gt;
        &lt;p&gt;Click outside to close&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- usePrevious Hook -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">9️⃣ usePrevious Hook</h2>
      <p>Track the previous value of a state or prop (useful for comparisons and animations).</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useEffect, useRef } from 'react';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// Usage Examples
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    &lt;div&gt;
      &lt;p&gt;Current: {count}&lt;/p&gt;
      &lt;p&gt;Previous: {prevCount}&lt;/p&gt;
      
      {count > prevCount && &lt;p style={{ color: 'green' }}&gt;📈 Increased!&lt;/p&gt;}
      {count < prevCount && &lt;p style={{ color: 'red' }}&gt;📉 Decreased!&lt;/p&gt;}
      
      &lt;button onClick={() => setCount(count + 1)}&gt;+&lt;/button&gt;
      &lt;button onClick={() => setCount(count - 1)}&gt;-&lt;/button&gt;
    &lt;/div&gt;
  );
}

function UserProfile({ userId }) {
  const prevUserId = usePrevious(userId);

  useEffect(() => {
    if (prevUserId && prevUserId !== userId) {
      console.log(\`User changed from \${prevUserId} to \${userId}\`);
      // Fetch new user data
    }
  }, [userId, prevUserId]);

  return &lt;div&gt;User: {userId}&lt;/div&gt;;
}
</code></pre>
    </section>

    <!-- useForm Hook -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔟 useForm Hook</h2>
      <p>Manage form state and validation easily without repetitive code.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState } from 'react';

function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    if (validate) {
      const fieldErrors = validate({ ...values, [name]: e.target.value });
      setErrors(fieldErrors);
    }
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      if (Object.keys(validationErrors).length > 0) {
        return; // Don't submit if there are errors
      }
    }

    onSubmit(values);
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset
  };
}

// Usage: Login Form
function LoginForm() {
  const validate = (values) => {
    const errors = {};
    
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    return errors;
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, reset } = useForm(
    { email: '', password: '' },
    validate
  );

  const onSubmit = (formValues) => {
    console.log('Form submitted:', formValues);
    // API call here
    reset();
  };

  return (
    &lt;form onSubmit={handleSubmit(onSubmit)}&gt;
      &lt;div&gt;
        &lt;input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
        /&gt;
        {touched.email && errors.email && (
          &lt;span style={{ color: 'red' }}&gt;{errors.email}&lt;/span&gt;
        )}
      &lt;/div&gt;

      &lt;div&gt;
        &lt;input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
        /&gt;
        {touched.password && errors.password && (
          &lt;span style={{ color: 'red' }}&gt;{errors.password}&lt;/span&gt;
        )}
      &lt;/div&gt;

      &lt;button type="submit"&gt;Login&lt;/button&gt;
      &lt;button type="button" onClick={reset}&gt;Reset&lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>
    </section>

    <!-- Composing Hooks -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣1️⃣ Composing Multiple Hooks</h2>
      <p>You can combine multiple custom hooks to create more powerful functionality.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// useAuth Hook - Combines multiple hooks
function useAuth() {
  const [user, setUser] = useLocalStorage('user', null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      setUser(data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, error, login, logout };
}

// useTheme Hook - Combines localStorage and toggle
function useTheme() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [isDark, , , , toggleTheme] = useToggle(theme === 'dark');

  useEffect(() => {
    setTheme(isDark ? 'dark' : 'light');
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark, setTheme]);

  return { theme, isDark, toggleTheme };
}

// useSearchWithDebounce - Combines debounce and fetch
function useSearchWithDebounce(searchTerm, delay = 500) {
  const debouncedSearch = useDebounce(searchTerm, delay);
  const { data, loading, error } = useFetch(
    debouncedSearch ? \`/api/search?q=\${debouncedSearch}\` : null
  );

  return { results: data, loading, error };
}

// Usage: Complete App
function App() {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const { results, loading } = useSearchWithDebounce(searchTerm);

  return (
    &lt;div className={theme}&gt;
      &lt;button onClick={toggleTheme}&gt;Toggle Theme&lt;/button&gt;
      
      {user ? (
        &lt;div&gt;
          &lt;p&gt;Welcome, {user.name}!&lt;/p&gt;
          &lt;button onClick={logout}&gt;Logout&lt;/button&gt;
        &lt;/div&gt;
      ) : (
        &lt;button onClick={() => login('user@example.com', 'password')}&gt;
          Login
        &lt;/button&gt;
      )}

      &lt;input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      /&gt;
      
      {loading && &lt;p&gt;Searching...&lt;/p&gt;}
      {results && results.map(item => &lt;div key={item.id}&gt;{item.name}&lt;/div&gt;)}
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- Advanced Pattern: useAsync -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣2️⃣ Advanced Pattern: useAsync</h2>
      <p>A generic hook to handle any async operation with loading and error states.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useEffect, useCallback } from 'react';

function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Execute the async function
  const execute = useCallback(async (...params) => {
    setStatus('pending');
    setData(null);
    setError(null);

    try {
      const response = await asyncFunction(...params);
      setData(response);
      setStatus('success');
      return response;
    } catch (error) {
      setError(error);
      setStatus('error');
      throw error;
    }
  }, [asyncFunction]);

  // Execute on mount if immediate is true
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    execute,
    status,
    data,
    error,
    isIdle: status === 'idle',
    isPending: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error'
  };
}

// Usage Examples
function UserProfile({ userId }) {
  const fetchUser = async () => {
    const response = await fetch(\`/api/users/\${userId}\`);
    return response.json();
  };

  const { data: user, isPending, isError, error, execute } = useAsync(
    fetchUser,
    true // Run immediately
  );

  if (isPending) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (isError) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;h2&gt;{user?.name}&lt;/h2&gt;
      &lt;button onClick={execute}&gt;Refresh&lt;/button&gt;
    &lt;/div&gt;
  );
}

function FileUpload() {
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    return response.json();
  };

  const { execute, isPending, isSuccess } = useAsync(uploadFile, false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      execute(file);
    }
  };

  return (
    &lt;div&gt;
      &lt;input type="file" onChange={handleFileChange} disabled={isPending} /&gt;
      {isPending && &lt;p&gt;Uploading...&lt;/p&gt;}
      {isSuccess && &lt;p&gt;✅ Upload successful!&lt;/p&gt;}
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- useInterval Hook -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣3️⃣ useInterval Hook</h2>
      <p>Run code repeatedly at specified intervals (perfect for timers, polling, and real-time updates).</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (delay === null) return;

    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

// Usage: Timer/Clock
function Clock() {
  const [time, setTime] = useState(new Date());

  useInterval(() => {
    setTime(new Date());
  }, 1000); // Update every second

  return (
    &lt;div&gt;
      &lt;h2&gt;{time.toLocaleTimeString()}&lt;/h2&gt;
    &lt;/div&gt;
  );
}

// Usage: Countdown Timer
function CountdownTimer({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(
    () => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setIsRunning(false);
      }
    },
    isRunning ? 1000 : null // Pass null to pause
  );

  return (
    &lt;div&gt;
      &lt;h2&gt;{seconds} seconds&lt;/h2&gt;
      &lt;button onClick={() => setIsRunning(!isRunning)}&gt;
        {isRunning ? 'Pause' : 'Start'}
      &lt;/button&gt;
      &lt;button onClick={() => setSeconds(initialSeconds)}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}

// Usage: Auto-refresh Data
function LiveFeed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('/api/posts/latest');
    const data = await response.json();
    setPosts(data);
  };

  // Fetch immediately
  useEffect(() => {
    fetchPosts();
  }, []);

  // Auto-refresh every 30 seconds
  useInterval(() => {
    fetchPosts();
  }, 30000);

  return (
    &lt;div&gt;
      &lt;h2&gt;Live Feed (auto-refreshes)&lt;/h2&gt;
      {posts.map(post => (
        &lt;div key={post.id}&gt;{post.title}&lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}
</code></pre>
    </section>

    <!-- Best Practices -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣4️⃣ Best Practices for Custom Hooks</h2>

      <div style="background-color: #d4edda; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="color: #0073b1; margin-bottom: 15px;">✅ Do's:</h4>
        <ul style="line-height: 2;">
          <li><strong>Name with "use" prefix:</strong> useFetch, useAuth, useForm (required by React)</li>
          <li><strong>Keep hooks focused:</strong> Each hook should do one thing well</li>
          <li><strong>Return what's needed:</strong> Don't expose unnecessary internals</li>
          <li><strong>Use TypeScript:</strong> Add types for better developer experience</li>
          <li><strong>Handle cleanup:</strong> Always clean up side effects (listeners, timers)</li>
          <li><strong>Make hooks reusable:</strong> Accept parameters for flexibility</li>
          <li><strong>Document your hooks:</strong> Add JSDoc comments explaining usage</li>
          <li><strong>Test hooks:</strong> Use React Testing Library's renderHook</li>
        </ul>
      </div>

      <div style="background-color: #f8d7da; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="color: #d93025; margin-bottom: 15px;">❌ Don'ts:</h4>
        <ul style="line-height: 2;">
          <li><strong>Don't call hooks conditionally:</strong> Always at top level</li>
          <li><strong>Don't make hooks too complex:</strong> Split into smaller hooks</li>
          <li><strong>Don't return too many values:</strong> Keep return values manageable</li>
          <li><strong>Don't forget dependencies:</strong> Add all deps to useEffect/useCallback</li>
          <li><strong>Don't mutate state directly:</strong> Always use setState functions</li>
          <li><strong>Don't create hooks for everything:</strong> Simple logic can stay in components</li>
        </ul>
      </div>

      <h3 style="margin-top: 30px;">Example: Well-Documented Hook</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>/**
 * Custom hook for managing pagination state
 * 
 * @param {number} initialPage - Starting page number (default: 1)
 * @param {number} itemsPerPage - Items to show per page (default: 10)
 * @returns {Object} Pagination state and controls
 * @returns {number} returns.currentPage - Current page number
 * @returns {number} returns.itemsPerPage - Items per page
 * @returns {Function} returns.nextPage - Go to next page
 * @returns {Function} returns.prevPage - Go to previous page
 * @returns {Function} returns.goToPage - Go to specific page
 * @returns {Function} returns.setItemsPerPage - Change items per page
 * 
 * @example
 * const { currentPage, nextPage, prevPage } = usePagination(1, 20);
 */
function usePagination(initialPage = 1, initialItemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => Math.max(1, prev - 1));
  const goToPage = (page) => setCurrentPage(Math.max(1, page));

  return {
    currentPage,
    itemsPerPage,
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage
  };
}
</code></pre>
    </section>

    <!-- Testing Custom Hooks -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣5️⃣ Testing Custom Hooks</h2>
      <p>Learn how to test your custom hooks using React Testing Library.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('should initialize with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test('should initialize with custom value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });

  test('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(5));
    
    act(() => {
      result.current.decrement();
    });
    
    expect(result.current.count).toBe(4);
  });

  test('should reset to initial value', () => {
    const { result } = renderHook(() => useCounter(10));
    
    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.reset();
    });
    
    expect(result.current.count).toBe(10);
  });
});

// Testing async hooks
import { useAsync } from './useAsync';

describe('useAsync', () => {
  test('should handle successful async operation', async () => {
    const asyncFn = jest.fn().mockResolvedValue('success');
    const { result, waitForNextUpdate } = renderHook(() => 
      useAsync(asyncFn, true)
    );

    expect(result.current.isPending).toBe(true);
    
    await waitForNextUpdate();
    
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toBe('success');
  });

  test('should handle error', async () => {
    const asyncFn = jest.fn().mockRejectedValue(new Error('Failed'));
    const { result, waitForNextUpdate } = renderHook(() => 
      useAsync(asyncFn, true)
    );

    await waitForNextUpdate();
    
    expect(result.current.isError).toBe(true);
    expect(result.current.error.message).toBe('Failed');
  });
});
</code></pre>
    </section>

    <!-- Creating a Custom Hook Library -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣6️⃣ Building Your Hook Library</h2>
      <p>Organize your custom hooks into a reusable library for your projects.</p>

      <h3 style="margin-top: 30px;">Project Structure</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>src/
├── hooks/
│   ├── index.js              # Export all hooks
│   ├── useCounter.js
│   ├── useToggle.js
│   ├── useLocalStorage.js
│   ├── useFetch.js
│   ├── useDebounce.js
│   ├── useWindowSize.js
│   ├── useOnClickOutside.js
│   ├── usePrevious.js
│   ├── useForm.js
│   ├── useAsync.js
│   └── useInterval.js
├── components/
└── App.js
</code></pre>

      <h3 style="margin-top: 30px;">hooks/index.js - Central Export</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// Export all hooks from one place
export { useCounter } from './useCounter';
export { useToggle } from './useToggle';
export { useLocalStorage } from './useLocalStorage';
export { useFetch } from './useFetch';
export { useDebounce } from './useDebounce';
export { useWindowSize } from './useWindowSize';
export { useOnClickOutside } from './useOnClickOutside';
export { usePrevious } from './usePrevious';
export { useForm } from './useForm';
export { useAsync } from './useAsync';
export { useInterval } from './useInterval';

// Usage in components
import { useCounter, useToggle, useFetch } from './hooks';
</code></pre>

      <h3 style="margin-top: 30px;">Creating a README for Your Hooks</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code># Custom React Hooks Library

## Installation
\`\`\`bash
# Copy hooks folder to your project
\`\`\`

## Available Hooks

### useCounter
Manage counter state with increment, decrement, and reset.

\`\`\`jsx
const { count, increment, decrement, reset } = useCounter(0);
\`\`\`

### useToggle
Toggle boolean states easily.

\`\`\`jsx
const [isOpen, toggle, open, close] = useToggle(false);
\`\`\`

### useLocalStorage
Persist state in localStorage automatically.

\`\`\`jsx
const [theme, setTheme] = useLocalStorage('theme', 'light');
\`\`\`

### useFetch
Handle API calls with loading and error states.

\`\`\`jsx
const { data, loading, error, refetch } = useFetch('/api/users');
\`\`\`

// ... more hooks
</code></pre>
    </section>

    <!-- Practice Tasks -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Tasks 🎯</h2>
      
      <div style="background-color: #fff9e6; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 20px;">
        <h3 style="color: #0073b1; margin-bottom: 15px;">Task 1: Build useMousePosition Hook 🖱️</h3>
        <p><strong>Requirements:</strong></p>
        <ul style="line-height: 1.8;">
          <li>Track mouse X and Y coordinates</li>
          <li>Update position on mouse move</li>
          <li>Clean up event listener on unmount</li>
          <li>Use it to create a component that follows the mouse</li>
        </ul>
        <p><strong>Bonus:</strong> Add throttling to improve performance</p>
      </div>

      <div style="background-color: #fff9e6; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 20px;">
        <h3 style="color: #0073b1; margin-bottom: 15px;">Task 2: Create useMediaQuery Hook 📱</h3>
        <p><strong>Requirements:</strong></p>
        <ul style="line-height: 1.8;">
          <li>Accept a media query string (e.g., "(min-width: 768px)")</li>
          <li>Return boolean indicating if query matches</li>
          <li>Update when window resizes</li>
          <li>Use it to build a responsive navigation component</li>
        </ul>
        <p><strong>Example Usage:</strong></p>
        <pre style="background-color:#f3f4f6; padding:10px; border-radius:4px; margin-top:10px;"><code>const isMobile = useMediaQuery('(max-width: 768px)');
return isMobile ? &lt;MobileNav /&gt; : &lt;DesktopNav /&gt;;
</code></pre>
      </div>

      <div style="background-color: #fff9e6; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 20px;">
        <h3 style="color: #0073b1; margin-bottom: 15px;">Task 3: Build useCopyToClipboard Hook 📋</h3>
        <p><strong>Requirements:</strong></p>
        <ul style="line-height: 1.8;">
          <li>Copy text to clipboard</li>
          <li>Return copied state and copy function</li>
          <li>Show success feedback for 2 seconds</li>
          <li>Handle errors gracefully</li>
        </ul>
        <p><strong>Example Usage:</strong></p>
        <pre style="background-color:#f3f4f6; padding:10px; border-radius:4px; margin-top:10px;"><code>const { copied, copy } = useCopyToClipboard();
&lt;button onClick={() => copy('Hello World')}&gt;
  {copied ? 'Copied!' : 'Copy'}
&lt;/button&gt;
</code></pre>
      </div>

      <div style="background-color: #fff9e6; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 20px;">
        <h3 style="color: #0073b1; margin-bottom: 15px;">Task 4: Create useIntersectionObserver Hook 👁️</h3>
        <p><strong>Requirements:</strong></p>
        <ul style="line-height: 1.8;">
          <li>Detect when element enters viewport</li>
          <li>Accept threshold and root margin options</li>
          <li>Return ref and isIntersecting state</li>
          <li>Use it to implement lazy loading images</li>
        </ul>
        <p><strong>Use Case:</strong> Infinite scroll, lazy loading, animations on scroll</p>
      </div>

      <div style="background-color: #fff9e6; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 20px;">
        <h3 style="color: #0073b1; margin-bottom: 15px;">Task 5: Build useTimeout Hook ⏱️</h3>
        <p><strong>Requirements:</strong></p>
        <ul style="line-height: 1.8;">
          <li>Execute callback after specified delay</li>
          <li>Return reset and cancel functions</li>
          <li>Clean up timeout on unmount</li>
          <li>Allow dynamic delay changes</li>
        </ul>
        <p><strong>Example Usage:</strong></p>
        <pre style="background-color:#f3f4f6; padding:10px; border-radius:4px; margin-top:10px;"><code>const { reset, cancel } = useTimeout(() => {
  console.log('Executed after 5 seconds');
}, 5000);
</code></pre>
      </div>

      <div style="background-color: #e6f7ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0073b1; margin-bottom: 20px;">
        <h3 style="color: #0073b1; margin-bottom: 15px;">Task 6: Advanced - Shopping Cart with Custom Hooks 🛒</h3>
        <p><strong>Build a complete shopping cart using these custom hooks:</strong></p>
        <ul style="line-height: 1.8;">
          <li><strong>useCart:</strong> Manage cart items (add, remove, update quantity)</li>
          <li><strong>useLocalStorage:</strong> Persist cart data</li>
          <li><strong>useTotal:</strong> Calculate total price</li>
          <li><strong>useDiscount:</strong> Apply discount codes</li>
        </ul>
        <p><strong>Features to implement:</strong></p>
        <ul style="line-height: 1.8;">
          <li>Add/remove products from cart</li>
          <li>Update quantities</li>
          <li>Calculate subtotal and total with discount</li>
          <li>Persist cart across page refreshes</li>
          <li>Show cart badge with item count</li>
        </ul>
      </div>

      <div style="background-color: #e6f7ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0073b1; margin-bottom: 20px;">
        <h3 style="color: #0073b1; margin-bottom: 15px;">Task 7: Advanced - Real-Time Dashboard 📊</h3>
        <p><strong>Build a dashboard using:</strong></p>
        <ul style="line-height: 1.8;">
          <li><strong>useFetch:</strong> Get initial data</li>
          <li><strong>useInterval:</strong> Poll for updates every 10 seconds</li>
          <li><strong>useWebSocket:</strong> Real-time updates (create this hook)</li>
          <li><strong>useLocalStorage:</strong> Save user preferences</li>
        </ul>
        <p><strong>Dashboard should include:</strong></p>
        <ul style="line-height: 1.8;">
          <li>Live metrics (users online, sales, etc.)</li>
          <li>Auto-refresh data</li>
          <li>Loading and error states</li>
          <li>Customizable refresh interval</li>
        </ul>
      </div>

      <div style="background-color: #e6f7ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0073b1;">
        <h3 style="color: #0073b1; margin-bottom: 15px;">Task 8: Bonus - Create Your Own Hook Library 📚</h3>
        <p><strong>Build a collection of 10+ custom hooks:</strong></p>
        <ul style="line-height: 1.8;">
          <li>Organize them in a proper folder structure</li>
          <li>Write documentation for each hook</li>
          <li>Add TypeScript types</li>
          <li>Create example components for each hook</li>
          <li>Publish to npm (optional)</li>
        </ul>
        <p><strong>Suggested hooks to add:</strong></p>
        <ul style="line-height: 1.8;">
          <li>useKeyPress - Detect specific key presses</li>
          <li>useIdle - Detect user inactivity</li>
          <li>useGeolocation - Get user location</li>
          <li>useOnlineStatus - Detect online/offline</li>
          <li>useScript - Dynamically load external scripts</li>
        </ul>
      </div>
    </section>

    <!-- Summary -->
    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary ✨</h2>
      <ul style="font-size: 1.05rem; line-height: 1.8;">
        <li>✅ Custom Hooks extract reusable logic from components</li>
        <li>✅ Must start with "use" prefix and follow Hook rules</li>
        <li>✅ Can use other Hooks inside (useState, useEffect, etc.)</li>
        <li>✅ Return state and functions that components need</li>
        <li>✅ Keep hooks focused on a single responsibility</li>
        <li>✅ Compose multiple hooks for complex functionality</li>
        <li>✅ Always clean up side effects (listeners, timers, etc.)</li>
        <li>✅ Test hooks independently from components</li>
        <li>✅ Document hooks with JSDoc for better DX</li>
        <li>✅ Build a library of reusable hooks for your projects</li>
        <li>✅ Custom Hooks = Cleaner Code + Better Reusability + Easier Testing</li>
      </ul>

      <div style="background-color: #d4edda; padding: 20px; border-radius: 8px; margin-top: 30px; border-left: 4px solid #28a745;">
        <h4 style="color: #0073b1; margin-bottom: 15px;">🎓 Key Takeaway:</h4>
        <p style="font-size: 1.1rem; line-height: 1.6;">
          Custom Hooks are one of React's most powerful features. They allow you to write logic once and use it everywhere, making your codebase more maintainable, testable, and scalable. Master custom hooks, and you'll write cleaner, more professional React code!
        </p>
      </div>
    </section>

  </div>
  `,
  duration: '60 min',
  order: 11,
  tags: ['react', 'custom-hooks', 'hooks', 'reusability', 'advanced', 'state-management', 'composition']
}
,
{
  id: '12',
  title: 'React Router DOM v6',
  description: 'Learn React Router DOM v6. Master routing, navigation, nested routes, dynamic routes, protected routes, and loaders for building multi-page React applications.',
  slug: 'react-router-dom-v6',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">12 : React Router DOM v6 📚</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, we will focus on <strong style="color:#d93025;">react-router-dom version 6.14</strong>. Learn how to implement routing and navigation in React applications with modern best practices. 🚀💻🌟
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Installation & Setup -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣ Installation & Setup</h2>
      <p>First, install React Router DOM in your project:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>npm install react-router-dom@6.14</code></pre>
      
      <p style="margin-top: 20px;">Set up the router in your main App component:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}

export default App;</code></pre>
      <ul>
        <li><code>BrowserRouter</code> wraps your entire app for routing.</li>
        <li><code>Routes</code> contains all route definitions.</li>
        <li><code>Route</code> defines a path and its corresponding component.</li>
      </ul>
    </section>

    <!-- Basic Routes -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">2️⃣ Creating Basic Routes</h2>
      <p>Create simple page components:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// pages/Home.jsx
export default function Home() {
  return &lt;h1&gt;Welcome to Home Page 🏠&lt;/h1&gt;;
}

// pages/About.jsx
export default function About() {
  return &lt;h1&gt;About Us Page ℹ️&lt;/h1&gt;;
}

// pages/Contact.jsx
export default function Contact() {
  return &lt;h1&gt;Contact Us 📞&lt;/h1&gt;;
}</code></pre>

      <p style="margin-top: 20px;">Add routes in App.jsx:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>&lt;Routes&gt;
  &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
  &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
  &lt;Route path="/contact" element={&lt;Contact /&gt;} /&gt;
&lt;/Routes&gt;</code></pre>
    </section>

    <!-- Link & NavLink -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">3️⃣ Navigation with Link & NavLink</h2>
      <p><code>Link</code> is used for navigation without page reload:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { Link } from 'react-router-dom';

function Navbar() {
  return (
    &lt;nav&gt;
      &lt;Link to="/"&gt;Home&lt;/Link&gt;
      &lt;Link to="/about"&gt;About&lt;/Link&gt;
      &lt;Link to="/contact"&gt;Contact&lt;/Link&gt;
    &lt;/nav&gt;
  );
}</code></pre>

      <p style="margin-top: 20px;"><code>NavLink</code> adds active styling automatically:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    &lt;nav&gt;
      &lt;NavLink 
        to="/" 
        style={({ isActive }) =&gt; ({ color: isActive ? 'blue' : 'black' })}
      &gt;
        Home
      &lt;/NavLink&gt;
      &lt;NavLink 
        to="/about"
        className={({ isActive }) =&gt; isActive ? 'active' : ''}
      &gt;
        About
      &lt;/NavLink&gt;
    &lt;/nav&gt;
  );
}</code></pre>
      <ul>
        <li><code>Link</code> - Basic navigation without page refresh.</li>
        <li><code>NavLink</code> - Adds <code>isActive</code> prop for styling active links.</li>
      </ul>
    </section>

    <!-- Nested Routes & Outlet -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">4️⃣ Nested Routes with Outlet</h2>
      <p>Create nested routes for better organization:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { Outlet, Link } from 'react-router-dom';

// Layout component
function Dashboard() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Dashboard&lt;/h1&gt;
      &lt;nav&gt;
        &lt;Link to="profile"&gt;Profile&lt;/Link&gt;
        &lt;Link to="settings"&gt;Settings&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;Outlet /&gt; {/* Child routes render here */}
    &lt;/div&gt;
  );
}</code></pre>

      <p style="margin-top: 20px;">Configure nested routes:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>&lt;Routes&gt;
  &lt;Route path="dashboard" element={&lt;Dashboard /&gt;}&gt;
    &lt;Route path="profile" element={&lt;Profile /&gt;} /&gt;
    &lt;Route path="settings" element={&lt;Settings /&gt;} /&gt;
  &lt;/Route&gt;
&lt;/Routes&gt;</code></pre>
      <ul>
        <li><code>Outlet</code> - Renders child route components.</li>
        <li>Parent route acts as a layout wrapper.</li>
        <li>Child routes nested inside parent route definition.</li>
      </ul>
    </section>

    <!-- Dynamic Routes -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">5️⃣ Dynamic Routes with useParams</h2>
      <p>Handle dynamic path variables:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  
  return &lt;h1&gt;User Profile: {userId}&lt;/h1&gt;;
}

// In App.jsx
&lt;Route path="/user/:userId" element={&lt;UserProfile /&gt;} /&gt;</code></pre>

      <p style="margin-top: 20px;">Example with multiple parameters:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>function BlogPost() {
  const { category, postId } = useParams();
  
  return (
    &lt;div&gt;
      &lt;h2&gt;Category: {category}&lt;/h2&gt;
      &lt;p&gt;Post ID: {postId}&lt;/p&gt;
    &lt;/div&gt;
  );
}

// Route definition
&lt;Route path="/blog/:category/:postId" element={&lt;BlogPost /&gt;} /&gt;</code></pre>
    </section>

    <!-- Protected Routes -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">6️⃣ Protected Routes (Authentication)</h2>
      <p>Create a wrapper to protect routes:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Check auth status
  
  return isAuthenticated ? children : &lt;Navigate to="/login" /&gt;;
}

// Usage
&lt;Route 
  path="/dashboard" 
  element={
    &lt;ProtectedRoute&gt;
      &lt;Dashboard /&gt;
    &lt;/ProtectedRoute&gt;
  } 
/&gt;</code></pre>
    </section>

    <!-- useNavigate -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">7️⃣ Programmatic Navigation with useNavigate</h2>
      <p>Navigate programmatically after form submission or user actions:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    // After successful login
    navigate('/dashboard');
  };
  
  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;button type="submit"&gt;Login&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
    </section>

    <!-- 404 Page -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">8️⃣ 404 Not Found Page</h2>
      <p>Handle unknown routes with a catch-all route:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>function NotFound() {
  return &lt;h1&gt;404 - Page Not Found 🚫&lt;/h1&gt;;
}

// Add at the end of Routes
&lt;Route path="*" element={&lt;NotFound /&gt;} /&gt;</code></pre>
    </section>

    <!-- Loader Functions -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">9️⃣ Loaders for Data Fetching</h2>
      <p>Use loaders to fetch data before rendering a route:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useLoaderData, createBrowserRouter, RouterProvider } from 'react-router-dom';

// Loader function
async function productsLoader() {
  const response = await fetch('https://api.example.com/products');
  return response.json();
}

// Component
function Products() {
  const products = useLoaderData();
  
  return (
    &lt;div&gt;
      {products.map(product =&gt; (
        &lt;p key={product.id}&gt;{product.name}&lt;/p&gt;
      ))}
    &lt;/div&gt;
  );
}

// Router configuration
const router = createBrowserRouter([
  {
    path: '/products',
    element: &lt;Products /&gt;,
    loader: productsLoader
  }
]);

function App() {
  return &lt;RouterProvider router={router} /&gt;;
}</code></pre>
    </section>

    <!-- Practice Task -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Create a <strong>Simple E-commerce App</strong> with the following routes:</p>
      <ul style="line-height: 1.6;">
        <li>Home page (<code>/</code>)</li>
        <li>Products page (<code>/products</code>)</li>
        <li>Product detail page (<code>/products/:id</code>)</li>
        <li>Cart page (<code>/cart</code>)</li>
        <li>404 page for invalid routes</li>
      </ul>
      <p>2️⃣ Create a <strong>Navbar</strong> component with <code>NavLink</code> for navigation.</p>
      <p>3️⃣ Use <strong>useParams</strong> in the product detail page to display the product ID.</p>
      <p>4️⃣ Add a <strong>nested route</strong> for user dashboard with Profile and Orders pages.</p>
      <p>5️⃣ Bonus: Implement a protected route that redirects to login if not authenticated.</p>
    </section>

    <!-- Summary -->
    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ React Router DOM enables client-side routing in React apps.</li>
        <li>✅ Use <code>BrowserRouter</code>, <code>Routes</code>, and <code>Route</code> for setup.</li>
        <li>✅ <code>Link</code> and <code>NavLink</code> provide navigation without page reload.</li>
        <li>✅ <code>Outlet</code> renders nested child routes.</li>
        <li>✅ <code>useParams</code> accesses dynamic route parameters.</li>
        <li>✅ <code>useNavigate</code> enables programmatic navigation.</li>
        <li>✅ Protect routes with custom wrapper components.</li>
        <li>✅ Use loaders to fetch data before rendering routes.</li>
      </ul>
    </section>

  </div>
  `,
  duration: '45 min',
  order: 12,
  tags: ['react', 'router', 'routing', 'navigation', 'react-router-dom', 'spa', 'nested-routes']
},
{
  id: '13',
  title: 'React Performance and Advanced Hooks',
  description: 'Learn how to leverage the power of useMemo, useCallback, useId, useTransition and useDeferredValue hooks to optimize performance, enhance memoization, and manage unique identifiers.',
  slug: 'react-performance-advanced-hooks',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">13 : React Performance & Advanced Hooks ⚡</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Learn how to leverage the power of <strong style="color:#d93025;">useMemo</strong>, <strong style="color:#d93025;">useCallback</strong>, <strong style="color:#d93025;">useId</strong>, <strong style="color:#d93025;">useTransition</strong> and <strong style="color:#d93025;">useDeferredValue</strong> hooks to optimize performance and enhance your React applications. 🚀
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- useMemo -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣ useMemo - Memoize Expensive Calculations</h2>
      <p><code>useMemo</code> caches the result of a calculation and only recalculates when dependencies change.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // This calculation only runs when 'count' changes
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += count;
    }
    return result;
  }, [count]);

  return (
    &lt;div&gt;
      &lt;h2&gt;Result: {expensiveCalculation}&lt;/h2&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
      &lt;input value={input} onChange={(e) =&gt; setInput(e.target.value)} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
      <ul>
        <li>Prevents re-running expensive calculations on every render.</li>
        <li>Only recalculates when dependencies in the array change.</li>
        <li>Typing in input won't trigger calculation, only count change will.</li>
      </ul>
    </section>

    <!-- useCallback -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">2️⃣ useCallback - Memoize Functions</h2>
      <p><code>useCallback</code> returns a memoized version of a function that only changes when dependencies change.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // This function is memoized
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    setCount(count + 1);
  }, [count]);

  return (
    &lt;div&gt;
      &lt;h2&gt;Count: {count}&lt;/h2&gt;
      &lt;Child onClick={handleClick} /&gt;
      &lt;input value={input} onChange={(e) =&gt; setInput(e.target.value)} /&gt;
    &lt;/div&gt;
  );
}

function Child({ onClick }) {
  console.log('Child rendered');
  return &lt;button onClick={onClick}&gt;Click Me&lt;/button&gt;;
}</code></pre>
      <ul>
        <li>Prevents unnecessary re-creation of functions.</li>
        <li>Useful when passing callbacks to child components.</li>
        <li>Child component won't re-render if function reference doesn't change.</li>
      </ul>
    </section>

    <!-- useId -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">3️⃣ useId - Generate Unique IDs</h2>
      <p><code>useId</code> generates unique IDs for accessibility attributes like htmlFor and aria-describedby.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useId } from 'react';

function NameForm() {
  const nameId = useId();
  const emailId = useId();

  return (
    &lt;form&gt;
      &lt;div&gt;
        &lt;label htmlFor={nameId}&gt;Name:&lt;/label&gt;
        &lt;input id={nameId} type="text" /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label htmlFor={emailId}&gt;Email:&lt;/label&gt;
        &lt;input id={emailId} type="email" /&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  );
}</code></pre>
      <ul>
        <li>Generates stable, unique IDs across server and client.</li>
        <li>Essential for accessibility (connecting labels to inputs).</li>
        <li>IDs remain consistent during hydration.</li>
      </ul>
    </section>

    <!-- useTransition -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">4️⃣ useTransition - Mark Updates as Non-Urgent</h2>
      <p><code>useTransition</code> lets you mark certain state updates as non-urgent, keeping UI responsive.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useTransition } from 'react';

function SearchApp() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);
    
    // Mark this update as low priority
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < 10000; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  };

  return (
    &lt;div&gt;
      &lt;input value={input} onChange={handleChange} /&gt;
      {isPending ? &lt;p&gt;Loading...&lt;/p&gt; : &lt;ul&gt;{list.map((item, i) =&gt; &lt;li key={i}&gt;{item}&lt;/li&gt;)}&lt;/ul&gt;}
    &lt;/div&gt;
  );
}</code></pre>
      <ul>
        <li><code>isPending</code> - Boolean indicating if transition is in progress.</li>
        <li><code>startTransition</code> - Function to mark updates as non-urgent.</li>
        <li>Input remains responsive while heavy updates happen in background.</li>
      </ul>
    </section>

    <!-- useDeferredValue -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">5️⃣ useDeferredValue - Defer Rendering</h2>
      <p><code>useDeferredValue</code> defers updating a value to keep UI responsive during heavy renders.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useState, useDeferredValue } from 'react';

function SearchResults() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    &lt;div&gt;
      &lt;input value={query} onChange={(e) =&gt; setQuery(e.target.value)} placeholder="Search..." /&gt;
      &lt;SlowList query={deferredQuery} /&gt;
    &lt;/div&gt;
  );
}

function SlowList({ query }) {
  // Simulate slow rendering
  const items = [];
  for (let i = 0; i < 5000; i++) {
    items.push(&lt;li key={i}&gt;{query} - Result {i}&lt;/li&gt;);
  }
  return &lt;ul&gt;{items}&lt;/ul&gt;;
}</code></pre>
      <ul>
        <li>Input updates immediately while heavy list updates are deferred.</li>
        <li>Similar to debouncing but built into React.</li>
        <li>UI stays responsive during expensive renders.</li>
      </ul>
    </section>

    <!-- When to Use What -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">6️⃣ When to Use Each Hook?</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Hook</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;"><code>useMemo</code></td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Cache expensive calculations</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;"><code>useCallback</code></td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Memoize functions passed to child components</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;"><code>useId</code></td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Generate unique IDs for accessibility</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;"><code>useTransition</code></td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Mark state updates as low priority</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;"><code>useDeferredValue</code></td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Defer value updates during heavy renders</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Practice Task -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Create a <strong>Search Filter App</strong> with a large list of items (10,000+).</p>
      <p>2️⃣ Use <strong>useDeferredValue</strong> to keep the input field responsive while filtering.</p>
      <p>3️⃣ Add a <strong>counter</strong> that increments on button click.</p>
      <p>4️⃣ Use <strong>useMemo</strong> to calculate the sum of all filtered items.</p>
      <p>5️⃣ Use <strong>useCallback</strong> to memoize the filter function.</p>
      <p>6️⃣ Bonus: Use <strong>useId</strong> for form labels in a filter settings panel.</p>
    </section>

    <!-- Summary -->
    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ <code>useMemo</code> - Caches expensive calculations to avoid re-computing.</li>
        <li>✅ <code>useCallback</code> - Memoizes functions to prevent re-creation.</li>
        <li>✅ <code>useId</code> - Generates unique IDs for accessibility.</li>
        <li>✅ <code>useTransition</code> - Marks updates as non-urgent for better UX.</li>
        <li>✅ <code>useDeferredValue</code> - Defers value updates during heavy renders.</li>
        <li>✅ These hooks help optimize React performance significantly.</li>
      </ul>
    </section>

  </div>
  `,
  duration: '30 min',
  order: 13,
  tags: ['react', 'performance', 'hooks', 'useMemo', 'useCallback', 'useId', 'useTransition', 'useDeferredValue', 'optimization']
},
{
  id: '14',
  title: 'Redux and Redux Toolkit',
  description: 'Dive into the powerful world of Redux and Redux Toolkit. Learn state management, actions, reducers, store configuration, and best practices for handling complex state in React applications.',
  slug: 'redux-redux-toolkit',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">14 : Redux & Redux Toolkit 🔄</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this module, we will dive into the powerful world of <strong style="color:#d93025;">Redux and Redux Toolkit</strong>, a state management library for React applications. Learn how to manage complex state, handle actions, reducers, and store configuration effectively. 🚀💡💻
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- What is Redux -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">1️⃣ What is Redux?</h2>
      <p>Redux is a <strong>predictable state container</strong> for JavaScript applications. It helps manage global state in large applications.</p>
      <ul>
        <li><strong>Centralized Store</strong> - All state in one place</li>
        <li><strong>Predictable</strong> - State changes follow strict patterns</li>
        <li><strong>Debuggable</strong> - Time-travel debugging with Redux DevTools</li>
        <li><strong>Flexible</strong> - Works with any UI framework</li>
      </ul>
      <p style="margin-top: 20px;"><strong>Core Concepts:</strong></p>
      <ul>
        <li><code>Store</code> - Holds the entire state of your application</li>
        <li><code>Actions</code> - Objects that describe what happened</li>
        <li><code>Reducers</code> - Functions that specify how state changes</li>
        <li><code>Dispatch</code> - Method to send actions to the store</li>
      </ul>
    </section>

    <!-- Installation -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">2️⃣ Installation & Setup</h2>
      <p>Install Redux Toolkit and React-Redux:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>npm install @reduxjs/toolkit react-redux</code></pre>
      <ul>
        <li><code>@reduxjs/toolkit</code> - Modern Redux with less boilerplate</li>
        <li><code>react-redux</code> - React bindings for Redux</li>
      </ul>
    </section>

    <!-- Creating a Store -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">3️⃣ Creating a Redux Store</h2>
      <p>Create a store using Redux Toolkit:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;</code></pre>
    </section>

    <!-- Provider Setup -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">4️⃣ Providing Store to React App</h2>
      <p>Wrap your app with the Redux Provider:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  &lt;Provider store={store}&gt;
    &lt;App /&gt;
  &lt;/Provider&gt;
);</code></pre>
    </section>

    <!-- Creating a Slice -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">5️⃣ Creating a Slice (Reducer + Actions)</h2>
      <p>Use <code>createSlice</code> to create reducers and actions together:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;</code></pre>
      <ul>
        <li><code>name</code> - Unique identifier for the slice</li>
        <li><code>initialState</code> - Default state value</li>
        <li><code>reducers</code> - Functions that modify state</li>
        <li>Actions are automatically generated</li>
      </ul>
    </section>

    <!-- Using Redux in Components -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">6️⃣ Using Redux in Components</h2>
      <p>Use <code>useSelector</code> to read state and <code>useDispatch</code> to dispatch actions:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './store/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; dispatch(increment())}&gt;Increment&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(decrement())}&gt;Decrement&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(incrementByAmount(5))}&gt;Add 5&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(reset())}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      <ul>
        <li><code>useSelector</code> - Access state from Redux store</li>
        <li><code>useDispatch</code> - Get dispatch function to send actions</li>
        <li>Component re-renders when selected state changes</li>
      </ul>
    </section>

    <!-- Multiple Slices -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">7️⃣ Managing Multiple Slices</h2>
      <p>Create multiple slices for different features:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.name = '';
      state.email = '';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;</code></pre>

      <p style="margin-top: 20px;">Add multiple reducers to the store:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export default store;</code></pre>
    </section>

    <!-- Async Actions with createAsyncThunk -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">8️⃣ Async Actions with createAsyncThunk</h2>
      <p>Handle API calls and async operations:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;</code></pre>

      <p style="margin-top: 20px;">Using async thunk in component:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './store/usersSlice';

function UsersList() {
  const { data, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error}&lt;/p&gt;;

  return (
    &lt;ul&gt;
      {data.map((user) => (
        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
    </section>

    <!-- Redux DevTools -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">9️⃣ Redux DevTools</h2>
      <p>Redux Toolkit automatically enables Redux DevTools for debugging:</p>
      <ul>
        <li>Install Redux DevTools extension in your browser</li>
        <li>Inspect state changes in real-time</li>
        <li>Time-travel debugging (undo/redo actions)</li>
        <li>View action history and state diff</li>
      </ul>
      <p style="margin-top: 15px;">DevTools are automatically configured with <code>configureStore</code> - no extra setup needed!</p>
    </section>

    <!-- Best Practices -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔟 Redux Best Practices</h2>
      <ul style="line-height: 1.8;">
        <li>✅ Use Redux Toolkit instead of plain Redux (less boilerplate)</li>
        <li>✅ Organize code by features (feature-based folder structure)</li>
        <li>✅ Keep state normalized (avoid nested data)</li>
        <li>✅ Use <code>createAsyncThunk</code> for async operations</li>
        <li>✅ Don't put everything in Redux - use local state when appropriate</li>
        <li>✅ Use TypeScript for better type safety (optional but recommended)</li>
        <li>✅ Keep reducers pure (no side effects)</li>
        <li>✅ Use Redux DevTools for debugging</li>
      </ul>
    </section>

    <!-- Practice Task -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">Practice Task</h2>
      <p>1️⃣ Create a <strong>Todo App with Redux Toolkit</strong> that includes:</p>
      <ul style="line-height: 1.6;">
        <li>Add new todos</li>
        <li>Mark todos as completed/incomplete</li>
        <li>Delete todos</li>
        <li>Filter todos (All, Active, Completed)</li>
      </ul>
      <p>2️⃣ Create a separate <strong>theme slice</strong> to toggle dark/light mode.</p>
      <p>3️⃣ Use <strong>createAsyncThunk</strong> to fetch todos from an API:</p>
      <pre style="background-color:#f3f4f6; padding:10px; border-radius:6px; overflow-x:auto;"><code>https://jsonplaceholder.typicode.com/todos</code></pre>
      <p>4️⃣ Display loading state while fetching data.</p>
      <p>5️⃣ Bonus: Add a counter that shows total todos and completed todos count.</p>
    </section>

    <!-- Summary -->
    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ Redux is a centralized state management library for JavaScript apps.</li>
        <li>✅ Redux Toolkit simplifies Redux with less boilerplate code.</li>
        <li>✅ <code>configureStore</code> creates the Redux store with good defaults.</li>
        <li>✅ <code>createSlice</code> generates reducers and actions automatically.</li>
        <li>✅ <code>useSelector</code> reads state, <code>useDispatch</code> sends actions.</li>
        <li>✅ <code>createAsyncThunk</code> handles async operations like API calls.</li>
        <li>✅ Redux DevTools enable powerful debugging capabilities.</li>
        <li>✅ Redux is perfect for complex state that needs to be shared across many components.</li>
      </ul>
    </section>

  </div>
  `,
  duration: '50 min',
  order: 14,
  tags: ['react', 'redux', 'redux-toolkit', 'state-management', 'createSlice', 'createAsyncThunk', 'useSelector', 'useDispatch']
}
,{
  id: '15',
  title: 'React Project Ideas',
  description: 'Build powerful, hands-on projects with React.js — from beginner-friendly apps to advanced real-world projects involving APIs, routing, and authentication. Perfect your React skills with practical experience.',
  slug: 'react-project-ideas',
  courseId: '4',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">
  
    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">15 : React Project Ideas 💡</h1>
    
    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Ready to bring your React skills to life? Explore <strong style="color:#d93025;">8 real-world projects</strong> ranging from beginner to advanced level — covering components, props, hooks, APIs, and routing. Build, break, and learn! 🚀⚛️
    </p>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Project 1 -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">1️⃣ Digital Clock (Beginner)</h2>
      <p>Start simple by building a live digital clock that updates every second using <code>useState</code> and <code>useEffect</code>.</p>
      <ul>
        <li>⏰ Display current time dynamically</li>
        <li>🧠 Learn lifecycle with <code>useEffect</code></li>
        <li>🎨 Style it like a real digital clock</li>
      </ul>
      <p><strong>Concepts Covered:</strong> Hooks, component re-rendering</p>
    </section>

    <!-- Project 2 -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">2️⃣ Weather App (Beginner–Intermediate)</h2>
      <p>Fetch live weather data using an open API (like OpenWeatherMap) and display temperature, humidity, and conditions.</p>
      <ul>
        <li>🌤️ Use <code>fetch</code> or <code>axios</code> to get live data</li>
        <li>🔍 Search weather by city name</li>
        <li>🎨 Add icons and background changes by weather type</li>
      </ul>
      <p><strong>Concepts Covered:</strong> API fetching, useEffect, conditional rendering</p>
    </section>

    <!-- Project 3 -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">3️⃣ Expense Tracker (Intermediate)</h2>
      <p>Track your income and expenses using React state. Visualize your budget in a clean UI.</p>
      <ul>
        <li>💸 Add income/expense entries</li>
        <li>📊 Display total balance dynamically</li>
        <li>💾 Store data in localStorage</li>
      </ul>
      <p><strong>Concepts Covered:</strong> useState, localStorage, lifting state up</p>
    </section>

    <!-- Project 4 -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">4️⃣ Movie Search App (Intermediate)</h2>
      <p>Build a movie search engine using OMDB API to explore your favorite films.</p>
      <ul>
        <li>🎬 Fetch movies using user input</li>
        <li>🔍 Display movie cards dynamically</li>
        <li>⭐ Add favorites functionality</li>
      </ul>
      <p><strong>Concepts Covered:</strong> API integration, conditional UI rendering, reusable components</p>
    </section>

    <!-- Project 5 -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">5️⃣ Quiz App (Intermediate)</h2>
      <p>Test knowledge through a fun interactive quiz built with React components.</p>
      <ul>
        <li>🧠 Display multiple questions and track score</li>
        <li>🎯 Highlight correct/incorrect answers</li>
        <li>📊 Show final result summary</li>
      </ul>
      <p><strong>Concepts Covered:</strong> Component communication, conditional rendering, useState</p>
    </section>

    <!-- Project 6 -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">6️⃣ Blog App (Intermediate–Advanced)</h2>
      <p>Create a mini blog platform using <code>React Router</code> and mock JSON data.</p>
      <ul>
        <li>📝 List all blog posts</li>
        <li>🔗 Use <code>useParams</code> to view individual posts</li>
        <li>🧭 Add routing for Home, About, and Blog pages</li>
      </ul>
      <p><strong>Concepts Covered:</strong> Routing, dynamic routes, layout components</p>
    </section>

    <!-- Project 7 -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">7️⃣ Recipe Finder App (Advanced)</h2>
      <p>Build an advanced app that fetches recipes using the Edamam API with filters and detailed pages.</p>
      <ul>
        <li>🍔 Search recipes by keyword</li>
        <li>🍳 View detailed ingredients and instructions</li>
        <li>⭐ Save favorites using localStorage</li>
      </ul>
      <p><strong>Concepts Covered:</strong> API integration, routing, data management</p>
    </section>

    <!-- Project 8 -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">8️⃣ Portfolio Website (Advanced)</h2>
      <p>Build your personal portfolio using React and deploy it online.</p>
      <ul>
        <li>👤 Create sections — About, Projects, Contact</li>
        <li>🎨 Use modern UI libraries (Tailwind, Framer Motion)</li>
        <li>🌐 Deploy on Netlify or Vercel</li>
      </ul>
      <p><strong>Concepts Covered:</strong> Component architecture, responsive design, deployment</p>
    </section>

    <!-- Tips -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">💡 Tips for Building React Projects</h2>
      <ul style="line-height: 1.8;">
        <li>📦 Break UI into reusable components</li>
        <li>⚡ Use <code>props</code> and <code>state</code> efficiently</li>
        <li>🧩 Add <code>React Router</code> for navigation</li>
        <li>🧠 Handle side effects with <code>useEffect</code></li>
        <li>🚀 Keep improving UI and adding features after MVP</li>
      </ul>
    </section>

    <!-- Summary -->
    <section>
      <h2 style="color:#0073b1;">Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ Start small (Clock, Weather)</li>
        <li>✅ Go deeper with API-based apps (Movies, Recipes)</li>
        <li>✅ Explore routing and real-world features (Blog, Portfolio)</li>
        <li>✅ Focus on UI/UX and state management</li>
        <li>✅ Showcase your best React projects on GitHub & LinkedIn 💼</li>
      </ul>
    </section>
  </div>
  `,
  duration: '50 min',
  order: 15,
  tags: ['react', 'projects', 'frontend', 'api', 'hooks', 'state', 'practice', 'react-router']
}








  
];
