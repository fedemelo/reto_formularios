import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function App() {

    const [formValues, setFormValues] = useState({ email: "", password: "", favClass: "1" })
    const [emailIsValid, setEmailIsValid] = useState(false)

    const handleEmailChange = ((e) => {
        setFormValues({ ...formValues, email: e.target.value })
    });

    const handlePasswordChange = ((e) => {
        setFormValues({ ...formValues, password: e.target.value })
    });

    const handleSelectChange = ((e) => {
        setFormValues({ ...formValues, favClass: e.target.value })
    });

    const clickSubmit = (() => {
        setEmailIsValid(validateEmail())
    })

    const validateEmail = () => formValues.email.includes("@") && formValues.email.length > 0

    const validatePassword = () => formValues.password.length > 8 && formValues.password.match("[0-9]") && formValues.password.match("[a-zA-Z]")


    return (
        <div>
            <h1>Ejemplo de formularios!</h1>

            <Form>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} isValid={emailIsValid} isInvalid={!emailIsValid}/>
                    {!emailIsValid && <Form.Text id="textico">Your email should follow an established format</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isValid={validatePassword()} isInvalid={!validatePassword()} />
                    {!validatePassword() && <Form.Text id="textico">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Favorite Class</Form.Label>
                    <Form.Select onChange={handleSelectChange}>
                        <option value="1">ISIS3710</option>
                        <option value="2">Programación con tecnologias web</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" onClick={clickSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}