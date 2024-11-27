import { v4 as uuid } from 'uuid';

const details = [
  { label: 'Name', value: 'Linn Johansen' },
  { label: 'DoB', value: '09/26/1989' },
  { label: 'Email', value: 'linn.es.johansen [@] gmail.com' },
  { label: 'Speaks', value: 'English & Swedish' },
  {
    label: 'LinkedIn',
    value: 'linn-es-johansen',
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
  return (
    <>
      {details.map((item) => (
        <div
          key={uuid()}
          className='w-full h-auto flex items-start text-sm uppercase'
        >
          {/* Label */}
          <h5 className='w-1/2 min-w-1/2 flex-grow flex justify-end font-semibold text-shadow-glow text-fluid break-words'>
            [ {item.label} ]
          </h5>

          {/* Separator */}
          <span className='w-2 min-w-2 mx-3 flex justify-start font-bold text-shadow-subtle text-ice'>
            ›
          </span>

          {/* Value */}
          <span className='w-1/2 min-w-1/2 flex-grow break-words text-fluid'>
            {item.value}
          </span>
        </div>
      ))}
    </>
  );
}

export default ContactInfo;
