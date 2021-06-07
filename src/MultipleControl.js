import React, { useState } from 'react';

const places = ['TPHCM', 'HN', 'DN', 'BD'];

const MultipleControl = () => {
  const [valueForm, setValueForm] = useState({'email': '', 'phone': '', 'place': ''});

  const mapOptions = places.map((place, index) => <option key={index}>{place}</option>)

  const handleInputChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    setValueForm({...valueForm,[name]:e.target.value});
  }

  console.log(valueForm);


 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valueForm);
 }

  return(
    <form onSubmit={handleSubmit}>
      <h2>Multiple Control Form</h2>
      <label>
        Email:
          <input name='email' value={valueForm.email} onChange={handleInputChange} type="text"/>
      </label>
      <label>
        Phone Number:
          <input name='phone' value={valueForm.phone} onChange={handleInputChange} type="text"/>
      </label>
      <label>
        Place:
        <select name="place" value={valueForm.place} onChange={handleInputChange}>
          {mapOptions}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default MultipleControl;