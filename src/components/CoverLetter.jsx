import Box from './Box';
import CoverLetterAccordion from './CoverLetterAccordion';
import data from '../../data/coverLetter.json';
import Content from './Content';
import Wrapper from './Wrapper';

function CoverLetter() {
  return (
    <Box
      actionbar={{
        style: 'actionbar-h3',
        title: 'Hello world!',
        btnLeft: '.doc',
        btnRight: '.pdf',
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
          />
        ))}
      </Content>
    </Box>
  );
}

export default CoverLetter;
