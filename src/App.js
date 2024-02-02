import React from 'react';
import { Route, Routes } from 'react-router-dom';

//  Pages
import Login from './pages/Login';

// styles
import './App.css';

function App() {
  return (
    <div>
      <div className="routes">
        <Routes>
          <Route  exact path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
