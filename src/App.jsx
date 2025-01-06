import AppContainer from './components/Containers/AppContainer';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Section from './components/Section';

import Profile from './components/Profile';
import About from './components/About/About';
import Info from './components/Info';
import Technologies from './components/Technologies';

import Projects from './components/Projects';
import ProjectSidebar from './components/ProjectSidebar';
import ProjectDetails from './components/ProjectDetails';
import ProjectPreview from './components/ProjectPreview';

import ProjectProvider from './contexts/ProjectProvider';

function App() {
  return (
    <>
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
            <ProjectProvider>
              <Projects>
                <ProjectSidebar>
                  <ProjectDetails />
                </ProjectSidebar>
                <ProjectPreview />
              </Projects>
            </ProjectProvider>
          </Section>
        </Main>
      </AppContainer>

      <Footer />
    </>
  );
}

export default App;
