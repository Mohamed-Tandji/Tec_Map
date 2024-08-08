import React from 'react'
import { useState } from 'react';
import { useNavigate , Link} from "react-router-dom"
import InputPerso from '../components/InputPerso';
import { Create } from '../controllers/Auth';



const Register = () => {
    const navigate = useNavigate();

    const [username, setusername] = useState('');
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');


    const handleOnsubmit = (e) => {

        e.preventDefault(); // non-refresh la page

    }
    const handleOnChangeusername = (e) => {

        setusername(e.target.value);
    }
    const handleOnChangename = (e) => {

        setname(e.target.value);
    }
    const handleOnChangeEmail = (e) => {

        setEmail(e.target.value);
    }

    const handleOnChangepassword = (e) => {

        setpassword(e.target.value);
    }
    const FunInscription = async () => {
        const response = await Create(username, name, email, password);
        if (response) {
            navigate("/menu");
        } else {
            alert("Quelque chose ne fonctinne pas");
        }
        // handleReturn();

    }
    return (
        <>
            <div className='body-c' >

                <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <form class="container-text" onSubmit={handleOnsubmit}>
                        <h1>Creer un compte</h1><br />
                        <div className='shadow-sm p-4 rounded-3 bg-light'>

                            <InputPerso
                                type='username'
                                title="Username"
                                value={username}
                                handleOnChange={handleOnChangeusername}
                            />
                            <br />
                            <InputPerso
                                type='name'
                                title="FullName"
                                value={name}
                                handleOnChange={handleOnChangename}
                            />
                            <br />
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

                            <button type='submit' className='btn btn-primary' onClick={FunInscription} value='button'>Envoyer</button>

                            <label >Vous avez un  compte ? <Link className='btn-primary1' to="/">Login</Link></label>&nbsp;
                        </div>
                    </form>

                    </div>

                </div>
                <br/>      <br/>

            </>

            )
}

            export default Register