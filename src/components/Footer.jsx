import FooterSection from './FooterSection';
import Logo from './Logo';

const sitemapListItems = ['About', 'Cover Letter', 'Projects'];
const contactListItems = ['linn.es.johansen@gmail.com'];
// const icons = [
//   {
//     name: 'LinkedIn',
//     svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b4c7db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//   <rect x="2" y="2" width="20" height="20" rx="2.5"></rect>
//   <path d="M8 11v6"></path>
//   <path d="M8 8h.01"></path>
//   <path d="M12 16v-5"></path>
//   <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
// </svg>`,
//   },
// ];

function Footer() {
  return (
    <footer className='grid grid-cols-[2fr_1fr] gap-24 w-full pl-10 py-4 mt-10 mb-0 bg-steel border-t border-offwhite-op'>
      <div className='flex flex-col w-full border items-center gap-10 px-10 '>
        <span className='flex w-full gap-10 justify-around border'>
          <FooterSection title='sitemap' listItems={sitemapListItems} />
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
