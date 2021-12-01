import axios from 'axios'

const PRODUCT_REST_API_URL = 'http://localhost:8080/api/productos/';

class ProductServices {

    getProducts(){
        return axios.get(PRODUCT_REST_API_URL).then(res => res.data);
    }
}

export default new ProductServices();