import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import InputPerso from '../components/InputPerso';
import { ModifierMoi } from '../controllers/Me';



const ChangeMe = () => {
  const navigate = useNavigate();

  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');

  const handleReturn = () => {
    navigate(-1);
  }
  const handleOnsubmit = (e) => {

    e.preventDefault(); // non-refresh la page

  }
  const handleOnChangeusername = (e) => {

    setusername(e.target.value);
  }
  const handleOnChangeEmail = (e) => {

    setEmail(e.target.value);
  }

 
  const FunModif= async () => {
    const response = await ModifierMoi(username, email);
    if (response) {
      navigate("/me/");
    } else {
      alert("Quelque chose ne fonctinne pas");
    }
    // handleReturn();

  }

  
  return (
    <div className='body' >
      <br /><br /><br /><br /><br />

      <h3>Modifier mon compte</h3>
      <form onSubmit={handleOnsubmit} >
        <InputPerso
          type='username'
          title="Username"
          value={username}
          handleOnChange={handleOnChangeusername}
        />
        <InputPerso
          type='email'
          title="Email"
          value={email}
          handleOnChange={handleOnChangeEmail}
        />
        
        <br />

        <button type='submit' className='btn btn-primary' onClick={FunModif} value='button'>Modifier</button>
        <button className="btn btn-primary" onClick={handleReturn}>Retour</button>

      </form>

      <br /><br /><br /><br /> <br />



    </div>
  )
}

export default ChangeMe

