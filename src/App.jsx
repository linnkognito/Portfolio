import AppContainer from './components/AppContainer';
import Main from './components/Main';
import Header from './components/Header';
import Section from './components/Section';
import Profile from './components/Profile';
import About from './components/About';
import Info from './components/Info';
import Technologies from './components/Technologies';
// import ActionBar from './components/ActionBar';
import ProjectPreview from './components/ProjectPreview';
import SourceCode from './components/SourceCode';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Projects from './components/Projects';
import ProjectSidebar from './components/ProjectSidebar';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <AppContainer>
      <Header />

      <Main>
        <Section>
          <Profile>
            <About />
            <Info />
          </Profile>
          <Technologies />
        </Section>

        <Section>
          <Projects>
            <ProjectSidebar>
              <SourceCode />
              <ProjectDetails />
            </ProjectSidebar>

            <ProjectPreview />
          </Projects>
        </Section>
      </Main>
    </AppContainer>
  );
}

export default App;
