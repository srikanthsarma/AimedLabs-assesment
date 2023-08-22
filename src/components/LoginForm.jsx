import React from 'react'
import { styled } from 'styled-components';


const FormWrapper = styled.div`
    margin: 1rem auto;
    padding: 1rem 5rem;
    height: 90vh;
    box-shadow: 0 0 20px rgba(0 0 0/0.25);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const Form = styled.form`
    width: 25rem;   
    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;

    .first-section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .checkbox {
        display: flex;
        align-items: center;
        justify-content: center; 
        gap: 0.1rem; 
    }

    @media(max-width: 1000px){
        width: 100%;
    }

`

const Heading = styled.h1`
    text-align: center;
`
const Label = styled.label`
    font-size: 0.75rem;
    color: grey;
    display: inline;
`
const TextInput = styled.input.attrs({ type: "text", placeholder: "Enter Login ID" })`
    width: 90%;
    padding: 0.5rem 1rem;


`
const PasswordInput = styled.input.attrs({ type: "password", placeholder: "Enter Password" })`
     width: 90%;
     padding: 0.5rem 1rem;

`
const CheckBox = styled.input.attrs({ type: "checkbox" })`

`
const Button = styled.button.attrs({ type: "submit" })`
    width: 60%;
    color: white;
    background: #1575A7;
    border: none;
    font-weight: bold;
    margin-inline: auto;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;


`
const Link = styled.a.attrs({ href: "#" })`
    color: #F78719;
    font-size: 0.75rem;
`


function LoginForm() {
    return (

        <FormWrapper>
            <Heading>Login</Heading>
            <Form>
                <label>Login ID</label>
                <TextInput></TextInput>
                <label>Password</label>
                <PasswordInput></PasswordInput>


                <div className="first-section">
                    <div className="checkbox">
                        <CheckBox></CheckBox>
                        <Label>Remember me</Label>
                    </div>
                    <Link>Change Password</Link>
                </div>

                <div className="checkbox">
                    <CheckBox></CheckBox>
                    <Label>Agree to the <Link>Term & conditions</Link></Label>
                </div>

                <Button>Login</Button>
            </Form>
            <Label>Don't have an account? <Link>Register here</Link></Label>

        </FormWrapper>


    )
}

export default LoginForm