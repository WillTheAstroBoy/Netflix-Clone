
import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
`;

export const Item = styled.div`
    border-bottom: 8px solid #222;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 5%;
    overflow: hidden;
    color: white;

    
`;

export const Inner = styled.section`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    width: 100%;
    margin: auto;
`;



export const Pan = styled.div`
    width: 50%;
`;

export const Title = styled.h1`
    color: white;
    font-size: 3rem;

`;

export const SubTitle = styled.p`
    color: white;
    font-size: 1.7rem;
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;