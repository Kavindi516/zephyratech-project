import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './LoginPage.css';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [userName , setUserName] = useState("");
    const [password , setPassword] = useState("");  
    const navigate = useNavigate();

    function clickLoginBtn(){
        setUserName(document.getElementById('email').value);
        setPassword(document.getElementById('password').value)
        if(userName === "" || password ==="" ){
            alert("Please enter user name and password both")
        }
        else{
            console.log(userName,password)
             handleSubmit();
        }
       
    }
    const handleSubmit = async () => {
    
    
    try {
      const response = await axiosInstance.post("https://dummyjson.com/auth/login", {
        username: userName,
        password: password,
        expiresInMins: 30,
        
      });
      console.log("Success:", response.data);
     alert("Login API called successfully.");
      navigate('/dashboard');
    } catch (err) {
      console.error("API Error:", err);
      alert("Failed to call login API."+err);
    }
}
  return (
    <div>

      <Container fluid>
        <Row>
          <Col sm={6} className="text-black">
            <Container>
                <div className="px-5 ms-xl-4 m-2">
              {/* If using react-fontawesome: /}
              {/ <FontAwesomeIcon icon={faCrow} size="2x" className="me-3 pt-5 mt-xl-4" style={{ color: '
#709085' }} /> */}
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <Form style={{ width: '23rem' }}>
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                  Log in
                </h3>

                <Form.Group className="mb-4" controlId="form2Example18">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="email" size="lg" id='username' required  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="form2Example28">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" size="lg" id='password' required />
                </Form.Group>

                <div className="pt-1 mb-4">
                  <Button variant="info" size="lg" block type="button" style={{width:"100%"}} onClick={clickLoginBtn} >
                    Login
                  </Button>
                </div>

                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?{' '}
                  <a href="#!" className="link-info">
                    Register here
                  </a>
                </p>
              </Form>
            </div>
            </Container>
          </Col>
          <Col sm={6} className="px-0 d-none d-sm-block">
            <img
               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
               alt=""
               className="w-100 vh-100"
               style={{ objectFit: 'cover', objectPosition: 'left' }}
            />

          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default LoginPage