import AppContainer from './components/AppContainer';
import Section from './components/Section';
import Profile from './components/Profile';
import About from './components/About';
import Info from './components/Info';
import Technologies from './components/Technologies';
import Header from './components/Header';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Projects from './components/Projects';

function App() {
  return (
    <AppContainer>
      <Header />

      <Section>
        <Profile>
          <About />
          <Info />
        </Profile>
        <Technologies />
      </Section>

      <Projects />
    </AppContainer>
  );
}

export default App;
