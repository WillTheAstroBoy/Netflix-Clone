import React, { useState, useContext } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import  { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";

export default function SignIn(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const isInvalid = email === '' || password === '';
    

    function handleSubmit(e){
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(()=>{
                setEmail('');
                setPassword('');
                setError('');
                history.push("/browse");
            })
            .catch(err => setError(err.message));
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Frame onSubmit={handleSubmit} method="POST">
                        <Form.Title>Sign In</Form.Title>
                        {error && <Form.Error>{error}</Form.Error>}
                        <Form.Input 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange= {({ target })=> setPassword(target.value)}
                        />
                        <Form.Button disabled={isInvalid}>Sign In</Form.Button>
                        <Form.Text>
                            New to Netflix? 
                            <Form.Link to="/signup">Sign up now</Form.Link>
                            .
                        </Form.Text>
                        <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.SmallText>
                    </Form.Frame>
                    
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}