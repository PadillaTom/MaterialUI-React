import './App.css';
// Components:
import Header from './Components/Header';
// Themes:
import { ThemeProvider } from '@material-ui/core/styles';
import Themes from './Components/Themes';

function App() {
  return (
    <ThemeProvider theme={Themes}>
      <Header></Header>
      <section className='app-section'>Some Content</section>
      <section className='app-section2'>Some Content</section>
    </ThemeProvider>
  );
}

export default App;
