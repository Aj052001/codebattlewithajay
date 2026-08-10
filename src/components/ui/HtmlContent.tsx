'use client';

import { useEffect, useRef } from 'react';

type HtmlContentProps = {
  html: string;
  className?: string;
};

/**
 * Renders HTML lesson/blog content and adds a Copy button
 * on the top-right of every <pre> code block.
 */
export default function HtmlContent({ html, className = '' }: HtmlContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const pres = Array.from(root.querySelectorAll('pre'));

    pres.forEach((pre) => {
      let wrapper = pre.parentElement;
      if (!wrapper?.classList.contains('cb-code-block')) {
        wrapper = document.createElement('div');
        wrapper.className = 'cb-code-block';
        pre.parentNode?.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
      }

      if (wrapper.querySelector('button.cb-copy-btn')) return;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cb-copy-btn';
      btn.setAttribute('aria-label', 'Copy code');
      btn.textContent = 'Copy';

      btn.addEventListener('click', async () => {
        const codeEl = pre.querySelector('code');
        const text = (codeEl?.textContent || pre.textContent || '').replace(/\n$/, '');
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        btn.textContent = 'Copied';
        btn.classList.add('copied');
        window.setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 1500);
      });

      wrapper.appendChild(btn);
    });
  }, [html]);

  return (
    <>
      <div
        ref={containerRef}
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <style jsx global>{`
        .cb-code-block {
          position: relative;
          margin: 16px 0;
        }
        .cb-code-block > pre {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          padding-top: 2.75rem !important;
        }
        .cb-copy-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 5;
          display: inline-flex;
          align-items: center;
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid rgba(148, 163, 184, 0.35);
          background: rgba(30, 41, 59, 0.92);
          color: #e2e8f0;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          line-height: 1;
        }
        .cb-copy-btn:hover {
          background: rgba(51, 65, 85, 0.95);
        }
        .cb-copy-btn.copied {
          color: #86efac;
          border-color: rgba(134, 239, 172, 0.4);
        }
      `}</style>
    </>
  );
}
