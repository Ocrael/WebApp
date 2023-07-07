import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Bio from './components/Bio';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Login from './components/Login';
import jwt_decode from 'jwt-decode';
import Register from './components/Register';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import styled from 'styled-components';




function App() {



  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  // eslint-disable-next-line  
  const [isRegistering, setIsRegistering] = useState(false);
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? jwt_decode(token) : null;
  });


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setIsAuthenticated(jwt_decode(token));
    }
  }, []);



  const handleRegisterSuccess = () => {
    setIsRegistering(false);
  };

  const handleLogin = (token) => {
    const decoded = jwt_decode(token);
    setUserData(decoded);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    localStorage.removeItem('token');
  };

 /* const handleProfileUpdate = (newName) => {
    setUserData({ ...userData, name: newName });
  };
  */

  const handleDetailsUpdate = (updatedProfiles) => {
    setUserData({ ...userData, ...updatedProfiles });
  };


  const StyledButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;


  return (
    //  apre il logout
    <div className="App">
      <Header />
      {isAuthenticated ? ( // viene visualizzato solo quando lo stato del componente e authenticated  , Importiamo il Profile                  
        <>
          <button onClick={handleLogout}>Logout</button>
          <Profile user={userData} />
          <EditProfile user={userData} onUpdate={handleDetailsUpdate} />
          <Bio biography={userData.biography} />
          <Projects projects={userData.projects} />
          <Skills skills={userData.skills} />
          <Contacts contacts={userData.contacts} />
        </>
      ) : isRegistering ? (
        <Register onRegisterSuccess={handleRegisterSuccess} />
      ) : (
        <div>

          <Login onLogin={handleLogin} />
          <StyledButton onClick={() => setIsRegistering(true)}>Register</StyledButton>
        </div>
        
      )}
    </div>

  );
};




export default App;