// https://api.joeleprof.com/tec-map/position/friends

import axios from "axios";

export async function FindAllFriendsPositions(){

    try {
        const token = sessionStorage.getItem('token');
        const headers = { headers: { 'Authorization': `Bearer ${token}` } };
        const response = await axios.get('https://api.joeleprof.com/tec-map/position/friends/', headers);
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
        alert("error");
    }

}
export async function ModifierMyPosition(){
    
}