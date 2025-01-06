import Box from './Box';
import CoverLetterAccordion from './CoverLetterAccordion';
import data from '../../data/coverLetter.json';
import Content from './Content';
import Wrapper from './Wrapper';
import { useState } from 'react';

function CoverLetter() {
  const [isOpen, setIsOpen] = useState(null);

  function openDoc(fileFormat) {
    const resumeFiles = {
      doc: '../../public/docs/Resume_Linn_Johansen_2025.docx',
      pdf: '../../public/docs/Resume_Linn_Johansen_2025.pdf',
    };

    if (fileFormat === 'doc') window.open(resumeFiles.doc, '_blank');
    if (fileFormat === 'pdf') window.open(resumeFiles.pdf, '_blank');
  }

  return (
    <Box
      actionbar={{
        style: 'actionbar-h3',
        title: 'Hello world!',
        btnLeft: '.docx',
        altLeft: 'Download resume as .docx',
        titleLeft: 'Download resume as .docx',
        onClickLeft: () => openDoc('doc'),
        btnRight: '.pdf',
        altRight: 'Download resume as .pdf',
        titleRight: 'Download resume as .pdf',
        onClickRight: () => openDoc('pdf'),
        cls: 'bg-midnight rounded-t',
      }}
      uppercase={false}
      cls='flex flex-col grow rounded'
    >
      <Content padding='py-2' cls='flex flex-col gap-5 h-full rounded'>
        <Wrapper cls='text-lightblue '>
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
            isOpen={isOpen === acc.title}
            setIsOpen={() => setIsOpen(isOpen === acc.title ? null : acc.title)}
          />
        ))}
      </Content>
    </Box>
  );
}

export default CoverLetter;
