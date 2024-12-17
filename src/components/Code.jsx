import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
// import 'prismjs/components/prism-html';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-json';
import 'prism-themes/themes/prism-duotone-sea.css';

function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <div className='content max-w-full max-h-[70vh] overflow-x-auto'>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

export default Code;
