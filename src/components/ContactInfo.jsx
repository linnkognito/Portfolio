import { v4 as uuid } from 'uuid';

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
    value: 'link',
    url: 'https://www.linkedin.com/in/linn-es-johansen/',
  },
  {
    label: 'GitHub',
    value: 'linnkognito',
    url: 'https://github.com/linnkognito',
  },
  { label: 'Want', value: 'Full-time & Freelance' },
];

function ContactInfo() {
  async function handleClick(item) {
    if (item.url) window.open(item.url, '_blank', 'noopener,noreferrer');

    if (item.copy) {
      try {
        await navigator.clipboard.writeText(item.copy);
        console.log(`Copied text: ${item.copy}`);
      } catch (err) {
        console.log(`Error ${err}`);
      }
    }
  }

  return (
    <>
      {details.map((item) => (
        <div
          key={uuid()}
          className='w-full grid grid-cols-[1fr_auto_1fr] items-start gap-2 text-sm uppercase bg-steel rounded'
        >
          {/* Label */}
          <h5 className='justify-self-end font-semibold text-shadow-glow text-fluid break-words'>
            [ {item.label} ]
          </h5>

          {/* Separator */}
          <span className='mx-2 text-center font-bold text-shadow-subtle text-ice'>
            ›
          </span>

          {/* Value */}
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
        </div>
      ))}
    </>
  );
}

export default ContactInfo;
