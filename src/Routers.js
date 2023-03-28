import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CreateNewPassword from './pages/CreateNewPassword';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
            <Route path='/' exact><Home/></Route>
            <Route path='/login' exact><Login/></Route>
            <Route path='/signup' exact><Signup/></Route>
            <Route path='/forgotpassword' exact><ForgotPassword/></Route>
            <Route path='/createnewpassword' exact><CreateNewPassword/></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Routers
