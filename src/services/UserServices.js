import axios from 'axios';

class UserServices {
    login(domain, data) {
        if (domain.includes('localhost')) {
            axios.post('/users/login', data);
        } else {
            axios.post('/usersTenancy/login', data);
        }
    }
    register(domain, data) {
        if (domain.includes('localhost')) {
            axios.post('/users/register', data);
        } else {
            axios.post('/usersTenancy/register', data);
        }
    }
}
export default new UserServices();
