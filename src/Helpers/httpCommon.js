import axios from "axios";
export default axios.create({
    baseURL:'https://projectone.proxolab.com/api',
    headers:{
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
    }
})
