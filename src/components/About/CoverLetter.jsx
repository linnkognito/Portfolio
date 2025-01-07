import { useState } from 'react';
import data from '../../../data/coverLetter.json';

import Wrapper from '../Containers/Wrapper';
import Content from '../Containers/Content';
import Box from '../Containers/Box/Box';
import CoverLetterAccordion from './CoverLetterAccordion';

function CoverLetter() {
  const [openAccordion, setOpenAccordion] = useState(null);

  function toggleAccordion(title) {
    setOpenAccordion(openAccordion === title ? null : title);
  }

  function downloadDoc(fileFormat) {
    const resumeFiles = {
      doc: '../../public/docs/Resume_Linn_Johansen_2025.docx',
      pdf: '../../public/docs/Resume_Linn_Johansen_2025.pdf',
    };

    if (fileFormat === 'doc') window.open(resumeFiles.doc, '_blank');
    if (fileFormat === 'pdf') window.open(resumeFiles.pdf, '_blank');
  }

  const actionbarObj = {
    style: 'actionbar-h3',
    title: 'Hello world!',
    cls: 'bg-midnight rounded-t',
    buttons: [
      {
        pos: 'left',
        value: '.docx',
        alt: 'Download resume as .docx',
        title: 'Download resume as .docx',
        onClick: () => downloadDoc('doc'),
      },
      {
        pos: 'right',
        value: '.pdf',
        alt: 'Download resume as .pdf',
        title: 'Download resume as .pdf',
        onClick: () => downloadDoc('pdf'),
      },
    ],
  };

  const styles = {
    box: 'flex flex-col grow rounded',
    content: 'flex flex-col gap-5 h-full rounded',
    innerWrapper: 'text-lightblue',
  };

  return (
    <Box actionbar={actionbarObj} uppercase={false} cls={styles.box}>
      <Content padding='py-2' cls={styles.content}>
        <Wrapper cls={styles.innerWrapper}>
          <p>
            I&apos;m Linn, a front-end React developer with a touch of back-end
            experience.
          </p>
          <p>Welcome to my portfolio!</p>
        </Wrapper>

        {data.map((acc) => (
          <CoverLetterAccordion
            key={acc.title}
            title={acc.title}
            content={acc.content}
            isOpen={openAccordion === acc.title}
            setIsOpen={() => toggleAccordion(acc.title)}
          />
        ))}
      </Content>
    </Box>
  );
}

export default CoverLetter;
