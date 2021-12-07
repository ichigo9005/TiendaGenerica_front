import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/usuarios/';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL).then(res => res.data);
    }

    save(userr){
        return axios.post(USERS_REST_API_URL, userr).then(res => res.data);
    }

    update(userr, id){
        return axios.put(USERS_REST_API_URL+id, userr).then(res => res.data);
    }

    delete(id){
        return axios.delete(USERS_REST_API_URL+id).then(res => res.data);
    }
    
}

export default new UserService();