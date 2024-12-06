import ProfileContainer from './components/ProfileContainer';
import Header from './components/Header';
import Section from './components/Section';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className='flex flex-col w-screen items-center'>
        <Header />

        <Section>
          <ProfileContainer />
        </Section>

        <Section>
          <Projects />
        </Section>
      </div>
    </>
  );
}

export default App;
