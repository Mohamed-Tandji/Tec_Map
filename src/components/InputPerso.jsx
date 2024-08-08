import React from 'react'
import propTypes from 'prop-types'

export const InputPerso = ({type,value,handleOnChange }) => {
    const generatePlaceHolder =()=>{
        if(type==='username')  return  'Entrez votre nom utilisateur svp';
        if(type==='name')  return  'Entrez votre nom complet svp';
        if(type==='password')  return  'Entrez votre mot de passe svp';
        if(type==='email')  return  'Entrez votre courriel svp';
        return '';

    }
    const showAlert=()=>{
        if(type==='email'&& !value.includes('@')){
            return <div className='input-error'>Veuillez entrez une adresse courriel valide  </div>

        }
        if(type=== 'username' && value.length < 2){
            return <div className='input-error'>Votre nom utilisateur doit contenir minimum 3 caracteres </div>

        }
        if(type=== 'name' && value.length < 2){
            return <div className='input-error'>Votre nom complet doit contenir minimum 3 caracteres </div>

        }
        if(type=== 'password' && value.length < 8){
            return <div className='input-error'>Votre mot de passe doit contenir minimum 8 caracteres </div>

        }
        return ;
    }

  return (
    <>

     <input
     className='input-form'
      type={type} 
      placeholder={generatePlaceHolder()}
      value={value}
      onChange={handleOnChange}
      required
      />
      {showAlert()}

    </>
  )
}
InputPerso.propTypes={
    type: propTypes.string,
}
InputPerso.defaultProps={
    type:'Text'
}

export default InputPerso