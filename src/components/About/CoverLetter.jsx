import { useState } from 'react';
import data from '../../../data/coverLetter.json';

import Wrapper from '../Containers/Wrapper';
import Content from '../Containers/Content';
import Box from '../Box/Box';
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
    btnLeft: '.docx',
    altLeft: 'Download resume as .docx',
    titleLeft: 'Download resume as .docx',
    onClickLeft: () => downloadDoc('doc'),
    btnRight: '.pdf',
    altRight: 'Download resume as .pdf',
    titleRight: 'Download resume as .pdf',
    onClickRight: () => downloadDoc('pdf'),
    cls: 'bg-midnight rounded-t',
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
