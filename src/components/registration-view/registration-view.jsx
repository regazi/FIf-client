import React, { useState } from 'react';
import "./registration-view.scss";
import PropTypes from "prop-types";

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send to server */
    props.onReg(username);
     
  };

  return (
    <form className="registration-card">
      <h1>Create Account</h1>
      <label>
        Username:
      </label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      
      <label>
        Email: 
      </label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
     
      <label>
        Birthday:
        </label>
        <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
      
      <label>
        Password:
      </label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
     
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <button type="button" onClick={handleSubmit}>login</button>
   
    </form>
  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};