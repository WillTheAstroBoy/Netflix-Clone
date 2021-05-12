import React, { useState, useContext } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";

export default function Signup(){
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { firebase } = useContext(FirebaseContext);
    const [ error, setError ] = useState('');

    const history = useHistory();

    const isInvalid = firstName === '' || email === '' || password === '';

    function handleSubmit(e){
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) =>
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5 ) + 1,
                })
                .then(()=>{
                    setEmail('');
                    setPassword('');
                    setError('');
                    history.push("/signin");
                })
            ).catch(error=> setError(error.message));
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Frame onSubmit={handleSubmit} method="POST">
                        <Form.Title>Sign Up</Form.Title>
                        <Form.Input 
                            value={firstName} 
                            onChange ={({target})=> setFirstName(target.value)} 
                            type="text" 
                            placeholder="First Name" 
                        />
                        <Form.Input 
                            value={email} 
                            onChange ={({target})=> setEmail(target.value)} 
                            type="email" 
                            placeholder="Email Address" 
                        />
                        <Form.Input 
                            value={password}
                            onChange ={({target})=> setPassword(target.value)} 
                            type="password" 
                            placeholder="Password" 
                        />
                        <Form.Button disabled={isInvalid} >Sign Up</Form.Button>
                        <Form.Text>Already a user? <Form.Link to="/signin">Sign in now</Form.Link></Form.Text>
                        <Form.SmallText>This page is protected by Google reCAPTCHA.</Form.SmallText>
                    </Form.Frame>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}