import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import './landingPage.css'
// import { useNavigate } from "react-router-dom";


const LandingPage = () => {

    // const history = useNavigate();

    // useEffect(() => {
    //     const userInfo = localStorage.getItem("userinfo")
    //     if (userInfo) {
    //         // console.log("junaid")
    //         history("/mynotes")
    //     }
    // }, [history])
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className='title'>
                                Welcome to note Zipper
                            </h1>
                            <p className='subtitle'>
                                One safe place for all your notes.
                            </p>
                        </div>
                        <div className="buttonContainer">
                            <a href="/login">
                                <Button size='lg' className='landingButton'>
                                    Login
                                </Button>
                            </a>
                            <a href="/register">
                                <Button size='lg' className='landingButton' variant='outline-primary'>
                                    Signup
                                </Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
