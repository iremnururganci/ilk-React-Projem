import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input,
} from "reactstrap";
import { Col, Row } from "reactstrap";
import { useDispatch,useSelector} from 'react-redux';
import { addSubCategory, getAllSubCategories } from '../../Actions/subCategorieAction';
import axios from 'axios';
import SubCategorieService from "../../Services/SubCategorieService ";

const Example = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const initSubCategory = {
    name:'',
  category_id:null
  }
  const categories = useSelector(state => state.categorieReducer.categories);
  console.log(categories)
  const [mysubcategory, setSubCategory] = useState(initSubCategory);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSubCategory({ ...mysubcategory, [name]: value });

  };

const saveSubCategory = () => {
    console.log(mysubcategory)
    dispatch(addSubCategory(mysubcategory))
      .then(data => {
        console.log(data)
        setSubCategory({
           name:data.name
        });
        setSubmitted(true);
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newSubCategory = () => {
    setSubCategory(initSubCategory);
    setSubmitted(false);
  };

  const onChangeHandler=(e)=>{
    const index=e.target.selectedIndex;
    const el=e.target.childNodes[index]
    const myid=el.getAttribute('id');
    const name=e.target.name
    setSubCategory({...mysubcategory,[name]:myid});

    
  }
 // console.log(mysubcategory)
  return (
    <div>
      <Button
        className="w-100"
        style={{ backgroundColor: "#3B7197" }}
        onClick={toggle}
      >
        Add Sub Category
      </Button>
      <Modal isOpen={modal} centered={true} toggle={toggle} {...args}>
        <ModalHeader style={{color:"red"}} toggle={toggle}>Add Sub Category</ModalHeader>
        <ModalBody>
        <Row>
            <Col>
              <select name="category_id"onChange={onChangeHandler} className="w-100 form-select mt-3">
              {
                categories && categories.map(data=>(
                  <option id={data.id} key={data.id}>{data.name}</option>
                ))
              }
              </select>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <InputGroup>
                <Input placeholder="add sub category" 
                
                type="text"
             
                id="name"
                value={mysubcategory.name}
                onChange={handleInputChange}
                name="name"
                
                
                />
              </InputGroup>
            </Col>
          </Row>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={saveSubCategory}>
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Example;
