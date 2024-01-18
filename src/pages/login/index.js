import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import image from "../../assets/loginPage.svg"
import siginWith from "../../assets/signinwith.svg"
import loginIcon1 from "../../assets/loginicon1.svg"
import loginIcon2 from "../../assets/loginicon2.svg"
import loginIcon3 from "../../assets/loginicon3.svg"
import loginIcon4 from "../../assets/loginicon4.svg"


function Login() {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        navigate("/home")
        setValidated(true);
    };
    return (
        <div className="d-flex">
            <div className="d-flex flex-column flex-fill justify-content-center align-items-center">
                <div className="text-start my-4">
                    <div className="fs-2 fw-bolder my-2">Sign In</div>
                    <div>New User? <a href="#">Create a account</a></div>
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {/* <Row className="mb-3"> */}
                    <Form.Group className="my-2" controlId="validationCustom01">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Username or email"
                            className="rounded-0"
                        />
                    </Form.Group>
                    <Form.Group className="my-2" controlId="validationCustom02">
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            className="rounded-0"
                        />

                    </Form.Group>
                    {/* </Row> */}

                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Keep me Signed In"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button className="w-100" type="submit">SignIn</Button>
                </Form>
                <img className="my-4" src={siginWith} />
                <div className="d-flex justify-content-between ">
                    <img className="mx-1" src={loginIcon1} />
                    <img className="mx-1" src={loginIcon2} />
                    <img className="mx-1" src={loginIcon3} />
                    <img className="mx-1" src={loginIcon4} />
                </div>
            </div>
            <div className="w-50 d-none d-sm-block"><img src={image} /></div>
        </div>
    );
}
export default Login;