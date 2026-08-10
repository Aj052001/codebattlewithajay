'use client';

import { useRef, useState } from 'react';
import { Code2, Eye, EyeOff, Heading1, List, Quote, Type } from 'lucide-react';
import HtmlContent from '@/components/ui/HtmlContent';

type LessonContentEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

const SNIPPETS = {
  h1: `<h1 style="color:#0073b1;margin:0 0 16px;">Lesson Title</h1>\n`,
  h2: `<h2 style="color:#0073b1;margin:24px 0 12px;">Section Heading</h2>\n`,
  p: `<p style="margin:0 0 14px;line-height:1.7;">Write your paragraph here.</p>\n`,
  ul: `<ul style="margin:0 0 16px;padding-left:20px;line-height:1.7;">
  <li>Point one</li>
  <li>Point two</li>
  <li>Point three</li>
</ul>\n`,
  note: `<div style="background:#f0f9ff;border-left:4px solid #2563eb;padding:14px;border-radius:8px;margin:16px 0;">
  <strong>Note:</strong> Important tip for students.
</div>\n`,
  warning: `<div style="background:#fff7ed;border-left:4px solid #f59e0b;padding:14px;border-radius:8px;margin:16px 0;">
  <strong>Warning:</strong> Be careful with this command.
</div>\n`,
  inlineCode: `<code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-family:monospace;">code</code>`,
  codeBlock: `<pre style="background:#1e293b;color:#e2e8f0;padding:16px;border-radius:8px;overflow-x:auto;margin:16px 0;"><code>// write your code here
docker run hello-world
</code></pre>\n`,
  jsBlock: `<pre style="background:#1e293b;color:#e2e8f0;padding:16px;border-radius:8px;overflow-x:auto;margin:16px 0;"><code>function hello() {
  console.log("Hello CodeBattle");
}
</code></pre>\n`,
  bashBlock: `<pre style="background:#1e293b;color:#e2e8f0;padding:16px;border-radius:8px;overflow-x:auto;margin:16px 0;"><code>npm install
npm run dev
</code></pre>\n`,
  template: `<div style="font-family:Inter,sans-serif;line-height:1.8;color:#1c1e21;padding:24px;max-width:100%;">
  <h1 style="color:#0073b1;text-align:center;margin-bottom:20px;">1 : Lesson Title</h1>
  <p style="text-align:center;color:#4b4f56;margin-bottom:24px;">Short intro for this lesson.</p>

  <h2 style="color:#0073b1;">What You'll Learn</h2>
  <ul>
    <li>Point one</li>
    <li>Point two</li>
  </ul>

  <h2 style="color:#0073b1;">Example</h2>
  <pre style="background:#1e293b;color:#e2e8f0;padding:16px;border-radius:8px;overflow-x:auto;"><code>console.log("Hello World");
</code></pre>

  <div style="background:#f0f9ff;border-left:4px solid #2563eb;padding:14px;border-radius:8px;margin-top:16px;">
    <strong>Note:</strong> Practice this on your machine.
  </div>
</div>
`,
};

export default function LessonContentEditor({ value, onChange }: LessonContentEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showPreview, setShowPreview] = useState(true);
  const [previewTab, setPreviewTab] = useState<'split' | 'edit' | 'preview'>('split');

  const insertAtCursor = (snippet: string, selectPlaceholder?: string) => {
    const el = textareaRef.current;
    if (!el) {
      onChange(value + snippet);
      return;
    }

    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = value.slice(start, end);
    let nextSnippet = snippet;

    // If user selected text and inserting inline code / wrap-friendly snippets
    if (selected && snippet.includes('>code</code>') && !snippet.includes('<pre')) {
      nextSnippet = snippet.replace('>code</code>', `>${selected}</code>`);
    } else if (selected && snippet.includes('Write your paragraph here.')) {
      nextSnippet = snippet.replace('Write your paragraph here.', selected);
    } else if (selected && snippet.includes('// write your code here')) {
      nextSnippet = snippet.replace('// write your code here\ndocker run hello-world\n', `${selected}\n`);
    }

    const next = value.slice(0, start) + nextSnippet + value.slice(end);
    onChange(next);

    requestAnimationFrame(() => {
      el.focus();
      const cursor = start + nextSnippet.length;
      if (selectPlaceholder && nextSnippet.includes(selectPlaceholder)) {
        const idx = start + nextSnippet.indexOf(selectPlaceholder);
        el.setSelectionRange(idx, idx + selectPlaceholder.length);
      } else {
        el.setSelectionRange(cursor, cursor);
      }
    });
  };

  const wrapSelection = (before: string, after: string) => {
    const el = textareaRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = value.slice(start, end) || 'text';
    const next = value.slice(0, start) + before + selected + after + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + before.length, start + before.length + selected.length);
    });
  };

  const mode = previewTab;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-medium text-slate-700">Lesson Content</p>
        <div className="flex flex-wrap gap-1">
          <ModeBtn active={mode === 'edit'} onClick={() => setPreviewTab('edit')} label="Edit" />
          <ModeBtn active={mode === 'split'} onClick={() => setPreviewTab('split')} label="Split" />
          <ModeBtn active={mode === 'preview'} onClick={() => setPreviewTab('preview')} label="Preview" />
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-1.5 rounded-xl border border-slate-200 bg-slate-50 p-2">
        <ToolBtn title="Full template" onClick={() => insertAtCursor(SNIPPETS.template)}>
          Template
        </ToolBtn>
        <ToolBtn title="Heading" onClick={() => insertAtCursor(SNIPPETS.h2)}>
          <Heading1 className="w-3.5 h-3.5 mr-1" /> H2
        </ToolBtn>
        <ToolBtn title="Paragraph" onClick={() => insertAtCursor(SNIPPETS.p)}>
          <Type className="w-3.5 h-3.5 mr-1" /> Text
        </ToolBtn>
        <ToolBtn title="Bullet list" onClick={() => insertAtCursor(SNIPPETS.ul)}>
          <List className="w-3.5 h-3.5 mr-1" /> List
        </ToolBtn>
        <ToolBtn title="Note box" onClick={() => insertAtCursor(SNIPPETS.note)}>
          <Quote className="w-3.5 h-3.5 mr-1" /> Note
        </ToolBtn>
        <ToolBtn title="Warning box" onClick={() => insertAtCursor(SNIPPETS.warning)}>
          Warn
        </ToolBtn>
        <ToolBtn title="Inline code" onClick={() => insertAtCursor(SNIPPETS.inlineCode, 'code')}>
          <Code2 className="w-3.5 h-3.5 mr-1" /> Inline
        </ToolBtn>
        <ToolBtn title="Code block" onClick={() => insertAtCursor(SNIPPETS.codeBlock)}>
          <Code2 className="w-3.5 h-3.5 mr-1" /> Code Block
        </ToolBtn>
        <ToolBtn title="JavaScript snippet" onClick={() => insertAtCursor(SNIPPETS.jsBlock)}>
          JS
        </ToolBtn>
        <ToolBtn title="Bash / terminal snippet" onClick={() => insertAtCursor(SNIPPETS.bashBlock)}>
          Bash
        </ToolBtn>
        <ToolBtn title="Bold selected text" onClick={() => wrapSelection('<strong>', '</strong>')}>
          Bold
        </ToolBtn>
        <button
          type="button"
          onClick={() => setShowPreview((v) => !v)}
          className="ml-auto inline-flex items-center text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-100"
        >
          {showPreview ? <EyeOff className="w-3.5 h-3.5 mr-1" /> : <Eye className="w-3.5 h-3.5 mr-1" />}
          {showPreview ? 'Hide tip' : 'Show tip'}
        </button>
      </div>

      {showPreview && (
        <p className="text-xs text-slate-500">
          Tip: pehle text select karke <strong>Inline</strong> / <strong>Bold</strong> dabao. Code ke liye{' '}
          <strong>Code Block</strong>, <strong>JS</strong> ya <strong>Bash</strong> use karo. Neeche live preview
          dikhega.
        </p>
      )}

      <div className="grid grid-cols-1 gap-3">
        {(mode === 'edit' || mode === 'split') && (
          <textarea
            ref={textareaRef}
            className="input min-h-64 sm:min-h-72 font-mono text-xs sm:text-sm"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="HTML content yahan likho, ya upar se Code Block / Template insert karo..."
          />
        )}

        {(mode === 'preview' || mode === 'split') && (
          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden min-h-64 sm:min-h-72">
            <div className="px-3 py-2 border-b border-slate-200 bg-slate-50 text-xs font-medium text-slate-600">
              Live Preview
            </div>
            <div className="p-4 overflow-auto max-h-[28rem]">
              <HtmlContent
                html={
                  value.trim() ||
                  '<p style="color:#94a3b8">Preview yahan dikhega jab aap content type / insert karoge.</p>'
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ToolBtn({
  children,
  onClick,
  title,
}: {
  children: React.ReactNode;
  onClick: () => void;
  title: string;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="inline-flex items-center text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
    >
      {children}
    </button>
  );
}

function ModeBtn({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-xs px-2.5 py-1.5 rounded-lg font-medium ${
        active ? 'bg-blue-600 text-white' : 'bg-white border border-slate-300 text-slate-600'
      }`}
    >
      {label}
    </button>
  );
}
