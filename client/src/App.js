import './App.css';
import React, { useState, createContext, useEffect } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import ChatBotComponent from './components/chatBot';
import Footer from './components/footer';
import FAQ from './pages/faq';
import Colleges from './pages/colleges';
import Account from './pages/account';
import { makeStyles } from '@material-ui/core';
import { UserContext } from './UserContext';
import Cookies from 'js-cookie';
import axios from './api/axios';

const LOGIN_URL = '/api/v1/login';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#FFFFFF",
    fontFamily: "Nunito Sans",
    fontWeight: "600"
  }
}));

// const User=createContext(null);
function App() {
  const [navbar, setNavbar] = useState(false);
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [cookieToken, setCookieToken] = useState(null);

  //This method would work but seems taxing to the computer power.
  // window.setInterval(() => {
  //   if (!Cookies.get('token')) {
  //     setUser(null);
  //   }
  // }, 10000);

  useEffect(() => {
    if (Cookies.get('token')) setCookieToken(Cookies.get('token'));
    else{
      localStorage.removeItem('user');
    }
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [])
  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
  }, [user])
  return (
    <UserContext.Provider value={{ user, setUser, cookieToken, setCookieToken }}>
      <div className={classes.App}>
        <Router>
          <Navbar navbar={navbar} setNavbar={setNavbar} />
          <Routes>
            <Route exact path="/" element={<Home navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/about" element={<About navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/login" element={<Login navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/register" element={<Register navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/reviews" element={<FAQ navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/colleges" element={<Colleges navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/account" element={<Account navbar={navbar} setNavbar={setNavbar} />} />
          </Routes>
        </Router>
        {/* <ChatBotComponent /> */}
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
