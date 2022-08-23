import { ADD_PARENT_CATEGORY, GET_CATEGORIES, UPDATE_PARENT_CATEGORY } from "../Actions/actionTypes";

const category = {}

function categorieReducer(state=category,action){

    const{type,payload}=action
    switch (type) {
    case GET_CATEGORIES:
        state = {...state, categories :action.payload.data}
        console.log(category)
           return state

    case ADD_PARENT_CATEGORY:
        return {...state, categoies:[...state.category,action.payload.data] };

    case UPDATE_PARENT_CATEGORY:
            const gelen = action.payload
            const newCategory = state.categories.map((item)=>{
                if (item.id === gelen.id) {
                    return gelen
                }else{
                    return item
                }
            })
            return {...state, category:newCategory,payload}
        default:
            return state
    }

}
export default categorieReducer;

