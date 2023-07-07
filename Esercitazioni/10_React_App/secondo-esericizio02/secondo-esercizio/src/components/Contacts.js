import React from 'react';

const Contacts = ({ contacts }) => {
    return (
        <div className='contacts'>
            <h2>Contacts</h2>
            <ul>
                {contacts && contacts.map((contact, index) => (
                    <li key={index}>{contact}</li>
                ))}
            </ul>
        </div>
    );
};

export default Contacts;