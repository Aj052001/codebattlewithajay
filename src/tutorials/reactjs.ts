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
}










  
];
