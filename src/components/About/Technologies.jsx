import BorderCorners from '../Common/BorderCorners';
import Wrapper from '../Containers/Wrapper';
import data from '../../../data/technologies.json';
import Content from '../Containers/Content';

function Technologies() {
  const styles = {
    wrapper: 'w-full shadow-subtle-sm rounded',
    content: 'flex flex-wrap gap-4 bg-steel rounded-b ',
    innerWrapper:
      'flex items-center min-w-[200px] px-2 bg-midnight uppercase rounded',
    borderCorners: 'flex items-center min-w-11 min-h-11',
    textWrapper: 'flex flex-col p-4',
    textTech: 'p-0',
    textLevel: 'text-xs italic text-lightblue',
  };

  return (
    <Wrapper cls={styles.wrapper}>
      <h2>Technologies</h2>

      <Content cls={styles.content}>
        {data.map((tech) => (
          <Wrapper key={tech.technology} cls={styles.innerWrapper}>
            <BorderCorners
              width='w-fit'
              cornerH='h-4'
              cornerW='w-4'
              padding='p-2'
              border='border-lightblue'
              cls={styles.borderCorners}
            >
              <img
                src={tech.icon}
                alt={`${tech.technology} logo`}
                title={`${tech.technology} logo`}
              />
            </BorderCorners>

            <Wrapper cls={styles.textWrapper}>
              <h5 className={styles.textTech}>{tech.technology}</h5>
              <p className={styles.textLevel}>{tech.level}</p>
            </Wrapper>
          </Wrapper>
        ))}
      </Content>
    </Wrapper>
  );
}

export default Technologies;
