import axios from 'axios';

class ProductServices {
    getProducts(domain, data) {
        if (!domain.includes('localhost')) {
            axios.get('/products', data);
        }
    }
    postProduct(domain, data) {
        if (domain.includes('localhost')) {
            axios.post('/register', data);
        } else {
            axios.post('/registerTenant', data);
        }
    }
}
export default new ProductServices();
