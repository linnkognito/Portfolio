import { useState } from 'react';
import CustomTooltip from './CustomTooltip';

const details = [
  { label: 'Name', value: 'Linn Johansen' },
  { label: 'DoB', value: '09/26/1989' },
  {
    label: 'Email',
    value: 'linn . es . johansen [@] gmail . com',
    copy: 'linn.es.johansen@gmail.com',
  },
  { label: 'Speaks', value: 'English & Swedish' },
  {
    label: 'LinkedIn',
    value: 'Linn ES Johansen',
    url: 'https://www.linkedin.com/in/linn-es-johansen/',
  },
  {
    label: 'GitHub',
    value: 'linnkognito',
    url: 'https://github.com/linnkognito',
  },
  { label: 'Want', value: 'Full-time & Freelance' },
];

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

  return (
    <>
      {details.map((item) => (
        <div
          key={item.label}
          className='w-full grid grid-cols-[1fr_auto_1fr] items-start gap-2 text-sm uppercase bg-midnight rounded'
        >
          {/* L a b e l */}
          <h5 className='justify-self-end font-semibold text-shadow-glow text-fluid break-words'>
            {item.label}
          </h5>

          {/* S e p a r a t o r */}
          <span className='mx-2 text-center font-bold text-shadow-subtle text-ice'>
            &rsaquo;
          </span>

          {/* V a l u e */}
          {item.copy ? (
            <CustomTooltip tooltipOpen={tooltipOpen}>
              <span
                className={`text-left break-words text-fluid ${
                  item.url || item.copy
                    ? 'cursor-pointer hover:text-shadow-shine hover:animate-pulse'
                    : ''
                }`}
                onClick={() => handleClick(item)}
              >
                {item.value}
              </span>
            </CustomTooltip>
          ) : (
            <span
              className={`text-left break-words text-fluid ${
                item.url || item.copy
                  ? 'cursor-pointer hover:text-shadow-shine hover:animate-pulse'
                  : ''
              }`}
              aria-label={item.url ? `${item.url}` : ''}
              onClick={() => handleClick(item)}
            >
              {item.value}
            </span>
          )}
        </div>
      ))}
    </>
  );
}

export default ContactDetails;
