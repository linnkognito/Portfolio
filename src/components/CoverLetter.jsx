import Box from './Box';
// import ActionBar from './ActionBar';
// import ActionButton from './ActionButton';

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
          {`The year 2024 marked the beginning of my programming journey - the year
        I made a sincere commitment to turn my passion for development into a
        career. Since March, I've dedicated 8+ hours a day to coding projects,
        growing my technical skills, and enhancing my understanding of
        JavaScript with its tools and frameworks.`}
        </p>

        <p>
          {`Through daily practice and bootcamp experiences, I have built up a solid
        foundation in tools such as HTML, CSS (Sass), modern JavaScript,
        Node.js, Express and MongoDB.`}
          <br />
          {`I am currently adding React and Tailwind CSS to my toolkit.`}
        </p>

        <p>
          {`What drives me is my love for coding and problem-solving, and I am proud
        of my discipline and tenacity - I will keep on going until I get my
        desired result without compromise.`}
          <br />
          {`My ongoing goal is to continually grow as an independent full-stack
        developer.`}
        </p>

        <p>
          {`I’m always interested in connecting with others in tech to develop or
        contribute to scalable, user-friendly, and innovative projects!`}
        </p>
      </div>
    </Box>
  );
}

export default CoverLetter;
