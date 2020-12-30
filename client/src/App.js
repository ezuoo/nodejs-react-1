import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component = { Home } />

          <Route exact path="/landing"  component = { LandingPage } />

          <Route exact path="/login" component = { LoginPage } />
            
          <Route exact path="/register" component = { RegisterPage }/>

            
        </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div style = {{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
        Home Page
    </div>
  )
}
export default App;


