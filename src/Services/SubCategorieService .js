import axios from 'axios'
import http from '../Helpers/httpCommon'

const getAll=()=>{
    return http.get('/subCategories')
}

const addSubCategory = data=>{
    const subcategory = Object.assign({},data)

    console.log('servis çalıştı',data)
    console.log('servis çalıştı',"irem")
   // return http.post("/category", data);
   return axios.post("https://projectone.proxolab.com/api/subCategory",data)
   
}
const updateSubCategory = data=>{
    const updatesubcategory = Object.assign({},data)

    console.log('servis çalıştı',data)
    console.log('servis çalıştı',"irem")
   // return http.post("/category", data);
   return axios.put("https://projectone.proxolab.com/api/subCategory",data)
   
}
const SubCategorieService={
    getAll,
    addSubCategory,
    updateSubCategory
}
 export default SubCategorieService;
 