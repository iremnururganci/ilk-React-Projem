import React, { useState} from "react";
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { CardBody,CardHeader,Card, Form,Input } from "reactstrap";
import {login,logout} from '../Actions/authActions'
import auth from "../Services/authService";
import * as actionTypes from '../Actions/actionTypes'
import alertify from 'alertifyjs'
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const Login = () => {
  let navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const auth = useSelector(state=> state.authReducer);


 // console.log(auth);
 const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setUsername(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
   // console.log({email,password})

    if(email && password){
      dispatch(login(email , password)).then(      
        () => {
          if(auth.isAuthenticated===true){
            console.log('dispatch calıstı')
           navigate("/dashboard");
           alertify.success('Giriş Başarılı')
          
          }else{
          alertify.error('kullanıcı bulunamadı')
          navigate("/");
          setLoading(false);
          }
       
        }
    ).catch(
       
    )
    }else{
      setLoading(false);
      alert('gerekli alanlar boş olamaz')
    }
  
    
  };
  return (

    <div className='d-flex justify-content-center'>
<Card
  style={{
    width: '18rem',
    marginTop:'125px'
  }}
 
>
  <CardHeader className="text-center ">
   <h3>Giriş Yap</h3>
  </CardHeader>
 <CardBody>
 <Form onSubmit={handleLogin}>
<div className="form-group">
  <label htmlFor="email">E-Posta</label>
  <Input
    type="email"
    className="form-control"
    name="email"
    value={email}
    onChange={onChangeEmail}
    validations={[required]}
  />
</div>
<div className="form-group">
  <label htmlFor="password">Şifre</label>
  <Input
    type="password"
    className="form-control"
    name="password"
    value={password}
    onChange={onChangePassword}
    validations={[required]}
  />
</div>
<div className="form-group mt-3 text-center">
  <button className="btn btn-primary btn-block w-50" disabled={loading}>
    {loading && (
      <span className="spinner-border spinner-border-sm"></span>
    )}
    <span>Login</span>
  </button>
</div>
</Form>
 </CardBody>
</Card>
    </div>







  );
};
export default Login;