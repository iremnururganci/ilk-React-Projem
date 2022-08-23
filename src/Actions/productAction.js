import { ADD_PRODUCT, GET_PRODUCTS } from "./actionTypes";
import ProductService from "../Services/productService";

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await ProductService.getAll();
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const Addproduct = (product) => async (dispatch) => {
  try {
    const response = await  ProductService.addProductCategory( product );
    console.log('dispacth çalıştı')
    console.log(product)

    dispatch({
      type:ADD_PRODUCT,
      payload: response.data,
    });

    console.log(dispatch({
      type:ADD_PRODUCT,
      payload: response,
    }))

    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};
