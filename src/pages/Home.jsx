import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Topbar from '../components/Navbar/Navbar';
import Dashboard from '../components/Dashboard/Dashboard';
import AddStudent from '../components/AddStudent/AddStudent';
import SecurityNotice from '../components/SecurityNotice/SecurityNotice';
import ImergencyResponse from '../components/ImergencyResponse/ImergencyResponse';

const Home = () => {
    return (
        <div>
            <Topbar />
            <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route exact path='/addstudent' element={<AddStudent />} />
                <Route exact path='/securitynotice' element={<SecurityNotice />} />
                <Route exact path='/imergencyresponse' element={<ImergencyResponse />} />
            </Routes>
        </div>
    )
}

export default Home;