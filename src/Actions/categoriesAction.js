import { ADD_PARENT_CATEGORY, GET_CATEGORIES,UPDATE_PARENT_CATEGORY } from "./actionTypes";
import CategorieService from "../Services/categorieService";

export const getAllCategorie = () => async (dispatch) => {
  try {
    const response = await CategorieService.getAll();
    dispatch({
      type: GET_CATEGORIES,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const addParentCategory = (category) => async (dispatch) => {
  try {
    const response = await  CategorieService.addParentCategory( category );
    console.log('dispacth çalıştı')
    console.log(category)

    dispatch({
      type:ADD_PARENT_CATEGORY,
      payload: response.data,
    });

  
    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateParentCategory = (category) => async (dispatch) => {
  try {
    const response = await  CategorieService.updateParentCategory( category );
    console.log('dispacth çalıştı')
    console.log(category)

    dispatch({
      type:UPDATE_PARENT_CATEGORY,
      payload: response.data,
    });

  
    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

