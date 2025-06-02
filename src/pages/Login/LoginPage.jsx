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
    <div>
      <Container fluid>
        <Row>
          <Col sm={6} className="text-black">
            <Container>
                <div className="px-5 ms-xl-4 m-2">
                    <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
                    <span className="h1 fw-bold mb-0">Logo</span>
                </div>

                <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                    <Form 
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                      style={{ width: '23rem' }}>
                        <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Log in
                        </h3>

                    <Form.Group className="mb-4" controlId="username" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" size="lg" value={userName} onChange={(e) => setUserName(e.target.value)} required  />
                        <Form.Control.Feedback type="invalid">
                            Please enter your username.
                        </Form.Control.Feedback>   
                    </Form.Group>

                <Form.Group className="mb-4" controlId="password" >
                  <Form.Label>Password</Form.Label>
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
                  <Button variant="info" size="lg" block type="submit" style={{width:"100%"}} >
                    Login
                  </Button>
                </div>

                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?
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
  src={loginBg}
  alt="Login Background"
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