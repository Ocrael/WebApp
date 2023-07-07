import React, { useState } from 'react';         //username e password e gestisce l'errore , feeedback in console se da errore 

import axios from 'axios';

const Login = ({ onLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {                                         //pomeriggio , ibstallare cors consente ad express di lavorare su un altra cartella
               const response = await axios.post('http://localhost:3001/api/authenticate', { username, password}); //mettiamo in comunicazione il server
               onLogin(response.data.token);

               } catch (error) {
                console.error('Errore durante il login', error);
               }
            };



            return (

            <form onSubmit={handleSubmit}>

                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                 <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

                </form>
            );
        };
            export default Login;



                





        