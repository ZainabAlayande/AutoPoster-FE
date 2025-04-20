import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Settings from './components/Settings';
import History from './components/History';
import Dashboard from './components/Dashboard';
import Drafts from './components/Drafts';
import MediaLibrary from './components/MediaLibrary';
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
        <Route path="/history" element={<History />}  /> 
        <Route path="/schedule" element={<PostSchedule />}  /> 
        <Route path="/settings" element={<Settings />}  />
        <Route path="/media-libraru" element={<MediaLibrary />}  />
        <Route path="/drafts" element={<Drafts />}  /> 
        <Route path="/schedule/linkedln" element={<Linkedln />}  /> 
        <Route path="/schedule/instagram" element={<Instagram />}  /> 
      </Routes> 
    </Router>
  );
}

export default App;

