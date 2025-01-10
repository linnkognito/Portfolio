import { useState } from 'react';
import data from '../../../data/certificates.json';

import Box from '../Containers/Box/Box';
import Content from '../Containers/Content';
import PreviewModal from '../Common/PreviewModal';
import Filter from '../Common/Filter';

function Certificates() {
  const [viewDoc, setViewDoc] = useState(null);

  const styles = {
    box: 'rounded-b overflow-hidden',
    content: 'grid lg:grid-cols-2 md:grid-cols-1 gap-2',
    image: 'rounded cursor-zoom-in',
  };

  return (
    <>
      <Box heading={{ type: 'h3', title: 'certificates' }} cls={styles.box}>
        <Content padding='p2' cls={styles.content}>
          {data.map((cert) => (
            <Filter key={cert.title}>
              <img
                src={cert.image}
                alt={`Certificate for: ${cert.course}`}
                className={styles.image}
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
