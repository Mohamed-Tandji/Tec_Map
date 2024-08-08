import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import InputPerso from '../components/InputPerso';
import { Link } from 'react-router-dom'
import { login } from '../controllers/Auth';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');


  const handleOnsubmit = (e) => {

    e.preventDefault(); // non-refresh la page

  }

  const handleOnChangeEmail = (e) => {

    setEmail(e.target.value);
  }

  const handleOnChangepassword = (e) => {

    setpassword(e.target.value);
  }
  const FunConnexion = async () => {
    const response = await login(email, password);
    if (response) {
      navigate("/menu")
    } else {
      alert("Quelque chose ne fonctinne pas");
    }


  }
  return (
    <>
        <div className='body-c' >

          <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <form class="container-text" onSubmit={handleOnsubmit}>
              <h1>Connexion au compte</h1><br />
              <div className='shadow-sm p-4 rounded-3 bg-light'>

                <InputPerso
                  type='email'
                  title="Email"
                  value={email}
                  handleOnChange={handleOnChangeEmail}
                />
                <br />

                <InputPerso
                  type='password'
                  title="Password"
                  value={password}
                  handleOnChange={handleOnChangepassword}
                />
                <br />
                <br />
                <button type='submit' className='btn btn-primary' onClick={FunConnexion} value='button'>Connexion</button><br />
                <label >Vous n'avez pas de compte ? <Link className='btn-primary1' to="auth/register/">Sign Up</Link></label>&nbsp;
              </div>
            </form>
          </div>


        </div>
     
    </>

  )
}

export default Login