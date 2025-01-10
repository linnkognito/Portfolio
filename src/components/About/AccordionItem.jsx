import Icon from '../Common/Icon';
import Wrapper from '../Containers/Wrapper';
import Content from '../Containers/Content';

function AccordionItem({ icon, subTitle, text }) {
  const styles = {
    wrapper: 'flex gap-2 pr-4 text-justify',
    content: 'flex flex-col',
    icon: 'text-xl',
    heading:
      'mb-2 pl-0 font-semibold text-lightblue text-shadow-subtle uppercase border-b',
    p: 'text-base',
  };

  return (
    <Wrapper cls={styles.wrapper}>
      <Icon icon={icon} cls={styles.icon} />

      <Content padding='0' className={styles.content}>
        {subTitle && <h5 className={styles.heading}>{subTitle}:</h5>}
        <p className={styles.p}>{text}</p>
      </Content>
    </Wrapper>
  );
}

export default AccordionItem;
