import { Button, Table, Container, Row, Col } from "reactstrap";
import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllByRole } from "@testing-library/react";
import { getAllProducts } from "../Actions/productAction";
import { getAllCategorie } from "../Actions/categoriesAction";
import { updateParentCategory } from "../Actions/categoriesAction";
import { updateSubCategory } from "../Actions/subCategorieAction";
import {
  addSubCategory,
  getAllSubCategories,
} from "../Actions/subCategorieAction";
import AddParent from "./Modals/AddParent";
import AddSub from "./Modals/AddSub";

import {
  Modal,
  ModalHeader,
  Label,
  Input,
  ModalBody,
  ModalFooter,
  Accordion,
  AccordionHeader,
  AccordionBody,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";

export default function CategoryManagement() {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initCategory = {
    id: "",
    name: "",
    category_id: "",
    category_name: "",
  };

  const subCategory = {
    sub_category_id: "",
    category_id: "",
    name: "",
  };
  const parentCategory = {
    category_id: "",
    name: "",
  };

  const [mycategory, setCategory] = useState(initCategory);
  const [subcategory, setSubCategory] = useState(subCategory);
  const [parentcategory, setParentCategory] = useState(parentCategory);

  const categories = useSelector((state) => state.categorieReducer.categories);
  const SubCategories = useSelector((state) => state.SubCategorieReducer.subCategories);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategorie());
    dispatch(getAllSubCategories());
  }, []);

  const arr1 = categories ? categories : [];
  const arr2 = SubCategories ? SubCategories : [];
  const newCategory = { id: 0, category_name: "" };
  var newCategories = [];

  for (let i = 0; i < arr1.length; i++) {
    newCategory.id = arr1[i].id;
    newCategory.category_name = arr1[i].name;

    let copied = Object.assign({}, newCategory);
    newCategories.push(copied);
    var clonePlaseItem = JSON.stringify(Array.from(newCategories));
  }

  const mergeById = (a1, a2) =>
    a2.map((itm) => ({
      ...a1.find((item) => item.id === itm.category_id && item),
      ...itm,
    }));
  const lastCategories = mergeById(newCategories, arr2);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setParentCategory({ ...parentcategory, [name]: value,category_id:mycategory.category_id });
  };

  const deneme = (a) => {
    console.log(a);
    setCategory(a);
    toggle();
  };

  const handleChange = (event) => {  
    setSubCategory({
      ...subcategory,
      category_id: event.target.getAttribute("id"),
      name: event.target.value,
      sub_category_id: mycategory.id
    });
  };

  const editParentCategory = () => {
    console.log(parentcategory);
    if (parentcategory.name === "") {
      alert("değişiklik yapılmadı");
    } else {
      dispatch(updateParentCategory(parentcategory))
        .then((data) => {
          console.log(data);
          setParentCategory({
            name: data.name,
            category_id: data.category_id,
          });

          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const editSubCategory = () => {
    console.log(subcategory);
    if (subcategory.name === "") {
      alert("değişiklik yapılmadı");
    } else {
      dispatch(updateSubCategory(subcategory))
        .then((data) => {
          console.log(data);
          setSubCategory({
            name: data.name,
            category_id: data.category_id,
            sub_category_id: data.sub_category_id,
          });

          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  console.log(subCategory)
  return (
    <div>
      <Row>
        <h3 style={{ color: "#98504B" }} className="text-center mb-5 mt-4 ">
          "Category Management"
        </h3>
      </Row>
      <Container>
        <Row>
          <Col>
            <AddParent />
          </Col>
          <Col>
            <AddSub />
          </Col>
        </Row>
        <Table striped className="mt-4">
          <thead>
            <tr>
              <th>Sub Category Name</th>
              <th>Parent Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {lastCategories &&
              lastCategories.map((category) => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                  <td>{category.category_name}</td>
                  <td>
                    <Button
                      onClick={() => deneme(category)}
                      style={{
                        backgroundColor: "#84B7FE",
                        borderColor: "#84B7FE",
                        color: "#323232",
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <Modal isOpen={modal} centered={true} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit</ModalHeader>
          <ModalBody>
            <UncontrolledAccordion defaultOpen={[]} stayOpen>
              <AccordionItem>
                <AccordionHeader targetId="1">
                  <h6 style={{ color: "Orange" }}>-Edit Parent Category-</h6>
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  <Label>Category Name:</Label>
                  <Input
                    type="text"
                    id={mycategory.category_id}
                    defaultValue={mycategory.category_name}
                    name="name"
                    onChange={handleInputChange}
                  ></Input>
                  <ModalFooter>
                    <Button color="primary" onClick={editParentCategory}>
                      Update
                    </Button>
                    <Button color="danger" onClick={toggle}>
                      Delete
                    </Button>
                  </ModalFooter>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">
                  <h6 style={{ color: "green" }}>-Edit Sub Category-</h6>
                </AccordionHeader>
                <AccordionBody accordionId="2">
                  <Label>Sub Category Name:</Label>
                  <Input
                    id={mycategory.category_id}
                    type="text"
                    defaultValue={mycategory.name}
                    onChange={handleChange}
                    name="name"
                  ></Input>
                  <ModalFooter>
                    <Button color="primary" onClick={editSubCategory}>
                      Update
                    </Button>
                    <Button color="danger" onClick={toggle}>
                      Delete
                    </Button>
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
