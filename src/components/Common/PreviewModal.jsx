import Wrapper from '../Containers/Wrapper';
import Content from '../Containers/Content';
import ActionBar from '../Common/ActionBar';
import ActionButton from '../Common/ActionButton';
import Icon from './Icon';

function PreviewModal({ data, viewDoc, setViewDoc }) {
  function nextDoc(i) {
    let next;
    i >= data.length - 1 ? (next = data[0]) : (next = data[i + 1]);
    console.log(next);
    return next;
  }
  function handleDocClick() {
    const i = data.findIndex((doc) => doc.title === viewDoc.title);

    setViewDoc(() => nextDoc(i));
  }
  function closeModal(e) {
    if (e.target !== e.currentTarget) return;
    setViewDoc(null);
  }

  const styles = {
    wrapper:
      'fixed flex items-center justify-center w-screen h-screen top-0 left-0 z-50 bg-dove-op',
    content: 'z-100 shadow-dark rounded',
    actionbar: 'bg-midnight-op',
    image: 'max-w-[70vw] rounded-b',
  };

  return (
    <Wrapper cls={styles.wrapper} onClick={(e) => closeModal(e)}>
      <Content
        padding='p-0'
        cls={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <ActionBar
          title={`Certificate » ${viewDoc.title}`}
          style='actionbar-h2'
          cls={styles.actionbar}
        >
          <ActionButton pos='right' onClick={() => setViewDoc(null)}>
            <Icon icon='close' cls='m-2' />
          </ActionButton>
        </ActionBar>

        <img
          src={viewDoc.image}
          alt={`Certificate for: ${viewDoc.course}`}
          className={styles.image}
          onClick={handleDocClick}
        />
      </Content>
    </Wrapper>
  );
}
export default PreviewModal;
