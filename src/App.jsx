import AppContainer from './components/AppContainer';
import Main from './components/Main';
import Header from './components/Header';
import Section from './components/Section';
import Profile from './components/Profile';
import About from './components/About';
import Info from './components/Info';
import Technologies from './components/Technologies';
import ProjectPreview from './components/ProjectPreview';
// import SourceCode from './components/SourceCode';
import Projects from './components/Projects';
import ProjectSidebar from './components/ProjectSidebar';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
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
                  {/* <SourceCode /> */}
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
