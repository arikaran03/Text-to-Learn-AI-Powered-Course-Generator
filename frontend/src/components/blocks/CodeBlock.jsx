import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Clipboard, Check } from 'lucide-react';

const CodeBlock = ({ language, text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // This is a fallback for iFrames where navigator.clipboard may be restricted.
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="lesson-block code-block-wrapper">
      <div className="code-block-header">
        <span className="code-block-language">{language}</span>
        <button
          onClick={handleCopy}
          className="code-block-copy-btn"
          aria-label="Copy code"
        >
          {copied ? <Check size={18} /> : <Clipboard size={18} />}
        </button>
      </div>
      <SyntaxHighlighter 
        language={language} 
        style={a11yDark} 
        className="code-block-highlighter"
        // The customStyle below is important to override default margins/padding
        customStyle={{ margin: 0, padding: '1.5rem' }} 
        codeTagProps={{ style: { fontFamily: "inherit" } }}
      >
        {text}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;