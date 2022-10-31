import axios from 'axios';

export default axios.create({
    baseURL: "/api/forms",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})