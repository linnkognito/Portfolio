import ProfileContainer from './components/ProfileContainer';
import ShowcaseContainer from './components/ShowcaseContainer';
import Header from './components/Header';
import Section from './components/Section';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <Header />

      <Section>
        <ProfileContainer />
        <ShowcaseContainer />
      </Section>
    </>
  );
}

export default App;
