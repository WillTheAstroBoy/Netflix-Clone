import styled from "styled-components";

export const Container = styled.div``;

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 20px;
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;
    z-index: 99;
    video {
        height: 100%;
        width: 100%;
    }
    
`;

export const Close = styled.button`
    outline: 0;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    width: 22px;
    background-color: transparent;
    opacity: 1;
    height: 22px;
    padding: 10px;
    border: 0;
    
    
    &:after,
    &:before {
        position: absolute;
        top: 10px;
        left: 10px;
        content: '';
        width: 2px;
        height: 22px;
        background-color: white;
    }

    &:after {
        transform: rotate(45deg);
    }


    &:before {
        transform: rotate(-45deg);
    }

`;

export const Button  = styled.button`
    background-color: red;
    color: white;
    padding: 10px 25px;
    text-transform: uppercase;
    border: none;
    font-weight: bolder;
    letter-spacing: 0.5px;
    transition: transform 200ms;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);

    }
`;