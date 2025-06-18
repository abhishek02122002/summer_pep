import React, { useState } from 'react';

export default function Login() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError('Name is required');
    } else {
      setError('');
      alert(`Welcome, ${name}!`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='input-value'>
          <label htmlFor="inputValue">Name</label>
          <input
            type="text"
            id="inputValue"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
