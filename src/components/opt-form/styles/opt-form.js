import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 3em;
`;

export const Input = styled.input`
    padding: 0.6em 0.5em;
    border-radius: 2px;
    max-width: 400px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    outline: 0;
`;

export const Btn = styled.button`
    color: white;
    background-color: red;
    padding: 0.6em 0.4em;
    font-weight: bold;
    display: inline-block;
    width: 150px;
    border: none;
    font-size: 1.5rem;
    text-transform: capitalize; 
    outline: 0;
    &:hover{
        cursor: pointer;
    }
`;

export const Text = styled.p`
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 1.2em;
    color: white;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
    
`;