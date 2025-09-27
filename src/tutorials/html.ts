import { Tutorial } from '@/types';

export const htmlTutorials: Tutorial[] = [
 {
    id: '1',
    title: 'HTML Fundamentals',
    description: 'Learn the basic structure and syntax of HTML',
    slug: 'html-fundamentals',
    courseId: '1',
    content: `
      <h1>HTML Fundamentals</h1>
      <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It describes the structure of a web page using markup tags.</p>
      
      <h2>What is HTML?</h2>
      <p>HTML uses elements to structure content. Each element is defined by tags that tell the browser how to display or structure the content.</p>
      
      <h2>Basic HTML Structure</h2>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My First Web Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;p&gt;This is my first paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <h2>Key Elements</h2>
      <ul>
        <li><strong>&lt;!DOCTYPE html&gt;:</strong> Declares HTML5 document type</li>
        <li><strong>&lt;html&gt;:</strong> Root element of the page</li>
        <li><strong>&lt;head&gt;:</strong> Contains metadata about the document</li>
        <li><strong>&lt;body&gt;:</strong> Contains the visible page content</li>
      </ul>
      
      <h2>Next Steps</h2>
      <p>In the next tutorial, we'll explore HTML headings and paragraphs in detail.</p>
    `,
    duration: '12 min',
    order: 1,
    tags: ['html', 'basics', 'structure', 'fundamentals']
  },

  {
    id: '2',
    title: 'HTML Headings and Paragraphs',
    description: 'Master HTML headings, paragraphs, and text formatting',
    slug: 'html-headings-paragraphs',
    courseId: '1',
    content: `
      <h1>HTML Headings and Paragraphs</h1>
      <p>Headings and paragraphs are fundamental elements for structuring text content in HTML. They provide semantic meaning and help organize your content hierarchically.</p>
      
      <h2>HTML Headings</h2>
      <p>HTML provides six levels of headings, from &lt;h1&gt; (most important) to &lt;h6&gt; (least important).</p>
      
      <pre><code>&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Section Heading&lt;/h2&gt;
&lt;h3&gt;Subsection Heading&lt;/h3&gt;
&lt;h4&gt;Sub-subsection&lt;/h4&gt;
&lt;h5&gt;Minor Heading&lt;/h5&gt;
&lt;h6&gt;Smallest Heading&lt;/h6&gt;</code></pre>
      
      <h2>HTML Paragraphs</h2>
      <p>The &lt;p&gt; element represents a paragraph of text. Browsers automatically add space before and after paragraphs.</p>
      
      <pre><code>&lt;p&gt;This is a paragraph of text.&lt;/p&gt;
&lt;p&gt;This is another paragraph with some &lt;strong&gt;bold text&lt;/strong&gt; and &lt;em&gt;italic text&lt;/em&gt;.&lt;/p&gt;</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use only one &lt;h1&gt; per page</li>
        <li>Don't skip heading levels (h1 → h3)</li>
        <li>Use headings for structure, not styling</li>
        <li>Keep paragraphs focused on one idea</li>
      </ul>
      
      <h2>Next Steps</h2>
      <p>Next, we'll learn about creating links and navigation in HTML.</p>
    `,
    duration: '10 min',
    order: 2,
    tags: ['html', 'headings', 'paragraphs', 'text', 'formatting']
  },

  {
    id: '3',
    title: 'HTML Links and Navigation',
    description: 'Create hyperlinks and build navigation menus',
    slug: 'html-links-navigation',
    courseId: '1',
    content: `
      <h1>HTML Links and Navigation</h1>
      <p>Links are what make the web "web-like" - they connect pages and resources together. The &lt;a&gt; element creates hyperlinks to other pages, files, email addresses, or locations within the same page.</p>
      
      <h2>Basic Link Syntax</h2>
      <p>The &lt;a&gt; element uses the href attribute to specify the destination:</p>
      
      <pre><code>&lt;!-- Link to another website --&gt;
&lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;

&lt;!-- Link to another page on your site --&gt;
&lt;a href="about.html"&gt;About Us&lt;/a&gt;

&lt;!-- Link to an email address --&gt;
&lt;a href="mailto:contact@example.com"&gt;Send Email&lt;/a&gt;</code></pre>
      
      <h2>Link Attributes</h2>
      <ul>
        <li><strong>href:</strong> Specifies the destination URL</li>
        <li><strong>target:</strong> Defines where to open the link (_blank for new tab)</li>
        <li><strong>title:</strong> Provides additional information (tooltip)</li>
        <li><strong>rel:</strong> Specifies relationship between current and linked document</li>
      </ul>
      
      <h2>Navigation Menu Example</h2>
      <pre><code>&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="index.html"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="services.html"&gt;Services&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
      
      <h2>Next Steps</h2>
      <p>In our next tutorial, we'll learn how to add and optimize images in HTML.</p>
    `,
    duration: '14 min',
    order: 3,
    tags: ['html', 'links', 'navigation', 'anchor', 'href']
  },

  {
    id: '4',
    title: 'HTML Images and Media',
    description: 'Add and optimize images, audio, and video content',
    slug: 'html-images-media',
    courseId: '1',
    content: `
      <h1>HTML Images and Media</h1>
      <p>Images and media elements make web pages more engaging and informative. HTML provides several elements for embedding different types of media content.</p>
      
      <h2>HTML Images</h2>
      <p>The &lt;img&gt; element embeds images in web pages. It's a self-closing element that requires the src and alt attributes.</p>
      
      <pre><code>&lt;!-- Basic image --&gt;
&lt;img src="images/logo.png" alt="Company Logo"&gt;

&lt;!-- Image with dimensions --&gt;
&lt;img src="photo.jpg" alt="Beautiful sunset" width="400" height="300"&gt;

&lt;!-- Responsive image --&gt;
&lt;img src="banner.jpg" alt="Welcome banner" style="max-width: 100%; height: auto;"&gt;</code></pre>
      
      <h2>Image Attributes</h2>
      <ul>
        <li><strong>src:</strong> Specifies the path to the image file</li>
        <li><strong>alt:</strong> Provides alternative text for accessibility</li>
        <li><strong>width/height:</strong> Set image dimensions</li>
        <li><strong>title:</strong> Adds tooltip text</li>
        <li><strong>loading:</strong> Controls lazy loading (lazy/eager)</li>
      </ul>
      
      <h2>Audio and Video</h2>
      <pre><code>&lt;!-- Audio element --&gt;
&lt;audio controls&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
  Your browser does not support audio.
&lt;/audio&gt;

&lt;!-- Video element --&gt;
&lt;video controls width="640" height="360"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  Your browser does not support video.
&lt;/video&gt;</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Always include meaningful alt text</li>
        <li>Optimize image file sizes for web</li>
        <li>Use appropriate image formats (JPEG, PNG, WebP)</li>
        <li>Consider responsive images for different screen sizes</li>
      </ul>
      
      <h2>Next Steps</h2>
      <p>Next, we'll explore HTML lists and how to organize information effectively.</p>
    `,
    duration: '16 min',
    order: 4,
    tags: ['html', 'images', 'media', 'audio', 'video', 'accessibility']
  },

  {
    id: '5',
    title: 'HTML Lists and Organization',
    description: 'Create ordered, unordered, and definition lists',
    slug: 'html-lists-organization',
    courseId: '1',
    content: `
      <h1>HTML Lists and Organization</h1>
      <p>Lists are essential for organizing information in a structured way. HTML provides three types of lists: unordered lists, ordered lists, and definition lists.</p>
      
      <h2>Unordered Lists</h2>
      <p>Unordered lists display items with bullet points. Use &lt;ul&gt; for the container and &lt;li&gt; for each item.</p>
      
      <pre><code>&lt;h3&gt;Shopping List&lt;/h3&gt;
&lt;ul&gt;
  &lt;li&gt;Milk&lt;/li&gt;
  &lt;li&gt;Bread&lt;/li&gt;
  &lt;li&gt;Eggs&lt;/li&gt;
  &lt;li&gt;Apples&lt;/li&gt;
&lt;/ul&gt;</code></pre>
      
      <h2>Ordered Lists</h2>
      <p>Ordered lists display items with numbers or letters. Use &lt;ol&gt; for the container and &lt;li&gt; for each item.</p>
      
      <pre><code>&lt;h3&gt;Recipe Steps&lt;/h3&gt;
&lt;ol&gt;
  &lt;li&gt;Preheat oven to 350°F&lt;/li&gt;
  &lt;li&gt;Mix dry ingredients&lt;/li&gt;
  &lt;li&gt;Add wet ingredients&lt;/li&gt;
  &lt;li&gt;Bake for 25 minutes&lt;/li&gt;
&lt;/ol&gt;</code></pre>
      
      <h2>Nested Lists</h2>
      <p>Lists can be nested inside other lists to create hierarchical structures:</p>
      
      <pre><code>&lt;ul&gt;
  &lt;li&gt;Web Development
    &lt;ul&gt;
      &lt;li&gt;Frontend
        &lt;ul&gt;
          &lt;li&gt;HTML&lt;/li&gt;
          &lt;li&gt;CSS&lt;/li&gt;
          &lt;li&gt;JavaScript&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/li&gt;
      &lt;li&gt;Backend
        &lt;ul&gt;
          &lt;li&gt;Node.js&lt;/li&gt;
          &lt;li&gt;Python&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
      
      <h2>Definition Lists</h2>
      <p>Definition lists are used for term-definition pairs:</p>
      
      <pre><code>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;Cascading Style Sheets&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
      
      <h2>Next Steps</h2>
      <p>In the next tutorial, we'll learn about HTML tables for displaying tabular data.</p>
    `,
    duration: '13 min',
    order: 5,
    tags: ['html', 'lists', 'organization', 'structure', 'nested']
  },

  {
    id: '6',
    title: 'HTML Tables',
    description: 'Create and structure data tables effectively',
    slug: 'html-tables',
    courseId: '1',
    content: `
      <h1>HTML Tables</h1>
      <p>HTML tables are used to display data in rows and columns. They're perfect for presenting structured information like spreadsheets, schedules, or comparison data.</p>
      
      <h2>Basic Table Structure</h2>
      <p>Tables use several elements working together: &lt;table&gt;, &lt;tr&gt; (rows), &lt;th&gt; (headers), and &lt;td&gt; (data cells).</p>
      
      <pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Name&lt;/th&gt;
    &lt;th&gt;Age&lt;/th&gt;
    &lt;th&gt;City&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;John Doe&lt;/td&gt;
    &lt;td&gt;30&lt;/td&gt;
    &lt;td&gt;New York&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Jane Smith&lt;/td&gt;
    &lt;td&gt;25&lt;/td&gt;
    &lt;td&gt;Los Angeles&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
      
      <h2>Table Sections</h2>
      <p>For better structure and accessibility, use &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt;:</p>
      
      <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Product&lt;/th&gt;
      &lt;th&gt;Price&lt;/th&gt;
      &lt;th&gt;Quantity&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Laptop&lt;/td&gt;
      &lt;td&gt;$999&lt;/td&gt;
      &lt;td&gt;5&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td&gt;Total&lt;/td&gt;
      &lt;td&gt;$4,995&lt;/td&gt;
      &lt;td&gt;5&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</code></pre>
      
      <h2>Spanning Cells</h2>
      <p>Use colspan and rowspan attributes to make cells span multiple columns or rows:</p>
      
      <pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th colspan="2"&gt;Monthly Sales&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;January&lt;/td&gt;
    &lt;td&gt;$10,000&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;February&lt;/td&gt;
    &lt;td&gt;$12,000&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use tables only for tabular data, not for layout</li>
        <li>Always include table headers (&lt;th&gt;)</li>
        <li>Add captions with &lt;caption&gt; element</li>
        <li>Use scope attribute for complex tables</li>
      </ul>
      
      <h2>Next Steps</h2>
      <p>Next, we'll dive into HTML forms and user input elements.</p>
    `,
    duration: '18 min',
    order: 6,
    tags: ['html', 'tables', 'data', 'structure', 'tabular']
  },

  {
    id: '7',
    title: 'HTML Forms and Input',
    description: 'Build interactive forms with various input types',
    slug: 'html-forms-input',
    courseId: '1',
    content: `
      <h1>HTML Forms and Input</h1>
      <p>Forms allow users to interact with websites by submitting data. They're essential for contact forms, login pages, surveys, and any user input functionality.</p>
      
      <h2>Basic Form Structure</h2>
      <p>Forms use the &lt;form&gt; element as a container with various input elements inside:</p>
      
      <pre><code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input type="text" id="name" name="name" required&gt;
  
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;
  
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
      
      <h2>Input Types</h2>
      <p>HTML5 provides many input types for different data:</p>
      
      <pre><code>&lt;!-- Text inputs --&gt;
&lt;input type="text" placeholder="Enter text"&gt;
&lt;input type="email" placeholder="email@example.com"&gt;
&lt;input type="password" placeholder="Password"&gt;
&lt;input type="tel" placeholder="Phone number"&gt;

&lt;!-- Number and date inputs --&gt;
&lt;input type="number" min="1" max="100"&gt;
&lt;input type="date"&gt;
&lt;input type="time"&gt;

&lt;!-- Selection inputs --&gt;
&lt;input type="checkbox" id="agree"&gt;
&lt;label for="agree"&gt;I agree&lt;/label&gt;

&lt;input type="radio" id="male" name="gender" value="male"&gt;
&lt;label for="male"&gt;Male&lt;/label&gt;</code></pre>
      
      <h2>Select and Textarea</h2>
      <pre><code>&lt;!-- Dropdown select --&gt;
&lt;label for="country"&gt;Country:&lt;/label&gt;
&lt;select id="country" name="country"&gt;
  &lt;option value="us"&gt;United States&lt;/option&gt;
  &lt;option value="ca"&gt;Canada&lt;/option&gt;
  &lt;option value="uk"&gt;United Kingdom&lt;/option&gt;
&lt;/select&gt;

&lt;!-- Multi-line text --&gt;
&lt;label for="message"&gt;Message:&lt;/label&gt;
&lt;textarea id="message" name="message" rows="4" cols="50"&gt;&lt;/textarea&gt;</code></pre>
      
      <h2>Form Validation</h2>
      <ul>
        <li><strong>required:</strong> Makes field mandatory</li>
        <li><strong>pattern:</strong> Defines regex pattern</li>
        <li><strong>min/max:</strong> Sets value limits</li>
        <li><strong>maxlength:</strong> Limits character count</li>
      </ul>
      
      <h2>Accessibility</h2>
      <ul>
        <li>Always associate labels with inputs</li>
        <li>Use fieldsets for grouping related inputs</li>
        <li>Provide helpful error messages</li>
        <li>Use proper input types for better UX</li>
      </ul>
      
      <h2>Next Steps</h2>
      <p>In the next tutorial, we'll learn about HTML semantic elements and document structure.</p>
    `,
    duration: '20 min',
    order: 7,
    tags: ['html', 'forms', 'input', 'validation', 'user-interaction']
  },

  {
    id: '8',
    title: 'HTML Semantic Elements',
    description: 'Use semantic HTML for better structure and accessibility',
    slug: 'html-semantic-elements',
    courseId: '1',
    content: `
      <h1>HTML Semantic Elements</h1>
      <p>Semantic HTML elements provide meaning to your content beyond just presentation. They improve accessibility, SEO, and code maintainability by clearly defining the purpose of each section.</p>
      
      <h2>What are Semantic Elements?</h2>
      <p>Semantic elements clearly describe their meaning in a human and machine readable way. Instead of using generic &lt;div&gt; elements, semantic elements tell us exactly what type of content they contain.</p>
      
      <h2>Document Structure Elements</h2>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Website Title&lt;/h1&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  
  &lt;main&gt;
    &lt;section id="home"&gt;
      &lt;h2&gt;Welcome&lt;/h2&gt;
      &lt;p&gt;This is the main content area.&lt;/p&gt;
    &lt;/section&gt;
  &lt;/main&gt;
  
  &lt;aside&gt;
    &lt;h3&gt;Related Links&lt;/h3&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#link1"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/aside&gt;
  
  &lt;footer&gt;
    &lt;p&gt;&copy; 2024 My Website&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <h2>Content Elements</h2>
      <pre><code>&lt;article&gt;
  &lt;header&gt;
    &lt;h2&gt;Article Title&lt;/h2&gt;
    &lt;p&gt;Published on &lt;time datetime="2024-01-15"&gt;January 15, 2024&lt;/time&gt;&lt;/p&gt;
  &lt;/header&gt;
  
  &lt;p&gt;Article content goes here...&lt;/p&gt;
  
  &lt;figure&gt;
    &lt;img src="chart.png" alt="Sales data chart"&gt;
    &lt;figcaption&gt;Q4 2023 Sales Performance&lt;/figcaption&gt;
  &lt;/figure&gt;
&lt;/article&gt;</code></pre>
      
      <h2>Key Semantic Elements</h2>
      <ul>
        <li><strong>&lt;header&gt;:</strong> Page or section header</li>
        <li><strong>&lt;nav&gt;:</strong> Navigation links</li>
        <li><strong>&lt;main&gt;:</strong> Main content area</li>
        <li><strong>&lt;section&gt;:</strong> Thematic content grouping</li>
        <li><strong>&lt;article&gt;:</strong> Self-contained content</li>
        <li><strong>&lt;aside&gt;:</strong> Sidebar content</li>
        <li><strong>&lt;footer&gt;:</strong> Page or section footer</li>
        <li><strong>&lt;figure&gt;:</strong> Media with caption</li>
      </ul>
      
      <h2>Benefits of Semantic HTML</h2>
      <ul>
        <li>Better accessibility for screen readers</li>
        <li>Improved SEO rankings</li>
        <li>Cleaner, more maintainable code</li>
        <li>Better browser understanding of content</li>
        <li>Easier styling with CSS</li>
      </ul>
      
      <h2>Next Steps</h2>
      <p>Next, we'll explore HTML attributes and how to add metadata to elements.</p>
    `,
    duration: '17 min',
    order: 8,
    tags: ['html', 'semantic', 'accessibility', 'structure', 'seo']
  }
];
