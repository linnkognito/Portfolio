import { useState } from 'react';
import details from '../../../data/contactDetails.json';

import Wrapper from '../Containers/Wrapper';
import Content from '../Containers/Content';
import CustomTooltip from './CustomTooltip';

function ContactDetails() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  async function handleClick(item) {
    if (item.url) window.open(item.url, '_blank', 'noopener,noreferrer');

    if (item.copy) {
      try {
        await navigator.clipboard.writeText(item.copy);

        setTooltipOpen(true);
        setTimeout(() => setTooltipOpen(false), 2000);
      } catch (err) {
        console.log(`Error ${err}`);
      }
    }
  }

  const styles = {
    content: 'w-full h-full flex flex-col gap-2 mt-3',
    listItem:
      'w-full grid grid-cols-[1fr_auto_2fr] items-start gap-2 text-sm uppercase bg-midnight rounded',
    label:
      'justify-self-end font-semibold text-shadow-glow text-fluid break-words',
    separator: 'mx-2 text-center font-bold text-shadow-subtle text-lightblue',
    value: (item) =>
      `text-left break-words text-fluid ${
        item.url
          ? 'cursor-pointer hover:text-shadow-shine hover:animate-pulse'
          : ''
      }`,
    valueCopyable: (item) =>
      `pr-2 text-left break-words text-fluid ${
        item.url || item.copy
          ? 'cursor-pointer hover:text-shadow-shine hover:animate-pulse'
          : ''
      }`,
  };

  return (
    <Wrapper cls='grow-0'>
      <Content padding='p-0' cls={styles.content}>
        {details.map((item) => (
          <Wrapper key={item.label} cls={styles.listItem}>
            {/* L a b e l */}
            <h5 className={styles.label}>{item.label}</h5>

            {/* S e p a r a t o r */}
            <span className={styles.separator}>&rsaquo;</span>

            {/* V a l u e */}
            {item.copy ? (
              <CustomTooltip tooltipOpen={tooltipOpen}>
                <span
                  className={styles.valueCopyable(item)}
                  onClick={() => handleClick(item)}
                >
                  {item.value}
                </span>
              </CustomTooltip>
            ) : (
              <span
                className={styles.value(item)}
                aria-label={item.url ? `${item.url}` : ''}
                onClick={() => handleClick(item)}
              >
                {item.value}
              </span>
            )}
          </Wrapper>
        ))}
      </Content>
    </Wrapper>
  );
}

export default ContactDetails;
