import AppContainer from './components/Containers/AppContainer';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import Section from './components/Containers/Section';

import Profile from './components/About/Profile';
import About from './components/About/About';
import Info from './components/About/Info';
import Technologies from './components/About/Technologies';

import Projects from './components/Projects/Projects';
import ProjectSidebar from './components/Projects/ProjectSidebar';
import ProjectDetails from './components/Projects/ProjectDetails';
import ProjectPreview from './components/Projects/ProjectPreview';

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
