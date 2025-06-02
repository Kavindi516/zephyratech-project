import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './LoginPage.css';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import loginBg from '../../assets/images/login-bg.jpg';

function LoginPage() {
    const [userName , setUserName] = useState("");
    const [password , setPassword] = useState("");  
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {    
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
        event.stopPropagation();
        setValidated(true);
        return;
     }   


    try {
      const response = await axiosInstance.post("https://dummyjson.com/auth/login", {
        username: userName,
        password: password,
        expiresInMins: 30,
     });
      console.log("Success:", response.data);
      alert("Login successful.");
      navigate('/dashboard');
    } catch (err) {
      console.error("API Error:", err);
      alert("Login failed. Please check your credentials.");
    }
};

  return (
    <div className="login-container">
      <Container fluid>
        <Row>
          <Col sm={6} className="login-form-section">
            <Container className="h-100">
                <div className= "brand-section">
                     <div className="d-flex align-items-center justify-content-center justify-content-sm-start">
                     <div className="brand-icon">
                    <i className="fas fa-shield-alt"></i>
                    </div>
                    <h1 className="brand-text">ZephyraTech</h1>
                </div>
                </div>
                <div className="form-container">
                                <h2 className="form-title">Welcome Back</h2>
                                <div className="login-form">
                    <Form 
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}>

                    <Form.Group className="form-group" controlId="username" >
                        <Form.Label className="form-label">Username</Form.Label>
                        <Form.Control type="text" size="lg" value={userName} onChange={(e) => setUserName(e.target.value)} required  />
                        <Form.Control.Feedback type="invalid">
                            Please enter your username.
                        </Form.Control.Feedback>   
                    </Form.Group>

                <Form.Group className="form-group" controlId="password" >
                  <Form.Label className="form-label">Password</Form.Label>
                  <Form.Control 
                    type="password"
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                    <Form.Control.Feedback type="invalid">
                      Please enter your password.
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="pt-1 mb-4">
                  <Button  className="login-button" type="submit">
                    Login
                  </Button>
                </div>

                <div className="forgot-password">
                                            <a href="#!">Forgot password?</a>
                                        </div>
                <div className="register-link">
                                            Don't have an account? <a href="#!">Register here</a>
                                        </div>
              </Form>
               </div>
            </div>
            </Container>
          </Col>
          <Col sm={6} className="image-section px-0 d-none d-sm-block">
            <img
  src={loginBg}
   alt="Login Background"
  className="login-bg-image"
/>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginPage