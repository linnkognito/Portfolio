import FooterSection from './FooterSection';
import Logo from './Logo';

const sitemapListItems = ['Portfolio source code', 'Cover Letter', 'Projects'];
const contactListItems = ['linn.es.johansen@gmail.com'];

function Footer() {
  return (
    <footer className='grid grid-cols-[2fr_1fr] gap-24 w-full pl-10 py-4 mt-10 mb-0 bg-steel border-t border-offwhite-op'>
      <div className='flex flex-col w-full border items-center gap-10 px-10 '>
        <span className='flex w-full gap-10 justify-around border'>
          <FooterSection title='links' listItems={sitemapListItems} />
          <FooterSection title='contact' listItems={contactListItems} />
        </span>

        {/* Icons */}
        {/* <div className='w-full border'>{icons.map((icon) => icon.svg)}</div> */}
      </div>

      {/* Logo & Copyright */}
      <div className='flex flex-col gap-6'>
        <Logo />

        <h5 className='text-xs'>&copy; Linn Johansen, 2024</h5>
      </div>
    </footer>
  );
}

export default Footer;
