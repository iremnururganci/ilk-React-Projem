import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup,Input,InputGroupText } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addParentCategory } from '../../Actions/categoriesAction';
import axios from 'axios';

const Example = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const initCategory = {
    name:''
  }
  const [mycategory, setCategory] = useState(initCategory);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCategory({ ...mycategory, [name]: value });

  };
  const gonder = ( ) => {
    var gitcekCategory = Object.assign({},mycategory)
    axios.post("https://projectone.proxolab.com/api/category",gitcekCategory)
    console.log('çalıştı')
  }
const saveCategory = () => {
    const category = Object.assign({},mycategory)
    console.log(category)
    dispatch(addParentCategory(category))
      .then(data => {
        console.log(data)
        setCategory({
           name:data.name
        });
        setSubmitted(true);
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newCategory = () => {
    setCategory(initCategory);
    setSubmitted(false);
  };


  return (
    <div>
      <Button  className='w-100' style={{backgroundColor: "#3B7197"}}  onClick={toggle}>Add Parent Category</Button>
      <Modal isOpen={modal} centered={true} toggle={toggle} {...args}>
        <ModalHeader style={{color:"red"}} toggle={toggle}>Add Parent Category</ModalHeader>
        <ModalBody>
        <InputGroup>
    
    <Input placeholder="add parent category" 
     type="text"
             
              id="name"
              value={mycategory.name}
              onChange={handleInputChange}
              name="name" />

  </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={saveCategory}>Add</Button>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;