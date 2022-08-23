
import SubCategorieService from "../Services/SubCategorieService ";
import { ADD_SUB_CATEGORY, GET_SUB_CATEGORIES,UPDATE_SUB_CATEGORY } from "./actionTypes";

export const getAllSubCategories = () => async (dispatch) => {
  try {
    const response = await SubCategorieService.getAll();
    dispatch({
      type: GET_SUB_CATEGORIES,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addSubCategory = (subcategory) => async (dispatch) => {
  try {
    const response = await  SubCategorieService.addSubCategory( subcategory );
    console.log('dispacth çalıştı')
    console.log(subcategory)

    dispatch({
      type:ADD_SUB_CATEGORY,
      payload: response.data,
    });

    console.log(dispatch({
      type:ADD_SUB_CATEGORY,
      payload: response,
    }))

    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};


export const updateSubCategory = (subcategory) => async (dispatch) => {
  try {
    const response = await  SubCategorieService.updateSubCategory( subcategory );
    console.log('dispacth çalıştı')
    console.log(subcategory)

    dispatch({
      type:UPDATE_SUB_CATEGORY,
      payload: response.data,
    });

    console.log(dispatch({
      type:UPDATE_SUB_CATEGORY,
      payload: response,
    }))

    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};
