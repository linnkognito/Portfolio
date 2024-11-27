// import ActionBar from './components/ActionBar';
import AboutLeft from './components/AboutLeft';
import AboutRight from './components/AboutRight';
import Header from './components/Header';
import Section from './components/Section';
// import Container from './components/Container';
// import Wrapper from './components/Wrapper';
// import ActionButtons from './components/ActionButtons';
// import Button from './components/Button';
// import Stats from './components/Stats';
// import Statusbar from './components/Statusbar';
// import CustomH5 from './components/H5';

// import Button from '@mui/material/Button';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <Header />

      <Section>
        <AboutLeft />
        <AboutRight />
      </Section>
    </>
  );
}

export default App;
