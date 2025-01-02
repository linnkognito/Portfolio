import Box from './Box';
import CoverLetterAccordion from './CoverLetterAccordion';
import data from '../../data/coverLetter.json';

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
    >
      <div className='flex flex-col gap-4'>
        <p>
          I’m a front-end React developer with a touch of back-end experience.
          <br />
          Welcome to my portfolio!
        </p>

        {data.map((acc) => (
          <CoverLetterAccordion
            key={acc.title}
            title={acc.title}
            content={acc.content}
          />
        ))}
      </div>
    </Box>
  );
}

export default CoverLetter;
