import logo from './logo.svg';
import './App.css';
import Services from './components/Home/Services/Services';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Anrolled from './components/Anrolled/Anrolled/Anrolled';
import Login from './components/Login/Login/Login';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './components/Login/Login/privetRoute/PrivetRoute';
import Footer from './components/Shared/Footer/Footer';
import About from './components/About/About';

import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>


            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/anrolled/:enrolId">
              <Anrolled></Anrolled>
            </PrivetRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
