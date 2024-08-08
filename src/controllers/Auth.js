// https://api.joeleprof.com/tec-map/auth/login

//a modifier pour recuperer les coordonnees des utilisateurs

import axios from "axios";

export async function Create(username,fullName, email, password) {
    const response = await axios.post('https://api.joeleprof.com/tec-map/auth/register', {
        'username': username,
        'email': email,
        'fullName':fullName,
        'password': password
    });

try{
    if (response.data.success) {
        alert(`Connexion reussi ${response.status}`)
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('isAdmin', response.data.isAdmin);

        return true;


    }
    if (response.status == 404) {
        alert(`Not Found!! ${response.status}`);
        return false;
    }
    if (response.status == 401) {
        alert(` Unauthorized !! ${response.status}`);
        return false;
    }
    if (response.status == 409) {
        alert(` Bad request !! ${response.status}`);
        return false;
    }
    return false;}
    catch(error){
        console.log(error)
        if (error.response.status == 404) {
            alert(`Not Found!! ${response.status}`);
            return false;
        }
        if (error.response.status == 401) {
            alert(` Unauthorized !! ${response.status}`);
            return false;
        }
        if (error.response.status == 409) {
            alert(` Bad request !! ${response.status}`);
            return false;
        }
        return false;
    }

}
export async function login(email, password) {
    try {
    const response = await axios.post('https://api.joeleprof.com/tec-map/auth/login', {
        "email": email,
        "password": password
    });
    console.log(response.data);
    if (response.status) {
        alert(`Connexion reussi ${response.status}`)
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('isAdmin', response.data.isAdmin);

      return true;

    }
    if (response.status == 404) {
        alert(`Not Found!! ${response.status}`);
        return false;
    }
    else if (response.status == 401) {
        alert(` Unauthorized !! ${response.status}`);
        return false;
    }
    else if (response.status == 409) {
        alert(` Bad request !! ${response.status}`);
        return false;
    }
    return false;
  
    } catch (error) {
        console.log(error);
    }

}