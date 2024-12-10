import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prism-themes/themes/prism-duotone-sea.css';

function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <div className='w-full'>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

export default Code;
