import React from 'react';
import { Route, Routes } from 'react-router-dom';

//  Pages
import Login from './pages/Login';
import Home from './pages/Home';

// styles
import './App.css';

function App() {
  return (
    <div>
      <div className="routes">
        <Routes>
          <Route  exact path="/login" element={<Login />} />
          <Route  exact path="/*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
