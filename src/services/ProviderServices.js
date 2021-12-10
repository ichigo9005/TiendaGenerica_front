import axios from 'axios'

const PROVIDER_REST_API_URL = 'http://localhost:8080/api/proveedores/';

class ProviderServices {

    getProviders(){
        return axios.get(PROVIDER_REST_API_URL).then(res => res.data);
    }

    save(providerr){
        return axios.post(PROVIDER_REST_API_URL, providerr).then(res => res.data);
    }

    update(providerr, id){
        return axios.put(PROVIDER_REST_API_URL+id, providerr).then(res => res.data);
    }

    delete(id){
        return axios.delete(PROVIDER_REST_API_URL+id).then(res => res.data);
    }
}

export default new ProviderServices();