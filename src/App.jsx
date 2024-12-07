import AppContainer from './components/AppContainer';
import Profile from './components/Profile';
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
      <Profile />
      <Projects />
    </AppContainer>
  );
}

export default App;
