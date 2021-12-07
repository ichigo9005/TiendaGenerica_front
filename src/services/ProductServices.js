import axios from 'axios'

const PRODUCT_REST_API_URL = 'http://localhost:8080/api/productos/';

class ProductServices {

    getProducts(){
        return axios.get(PRODUCT_REST_API_URL).then(res => res.data);
    }

    save(productt){
        return axios.post(PRODUCT_REST_API_URL, productt).then(res => res.data);
    }

    update(productt, id){
        return axios.put(PRODUCT_REST_API_URL+id, productt).then(res => res.data);
    }

    delete(id){
        return axios.delete(PRODUCT_REST_API_URL+id).then(res => res.data);
    }
}

export default new ProductServices();