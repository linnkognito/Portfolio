import { useState } from 'react';
import data from '../../../data/certificates.json';

import Box from '../Containers/Box/Box';
import Content from '../Containers/Content';
import PreviewModal from '../Common/PreviewModal';
import Filter from '../Common/Filter';

function Certificates() {
  const [viewDoc, setViewDoc] = useState(null);

  return (
    <>
      <Box
        heading={{ type: 'h3', title: 'certificates' }}
        cls='rounded-b overflow-hidden'
      >
        <Content padding='p2' cls='grid lg:grid-cols-2 md:grid-cols-1 gap-2'>
          {data.map((cert) => (
            <Filter key={cert.title}>
              <img
                src={cert.image}
                alt={`Certificate for: ${cert.course}`}
                className='rounded cursor-zoom-in'
                onClick={() => setViewDoc(cert)}
              />
            </Filter>
          ))}
        </Content>
      </Box>

      {/* Modal */}
      {viewDoc && (
        <PreviewModal data={data} viewDoc={viewDoc} setViewDoc={setViewDoc} />
      )}
    </>
  );
}

export default Certificates;
