import React, { Component } from "react";
import { Container, Row, Col ,Table} from "reactstrap";

import "./Dashboard.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllByRole } from "@testing-library/react";
import { getAllProducts } from "../Actions/productAction";
import { getAllCategorie } from "../Actions/categoriesAction";
import { getAllSubCategories } from "../Actions/subCategorieAction";
import AddProduct from "./Modals/AddProduct";
import { Button,Modal, ModalHeader, Label,Input,ModalBody, ModalFooter,Accordion,AccordionHeader,AccordionBody,AccordionItem,UncontrolledAccordion } from 'reactstrap';


export default function ProductManagement() {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const initCategory={
    id:"",
    name:"",
    category_name:"",
    category_id:"",

  }
  const [mycategory, setCategory] = useState(initCategory);
  const products = useSelector((state) => state.productReducer);
  const categories = useSelector((state) => state.categorieReducer.categories);
  const SubCategories = useSelector((state) => state.SubCategorieReducer.subCategories);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategorie());
    dispatch(getAllSubCategories());
  }, []);

  const arr1 = categories ? categories : [];
  const arr2 = SubCategories ? SubCategories : [];
  const arr3 = products ? products : [];
  const newCategory = { id: 0, category_name: "" };
  const newProduct = {
    id: 0,
    sub_category_id: 0,
    image_path: "",
    product_name: "",
    price: 0,
  };

  var newCategories = [];
  var newProducts = [];

  for (let i = 0; i < arr1.length; i++) {
    newCategory.id = arr1[i].id;
    newCategory.category_name = arr1[i].name;

    let copied = Object.assign({}, newCategory);
    newCategories.push(copied);
    var clonePlaseItem = JSON.stringify(Array.from(newCategories));
  }
  // console.log(newCategories);

  const mergeById = (a1, a2) =>
    a2.map((itm) => ({
      ...a1.find((item) => item.id === itm.category_id && item),
      ...itm,
    }));
  // console.log(mergeById(newCategories, arr2));
  const lastCategories = mergeById(newCategories, arr2);
  // console.log(lastCategories);

  for (let i = 0; i < arr3.length; i++) {
    newProduct.id = arr3[i].id;
    newProduct.product_name = arr3[i].name;
    newProduct.sub_category_id = arr3[i].sub_category_id;
    newProduct.image_path = arr3[i].image_path;
    newProduct.price = arr3[i].price;

    let copied = Object.assign({}, newProduct);
    newProducts.push(copied);
    var clonePlaseItem = JSON.stringify(Array.from(newProducts));
  }
  // console.log(newProducts);
  const ById = (a1, a2) =>
    a2.map((itm) => ({
      ...a1.find((item) => item.id === itm.sub_category_id && item),
      ...itm,
    }));
  const lastCategories2 = ById(lastCategories, newProducts);
  // console.log(lastCategories2);

  const deneme = (a) => {
    console.log(a);
    setCategory(a)
   toggle()
  }
  console.log(mycategory)
  return (
    <div>
      <Row>
        <h3 style={{ color: "#98504B" }} className="text-center mb-5 mt-4 ">
          "Product Management"
        </h3>
      </Row>

      <Container>
        <Row>
          <Col className="d-flex justify-content-center ">
            <AddProduct />
          </Col>
        </Row>
        <Table striped className="mt-4">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Sub Category Name</th>
              <th>Parent Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {lastCategories2 &&
              lastCategories2.map((category) => (
                <tr key={category.id}>
                  <td>{category.product_name}</td>
                  <td>{category.name}</td>
                  <td>{category.category_name}</td>
                  <td>
                  <Button onClick={()=>deneme(category)} style={{backgroundColor: "#84B7FE",borderColor:"#84B7FE", color:"#323232"}}  >Edit</Button>

                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <Modal isOpen={modal}  centered={true} toggle={toggle} >
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
        <UncontrolledAccordion
  defaultOpen={[
    
  ]}
  stayOpen
>
  <AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="3">
    <h6 style={{color:"purple"}}>-Edit Product-</h6>
    </AccordionHeader>
    <AccordionBody accordionId="3">
      <Label>Product Name:</Label>
      <Input type="text" defaultValue={mycategory.product_name}></Input>
      <ModalFooter>
          <Button color="primary" onClick={toggle}>Update</Button>
          <Button color="danger" onClick={toggle}>Delete</Button>
        </ModalFooter>
    </AccordionBody>
  </AccordionItem>
    <AccordionHeader targetId="1">
      <h6 style={{color:"Orange"}}>-Edit Parent Category-</h6>
    </AccordionHeader>
    <AccordionBody accordionId="1">
      <Label>Category Name:</Label>
      <Input type="text" defaultValue={mycategory.category_name}></Input>
      <ModalFooter>
          <Button color="primary" onClick={toggle}>Update</Button>
          <Button color="danger" onClick={toggle}>Delete</Button>
        </ModalFooter>
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="2">
    <h6 style={{color:"green"}}>-Edit Sub Category-</h6>
    </AccordionHeader>
    <AccordionBody accordionId="2">
      <Label>Sub Category Name:</Label>
      <Input type="text" defaultValue={mycategory.name}></Input>
      <ModalFooter>
          <Button color="primary" onClick={toggle}>Update</Button>
          <Button color="danger" onClick={toggle}>Delete</Button>
        </ModalFooter>
    </AccordionBody>
  </AccordionItem>
 
</UncontrolledAccordion>
        </ModalBody>
       
      </Modal>
      </Container>
    </div>
  );
}
