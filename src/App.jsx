import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Settings from './components/Settings';
import ContentLibrary from './components/Content-Library';
import Dashboard from './components/Dashboard';
import PostSchedule from './components/PostSchedule';
import Callback from './auth/Callback';
import './styles/App.css';
import './styles/Font.css';
import Linkedln from './socialmedia/Linkedln';
import Instagram from './socialmedia/Instagram';



function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/callback" element={<Callback />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/content-library" element={<ContentLibrary />}  /> 
        <Route path="/schedule" element={<PostSchedule />}  /> 
        <Route path="/settings" element={<Settings />}  /> 
        <Route path="/schedule/linkedln" element={<Linkedln />}  /> 
        <Route path="/schedule/instagram" element={<Instagram />}  /> 
      </Routes> 
    </Router>
  );
}

export default App;

