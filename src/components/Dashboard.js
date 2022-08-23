import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./Header";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllByRole } from "@testing-library/react";
import { getAllProducts } from "../Actions/productAction";
import { getAllCategorie } from "../Actions/categoriesAction";
import { getAllSubCategories } from "../Actions/subCategorieAction";

function Dashboard() {
  const navigate = useNavigate();

  const products = useSelector((state) => state.productReducer);
  const categories = useSelector((state) => state.categorieReducer.categories);
  console.log(categories)
  const SubCategories = useSelector((state) => state.SubCategorieReducer.subCategories);
  console.log(SubCategories)
console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategorie());
    dispatch(getAllSubCategories());
  }, []);

// const productsLength = products.data.length
  // const categoriesLength = categories.data.length
  //const subCategoriesLength =SubCategories.data.length
  return (
    <div>
      <Row>
        <h3 style={{ color: "#98504B" }} class="text-center mb-5 mt-4 ">
          "Dashboard"
        </h3>
      </Row>
      <Container>
        <table class="table table-hover mt-5">
          <tbody>
            <tr>
              <td colspan="2">Main Categories</td>
              <td>Total {categories?.length&&categories?.length}</td>
              <td>
                {" "}
                
                <button
                  class=""
                  id="btn1"
                  onClick={() => navigate("/CategoryManagement")}
                >
                  Category Management
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="2">Sub-Categories</td>
              <td>Total {SubCategories?.length?SubCategories?.length:0} </td>
              <td> </td>
            </tr>
            <tr>
              <td colspan="2">Products</td>
              <td>Total {products?.length?products?.length:0} </td>
              <td>
             
                <button
                  id="btn2"
                  onClick={() => navigate("/ProductManagement")}
                >
                  Product Management
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <button
          class=" w-100  mt-3"
          id="btn"
          onClick={() => navigate("/Products")}
        >
          Show All Products
        </button>
      </Container>
    </div>
  );
}
export default Dashboard;
