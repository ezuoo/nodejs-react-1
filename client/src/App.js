import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
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

function Home(props) {

  const onClickHandler = () => {
    axios.get('/api/users/logout')
          .then(res => {
              if (res.data.success) {
                  props.history.push('/login');
              } else {
                  alert('Fail Logout');
              }
          });
  }

  return (
    <div style = {{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
        Home Page
        <button onClick={onClickHandler}>
            로그아웃
        </button>
    </div>
  )
}
export default App;


