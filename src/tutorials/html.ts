import { Tutorial } from '@/types';

export const htmlTutorials: Tutorial[] = [
 {
  id: '1',
  title: 'Introduction to HTML',
  description: 'Learn the fundamentals of HTML — its structure, importance, key tags, and how to create your very first web page.',
  slug: 'introduction-to-html',
  courseId: '1',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">1 : Introduction to HTML</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Welcome to your first HTML chapter! In this lesson, you'll learn what <strong style="color:#d93025;">HTML</strong> is, 
      why it’s important, and how to build your first web page from scratch.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You’ll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ What is <strong>HTML</strong> and its importance</li>
      <li>✅ HTML structure and syntax</li>
      <li>✅ Writing your first HTML page</li>
      <li>✅ Key tags: <code>&lt;!DOCTYPE&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;title&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code></li>
      <li>✅ What are HTML Elements & Empty Tags (like <code>&lt;br&gt;</code>)</li>
      <li>✅ HTML Version History — from 1989 to <strong>HTML5.2</strong></li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📘 What is HTML?</h2>
      <p style="margin-bottom: 20px; font-size: 1.1rem;">
        <strong>HTML (HyperText Markup Language)</strong> is the standard language used to create the structure of web pages. 
        It tells the browser how to display text, images, links, and other content.
      </p>

      <p style="margin-bottom: 15px;">Think of HTML as the <strong>skeleton</strong> of every website — it provides the basic framework that CSS and JavaScript bring to life.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>&lt;h1&gt;Welcome to HTML&lt;/h1&gt;
&lt;p&gt;HTML is the building block of the web.&lt;/p&gt;
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧩 Basic HTML Structure</h2>
      <p style="margin-bottom: 15px;">Every HTML document follows a specific structure that defines how the browser should interpret the content.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First HTML Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;p&gt;This is my very first web page.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>

      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem; margin-top:20px;">
        <tr style="background-color:#0073b1; color:#fff;">
          <th style="padding:12px;">Tag</th>
          <th style="padding:12px;">Purpose</th>
        </tr>
        <tr style="background-color:#eaf4fb;"><td><code>&lt;!DOCTYPE&gt;</code></td><td>Defines the document type as HTML5</td></tr>
        <tr style="background-color:#f5fbfe;"><td><code>&lt;html&gt;</code></td><td>Root element of the HTML page</td></tr>
        <tr style="background-color:#eaf4fb;"><td><code>&lt;head&gt;</code></td><td>Contains meta information and the title</td></tr>
        <tr style="background-color:#f5fbfe;"><td><code>&lt;body&gt;</code></td><td>Contains the visible page content</td></tr>
      </table>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🏷️ HTML Elements and Empty Tags</h2>
      <p style="margin-bottom: 15px;">An <strong>HTML element</strong> is everything between the opening and closing tags.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;p&gt;This is a paragraph element.&lt;/p&gt;</code></pre>

      <p style="margin-top: 20px;">Some tags are <strong>empty</strong> (self-closing) — they don’t have closing tags:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;br&gt;  &lt;!-- Inserts a line break --&gt;
&lt;img src="image.jpg" alt="Example"&gt;
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📜 HTML Version History</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li><strong>1989:</strong> Tim Berners-Lee invents HTML.</li>
        <li><strong>1995:</strong> HTML 2.0 — first standardized version.</li>
        <li><strong>1997–1999:</strong> HTML 3.2 and 4.01 add tables, forms, and scripting support.</li>
        <li><strong>2014:</strong> HTML5 — adds multimedia, semantic tags, and APIs.</li>
        <li><strong>2017–present:</strong> HTML5.2 with modern updates and accessibility improvements.</li>
      </ul>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧠 Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.6;">
        <li>✅ HTML builds the structure of every web page.</li>
        <li>✅ Understand key tags: <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>.</li>
        <li>✅ Elements can be nested or empty (like <code>&lt;br&gt;</code>).</li>
        <li>✅ HTML has evolved from 1989 to <strong>HTML5.2</strong>.</li>
      </ul>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Task</h2>
      <p>Create a new HTML file named <code>index.html</code> and write the following:</p>
      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First HTML Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello HTML!&lt;/h1&gt;
    &lt;p&gt;This is my first webpage.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
      <p>Save and open it in your browser — congratulations, you just created your first webpage! 🎉</p>
    </section>

  </div>
  `,
  duration: '20 min',
  order: 1,
  tags: ['html', 'web', 'elements', 'tags', 'structure', 'basics']
},

 {
  id: '2',
  title: 'HTML Basics',
  description: 'Learn about HTML headings, paragraphs, preformatted text, links, empty elements like <br> and <hr>, and understand HTML’s case insensitivity.',
  slug: 'html-basics-headings-paragraphs-links',
  courseId: '1',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">2: HTML Basics: Headings, Paragraphs & Links</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Today you’ll learn the fundamental HTML tags used to structure and format content — including headings, paragraphs, preformatted text, links, and empty elements like <strong style="color:#d93025;">&lt;br&gt;</strong> and <strong style="color:#d93025;">&lt;hr&gt;</strong>.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You’ll Learn</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Headings — from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code></li>
      <li>✅ Paragraphs and the <code>&lt;p&gt;</code> tag</li>
      <li>✅ Preformatted text using <code>&lt;pre&gt;</code></li>
      <li>✅ Links using the <code>&lt;a&gt;</code> tag</li>
      <li>✅ Empty elements like <code>&lt;br&gt;</code> and <code>&lt;hr&gt;</code></li>
      <li>✅ HTML’s case insensitivity</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Section 1: Headings -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">📘 HTML Headings</h2>
      <p style="font-size:1.1rem; margin-bottom: 20px;">
        Headings define the structure and hierarchy of content. 
        <code>&lt;h1&gt;</code> is the most important, while <code>&lt;h6&gt;</code> is the least important.
      </p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;"><code>&lt;h1&gt;This is Heading 1&lt;/h1&gt;
&lt;h2&gt;This is Heading 2&lt;/h2&gt;
&lt;h3&gt;This is Heading 3&lt;/h3&gt;
&lt;h4&gt;This is Heading 4&lt;/h4&gt;
&lt;h5&gt;This is Heading 5&lt;/h5&gt;
&lt;h6&gt;This is Heading 6&lt;/h6&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Create a webpage that displays all six heading levels with your name and course title.</p>
    </section>

    <!-- Section 2: Paragraphs -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">📝 HTML Paragraphs</h2>
      <p>Paragraphs are written using the <code>&lt;p&gt;</code> tag. They help organize text into readable sections.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;p&gt;Hello! My name is John Doe.&lt;/p&gt;
&lt;p&gt;I am learning Full Stack Web Development to become a skilled web developer.&lt;/p&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Write a short self-introduction using 2 paragraphs.</p>
    </section>

    <!-- Section 3: Preformatted Text -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🧩 The &lt;pre&gt; Tag</h2>
      <p>The <code>&lt;pre&gt;</code> tag preserves both spaces and line breaks, making it perfect for code, poetry, or formatted text.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;pre&gt;
  Roses are red,
    Violets are blue,
  I'm learning HTML,
    And so are you.
&lt;/pre&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Use <code>&lt;pre&gt;</code> to write a short poem or quote with custom spacing.</p>
    </section>

    <!-- Section 4: Links -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🔗 HTML Links</h2>
      <p>Links connect webpages and resources. Use the <code>&lt;a&gt;</code> tag and set the destination using the <code>href</code> attribute.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;a href="https://www.google.com"&gt;Google&lt;/a&gt;&lt;br&gt;
&lt;a href="https://www.youtube.com"&gt;YouTube&lt;/a&gt;&lt;br&gt;
&lt;a href="https://www.w3schools.com"&gt;W3Schools&lt;/a&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Create a list of 3 useful websites using <code>&lt;a&gt;</code> links.</p>
    </section>

    <!-- Section 5: Empty Elements -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🧱 Empty Elements</h2>
      <p>Some tags, like <code>&lt;br&gt;</code> (line break) and <code>&lt;hr&gt;</code> (horizontal rule), do not have closing tags. They’re called empty elements.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;p&gt;This is a paragraph with a&lt;br&gt;line break inside it.&lt;/p&gt;
&lt;hr&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Write a paragraph, break a line using <code>&lt;br&gt;</code>, and separate sections using <code>&lt;hr&gt;</code>.</p>
    </section>

    <!-- Section 6: Case Sensitivity -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🔠 HTML is Not Case Sensitive</h2>
      <p>HTML tags are not case-sensitive. Both <code>&lt;P&gt;</code> and <code>&lt;p&gt;</code> work, but lowercase is standard practice.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;P&gt;This is a paragraph using capital P.&lt;/P&gt;
&lt;p&gt;This is a paragraph using lowercase p.&lt;/p&gt;
</code></pre>
    </section>

    <!-- Final Task -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🏁 Final Task: Day 2 Assignment</h2>
      <p>Create a complete HTML page including:</p>
      <ul style="font-size:1.05rem; line-height:1.6; margin-bottom:20px;">
        <li>1️⃣ Your name in <code>&lt;h1&gt;</code></li>
        <li>2️⃣ Course title in <code>&lt;h2&gt;</code></li>
        <li>3️⃣ Two paragraphs about your goals</li>
        <li>4️⃣ Three links to favorite websites</li>
        <li>5️⃣ Use <code>&lt;br&gt;</code> and <code>&lt;hr&gt;</code></li>
        <li>6️⃣ A <code>&lt;pre&gt;</code> section with a quote or poem</li>
      </ul>
      <p>Save the file as <code>day2.html</code> and open it in your browser.</p>
    </section>

    

  </div>
  `,
  duration: '25 min',
  order: 2,
  tags: ['html', 'paragraphs', 'links', 'headings', 'basics', 'pre', 'empty-tags']
},

 {
  id: '3',
  title: 'HTML Comments, Images & Attributes',
  description: 'Learn about HTML comments, how to insert images using absolute and relative paths, use attributes like href, alt, and title, and understand the difference between relative and absolute links.',
  slug: 'html-comments-images-attributes',
  courseId: '1',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">
      3: HTML Comments, Images & Attributes
    </h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Today you'll learn how to add comments in HTML, insert images using the <strong style="color:#d93025;">&lt;img&gt;</strong> tag, 
      use attributes to add more information to elements, and differentiate between 
      <strong>relative</strong> and <strong>absolute</strong> links.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You’ll Learn</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ HTML Comments — adding notes without displaying them on the page</li>
      <li>✅ Images — using <code>&lt;img&gt;</code> with <code>src</code> and <code>alt</code></li>
      <li>✅ Attributes — providing additional details for elements</li>
      <li>✅ Relative vs Absolute Links — internal vs external URLs</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Section 7: Comments -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">💬 HTML Comments</h2>
      <p style="font-size:1.1rem; margin-bottom: 20px;">
        Comments in HTML are not visible to users but are helpful for developers to understand or organize code.
      </p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;!-- This is a comment. It will not appear on the webpage. --&gt;
&lt;p&gt;This is visible text.&lt;/p&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Add a comment above each major section in your HTML code describing what it does.</p>
    </section>

    <!-- Section 8: Images -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🖼️ HTML Images</h2>
      <p style="font-size:1.1rem;">Images are inserted with the <code>&lt;img&gt;</code> tag. It’s an empty tag, meaning it doesn’t need a closing tag.</p>

      <ul>
        <li><code>src</code> — path to the image</li>
        <li><code>alt</code> — text shown if the image fails to load</li>
        <li><code>width</code> / <code>height</code> — size control</li>
      </ul>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools Logo" width="200"&gt;</code></pre>

      <p><strong>✅ Task:</strong> Add one image to your webpage using both an online link (absolute path) and one from your project folder (relative path).</p>
    </section>

    <!-- Section 9: HTML Attributes -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🏷️ HTML Attributes</h2>
      <p>Attributes give extra meaning or behavior to elements. They are written inside the opening tag.</p>

      <ul style="line-height:1.6;">
        <li><strong>href</strong> — URL for links</li>
        <li><strong>src</strong> — source path for images</li>
        <li><strong>alt</strong> — alternative text for images</li>
        <li><strong>title</strong> — tooltip shown on hover</li>
      </ul>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;a href="https://example.com" title="Visit Example" target="_blank"&gt;Hover me&lt;/a&gt;
&lt;img src="https://via.placeholder.com/150" alt="Placeholder Image" title="This is a sample image"&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Use at least 3 attributes (like <code>href</code>, <code>title</code>, <code>target</code>, <code>alt</code>) and check their effect.</p>
    </section>

    <!-- Section 10: Relative vs Absolute Links -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🌐 Relative vs Absolute Links</h2>
      <p>An absolute link includes the full URL starting with <code>http://</code> or <code>https://</code>, while a relative link points to files within your own project folder.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;">
<code>&lt;!-- Absolute Link --&gt;
&lt;a href="https://www.mozilla.org" target="_blank"&gt;Visit Mozilla (Absolute)&lt;/a&gt;

&lt;!-- Relative Link --&gt;
&lt;a href="./about.html"&gt;Go to About Page (Relative)&lt;/a&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Create one relative link to a local HTML file and one absolute link to an external website.</p>
    </section>

    <!-- Final Task -->
    <section>
      <h2 style="color:#0073b1;">🏁 Final Task: Day 3 Assignment</h2>
      <p>Create a complete HTML page that includes:</p>
      <ul style="font-size:1.05rem; line-height:1.6; margin-bottom:20px;">
        <li>1️⃣ Comments for each section</li>
        <li>2️⃣ One absolute and one relative image</li>
        <li>3️⃣ Use at least three attributes on elements</li>
        <li>4️⃣ Add both absolute and relative links</li>
      </ul>
      <p>Save the file as <code>day3.html</code> and open it in your browser.</p>
    </section>

  </div>
  `,
  duration: '30 min',
  order: 3,
  tags: ['html', 'comments', 'images', 'attributes', 'links', 'relative', 'absolute']
}
,{
  id: '4',
  title: 'HTML Favicon, Title & Text Formatting',
  description: 'Learn how to add a favicon and title to your webpage and explore various text formatting tags like bold, italic, underline, highlight, and more to make your content visually engaging.',
  slug: 'html-favicon-title-text-formatting',
  courseId: '1',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">
      4: HTML Favicon, Title & Text Formatting
    </h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Today you’ll learn how to personalize your webpage with a <strong>favicon</strong>, set a <strong>title</strong> for your tab, 
      and format your text using various <strong>HTML formatting tags</strong> for styling and emphasis.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You’ll Learn</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Add a favicon using the <code>&lt;link&gt;</code> tag</li>
      <li>✅ Define a title for your web page</li>
      <li>✅ Use text formatting tags like <b>&lt;b&gt;</b>, <i>&lt;i&gt;</i>, <u>&lt;u&gt;</u>, <mark>&lt;mark&gt;</mark>, and more</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Section 11: HTML Favicon -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🌟 HTML Favicon</h2>
      <p style="font-size:1.1rem;">
        A favicon is the small icon displayed in the browser tab next to your website’s title. 
        It helps users identify your site easily.
      </p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;!-- Place inside the &lt;head&gt; section --&gt;
&lt;link rel="icon" href="https://www.w3schools.com/favicon.ico" type="image/x-icon"&gt;
&lt;!-- Or use a local file --&gt;
&lt;link rel="icon" href="./favicon.ico" type="image/x-icon"&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Add a favicon to your HTML page using either an online link or a local file.</p>
    </section>

    <!-- Section 12: HTML Title -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">📝 HTML Title</h2>
      <p style="font-size:1.1rem;">
        The <code>&lt;title&gt;</code> tag defines the name shown in your browser tab. 
        It also helps search engines understand the page content.
      </p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>&lt;title&gt;My HTML Practice Page&lt;/title&gt;</code></pre>

      <p><strong>✅ Task:</strong> Change your webpage’s title to reflect its purpose and check it in the browser tab.</p>
    </section>

    <!-- Section 13: HTML Text Formatting -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🖋️ HTML Text Formatting</h2>
      <p style="font-size:1.1rem;">HTML provides several tags to make your text <strong>stand out</strong>, look <em>stylish</em>, or appear <u>highlighted</u>.</p>

      <ul style="line-height:1.6;">
        <li><strong>&lt;b&gt;</strong> — Bold text</li>
        <li><strong>&lt;i&gt;</strong> — Italic text</li>
        <li><strong>&lt;u&gt;</strong> — Underlined text</li>
        <li><strong>&lt;mark&gt;</strong> — Highlighted text</li>
        <li><strong>&lt;small&gt;</strong> — Smaller text</li>
        <li><strong>&lt;del&gt;</strong> — Strikethrough text</li>
        <li><strong>&lt;ins&gt;</strong> — Inserted (underlined) text</li>
        <li><strong>&lt;sub&gt;</strong> — Subscript text (H<sub>2</sub>O)</li>
        <li><strong>&lt;sup&gt;</strong> — Superscript text (x<sup>2</sup>)</li>
      </ul>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;p&gt;This is &lt;b&gt;bold&lt;/b&gt;, &lt;i&gt;italic&lt;/i&gt;, and &lt;mark&gt;highlighted&lt;/mark&gt; text.&lt;br&gt;
You can also use &lt;sub&gt;subscript&lt;/sub&gt; and &lt;sup&gt;superscript&lt;/sup&gt; for scientific text.&lt;/p&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Write a paragraph using at least 5 different formatting tags to style words differently.</p>
    </section>

    <!-- Final Task -->
    <section>
      <h2 style="color:#0073b1;">🏁 Final Task: Day 4 Assignment</h2>
      <p>Create a complete HTML page that includes:</p>
      <ul style="font-size:1.05rem; line-height:1.6; margin-bottom:20px;">
        <li>1️⃣ Add a favicon in the <code>&lt;head&gt;</code> section</li>
        <li>2️⃣ Set a descriptive page title</li>
        <li>3️⃣ Write one paragraph with at least five formatting tags</li>
      </ul>
      <p>Save the file as <code>day4.html</code> and open it in your browser to test your code.</p>
    </section>

  </div>
  `,
  duration: '35 min',
  order: 4,
  tags: ['html', 'favicon', 'title', 'text-formatting', 'bold', 'italic', 'underline']
}
,
{
  id: '5',
  title: 'HTML Lists: Unordered, Ordered & Description Lists',
  description: 'Learn how to create and customize lists in HTML, including unordered lists with bullets, ordered lists with numbering styles, and description lists for definitions or terms.',
  slug: 'html-lists-unordered-ordered-description',
  courseId: '1',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">
      5: HTML Lists — Unordered, Ordered & Description Lists
    </h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Today you’ll learn how to organize content using <strong>lists</strong> in HTML — including bullet lists, numbered lists, and definition lists.
      Lists make content structured, readable, and well-organized.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You’ll Learn</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Unordered lists using <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code></li>
      <li>✅ Ordered lists using <code>&lt;ol&gt;</code> and <code>&lt;li&gt;</code></li>
      <li>✅ Description lists using <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, and <code>&lt;dd&gt;</code></li>
      <li>✅ Customize bullet and numbering styles using <code>type</code> and <code>start</code> attributes</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Section 14: Unordered List -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">📋 Unordered List (<code>&lt;ul&gt;</code>)</h2>
      <p style="font-size:1.1rem;">
        Unordered lists display items with bullet points. 
        You can change the bullet style using the <code>type</code> attribute: <strong>disc</strong>, <strong>circle</strong>, or <strong>square</strong>.
      </p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;h2&gt;Unordered List&lt;/h2&gt;
&lt;ul type="square"&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Create an unordered list of your 3 favorite foods using the <code>type="circle"</code> attribute.</p>
    </section>

    <!-- Section 15: Ordered List -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🔢 Ordered List (<code>&lt;ol&gt;</code>)</h2>
      <p style="font-size:1.1rem;">
        Ordered lists display items with numbers or letters. 
        You can change numbering style using the <code>type</code> attribute and even set a custom starting number with <code>start</code>.
      </p>

      <ul>
        <li><code>type="1"</code> — Numbers (default)</li>
        <li><code>type="A"</code> — Uppercase letters</li>
        <li><code>type="a"</code> — Lowercase letters</li>
        <li><code>type="I"</code> — Uppercase Roman numerals</li>
        <li><code>type="i"</code> — Lowercase Roman numerals</li>
      </ul>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;h2&gt;Ordered List&lt;/h2&gt;
&lt;ol type="i" start="10"&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ol&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Create an ordered list of your top 5 learning goals using <code>type="A"</code>.</p>
    </section>

    <!-- Section 16: Description List -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🧾 Description List (<code>&lt;dl&gt;</code>)</h2>
      <p style="font-size:1.1rem;">
        Description lists are used to define terms and their descriptions — perfect for glossaries or definitions.
      </p>

      <ul>
        <li><code>&lt;dl&gt;</code> — wraps the entire list</li>
        <li><code>&lt;dt&gt;</code> — defines the term (like a title)</li>
        <li><code>&lt;dd&gt;</code> — describes the term</li>
      </ul>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;dl&gt;
  &lt;dt&gt;Tea&lt;/dt&gt;
  &lt;dd&gt;A drink made from tea leaves and water.&lt;/dd&gt;
&lt;/dl&gt;
</code></pre>

      <p><strong>✅ Task:</strong> Create a description list for 3 programming languages and what they are used for.</p>
    </section>

    <!-- Final Task -->
    <section>
      <h2 style="color:#0073b1;">🏁 Final Task: Day 5 Assignment</h2>
      <p>Create a complete HTML page that includes:</p>
      <ul style="font-size:1.05rem; line-height:1.6; margin-bottom:20px;">
        <li>1️⃣ An unordered list of your favorite fruits or hobbies</li>
        <li>2️⃣ An ordered list of your top learning goals</li>
        <li>3️⃣ A description list defining at least 3 terms</li>
      </ul>
      <p>Save the file as <code>day5.html</code> and open it in your browser.</p>
    </section>

  </div>
  `,
  duration: '35 min',
  order: 5,
  tags: ['html', 'lists', 'ul', 'ol', 'dl', 'unordered', 'ordered', 'description']
}
,
{
  id: '6',
  title: 'HTML Tables: Structure, Borders & Spanning',
  description: 'Learn how to create tables in HTML with borders, column and row spanning, and organize data neatly with table headers and rows.',
  slug: 'html-tables-structure-borders-spanning',
  courseId: '1',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; background-color: #ffffff;">
    
    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">
      6: HTML Tables — Structure, Borders & Spanning
    </h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Tables allow you to organize data in rows and columns. In this lesson, you’ll learn how to build clean and structured tables with headers, borders, and spanning options.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You’ll Learn</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Creating tables using <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code></li>
      <li>✅ Adding table borders and using <code>border-collapse</code></li>
      <li>✅ Adjusting width and alignment for a neat layout</li>
      <li>✅ Using <code>colspan</code> and <code>rowspan</code> to merge cells</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Example Table -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">📊 Example: HTML Table</h2>
      <p style="font-size:1.1rem;">
        Here’s a sample HTML table showing students’ information. It includes <code>rowspan</code> and <code>colspan</code> for better structure.
      </p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th rowspan="2"&gt;S.N.&lt;/th&gt;
    &lt;th colspan="2"&gt;Full Name&lt;/th&gt;
    &lt;th rowspan="2"&gt;Age&lt;/th&gt;
    &lt;th rowspan="2"&gt;Gender&lt;/th&gt;
  &lt;/tr&gt;

  &lt;tr&gt;
    &lt;th&gt;First Name&lt;/th&gt;
    &lt;th&gt;Last Name&lt;/th&gt;
  &lt;/tr&gt;

  &lt;tr&gt;
    &lt;td&gt;1&lt;/td&gt;
    &lt;td&gt;Ravi&lt;/td&gt;
    &lt;td&gt;Singh&lt;/td&gt;
    &lt;td&gt;17&lt;/td&gt;
    &lt;td&gt;Male&lt;/td&gt;
  &lt;/tr&gt;

  &lt;tr&gt;
    &lt;td&gt;2&lt;/td&gt;
    &lt;td&gt;Rahul&lt;/td&gt;
    &lt;td&gt;Singh&lt;/td&gt;
    &lt;td&gt;18&lt;/td&gt;
    &lt;td&gt;Male&lt;/td&gt;
  &lt;/tr&gt;

  &lt;tr&gt;
    &lt;td&gt;3&lt;/td&gt;
    &lt;td&gt;Kritika&lt;/td&gt;
    &lt;td&gt;Kanwar&lt;/td&gt;
    &lt;td&gt;18&lt;/td&gt;
    &lt;td&gt;Female&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code></pre>

      <p style="margin-top:20px;">
        ✅ In this example:
        <ul>
          <li><code>rowspan="2"</code> merges two rows vertically for "S.N."</li>
          <li><code>colspan="2"</code> merges two columns horizontally for "Full Name"</li>
          <li><code>border-collapse: collapse;</code> removes double borders</li>
        </ul>
      </p>
    </section>

    <!-- Styling -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🎨 Styling the Table</h2>
      <p>To make the table look better, you can style it with CSS:</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

table {
  width: 100%;
}
</code></pre>

      <p>This ensures all borders join neatly, and the table takes the full width of the page.</p>
    </section>

    <!-- Task -->
    <section>
      <h2 style="color:#0073b1;">🏁 Final Task: Day 6 Assignment</h2>
      <ul style="font-size:1.05rem; line-height:1.6; margin-bottom:20px;">
        <li>1️⃣ Create a table showing student or employee information (at least 5 rows)</li>
        <li>2️⃣ Use both <code>colspan</code> and <code>rowspan</code></li>
        <li>3️⃣ Apply a border and set <code>width: 100%</code></li>
      </ul>
      <p>Save the file as <code>day6.html</code> and view it in your browser.</p>
    </section>

  </div>
  `,
  duration: '40 min',
  order: 6,
  tags: ['html', 'tables', 'rowspan', 'colspan', 'border', 'table layout']
}
,
{
  id: '7',
  title: 'HTML iFrame & Linking Pages',
  description: 'Learn how to embed one webpage inside another using the HTML iframe element, and connect pages with links using the anchor tag and target attributes.',
  slug: 'html-iframe-and-linking-pages',
  courseId: '1',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; background-color: #ffffff;">
    
    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">
      7: HTML iFrame & Linking Pages
    </h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this lesson, you’ll learn how to use the <strong>&lt;iframe&gt;</strong> tag to embed another webpage inside your current page. You’ll also understand how links and targets work to open pages in new tabs or inside frames.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You’ll Learn</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ What an <code>&lt;iframe&gt;</code> is and how it works</li>
      <li>✅ Linking between multiple HTML pages</li>
      <li>✅ Using <code>target="_blank"</code> to open links in new tabs</li>
      <li>✅ Embedding a local HTML file inside another webpage</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- iFrame Example -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🪟 Example: Embedding a Page with iFrame</h2>
      <p style="font-size:1.1rem;">
        The <code>&lt;iframe&gt;</code> element lets you display another webpage inside your current one. It can load local or external pages.
      </p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;iFrame Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;iFrame Example&lt;/h1&gt;

  &lt;a href="./about.html" target="_blank"&gt;Open About Page&lt;/a&gt;

  &lt;br&gt;&lt;br&gt;

  &lt;iframe src="./about.html" frameborder="10" width="500px" height="400px"&gt;&lt;/iframe&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

      <p>
        ✅ The <code>src</code> attribute specifies the page to embed.<br>
        ✅ <code>frameborder</code> sets the border thickness.<br>
        ✅ <code>width</code> and <code>height</code> control the iframe size.
      </p>
    </section>

    <!-- about.html file -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">📄 The Embedded Page (about.html)</h2>
      <p>Here’s what the <code>about.html</code> file might look like — this will be displayed inside the iframe.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;About Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;About Page&lt;/h1&gt;
  &lt;p&gt;Welcome to the About Page! This page is loaded inside an iframe from another file.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
    </section>

    <!-- Practical Task -->
    <section>
      <h2 style="color:#0073b1;">🏁 Final Task: Day 7 Assignment</h2>
      <ul style="font-size:1.05rem; line-height:1.6; margin-bottom:20px;">
        <li>1️⃣ Create a main page (e.g. <code>iframe.html</code>) that embeds another local page (<code>about.html</code>)</li>
        <li>2️⃣ Add a link that opens the same about page in a new tab</li>
        <li>3️⃣ Customize iframe border and dimensions</li>
      </ul>
      <p>Save both files (<code>iframe.html</code> and <code>about.html</code>) and open the main file in your browser to see the embedded page.</p>
    </section>

  </div>
  `,
  duration: '25 min',
  order: 7,
  tags: ['html', 'iframe', 'links', 'embedding', 'target', 'about page']
}
,
{
  id: '8',
  title: 'HTML Audio & Video',
  description: 'Learn how to embed audio and video files in your webpage using the <audio> and <video> tags, and how to embed YouTube videos with iframes.',
  slug: 'html-audio-and-video',
  courseId: '1',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">
      8: HTML Audio & Video
    </h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      In this lesson, you’ll learn how to embed multimedia content in your webpage, including audio, video, and YouTube videos using HTML tags and iframes.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You’ll Learn</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Embedding video files with the <code>&lt;video&gt;</code> tag</li>
      <li>✅ Embedding audio files with the <code>&lt;audio&gt;</code> tag</li>
      <li>✅ Using controls, autoplay, loop, and muted attributes</li>
      <li>✅ Embedding YouTube videos using <code>&lt;iframe&gt;</code></li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Video Section -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🎬 Video Section</h2>
      <p style="font-size:1.1rem;">Use the <code>&lt;video&gt;</code> tag to display a video with optional controls, loop, and width settings.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;video width="400px" controls loop&gt;
  &lt;source src="./video.mp4" type="video/mp4"&gt;
&lt;/video&gt;
</code></pre>
    </section>

    <!-- Audio Section -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🎵 Audio Section</h2>
      <p style="font-size:1.1rem;">The <code>&lt;audio&gt;</code> tag allows you to add audio files with controls, loop, and mute options.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;audio controls loop muted&gt;
  &lt;source src="./audio.mp3" type="audio/mp3"&gt;
&lt;/audio&gt;
</code></pre>
    </section>

    <!-- YouTube Video Section -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">📺 YouTube Video</h2>
      <p style="font-size:1.1rem;">Embed YouTube videos in your page using an <code>&lt;iframe&gt;</code> with the video URL.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;iframe src="https://www.youtube.com/embed/1yaDuKmWBno?autoplay=1&mute=1" frameborder="0"&gt;&lt;/iframe&gt;
</code></pre>
    </section>

    <!-- Final Task -->
    <section>
      <h2 style="color:#0073b1;">🏁 Final Task: Day 8 Assignment</h2>
      <ul style="font-size:1.05rem; line-height:1.6; margin-bottom:20px;">
        <li>1️⃣ Embed a local video using the <code>&lt;video&gt;</code> tag with controls and loop</li>
        <li>2️⃣ Embed a local audio file using the <code>&lt;audio&gt;</code> tag with controls, loop, and muted attributes</li>
        <li>3️⃣ Embed a YouTube video using an <code>&lt;iframe&gt;</code></li>
      </ul>
      <p>Save your HTML file and open it in a browser to test audio, video, and YouTube playback.</p>
    </section>

  </div>
  `,
  duration: '25 min',
  order: 8,
  tags: ['html', 'audio', 'video', 'multimedia', 'youtube', 'iframe']
}
,
{
  id: '9',
  title: 'HTML Forms',
  description: 'Learn about HTML forms, including the <form> tag, input fields like email and password, using attributes such as placeholder, required, and name, and creating a submit button.',
  slug: 'html-forms-inputs-buttons',
  courseId: '1',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">
      9: HTML Forms
    </h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Today you will learn how to create forms in HTML to collect user input, including email and password fields, using attributes and a submit button.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You’ll Learn</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Introduction to HTML Forms</li>
      <li>✅ The <code>&lt;form&gt;</code> tag and its purpose</li>
      <li>✅ Adding input fields: Email & Password</li>
      <li>✅ Using attributes like <code>placeholder</code>, <code>required</code>, and <code>name</code></li>
      <li>✅ Creating a Submit button</li>
      <li>✅ Basic form structure & best practices</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Section 1: Form Tag -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">📝 The &lt;form&gt; Tag</h2>
      <p style="font-size:1.1rem;">The <code>&lt;form&gt;</code> tag wraps all input elements and allows the submission of data to a server.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;form action="/submit" method="POST"&gt;
  ...
&lt;/form&gt;
</code></pre>
    </section>

    <!-- Section 2: Input Fields -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">📥 Input Fields</h2>
      <p style="font-size:1.1rem;">Input fields are added with the <code>&lt;input&gt;</code> tag. You can specify type, placeholder, name, and whether the field is required.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" placeholder="Enter your email" required&gt;

  &lt;label for="password"&gt;Password:&lt;/label&gt;
  &lt;input type="password" id="password" name="password" placeholder="Enter your password" required&gt;

  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre>
    </section>

    <!-- Section 3: Best Practices -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">💡 Best Practices</h2>
      <ul style="font-size:1.05rem; line-height:1.6;">
        <li>Use labels for accessibility.</li>
        <li>Include <code>required</code> for mandatory fields.</li>
        <li>Use semantic input types like <code>email</code> and <code>password</code>.</li>
        <li>Keep your form structure clean and organized.</li>
      </ul>
    </section>

    <!-- Final Task -->
    <section>
      <h2 style="color:#0073b1;">🏁 Final Task: Day 9 Assignment</h2>
      <ul style="font-size:1.05rem; line-height:1.6; margin-bottom:20px;">
        <li>1️⃣ Create a form with Email and Password fields</li>
        <li>2️⃣ Add placeholders and required attributes</li>
        <li>3️⃣ Include a Submit button</li>
        <li>4️⃣ Use labels and maintain proper structure</li>
      </ul>
      <p>Save your file as <code>day9.html</code> and test it in your browser.</p>
    </section>

  </div>
  `,
  duration: '30 min',
  order: 9,
  tags: ['html', 'forms', 'input', 'email', 'password', 'submit', 'best-practices']
}
,
{
  id: '10',
  title: 'Advanced HTML Form Elements & Input Types',
  description: 'Learn how to create interactive HTML forms using radio buttons, checkboxes, dropdowns, textarea, and all HTML input types with proper labels and best practices.',
  slug: 'html-forms-all-inputs',
  courseId: '1',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">
      10: Advanced HTML Form Elements & Input Types
    </h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Today we’ll explore all HTML form input types, radio buttons, checkboxes, dropdown menus, and textarea fields to create fully interactive forms.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You’ll Learn</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ All HTML input types: text, email, password, number, date, color, file, url, hidden, range, checkbox, radio, submit, reset, button</li>
      <li>✅ Creating radio buttons and checkboxes</li>
      <li>✅ Using select & option tags for dropdowns</li>
      <li>✅ Adding textarea for multi-line input</li>
      <li>✅ Using label & for attributes for better accessibility</li>
      <li>✅ Best practices for HTML forms</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Section 1: Input Types -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🖊️ HTML Input Types</h2>
      <p>Input fields allow users to enter different types of data. Use the <code>type</code> attribute to specify the kind of input.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;form&gt;
  &lt;label for="text"&gt;Text:&lt;/label&gt;
  &lt;input type="text" id="text" name="text"&gt;&lt;br&gt;

  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" placeholder="example@mail.com" required&gt;&lt;br&gt;

  &lt;label for="password"&gt;Password:&lt;/label&gt;
  &lt;input type="password" id="password" name="password" required&gt;&lt;br&gt;

  &lt;label for="number"&gt;Number:&lt;/label&gt;
  &lt;input type="number" id="number" name="number" min="1" max="100"&gt;&lt;br&gt;

  &lt;label for="date"&gt;Date:&lt;/label&gt;
  &lt;input type="date" id="date" name="date"&gt;&lt;br&gt;

  &lt;label for="color"&gt;Color:&lt;/label&gt;
  &lt;input type="color" id="color" name="color"&gt;&lt;br&gt;

  &lt;label for="file"&gt;File:&lt;/label&gt;
  &lt;input type="file" id="file" name="file"&gt;&lt;br&gt;

  &lt;label for="url"&gt;Website:&lt;/label&gt;
  &lt;input type="url" id="url" name="url" placeholder="https://example.com"&gt;&lt;br&gt;

  &lt;input type="hidden" name="userid" value="12345"&gt;&lt;br&gt;

  &lt;label for="range"&gt;Range:&lt;/label&gt;
  &lt;input type="range" id="range" name="range" min="0" max="100"&gt;&lt;br&gt;

  &lt;input type="submit" value="Submit"&gt;
  &lt;input type="reset" value="Reset"&gt;
  &lt;input type="button" value="Click Me"&gt;
&lt;/form&gt;
</code></pre>
    </section>

    <!-- Section 2: Radio Buttons -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🔘 Radio Buttons</h2>
      <p>Allow single-choice selection from multiple options.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;label&gt;
  &lt;input type="radio" name="gender" value="male"&gt; Male
&lt;/label&gt;
&lt;label&gt;
  &lt;input type="radio" name="gender" value="female"&gt; Female
&lt;/label&gt;
</code></pre>
    </section>

    <!-- Section 3: Checkboxes -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">☑️ Checkboxes</h2>
      <p>Allow multiple selections from multiple options.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;label&gt;
  &lt;input type="checkbox" name="hobby" value="reading"&gt; Reading
&lt;/label&gt;
&lt;label&gt;
  &lt;input type="checkbox" name="hobby" value="traveling"&gt; Traveling
&lt;/label&gt;
</code></pre>
    </section>

    <!-- Section 4: Dropdown -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🔽 Dropdown Menu</h2>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;label for="country"&gt;Country:&lt;/label&gt;
&lt;select id="country" name="country"&gt;
  &lt;option value="india"&gt;India&lt;/option&gt;
  &lt;option value="usa"&gt;USA&lt;/option&gt;
  &lt;option value="uk"&gt;UK&lt;/option&gt;
&lt;/select&gt;
</code></pre>
    </section>

    <!-- Section 5: Textarea -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">📝 Textarea</h2>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto;">
<code>&lt;label for="message"&gt;Message:&lt;/label&gt;
&lt;textarea id="message" name="message" rows="4" cols="50" placeholder="Type your message here"&gt;&lt;/textarea&gt;
</code></pre>
    </section>

    <!-- Final Task -->
    <section>
      <h2 style="color:#0073b1;">🏁 Final Task: Day 10 Assignment</h2>
      <ul style="font-size:1.05rem; line-height:1.6;">
        <li>1️⃣ Create a complete form using all input types, radio buttons, checkboxes, dropdown, and textarea</li>
        <li>2️⃣ Use labels with <code>for</code> attributes for all inputs</li>
        <li>3️⃣ Ensure proper validation with attributes like <code>required</code>, <code>min</code>, <code>max</code>, <code>placeholder</code></li>
        <li>4️⃣ Test your form in a browser for usability and accessibility</li>
      </ul>
      <p>Save your file as <code>day10.html</code> and test it in your browser.</p>
    </section>

  </div>
  `,
  duration: '45 min',
  order: 10,
  tags: ['html', 'forms', 'input-types', 'radio', 'checkbox', 'select', 'textarea', 'accessibility', 'validation']
}
,
{
  id: '11',
  title: 'HTML Block, Inline & Semantic Elements',
  description: 'Learn the difference between block and inline elements, how to use id and class attributes, and understand the importance of semantic tags like header, nav, article, and footer for SEO and accessibility.',
  slug: 'html-block-inline-semantic',
  courseId: '1',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">
      11: HTML Block, Inline & Semantic Elements
    </h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Today we’ll explore the difference between block and inline elements, learn how to use <strong>id</strong> and <strong>class</strong> for styling, and understand the role of semantic tags for better SEO and accessibility.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You’ll Learn</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ Difference between Block & Inline Elements</li>
      <li>✅ Using <code>id</code> and <code>class</code> attributes in HTML</li>
      <li>✅ Semantic tags: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code></li>
      <li>✅ Importance of semantic HTML for SEO and accessibility</li>
      <li>✅ Practical examples and use cases</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <!-- Section 1: Block vs Inline -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">📦 Block vs Inline Elements</h2>
      <p>Block elements take the full width and start on a new line, while inline elements only take the width of their content and flow within a line.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;">
<code>&lt;div&gt;This is a block element.&lt;/div&gt;
&lt;p&gt;Another block element.&lt;/p&gt;
&lt;span&gt;This is an inline element.&lt;/span&gt;
&lt;a href="#"&gt;Inline link&lt;/a&gt;
</code></pre>
    </section>

    <!-- Section 2: ID and Class -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🏷️ Using ID and Class</h2>
      <p>Use <code>id</code> for unique elements and <code>class</code> for reusable groups of elements. These attributes help with styling and JavaScript targeting.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;">
<code>&lt;div id="header"&gt;Header Section&lt;/div&gt;
&lt;div class="card"&gt;Card 1&lt;/div&gt;
&lt;div class="card"&gt;Card 2&lt;/div&gt;
</code></pre>
    </section>

    <!-- Section 3: Semantic Tags -->
    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1;">🌐 Semantic HTML Tags</h2>
      <p>Semantic tags give meaning to your content. They improve accessibility, SEO, and make your HTML easier to read.</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;">
<code>&lt;header&gt;
  &lt;h1&gt;Website Title&lt;/h1&gt;
&lt;/header&gt;

&lt;nav&gt;
  &lt;a href="#"&gt;Home&lt;/a&gt;
  &lt;a href="#"&gt;About&lt;/a&gt;
&lt;/nav&gt;

&lt;article&gt;
  &lt;h2&gt;Article Title&lt;/h2&gt;
  &lt;p&gt;Article content goes here.&lt;/p&gt;
&lt;/article&gt;

&lt;footer&gt;
  &lt;p&gt;Copyright © 2025&lt;/p&gt;
&lt;/footer&gt;
</code></pre>
    </section>

    <!-- Final Task -->
    <section>
      <h2 style="color:#0073b1;">🏁 Final Task: Day 11 Assignment</h2>
      <ul style="font-size:1.05rem; line-height:1.6;">
        <li>1️⃣ Create an HTML page demonstrating block vs inline elements</li>
        <li>2️⃣ Use <code>id</code> and <code>class</code> for styling multiple elements</li>
        <li>3️⃣ Implement header, nav, article, and footer semantic tags</li>
        <li>4️⃣ Ensure your HTML is readable and accessible</li>
      </ul>
      <p>Save the file as <code>day11.html</code> and open it in your browser.</p>
    </section>

  </div>
  `,
  duration: '35 min',
  order: 11,
  tags: ['html', 'block', 'inline', 'id', 'class', 'semantic', 'header', 'nav', 'article', 'footer', 'seo', 'accessibility']
}


];
