import { Tutorial } from '@/types';

export const cssTutorials: Tutorial[] = [
{
  id: '1',
  title: 'Introduction to CSS',
  description: 'Understand the fundamentals of CSS — what it is, why it’s important, syntax, selectors, types of styling methods, and how to use comments effectively.',
  slug: 'introduction-to-css',
  courseId: '2',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">1 : Introduction to CSS</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Welcome to your first <strong style="color:#d93025;">CSS</strong> chapter! In this lesson, you’ll learn how to style your HTML pages beautifully using <strong>CSS (Cascading Style Sheets)</strong>.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🎨 What You’ll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ What is <strong>CSS</strong> and why it’s important</li>
      <li>✅ CSS Syntax and Structure</li>
      <li>✅ CSS Selectors and how they target elements</li>
      <li>✅ Three ways to apply CSS (Inline, Internal, External)</li>
      <li>✅ How to write <strong>comments</strong> in CSS</li>
      <li>✅ How CSS can completely change the theme of a page</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📘 What is CSS?</h2>
      <p style="font-size: 1.1rem; margin-bottom: 15px;">
        <strong>CSS (Cascading Style Sheets)</strong> is the language used to style and design web pages. While HTML structures the content, CSS defines how it looks — colors, fonts, layouts, and more.
      </p>
      <p style="margin-bottom: 15px;">Think of CSS as the <strong>skin and clothing</strong> of a website — it gives design, beauty, and personality to your HTML skeleton.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>h1 {
  color: blue;
  text-align: center;
}</code></pre>
      <p style="margin-top:10px;">The above code changes the color of all <code>&lt;h1&gt;</code> tags to blue and centers them.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧩 CSS Syntax</h2>
      <p style="margin-bottom: 15px;">Every CSS rule consists of three parts: <strong>Selector</strong>, <strong>Property</strong>, and <strong>Value</strong>.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>selector {
  property: value;
}</code></pre>

      <p style="margin-bottom: 15px;">Example:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>p {
  color: red;
  font-size: 18px;
}</code></pre>

      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem; margin-top:20px;">
        <tr style="background-color:#0073b1; color:#fff;">
          <th style="padding:12px;">Part</th>
          <th style="padding:12px;">Description</th>
        </tr>
        <tr style="background-color:#eaf4fb;"><td>Selector</td><td>Targets the HTML element (like <code>p</code>, <code>h1</code>, or <code>div</code>)</td></tr>
        <tr style="background-color:#f5fbfe;"><td>Property</td><td>Specifies what aspect to style (like <code>color</code>, <code>font-size</code>, <code>margin</code>)</td></tr>
        <tr style="background-color:#eaf4fb;"><td>Value</td><td>Defines the setting for that property (like <code>red</code>, <code>20px</code>)</td></tr>
      </table>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🎯 CSS Selectors</h2>
      <p style="margin-bottom: 15px;">Selectors define which HTML elements the CSS styles should apply to.</p>

      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem;">
        <tr style="background-color:#0073b1; color:#fff;">
          <th style="padding:12px;">Selector Type</th>
          <th style="padding:12px;">Example</th>
          <th style="padding:12px;">Description</th>
        </tr>
        <tr style="background-color:#eaf4fb;"><td>Element Selector</td><td><code>p { color: red; }</code></td><td>Targets all <code>&lt;p&gt;</code> elements.</td></tr>
        <tr style="background-color:#f5fbfe;"><td>Class Selector</td><td><code>.title { font-size: 24px; }</code></td><td>Targets elements with class <code>title</code>.</td></tr>
        <tr style="background-color:#eaf4fb;"><td>ID Selector</td><td><code>#main { background: yellow; }</code></td><td>Targets the element with id <code>main</code>.</td></tr>
        <tr style="background-color:#f5fbfe;"><td>Universal Selector</td><td><code>* { margin: 0; }</code></td><td>Targets all elements on the page.</td></tr>
      </table>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔗 3 Ways to Add CSS</h2>
      <p>There are three main ways to apply CSS to HTML pages:</p>

      <ol style="font-size: 1.05rem; line-height: 1.6;">
        <li><strong>Inline CSS:</strong> Uses the <code>style</code> attribute inside HTML tags.</li>
        <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;h1 style="color:blue;"&gt;Hello World&lt;/h1&gt;</code></pre>

        <li><strong>Internal CSS:</strong> Written inside the <code>&lt;style&gt;</code> tag in the HTML file.</li>
        <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;head&gt;
  &lt;style&gt;
    p { color: green; }
  &lt;/style&gt;
&lt;/head&gt;</code></pre>

        <li><strong>External CSS:</strong> Written in a separate file (e.g., <code>style.css</code>) and linked using <code>&lt;link&gt;</code>.</li>
        <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;head&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;</code></pre>
      </ol>

      <p><strong>Best Practice:</strong> Use <strong>external CSS</strong> — it keeps your code clean, reusable, and easy to maintain.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💬 Comments in CSS</h2>
      <p>Comments are used to explain your code. They are ignored by the browser but help developers understand your styles later.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>/* This is a CSS comment */
p {
  color: blue; /* This sets text color */
}</code></pre>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧠 Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ CSS adds style and beauty to web pages.</li>
        <li>✅ Each CSS rule has a selector, property, and value.</li>
        <li>✅ There are various types of selectors — element, class, ID, universal, etc.</li>
        <li>✅ You can apply CSS in 3 ways — Inline, Internal, and External.</li>
        <li>✅ Comments help make your code readable and organized.</li>
      </ul>
    </section>

    <section style="margin-top: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; line-height: 1.8;">
        <li>Create an HTML file named <code>style-demo.html</code> and style all paragraphs to be <strong>blue</strong> with <strong>20px font size</strong> using internal CSS.</li>
        <li>Create a new file <code>external-style.css</code> and link it to your HTML page. Change the background color of your page and center all <code>&lt;h1&gt;</code> headings.</li>
      </ol>
    </section>

    <section style="margin-top:60px;">
      <h2 style="color:#0073b1; margin-bottom:20px;">🎨 CSS Theme Demo — Same HTML, Different CSS</h2>
      <p>Below is an example that shows how the <strong>same HTML structure</strong> can look completely different just by changing the CSS theme. Try clicking the buttons below!</p>

      <div style="text-align:center; margin:20px 0;">
        <button onclick="applyTheme('none')" style="padding:10px 20px; margin:5px; border-radius:8px;">Without CSS</button>
        <button onclick="applyTheme('theme1')" style="padding:10px 20px; margin:5px; border-radius:8px; background-color:#0073b1; color:#fff;">Classic Blue</button>
        <button onclick="applyTheme('theme2')" style="padding:10px 20px; margin:5px; border-radius:8px; background-color:#222; color:#fff;">Dark Mode</button>
        <button onclick="applyTheme('theme3')" style="padding:10px 20px; margin:5px; border-radius:8px; background-color:#ffd6e0;">Soft Pastel</button>
        <button onclick="applyTheme('theme4')" style="padding:10px 20px; margin:5px; border-radius:8px; background:linear-gradient(45deg,#6a11cb,#2575fc); color:#fff;">Modern Gradient</button>
      </div>

      <div id="theme-demo" style="border:2px solid #ddd; border-radius:10px; padding:20px; text-align:center;">
        <h1>Welcome to My Website</h1>
        <p>This is a paragraph demonstrating how CSS can change everything about the design without changing the HTML.</p>
        <button>Click Me</button>
      </div>

      <style>
        #theme-demo button {
          padding: 10px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
        }
      </style>

      <script>
        function applyTheme(theme) {
          const box = document.getElementById('theme-demo');
          if(theme === 'none') {
            box.style = 'border:2px solid #ddd; border-radius:10px; padding:20px; text-align:center; color:black; background:white;';
          } else if(theme === 'theme1') {
            box.style = 'color:#003366; background-color:#e6f2ff; border-radius:10px; padding:20px; text-align:center;';
          } else if(theme === 'theme2') {
            box.style = 'color:white; background-color:#121212; border-radius:10px; padding:20px; text-align:center;';
          } else if(theme === 'theme3') {
            box.style = 'color:#4b4f56; background-color:#fff0f3; border-radius:10px; padding:20px; text-align:center;';
          } else if(theme === 'theme4') {
            box.style = 'color:white; background:linear-gradient(135deg, #6a11cb, #2575fc); border-radius:10px; padding:20px; text-align:center;';
          }
        }
      </script>
    </section>

  </div>
  `,
  duration: '35 min',
  order: 1,
  tags: ['css', 'selectors', 'syntax', 'basics', 'styling', 'themes', 'web']
},
{
  id: '2',
  title: 'CSS Colors and Backgrounds',
  description: 'Learn how to add colors and backgrounds in CSS using color names, RGB, HEX, HSL, and how to style with background images, repeat options, attachment, and shorthand properties.',
  slug: 'css-colors-and-backgrounds',
  courseId: '2',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">2 : CSS Colors and Backgrounds</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this chapter, you’ll explore how to make your web pages colorful and visually appealing using <strong>CSS colors</strong> and <strong>backgrounds</strong>.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🎨 What You’ll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Different ways to define colors — Name, RGB, HEX, HSL</li>
      <li>✅ Applying <strong>background colors</strong></li>
      <li>✅ Adding <strong>background images</strong></li>
      <li>✅ Understanding <strong>background-repeat</strong> and <strong>background-attachment</strong></li>
      <li>✅ Using <strong>background shorthand</strong> property</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🎨 CSS Colors</h2>
      <p>Colors in CSS can be applied to text, backgrounds, borders, and more. There are four main ways to define colors:</p>

      <h3 style="margin-top: 20px; color:#d93025;">1️⃣ Named Colors</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>h1 {
  color: red;
}</code></pre>
      <p>This uses predefined color names like <strong>red</strong>, <strong>blue</strong>, <strong>green</strong>, etc.</p>

      <h3 style="margin-top: 20px; color:#d93025;">2️⃣ RGB Colors</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>p {
  color: rgb(0, 128, 255);
}</code></pre>
      <p>RGB stands for <strong>Red, Green, Blue</strong>. Each value ranges from <strong>0 to 255</strong>.</p>

      <h3 style="margin-top: 20px; color:#d93025;">3️⃣ HEX Colors</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>div {
  color: #ff5733;
}</code></pre>
      <p>HEX values start with a <strong>#</strong> followed by six digits (00–FF) representing red, green, and blue.</p>

      <h3 style="margin-top: 20px; color:#d93025;">4️⃣ HSL Colors</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>span {
  color: hsl(120, 100%, 40%);
}</code></pre>
      <p><strong>HSL</strong> stands for <strong>Hue, Saturation, Lightness</strong>. It’s easy to adjust shades and tones using this format.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🌈 CSS Backgrounds</h2>
      <p>CSS provides multiple properties to control the background appearance of an element.</p>

      <h3 style="margin-top: 20px; color:#d93025;">1️⃣ Background Color</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>body {
  background-color: lightblue;
}</code></pre>

      <h3 style="margin-top: 20px; color:#d93025;">2️⃣ Background Image</h3>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>body {
  background-image: url('background.jpg');
}</code></pre>

      <h3 style="margin-top: 20px; color:#d93025;">3️⃣ Background Repeat</h3>
      <p>This property controls whether the image repeats or not.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>body {
  background-repeat: no-repeat;
}</code></pre>
      <ul>
        <li><code>repeat</code> – repeats both horizontally and vertically (default)</li>
        <li><code>no-repeat</code> – image appears only once</li>
        <li><code>repeat-x</code> – repeats horizontally only</li>
        <li><code>repeat-y</code> – repeats vertically only</li>
      </ul>

      <h3 style="margin-top: 20px; color:#d93025;">4️⃣ Background Attachment</h3>
      <p>It defines whether the background scrolls with the page or stays fixed.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>body {
  background-attachment: fixed;
}</code></pre>
      <ul>
        <li><code>scroll</code> – background moves when page scrolls</li>
        <li><code>fixed</code> – background stays in place</li>
      </ul>

      <h3 style="margin-top: 20px; color:#d93025;">5️⃣ Background Shorthand Property</h3>
      <p>You can combine all background properties in one line:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>body {
  background: url('bg.jpg') no-repeat center fixed;
}</code></pre>
      <p>This sets the background image, disables repeating, centers it, and makes it fixed.</p>
    </section>

    <section style="margin-top: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧠 Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ CSS offers multiple color formats — Name, RGB, HEX, and HSL.</li>
        <li>✅ Backgrounds can include colors, images, and advanced effects.</li>
        <li>✅ Use <code>background-repeat</code> to control tiling.</li>
        <li>✅ Use <code>background-attachment</code> to make backgrounds fixed or scrollable.</li>
        <li>✅ The <code>background</code> shorthand lets you combine multiple properties in one line.</li>
      </ul>
    </section>

    <section style="margin-top: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; line-height: 1.8;">
        <li>Create a webpage and set the background color to <strong>lightgreen</strong>.</li>
        <li>Add a background image and make it <strong>not repeat</strong>.</li>
        <li>Try the <strong>background-attachment: fixed</strong> property and scroll your page to see the effect.</li>
        <li>Use the shorthand property to apply multiple background styles in one line.</li>
      </ol>
    </section>

  </div>
  `,
  duration: '40 min',
  order: 2,
  tags: ['css', 'colors', 'background', 'rgb', 'hex', 'hsl', 'design', 'styling']
},
{
  id: '3',
  title: 'CSS Borders',
  description: 'Learn how to style elements with borders using width, style, color, shorthand syntax, and rounded corners. See how different border styles look visually and understand how to customize borders for creative designs.',
  slug: 'css-borders',
  courseId: '2',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">
  
    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">3 : CSS Borders</h1>
    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Borders are used to draw lines around HTML elements. You can control their <strong>width</strong>, <strong>style</strong>, <strong>color</strong>, and even make them rounded for smoother designs.
    </p>
  
    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🎯 What You’ll Learn Today</h2>
    <ul style="font-size:1.1rem; line-height:1.7; background-color:#f9fafb; padding:20px; border-radius:10px; margin-bottom:50px;">
      <li>✅ Border Width, Style, and Color</li>
      <li>✅ Border Shorthand Property</li>
      <li>✅ Border Radius (Rounded Corners)</li>
      <li>✅ Advanced Border Effects</li>
    </ul>
  
    <hr style="margin:50px 0; height:1px; background:#d1d5db; border:none;" />
  
    <!-- BASIC BORDER SECTION -->
    <section>
      <h2 style="color:#0073b1; margin-bottom:20px;">🎨 Border Basics</h2>
      <p>Each border has three parts — width, style, and color.</p>
  
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:8px; margin-top:10px;"><code>div {
  border-width: 2px;
  border-style: solid;
  border-color: blue;
}</code></pre>
  
      <div style="margin-top:20px; display:flex; flex-wrap:wrap; gap:20px; justify-content:center;">
        <div style="width:120px; height:120px; border:2px solid #0073b1; display:flex; align-items:center; justify-content:center;">Solid</div>
        <div style="width:120px; height:120px; border:3px dashed #f97316; display:flex; align-items:center; justify-content:center;">Dashed</div>
        <div style="width:120px; height:120px; border:3px dotted #10b981; display:flex; align-items:center; justify-content:center;">Dotted</div>
        <div style="width:120px; height:120px; border:4px double #ef4444; display:flex; align-items:center; justify-content:center;">Double</div>
      </div>
  
      <h3 style="margin-top:30px; color:#d93025;">🔹 Border Shorthand</h3>
      <p>You can combine all border properties in one line:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:8px;"><code>div {
  border: 2px solid blue;
}</code></pre>
    </section>
  
    <!-- BORDER RADIUS SECTION -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1; margin-bottom:20px;">🌐 Border Radius (Rounded Corners)</h2>
      <p>The <code>border-radius</code> property rounds the corners of a box. You can create smooth rectangles or perfect circles.</p>
  
      <div style="display:flex; flex-wrap:wrap; gap:20px; justify-content:center; margin-top:20px;">
        <div style="width:120px; height:120px; border:2px solid #0073b1; border-radius:10px; display:flex; align-items:center; justify-content:center;">10px</div>
        <div style="width:120px; height:120px; border:2px solid #0073b1; border-radius:30px; display:flex; align-items:center; justify-content:center;">30px</div>
        <div style="width:120px; height:120px; border:2px solid #0073b1; border-radius:50%; display:flex; align-items:center; justify-content:center;">Circle</div>
      </div>
  
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:8px; margin-top:20px;"><code>div {
  border-radius: 10px;
}</code></pre>
    </section>
  
    <!-- ADVANCED BORDER SECTION -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1; margin-bottom:20px;">✨ Advanced Borders</h2>
      <p>You can apply different borders on each side of an element:</p>
  
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:8px;"><code>div {
  border-top: 3px solid red;
  border-right: 3px dotted blue;
  border-bottom: 3px dashed green;
  border-left: 3px double orange;
}</code></pre>
  
      <div style="width:150px; height:150px; margin:20px auto; border-top:3px solid red; border-right:3px dotted blue; border-bottom:3px dashed green; border-left:3px double orange; display:flex; align-items:center; justify-content:center;">
        Mix Borders
      </div>
    </section>
  
    <!-- SUMMARY -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1;">🧠 Summary</h2>
      <ul style="font-size:1.05rem; line-height:1.6;">
        <li>✅ Borders outline elements with customizable width, style, and color.</li>
        <li>✅ <code>border</code> shorthand combines all border properties.</li>
        <li>✅ <code>border-radius</code> creates smooth or circular corners.</li>
        <li>✅ Borders can be styled differently for each side.</li>
      </ul>
    </section>
  
    <!-- PRACTICE -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1;">🧪 Practice Tasks</h2>
      <ol style="font-size:1.05rem; line-height:1.8;">
        <li>Create a div with <strong>4px solid blue border</strong>.</li>
        <li>Make a circular box using <code>border-radius: 50%;</code>.</li>
        <li>Apply different border styles to each side of a box.</li>
        <li>Experiment with <strong>dashed</strong> and <strong>dotted</strong> borders.</li>
      </ol>
    </section>
  
  </div>
  `,
  duration: '40 min',
  order: 3,
  tags: ['css', 'borders', 'border-radius', 'styling', 'design']
}
,
{
  id: '4',
  title: 'CSS Margins',
  description: 'Learn how to create space around elements using margins. Understand how to control each side, use shorthand, center elements, and explore margin collapsing with clear visual examples.',
  slug: 'css-margins',
  courseId: '2',
  content: `
  <div style="font-family:'Inter', sans-serif; line-height:1.8; color:#1c1e21; padding:40px; max-width:100%; margin:0 auto; background-color:#ffffff;">
  
    <h1 style="font-size:2.5rem; color:#0073b1; text-align:center; margin-bottom:30px;">4 : CSS Margins</h1>
    <p style="font-size:1.15rem; text-align:center; color:#4b4f56; margin-bottom:40px;">
      Margins create <strong>space outside</strong> elements, separating them from other elements on the page. They are essential for clean and readable layouts.
    </p>
  
    <h2 style="color:#0073b1; text-align:center; margin-bottom:30px;">📏 What You’ll Learn Today</h2>
    <ul style="font-size:1.1rem; background-color:#f9fafb; padding:20px; border-radius:10px; line-height:1.7; margin-bottom:50px;">
      <li>✅ Margin Basics</li>
      <li>✅ Individual Margins</li>
      <li>✅ Shorthand Margin Property</li>
      <li>✅ Auto Centering</li>
      <li>✅ Margin Collapsing</li>
    </ul>
  
    <hr style="margin:50px 0; height:1px; background:#d1d5db; border:none;" />
  
    <!-- MARGIN BASICS -->
    <section>
      <h2 style="color:#0073b1; margin-bottom:20px;">🎨 Margin Basics</h2>
      <p>Margins define space around an element’s border — creating separation from other elements.</p>
      <div style="background-color:#f3f4f6; padding:20px; border-radius:10px; margin-top:20px;">
        <div style="background-color:#0073b1; color:white; padding:15px; margin:30px; border-radius:8px;">This box has margin: 30px</div>
      </div>
  
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:8px; margin-top:20px;"><code>div {
  margin: 30px;
}</code></pre>
    </section>
  
    <!-- INDIVIDUAL MARGINS -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1; margin-bottom:20px;">🔹 Individual Margins</h2>
      <p>You can set margins for each side separately.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:8px;"><code>div {
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
}</code></pre>
    </section>
  
    <!-- SHORTHAND MARGIN -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1;">🧾 Shorthand Margin Property</h2>
      <p>Shorthand allows setting all four margins in one line:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:8px;"><code>div {
  margin: 10px 20px 30px 40px; /* top right bottom left */
}</code></pre>
    </section>
  
    <!-- AUTO CENTERING -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1;">📍 Auto Centering</h2>
      <p>To center a block element horizontally, set left and right margins to <code>auto</code>.</p>
  
      <div style="width:300px; margin:20px auto; background-color:#0073b1; color:white; padding:20px; text-align:center; border-radius:8px;">
        Centered Box (margin: 0 auto)
      </div>
  
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:8px;"><code>div {
  width: 300px;
  margin: 0 auto;
}</code></pre>
    </section>
  
    <!-- MARGIN COLLAPSING -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1;">⚡ Margin Collapsing</h2>
      <p>When two vertical margins meet, they <strong>collapse</strong> into one — the larger of the two.</p>
  
      <div style="background-color:#f3f4f6; padding:20px; border-radius:10px;">
        <div style="background-color:#0073b1; color:white; padding:15px; margin-bottom:30px;">Box 1 (margin-bottom: 30px)</div>
        <div style="background-color:#10b981; color:white; padding:15px; margin-top:50px;">Box 2 (margin-top: 50px)</div>
      </div>
      <p style="margin-top:10px;">The space between them will be 50px (not 80px).</p>
    </section>
  
    <!-- SUMMARY -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1;">🧠 Summary</h2>
      <ul style="font-size:1.05rem; line-height:1.6;">
        <li>✅ <code>margin</code> adds space outside elements.</li>
        <li>✅ You can control each side individually.</li>
        <li>✅ <code>margin: 0 auto</code> centers block elements.</li>
        <li>✅ Vertical margins can collapse into one.</li>
      </ul>
    </section>
  
    <!-- PRACTICE -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1;">🧪 Practice Tasks</h2>
      <ol style="font-size:1.05rem; line-height:1.8;">
        <li>Create two boxes with different top and bottom margins and observe margin collapsing.</li>
        <li>Make a centered box using <code>margin: 0 auto;</code>.</li>
        <li>Try different shorthand margin values and see the difference.</li>
        <li>Add outer spacing between multiple boxes using margin.</li>
      </ol>
    </section>
  
  </div>
  `,
  duration: '45 min',
  order: 4,
  tags: ['css', 'margins', 'layout', 'spacing', 'responsive']
}
,{
  id: '5',
  title: 'CSS Padding',
  description: 'Learn how to control the inner spacing of elements using padding, apply it individually or via shorthand, and create visually appealing layouts with proper spacing.',
  slug: 'css-padding',
  courseId: '2',
  content: `
  <div style="font-family:'Inter', sans-serif; line-height:1.8; color:#1c1e21; padding:40px; max-width:100%; margin:0 auto; background-color:#ffffff;">
  
    <h1 style="font-size:2.5rem; color:#0073b1; text-align:center; margin-bottom:30px;">5 : CSS Padding</h1>
    <p style="font-size:1.15rem; text-align:center; color:#4b4f56; margin-bottom:40px;">
      Padding is the space <strong>inside</strong> an element — between its content and its border.
    </p>
  
    <h2 style="color:#0073b1; text-align:center; margin-bottom:30px;">🎯 What You’ll Learn Today</h2>
    <ul style="font-size:1.1rem; line-height:1.7; background-color:#f9fafb; padding:20px; border-radius:10px; margin-bottom:50px;">
      <li>✅ Padding basics</li>
      <li>✅ Padding for individual sides</li>
      <li>✅ Shorthand padding property</li>
      <li>✅ Practical UI examples</li>
    </ul>
  
    <!-- PADDING EXAMPLES -->
    <section>
      <h2 style="color:#0073b1; margin-bottom:20px;">🎨 Padding Basics</h2>
      <p>Padding creates inner spacing between content and the element border.</p>
      <div style="background-color:#f3f4f6; padding:20px; border-radius:10px; margin-top:20px;">
        <div style="background-color:#0073b1; color:white; padding:30px; border-radius:8px;">Padding: 30px</div>
      </div>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; margin-top:20px;"><code>div { padding: 30px; }</code></pre>
  
      <h3 style="margin-top:30px; color:#d93025;">🔹 Individual Sides</h3>
      <p>Set padding for each side:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>div {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}</code></pre>
  
      <h3 style="margin-top:30px; color:#d93025;">🔹 Shorthand Property</h3>
      <p>Set all sides in one line:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>div {
  padding: 10px 20px 30px 40px; /* top right bottom left */
}</code></pre>
    </section>
  
    <!-- PRACTICE TASKS -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1;">🧪 Practice Tasks</h2>
      <ol style="font-size:1.05rem; line-height:1.8;">
        <li>Create a box with <strong>padding: 20px</strong> and observe the spacing inside.</li>
        <li>Try padding on individual sides with different values.</li>
        <li>Use shorthand padding to combine all sides in one line.</li>
        <li>Create a nested box layout using padding for visual spacing.</li>
      </ol>
    </section>
  
  </div>
  `,
  duration: '30 min',
  order: 5,
  tags: ['css', 'padding', 'spacing', 'layout']
},{
  id: '6',
  title: 'CSS Height & Width',
  description: 'Learn how to control the size of elements using height and width properties. Explore fixed, percentage, and responsive sizing with practical examples.',
  slug: 'css-height-width',
  courseId: '2',
  content: `
  <div style="font-family:'Inter', sans-serif; line-height:1.8; color:#1c1e21; padding:40px; max-width:100%; margin:0 auto; background-color:#ffffff;">
  
    <h1 style="font-size:2.5rem; color:#0073b1; text-align:center; margin-bottom:30px;">6 : CSS Height & Width</h1>
    <p style="font-size:1.15rem; text-align:center; color:#4b4f56; margin-bottom:40px;">
      Control how tall and wide an element appears on the page.
    </p>
  
    <h2 style="color:#0073b1; text-align:center; margin-bottom:30px;">🎯 What You’ll Learn Today</h2>
    <ul style="font-size:1.1rem; line-height:1.7; background-color:#f9fafb; padding:20px; border-radius:10px; margin-bottom:50px;">
      <li>✅ Fixed height & width</li>
      <li>✅ Percentage-based sizing</li>
      <li>✅ Responsive layouts</li>
      <li>✅ Practical UI examples</li>
    </ul>
  
    <!-- EXAMPLES -->
    <section>
      <h2 style="color:#0073b1; margin-bottom:20px;">📏 Fixed Height & Width</h2>
      <p>Set specific pixel values for width and height.</p>
      <div style="display:flex; flex-wrap:wrap; gap:20px; justify-content:center; margin-top:20px;">
        <div style="background-color:#0073b1; color:white; width:150px; height:100px; display:flex; align-items:center; justify-content:center; border-radius:8px;">150x100</div>
        <div style="background-color:#f97316; color:white; width:200px; height:150px; display:flex; align-items:center; justify-content:center; border-radius:8px;">200x150</div>
      </div>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; margin-top:20px;"><code>div {
  width: 200px;
  height: 150px;
}</code></pre>
  
      <h3 style="margin-top:30px; color:#d93025;">🔹 Percentage-based Sizing</h3>
      <p>Set width relative to parent element:</p>
      <div style="background-color:#10b981; color:white; padding:20px; width:50%; margin:20px auto; text-align:center; border-radius:8px;">
        Width: 50% of parent
      </div>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>div {
  width: 50%;
}</code></pre>
    </section>
  
    <!-- PRACTICE TASKS -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1;">🧪 Practice Tasks</h2>
      <ol style="font-size:1.05rem; line-height:1.8;">
        <li>Create a box with <strong>width: 300px</strong> and <strong>height: 150px</strong>.</li>
        <li>Create a box with <strong>width: 60%</strong> of its parent container.</li>
        <li>Try multiple boxes with different widths to see how they align.</li>
        <li>Combine height, width, and padding to create visually appealing boxes.</li>
      </ol>
    </section>
  
  </div>
  `,
  duration: '30 min',
  order: 6,
  tags: ['css', 'height', 'width', 'responsive', 'layout']
},
{
  id: '7',
  title: 'CSS Max-Width & Box Model',
  description: 'Understand how max-width controls element resizing for responsive designs and explore the CSS Box Model — content, padding, border, and margin — to calculate total element size.',
  slug: 'css-maxwidth-box-model',
  courseId: '2',
  content: `
  <div style="font-family:'Inter', sans-serif; line-height:1.8; color:#1c1e21; padding:40px; max-width:100%; margin:0 auto; background-color:#ffffff;">

    <h1 style="font-size:2.5rem; color:#0073b1; text-align:center; margin-bottom:30px;">7 : CSS Max-Width & Box Model</h1>

    <p style="font-size:1.15rem; text-align:center; color:#4b4f56; margin-bottom:40px;">
      In this chapter, you’ll learn how to control the maximum width of elements for responsive layouts using <strong>max-width</strong> and understand the <strong>CSS Box Model</strong> — how padding, border, and margin affect element sizing.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom:30px;">📌 What You’ll Learn Today</h2>
    <ul style="font-size:1.1rem; line-height:1.7; background-color:#f9fafb; padding:20px; border-radius:10px; margin-bottom:50px;">
      <li>✅ max-width property for responsive design</li>
      <li>✅ Understanding the CSS Box Model</li>
      <li>✅ box-sizing property for predictable layouts</li>
      <li>✅ Practical UI examples for visualization</li>
    </ul>

    <hr style="margin:50px 0; border:0; height:1px; background:#d1d5db;" />

    <!-- MAX-WIDTH SECTION -->
    <section style="margin-bottom:50px;">
      <h2 style="color:#0073b1; margin-bottom:20px;">📱 CSS Max-Width</h2>
      <p>
        The <code>max-width</code> property ensures an element does not exceed a specific width. This is extremely useful for responsive design, so your content looks good on all screen sizes.
      </p>

      <div style="background-color:#10b981; color:white; padding:20px; border-radius:8px; max-width:500px; margin:20px auto; text-align:center;">
        This box has a max-width of 500px.
      </div>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; margin-top:20px;"><code>div {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #10b981;
  color: white;
}</code></pre>

      <p>Try resizing your browser window — this box will never exceed 500px in width, making it responsive!</p>
    </section>

    <!-- BOX MODEL SECTION -->
    <section style="margin-bottom:50px;">
      <h2 style="color:#0073b1; margin-bottom:20px;">📦 CSS Box Model</h2>
      <p>
        Every HTML element is considered a rectangular box. The <strong>Box Model</strong> describes how browsers calculate the total size of an element, including content, padding, border, and margin.
      </p>

      <ul style="margin-left:20px; margin-bottom:20px;">
        <li><strong>Content:</strong> The text, image, or other media inside the element.</li>
        <li><strong>Padding:</strong> Space between content and border.</li>
        <li><strong>Border:</strong> A line surrounding the padding.</li>
        <li><strong>Margin:</strong> Space outside the border, separating the element from others.</li>
      </ul>

      <div style="margin:40px auto; width:250px; text-align:center;">
        <div style="background-color:#e5e7eb; padding:20px; border:5px solid #0073b1; margin:20px;">
          <div style="background-color:#0073b1; color:white; padding:10px;">Content</div>
        </div>
      </div>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; margin-top:20px;"><code>div {
  width: 200px;
  padding: 20px;
  border: 5px solid #0073b1;
  margin: 20px;
}</code></pre>

      <p>
        <strong>Total Width</strong> = content width + left/right padding + left/right border + left/right margin<br>
        <strong>Total Height</strong> = content height + top/bottom padding + top/bottom border + top/bottom margin
      </p>

      <h3 style="margin-top:30px; color:#d93025;">🔹 box-sizing Property</h3>
      <p>
        By default, <code>width</code> and <code>height</code> only include the content area. Padding and border are added outside, which can break layouts.  
        To include padding and border inside the element size, use:
      </p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>* {
  box-sizing: border-box;
}</code></pre>
      <p>This makes layout sizing predictable and easier to manage.</p>
    </section>

    <!-- SUMMARY SECTION -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1; margin-bottom:20px;">🧠 Summary</h2>
      <ul style="font-size:1.05rem; line-height:1.6;">
        <li>✅ <code>max-width</code> prevents elements from exceeding a specified width, aiding responsive design.</li>
        <li>✅ The <strong>Box Model</strong> includes content, padding, border, and margin.</li>
        <li>✅ Use <code>box-sizing: border-box</code> for predictable layouts.</li>
        <li>✅ Total element size = content + padding + border + margin.</li>
      </ul>
    </section>

    <!-- PRACTICE TASKS -->
    <section style="margin-top:50px;">
      <h2 style="color:#0073b1; margin-bottom:20px;">🧪 Practice Tasks</h2>
      <ol style="font-size:1.05rem; line-height:1.8;">
        <li>Create a box with <strong>width: 300px</strong>, <strong>padding: 20px</strong>, <strong>border: 5px solid #0073b1</strong>, and <strong>margin: 20px</strong>. Observe the total size.</li>
        <li>Create another box with <strong>max-width: 400px</strong> and center it horizontally.</li>
        <li>Experiment with <code>box-sizing: border-box</code> and <code>content-box</code> to see layout differences.</li>
        <li>Draw a diagram labeling content, padding, border, and margin for a visual understanding.</li>
      </ol>
    </section>

  </div>
  `,
  duration: '50 min',
  order: 7,
  tags: ['css', 'max-width', 'box-model', 'layout', 'responsive']
},

{
  id: '8',
  title: 'CSS Outline',
  description: 'Learn what CSS outlines are, how they differ from borders, and how to style elements for focus, accessibility, and design highlights using outline properties like color, width, style, and offset.',
  slug: 'css-outline',
  courseId: '2',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">8 : CSS Outline</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this chapter, you’ll learn how to use <strong>CSS outlines</strong> to highlight elements, show focus states for accessibility, and create elegant design effects.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🖊️ What You’ll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ What is an Outline?</li>
      <li>✅ Difference between Border and Outline</li>
      <li>✅ Outline Properties — Color, Style, Width, Offset</li>
      <li>✅ Outline for Accessibility (Focus States)</li>
      <li>✅ Beautiful Outline UI Examples</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- WHAT IS OUTLINE -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🎨 What is an Outline?</h2>
      <p>An <strong>outline</strong> is a line drawn <strong>outside the border</strong> of an element.  
      It does not take up space and is often used for <strong>focus indicators</strong> or highlighting elements.</p>

      <div style="display:flex; justify-content:center; margin-top:30px;">
        <div style="background-color:#f3f4f6; padding:30px; border:3px solid #0073b1; outline:4px solid #f97316; border-radius:10px;">
          <p style="text-align:center; color:#1c1e21;">This box has an <strong>orange outline</strong> outside the blue border.</p>
        </div>
      </div>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; margin-top:20px;"><code>div {
  border: 3px solid blue;
  outline: 4px solid orange;
}</code></pre>
    </section>

    <!-- DIFFERENCE -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">⚔️ Border vs Outline</h2>
      <table style="width:100%; border-collapse:collapse; margin-top:20px; font-size:1rem;">
        <thead>
          <tr style="background-color:#e5e7eb; text-align:left;">
            <th style="padding:10px;">Feature</th>
            <th style="padding:10px;">Border</th>
            <th style="padding:10px;">Outline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px;">Position</td>
            <td style="padding:10px;">Inside element box</td>
            <td style="padding:10px;">Outside border</td>
          </tr>
          <tr style="background-color:#f9fafb;">
            <td style="padding:10px;">Affects layout?</td>
            <td style="padding:10px;">Yes</td>
            <td style="padding:10px;">No</td>
          </tr>
          <tr>
            <td style="padding:10px;">Rounded corners?</td>
            <td style="padding:10px;">Supports border-radius</td>
            <td style="padding:10px;">Does not support border-radius</td>
          </tr>
          <tr style="background-color:#f9fafb;">
            <td style="padding:10px;">Common use</td>
            <td style="padding:10px;">Visual styling</td>
            <td style="padding:10px;">Focus or highlight</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- OUTLINE PROPERTIES -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">⚙️ Outline Properties</h2>

      <h3 style="margin-top:20px; color:#d93025;">🔹 outline-color</h3>
      <p>Defines the color of the outline.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>outline-color: red;</code></pre>

      <h3 style="margin-top:20px; color:#d93025;">🔹 outline-style</h3>
      <p>Defines the style of the outline.</p>
      <ul>
        <li>solid</li>
        <li>dashed</li>
        <li>dotted</li>
        <li>double</li>
        <li>groove</li>
      </ul>

      <div style="display:flex; flex-wrap:wrap; gap:15px; justify-content:center; margin-top:20px;">
        <div style="border:2px solid #0073b1; outline:3px solid red; padding:10px;">solid</div>
        <div style="border:2px solid #0073b1; outline:3px dashed orange; padding:10px;">dashed</div>
        <div style="border:2px solid #0073b1; outline:3px dotted green; padding:10px;">dotted</div>
        <div style="border:2px solid #0073b1; outline:3px double purple; padding:10px;">double</div>
      </div>

      <h3 style="margin-top:20px; color:#d93025;">🔹 outline-width</h3>
      <p>Specifies how thick the outline is.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>outline-width: 5px;</code></pre>

      <h3 style="margin-top:20px; color:#d93025;">🔹 outline-offset</h3>
      <p>Controls the space between the border and outline.</p>
      <div style="display:flex; justify-content:center; margin-top:20px;">
        <div style="border:3px solid #0073b1; outline:4px solid #f97316; outline-offset:8px; padding:20px; border-radius:10px;">Outline Offset Example</div>
      </div>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; margin-top:20px;"><code>div {
  border: 3px solid blue;
  outline: 4px solid orange;
  outline-offset: 8px;
}</code></pre>
    </section>

    <!-- ACCESSIBILITY SECTION -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">♿ Outline for Accessibility (Focus States)</h2>
      <p>Outlines are commonly used to show <strong>keyboard focus</strong> on interactive elements like input fields or buttons.</p>

      <div style="text-align:center; margin-top:30px;">
        <input type="text" placeholder="Click or Tab here" style="padding:10px 15px; border:2px solid #ccc; outline:none; border-radius:6px;" onfocus="this.style.outline='3px solid #0073b1'" onblur="this.style.outline='none'"/>
      </div>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; margin-top:20px;"><code>input:focus {
  outline: 3px solid #0073b1;
}</code></pre>
    </section>

    <!-- SUMMARY -->
    <section style="margin-top: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧠 Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.7;">
        <li>✅ <strong>Outline</strong> appears outside the border.</li>
        <li>✅ It does <strong>not affect layout</strong> or box size.</li>
        <li>✅ Use <code>outline-offset</code> for spacing.</li>
        <li>✅ Outlines are great for <strong>focus and accessibility</strong>.</li>
        <li>✅ Outlines can’t have rounded corners.</li>
      </ul>
    </section>

    <!-- PRACTICE TASKS -->
    <section style="margin-top: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; line-height: 1.8;">
        <li>Create a div with <code>border: 2px solid blue</code> and <code>outline: 3px solid orange</code>.</li>
        <li>Try different <code>outline-style</code> values: dashed, dotted, double.</li>
        <li>Apply <code>outline-offset</code> of <strong>10px</strong> and see how it changes.</li>
        <li>Design a button that shows a <strong>blue outline</strong> when focused.</li>
        <li>Experiment with both <strong>border</strong> and <strong>outline</strong> together.</li>
      </ol>
    </section>

  </div>
  `,
  duration: '45 min',
  order: 8,
  tags: ['css', 'outline', 'border', 'focus', 'accessibility', 'outline-offset', 'ui', 'design']
},
{
  id: '9',
  title: 'CSS Text',
  description: 'Learn how to style text in CSS using properties like color, alignment, decoration, transformation, spacing, and shadow to create visually appealing typography.',
  slug: 'css-text',
  courseId: '2',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">9 : CSS Text</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this chapter, you’ll learn how to style text in CSS to make your content visually engaging and readable.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🖊️ What You’ll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Text Color</li>
      <li>✅ Text Alignment</li>
      <li>✅ Text Decoration</li>
      <li>✅ Text Transformation</li>
      <li>✅ Text Spacing (Letter & Word Spacing)</li>
      <li>✅ Text Shadow</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- TEXT COLOR -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🎨 Text Color</h2>
      <p>The <strong>color</strong> property sets the color of the text.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>p {
  color: #ff5733; /* orange-red */
}</code></pre>
      <p>Example:</p>
      <p style="color:#ff5733;">This text is orange-red using <code>color</code> property.</p>
    </section>

    <!-- TEXT ALIGNMENT -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🖋️ Text Alignment</h2>
      <p>The <strong>text-align</strong> property controls horizontal alignment.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>h1 {
  text-align: center;
}
p {
  text-align: right;
}</code></pre>
      <div style="border:1px solid #0073b1; padding:20px; border-radius:10px; margin-top:20px;">
        <h1 style="text-align:center;">Center Aligned Heading</h1>
        <p style="text-align:right;">Right Aligned Paragraph</p>
      </div>
    </section>

    <!-- TEXT DECORATION -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">✨ Text Decoration</h2>
      <p>Use <strong>text-decoration</strong> to underline, overline, or strike-through text.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>span {
  text-decoration: underline;
}
span.strike {
  text-decoration: line-through;
}
span.overline {
  text-decoration: overline;
}</code></pre>
      <p>
        <span style="text-decoration: underline;">Underline</span> | 
        <span class="strike" style="text-decoration: line-through;">Strike-through</span> | 
        <span class="overline" style="text-decoration: overline;">Overline</span>
      </p>
    </section>

    <!-- TEXT TRANSFORMATION -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔠 Text Transformation</h2>
      <p>The <strong>text-transform</strong> property changes the case of text.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>p.uppercase {
  text-transform: uppercase;
}
p.lowercase {
  text-transform: lowercase;
}
p.capitalize {
  text-transform: capitalize;
}</code></pre>
      <p class="uppercase" style="text-transform: uppercase;">This text is uppercase.</p>
      <p class="lowercase" style="text-transform: lowercase;">THIS TEXT IS LOWERCASE.</p>
      <p class="capitalize" style="text-transform: capitalize;">this text is capitalized.</p>
    </section>

    <!-- TEXT SPACING -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📏 Text Spacing</h2>
      <p><strong>letter-spacing</strong> controls spacing between letters, and <strong>word-spacing</strong> controls spacing between words.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>p {
  letter-spacing: 3px;
  word-spacing: 10px;
}</code></pre>
      <p style="letter-spacing: 3px; word-spacing: 10px;">This text has 3px letter spacing and 10px word spacing.</p>
    </section>

    <!-- TEXT SHADOW -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🌟 Text Shadow</h2>
      <p>The <strong>text-shadow</strong> property adds shadows to text for a 3D effect.</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>h2 {
  text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
}</code></pre>
      <h2 style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);">Text with Shadow</h2>
    </section>

    <!-- SUMMARY -->
    <section style="margin-top: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧠 Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.7;">
        <li>✅ Use <code>color</code> to set text color.</li>
        <li>✅ Use <code>text-align</code> for horizontal alignment.</li>
        <li>✅ Use <code>text-decoration</code> for underline, overline, or strike-through.</li>
        <li>✅ Use <code>text-transform</code> to change letter case.</li>
        <li>✅ Use <code>letter-spacing</code> and <code>word-spacing</code> for spacing adjustments.</li>
        <li>✅ Use <code>text-shadow</code> to add depth and style to text.</li>
      </ul>
    </section>

    <!-- PRACTICE TASKS -->
    <section style="margin-top: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <ol style="font-size: 1.05rem; line-height: 1.8;">
        <li>Change the color of a paragraph to your favorite color.</li>
        <li>Center-align a heading and right-align a paragraph.</li>
        <li>Apply underline, overline, and strike-through to different words.</li>
        <li>Transform text to uppercase, lowercase, and capitalize.</li>
        <li>Experiment with letter-spacing and word-spacing.</li>
        <li>Add text-shadow to headings and observe the effect.</li>
      </ol>
    </section>

  </div>
  `,
  duration: '50 min',
  order: 9,
  tags: ['css', 'text', 'color', 'alignment', 'decoration', 'transformation', 'spacing', 'shadow', 'typography']
},
];
