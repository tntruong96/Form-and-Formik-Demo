import React, { useState } from 'react';

const HandyForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>This is handy form</h2>
      <label>
        First Name:
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"/>
      </label>
      <label>
        Last Name:
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"/>
      </label>
      <button type="submit">Submit</button>
      <p>{firstName}</p>
      <p>{lastName}</p>

    </form>
  )
}

export default HandyForm;