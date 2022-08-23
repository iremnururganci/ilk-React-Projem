import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { InputGroup, Input } from "reactstrap";
import { Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addSubCategory,
  getAllSubCategories,
} from "../../Actions/subCategorieAction";
import axios from "axios";
import ProductService from "../../Services/productService";
import { Addproduct } from "../../Actions/productAction";

const Example = (args) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const initProduct = {
    name: "",
    sub_category_id: "",
    price: "",
    file: "",
  };

  const categories = useSelector((state) => state.categorieReducer.sub_category_id);
  const [myproduct, setProduct] = useState(initProduct);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...myproduct, [name]: value });
  };

  const newProduct = () => {
    setProduct(initProduct);
    setSubmitted(false);
  };

  const onChangeHandler = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const myid = el.getAttribute("id");
    const name = e.target.name;
    setProduct({ ...myproduct, [name]: myid });
  };
  console.log(myproduct);

  const handleFile = (e) => {
    let file = e.target.files[0];
    const name = e.target.name;
    setProduct({ ...myproduct, [name]: file });
    console.log(file);
  };

  const saveProduct = () => {
    console.log(myproduct);
    let formdata = new FormData();
    formdata.append("sub_category_id", myproduct.sub_category_id);
    formdata.append("file", myproduct.file);
    formdata.append("name", myproduct.name);
    formdata.append("price", myproduct.price);

    console.log(formdata);
    dispatch(Addproduct(formdata))
      .then((data) => {
        console.log(data);
        setProduct({
          name: data.name,
          sub_category_id: data.sub_category_id,
          file: data.image_path,
          price: data.price,
        });
        setSubmitted(true);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Row>
        <Button
          style={{ backgroundColor: "#3B7197" }}
          onClick={toggle}
          className="w-100"
        >
          Add Product{" "}
        </Button>
      </Row>

      <Modal isOpen={modal} centered={true} toggle={toggle} {...args}>
        <ModalHeader style={{ color: "red" }} toggle={toggle}>
          Add Product
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <select
                name="sub_category_id"
                onChange={onChangeHandler}
                className="w-100 form-select mt-3"
              >
                {categories &&
                  categories.map((data) => (
                    <option id={data.id} key={data.id}>
                      {data.name}
                    </option>
                  ))}
              </select>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="add product name"
                  id="name"
                  value={myproduct.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <InputGroup>
                <Input
                  type="number"
                  placeholder="add price"
                  id="price"
                  value={myproduct.price}
                  onChange={handleInputChange}
                  name="price"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <InputGroup>
                <Input
                  type="file"
                  placeholder="add image"
                  value={myproduct.img_path}
                  name="file"
                  onChange={handleFile}
                />
              </InputGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={saveProduct}>
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Example;
