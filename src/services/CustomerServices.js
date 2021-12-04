import axios from 'axios'

const CUSTOMER_REST_API_URL = 'http://localhost:8080/api/cliente/';

class CustomerServices {

    getCustomers(){
        return axios.get(CUSTOMER_REST_API_URL).then(res => res.data);
    }
}

export default new CustomerServices();