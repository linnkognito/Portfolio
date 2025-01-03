import { useState } from 'react';
import data from '../../data/certificates.json';
import Box from './Box';
import Content from './Content';
import Wrapper from './Wrapper';
import ActionBar from './ActionBar';
import ActionButton from './ActionButton';

function Certificates() {
  const [viewDoc, setViewDoc] = useState(null);

  function handleDocClick() {
    const i = data.findIndex((doc) => doc.title === viewDoc.title);

    const nextDoc = () => {
      let next;
      i >= data.length - 1 ? (next = data[0]) : (next = data[i + 1]);
      return next;
    };

    setViewDoc(() => nextDoc());
  }

  return (
    <>
      <Box
        heading={{ type: 'h3', title: 'certificates' }}
        cls='rounded-b overflow-hidden'
      >
        <Content padding='p2' cls='grid lg:grid-cols-2 md:grid-cols-1 gap-2'>
          {data.map((cert) => (
            <div
              key={cert.title}
              className='relative rounded cursor-zoom-in group'
              onClick={() => setViewDoc(cert)}
            >
              <img
                key={cert.title}
                src={cert.image}
                alt={`Certificate for: ${cert.course}`}
                className='rounded cursor-zoom-in'
                onClick={() => setViewDoc(cert)}
              />
              <div className='absolute inset-0 bg-midnight-op opacity-30 bg-grain rounded pointer-events-none group-hover:opacity-0 transition-all'></div>
            </div>
          ))}
        </Content>
      </Box>

      {/* Modal */}
      {viewDoc && (
        <Wrapper
          cls='fixed flex items-center justify-center w-screen h-screen top-0 left-0 z-50 bg-dove-op'
          onClick={() => setViewDoc(null)}
        >
          <Content cls='z-100' onClick={(e) => e.stopPropagation()}>
            <ActionBar
              title={`Certificate » ${viewDoc.title}`}
              style='actionbar-h2'
              cls='bg-midnight-op'
            >
              <ActionButton className=''>
                <span
                  className='material-symbols-outlined my-2'
                  onClick={() => setViewDoc(null)}
                >
                  close
                </span>
              </ActionButton>
            </ActionBar>
            <img
              src={viewDoc.image}
              alt={`Certificate for: ${viewDoc.course}`}
              className='max-w-[70vw]'
              onClick={handleDocClick}
            />
          </Content>
        </Wrapper>
      )}
    </>
  );
}

export default Certificates;
