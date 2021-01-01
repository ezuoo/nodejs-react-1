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
import MyPage from './components/views/MyPage/MyPage';
import AdminPage from './components/views/AdminPage/AdminPage';

import Auth from './hoc/auth';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"  component = { Auth(LandingPage, null) } />
          <Route exact path="/login" component = { Auth(LoginPage, false) } />
          <Route exact path="/register" component = { Auth(RegisterPage, false) }/>
          <Route exact path="/mypage" component = { Auth(MyPage, true) }/> 
          <Route exact path="/admin" component = { Auth(AdminPage, true, true) }/>      
        </Switch>
    </Router>
  );
}
export default App;


