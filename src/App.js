import React from 'react';
import './app.css';

import Navbar from './components/navbar/Navbar'
import Home from './components/pages/Home/Home';
import Sidebar from './components/sidebar/Sidebar';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import UserList from './components/pages/userlist/UserList';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container">

        <Sidebar></Sidebar>

        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route path="/userList" exact element={<UserList></UserList>}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
