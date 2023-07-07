import React from 'react';

const Bio = ({ bio }) => {
    return (
        <div className='biography'>
            <h2>Biografia</h2>
            <p>{bio}</p>
        </div>
    );
};

export default Bio;