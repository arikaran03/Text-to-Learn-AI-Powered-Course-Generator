import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';  // Re-enable this after install
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Re-enable this after install
import { Clipboard, Check } from 'lucide-react';

const CodeBlock = ({ language, text }) => {
  const [copied, setCopied] = useState(false);

  // NOTE: The 'react-syntax-highlighter' package provides syntax highlighting.
  // To use this feature, it must be installed in your project.
  //
  // TO ENABLE SYNTAX HIGHLIGHTING:
  // 1. Run this command in your terminal:
  //    npm install react-syntax-highlighter lucide-react
  // 2. Uncomment the two 'import' lines at the top of this file.
  // 3. Delete this fallback code block.
  // 4. Uncomment the original 'SyntaxHighlighter' code block at the bottom of this component.

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

//   // --- Fallback Code Block ---
//   return (
//      <div className="bg-gray-900 rounded-lg my-4 relative group">
//       <div className="flex justify-between items-center px-4 py-2 bg-gray-800 rounded-t-lg">
//         <span className="text-gray-400 text-sm font-mono">{language}</span>
//         <button
//           onClick={handleCopy}
//           className="text-gray-400 hover:text-white transition-colors duration-200"
//           aria-label="Copy code"
//         >
//           {copied ? <Check size={18} /> : <Clipboard size={18} />}
//         </button>
//       </div>
//       <pre className="p-4 text-white bg-gray-900 rounded-b-lg overflow-x-auto">
//         <code>{text}</code>
//       </pre>
//     </div>
//   );


  // --- Original SyntaxHighlighter Code Block (uncomment after installing packages) ---

  return (
    <div className="bg-gray-900 rounded-lg my-4 relative group">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 rounded-t-lg">
        <span className="text-gray-400 text-sm font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Copy code"
        >
          {copied ? <Check size={18} /> : <Clipboard size={18} />}
        </button>
      </div>
      <SyntaxHighlighter language={language} style={a11yDark} customStyle={{ margin: 0, borderRadius: '0 0 0.5rem 0.5rem' }}>
        {text}
      </SyntaxHighlighter>
    </div>
  );
  
};

export default CodeBlock;
