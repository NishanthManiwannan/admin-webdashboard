import React from 'react';
import './app.css';

import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="container">
        <Sidebar></Sidebar>

        <div className="containerRight">
          2nd view
        </div>
      </div>
    </div>
  );
}

export default App;
