import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";

import "./Products.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Actions/productAction";

function Products() {
  const products = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
const addToCart=(product)=>{
alert(product.name)
}
  return (
    <div>
      <Container>
        <div class="row">
          {products &&
            products.map((product, index) => (
              <div class="col-12 col-sm-6 col-xl-3 mt-4">
                <div class="card text-center h-100">
                  <div class="card-body">
                    <Row>
                      <Col>
                        <img
                          alt="Card imge"
                          src={product.image_path}
                          class="img-fluid rounded"
                        />
                        <Row>
                          <Col>
                            <a
                              style={{
                                color:"darkblue",
                                fontSize: "20px",
                                fontWeight: "bolder",
                              }}
                            >
                              {product.name}
                            </a>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <a style={{ fontSize: "25px ", color:"red"}}>
                              {"$" + product.price}
                            </a>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <div class="card-footer text-muted fst-italic">
                    <Button
                    onClick={()=>addToCart(product)}
                      style={{
                        backgroundColor: "#CCCC99",
                        color: "black",
                        borderColor: "white",
                        
                      }}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}
export default Products;
