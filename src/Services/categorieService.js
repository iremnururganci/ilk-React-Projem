import axios from 'axios'
import http from '../Helpers/httpCommon'

const getAll=()=>{
    return http.get('/categories')
}

const addParentCategory = data=>{

   return axios.post("https://projectone.proxolab.com/api/category",data)
   
}
const updateParentCategory = data=>{

    return axios.put("https://projectone.proxolab.com/api/category",data)
    
 }

const categorieService={
    getAll,
    addParentCategory,
    updateParentCategory
}
 export default categorieService;
 