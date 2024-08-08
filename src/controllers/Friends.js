// https://api.joeleprof.com/tec-map/position/friends

import axios from "axios";


export async function FindAllFriends() {
    try {
        const token = sessionStorage.getItem('token');
        const headers = { headers: { 'Authorization': `Bearer ${token}` } };
        const response = await axios.get('https://api.joeleprof.com/tec-map/friends/', headers);
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

        return response.data.data;

    } catch (error) {
        alert("error");
    }



}
export async function AjouterFriend(id) {
    try {
        const token = sessionStorage.getItem('token');
        const headers = { headers: { 'Authorization': `Bearer ${token}` } };
        const response = await axios.post('https://api.joeleprof.com/tec-map/friends/'+ id,{}, headers);
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

        return response.data.data;

    } catch (error) {
        // alert(error);
    }

}


export async function DeleteFriend(id) {
    try {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { 'Authorization': `Bearer ${token}` } };
    const response = await axios.delete('https://api.joeleprof.com/tec-map/friends/' + id, headers);
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
    else if (response.status == 409) {
        alert(` Bad request !! ${response.status}`);
        return false;
    }
    return false;
    
    } catch (error) {
        console.log(error);
    }
}