// https://api.joeleprof.com/tec-map/me
import axios from "axios";





export async function findMe() {
    try {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { 'Authorization': `Bearer ${token}` } };
    const response = await axios.get('https://api.joeleprof.com/tec-map/me/', headers);

    if (response.status == 404) {
        alert(`Not Found!! ${response.status}`);
        return false;
    }
    else if (response.status == 401) {
        alert(` Unauthorized !! ${response.status}`);
        return false;
    }

    return response.data.data;

    } catch (error) {
        console.log(error);
    }
}

export async function ModifierMoi(username, email,) {
    try {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { 'Authorization': `Bearer ${token}` } };
    const response = await axios.put('https://api.joeleprof.com/tec-map/me/', {
        'username': username,
        'email': email,
    }, headers);
    if (response.data.success) {
        alert(`Mise a jour reussi ${response.status}`)
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
    return false;
 
    } catch (error) {
        console.log(error);
    }

}

export async function DeleteMe() {
    try {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { 'Authorization': `Bearer ${token}` } };
    const response = await axios.delete('https://api.joeleprof.com/tec-map/me/', headers);
    if (response.data.success) {
        alert(`Suppression reussi ${response.status}`)
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
    return false;
 
    } catch (error) {
        console.log(error);
    }

}
