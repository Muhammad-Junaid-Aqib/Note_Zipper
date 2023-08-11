import React, { useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import axios from 'axios';


const RegisterPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      setMessage("Passwords do not match");
    }else{
      setMessage(null);
      // call api
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        };

        setLoading(true);
        const data = await axios.post(
          "api/users", {name,pic, email, password }, config
        )

        setLoading(false);
        localStorage.setItem("userinfo", JSON.stringify(data));
      }catch (error) {
        setError(error.response.data.message)
      }

    }
    console.log(name)
  }

  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        {loading && <Loading/>}
        <Form onSubmit={submitHandler} >
          <Form.Group controlId='name'>
            <Form.Label className="email">
              Name
            </Form.Label>
            <Form.Control
              type='name'
              value={name}
              placeholder='Enter Name'
            onChange={(e) => setName(e.target.value)}
            />

          </Form.Group>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label className="password">
              Email address
            </Form.Label>
            <Form.Control
              type='email'
              value={email}
              placeholder='Enter email address'
            onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label className="password">
              Password
            </Form.Label>
            <Form.Control
              type='password'
              value={password}
              placeholder='Enter Password'
            onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='confirmPassword'>
            <Form.Label className="password">
              Password
            </Form.Label>
            <Form.Control
              type='password'
              value={confirmPassword}
              placeholder='Confirm Password'
            onChange={e => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {/* {picMessage && 
          (<ErrorMessage variant="danger" >{picMessage}</ErrorMessage>
          )} */}

          <Form.Group controlId='pic'>
            <Form.Label className="password">
              Profile Picture
            </Form.Label>
            <Form.Control
              id='file'
              type='file'
              // type='image/png'
              label="Upload Profile Picture"
              custom
              // onChange={e => postDetails(e.target.file[0])}
              className='inputPasswordField'
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login"> <span className='loginLink'>Login</span></Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  )
}

export default RegisterPage
