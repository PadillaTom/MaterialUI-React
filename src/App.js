import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Themes:
import { ThemeProvider } from '@material-ui/core/styles';
import Themes from './Components/Themes';
// Components:
import Header from './Components/Header';
//  Pages:
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Estimate from './Pages/Estimate';

function App() {
  return (
    <ThemeProvider theme={Themes}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/' exact>
            <Homepage></Homepage>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/estimate'>
            <Estimate></Estimate>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
