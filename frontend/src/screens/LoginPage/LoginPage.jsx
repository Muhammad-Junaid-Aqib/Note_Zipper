import React, { useEffect, useState } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import './loginScreen.css'
import axios from 'axios'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")

    const history = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userinfo")
        if (userInfo) {
            // console.log("junaid")
            history("/mynotes")
        }
    }, [history])
    

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const config = {
                header: {
                    "Content-type": "application/json",
                },
            }

            setLoading(true)

            const { data } = await axios.post("/api/users/login", {
                email,
                password,
            },
                config
            )
            console.log(data)
            localStorage.setItem("userinfo", JSON.stringify(data));
            setLoading(false)
        } catch (error) {
            setError(error.response.data.message)
            // setError(false)
            setLoading(false)
        }
    }

    return (
        <MainScreen title="LOGIN">
            <div className="loginContainer">
                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label className="email">
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
                            className='inputPasswordField'
                        />
                    </Form.Group>

                    <Button variant='primary' type='submit' className='submitButton' >
                        Submit
                    </Button>
                </Form>
                <Row className='py-3'>
                    <Col>
                        New Customer ? <Link to='/register'> <span className='registerHere'>Register Here</span> </Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}

export default LoginPage
