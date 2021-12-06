import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/usuarios/';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL).then(res => res.data);
    }

    save(userr){
        return axios.post(USERS_REST_API_URL, userr).then(res => res.data);
    }
}

export default new UserService();