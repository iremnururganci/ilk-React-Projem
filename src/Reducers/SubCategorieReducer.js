import {ADD_SUB_CATEGORY, GET_SUB_CATEGORIES, UPDATE_PARENT_CATEGORY } from "../Actions/actionTypes";

const subCategory={};

function SubCategorieReducer(state=subCategory,action){

    const{type,payload}=action
    switch (type) {
        case GET_SUB_CATEGORIES:
            state = {...state, subCategories :action.payload.data}
            console.log(subCategory)
               return state

        case ADD_SUB_CATEGORY:
            return {...state, subCategories:[...state.subCategory,action.payload.data] };

        case UPDATE_PARENT_CATEGORY:
            const gelen = action.payload
            console.log(action.payload.data)
            const newCategory = state.subCategories.map((item)=>{
                console.log('reducer' + item)
                if (item.id === gelen.id) {
                    return gelen
                }else{
                    return item
                }
            })
            return {...state, subCategory:newCategory,payload}
        default:
            return state
    }
}
export default SubCategorieReducer;