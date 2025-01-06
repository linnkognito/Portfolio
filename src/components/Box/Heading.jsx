function Heading({ type, title }) {
  const Tag = type;

  const styles = {
    h2: 'rounded-t',
    h3: 'bg-midnight rounded-t',
    default: '',
  };

  return <Tag className={styles[type] || styles.default}>{title}</Tag>;
}

export default Heading;
