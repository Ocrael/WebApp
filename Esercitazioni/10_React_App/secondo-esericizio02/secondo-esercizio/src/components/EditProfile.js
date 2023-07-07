import axios from 'axios'; // axios serve a gestire le connessioni http
import React, { useState } from 'react';

    const EditProfile = ({ user, onUpdate }) => {
    const [name, setName] = useState(user.name);
    const [biography, setBiography] = useState(user.biography || '');
    const [projects, setProjects] = useState(user.projects || '');
    const [skills, setSkills] = useState(user.skills || '');
    const [contacts, setContacts] = useState(user.contacts || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:3001/api/updateProfile', { name, biography, projects, skills, contacts }, {
                headers: { 'Authorization': token }
            });
            onUpdate({name, biography, projects, skills, contacts });
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Biography"
                value={biography}
                onChange={(e) => setBiography(e.target.value)}
                />
            <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='text'
                placeholder='Projects'
                value={projects}
                onChange={(e) => setProjects(e.target.value)}
            />
            <input
                type='text'
                placeholder='Skills'
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
            />
            <input
                type='text'
                placeholder='Contacts'
                value={contacts}
                onChange={(e) => setContacts(e.target.value)}
            />
            <button type="submit">Update Profile</button>
        </form>
    );
};


export default EditProfile;