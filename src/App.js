import React from 'react';
import './app.css';

import Navbar from './components/navbar/Navbar'
import Home from './components/pages/Home/Home';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="container">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
