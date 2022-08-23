import axios from 'axios'
import http from '../Helpers/httpCommon'

const getAll=()=>{
    return http.get('/products')
}
const addProductCategory = product=>{

    const token = localStorage.getItem('token')
    console.log(product)
    console.log(token)

   return axios({
    url:'https://projectone.proxolab.com/api/product',
    method:'post',
    headers:{
        'Authorization' : 'Bearer ' + token,
        contentType:'multi-part/formData'
    },
    data:product
   })
   .then(response => response.data)
   .then(response => console.log(response))
   
}

const ProductService={
    getAll,
    addProductCategory
}
 export default ProductService;
 