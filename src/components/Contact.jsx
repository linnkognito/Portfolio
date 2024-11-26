import BorderCorners from './BorderCorners';

function Contact() {
  return (
    <div className='w-1/2 rounded-t shadow-subtle-sm'>
      <h2>About</h2>
      <div className='p-2'>
        <BorderCorners>
          <img src='/img/pp.jpg' alt='Profile picture' className='w-full' />
        </BorderCorners>{' '}
      </div>
    </div>
  );
}

export default Contact;
