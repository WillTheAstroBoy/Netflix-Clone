import styled from "styled-components";
import { Link as ReactRouterLink} from "react-router-dom";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 600px;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
    
`;

export const Frame = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1em;
    font-weight: bold;

`;

export const Input = styled.input`
    
    font-size: 1rem;
    padding: 1em;
    margin-bottom: 1em;
    background-color: #333;
    border-radius: 5px;
    outline: 0;
    border: none;
    color: #fff;
    &:last-of-type {
        margin-bottom: 30px;
    }
`;

export const Button = styled.button`
    width: 100%;
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

export const SmallText = styled.p`
    color: #757575;
    font-size: 0.8rem;
`;

export const Text = styled.p`
    color: #757575;
`;

export const Error = styled.p``;

export const Link = styled(ReactRouterLink)`
    text-decoration: none;
    color: white;
`;