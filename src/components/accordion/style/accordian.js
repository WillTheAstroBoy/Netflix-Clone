import styled from "styled-components";

export const Container = styled.section`
    padding: 2em;
    
    color: white;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    width: 80%;
    max-width: 800px;
    margin: auto;
`;

export const Item = styled.div``;

export const Title = styled.h1`
    text-align: center;
    font-size: 3.1rem;
`;

export const Header = styled.h2`
    padding: 0.8em;
    background-color: #333;
    font-weight: lighter;
    font-size: 1.8rem;
    margin: 0;
    margin-bottom: 2px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    

    img{
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px){
        font-size: 16px;
    }

`;

export const Body = styled.p`
    padding: 1em;
    background-color: #333;
    font-size: 1.5rem;
    line-height: 1.6;
    margin: 0;
    margin-bottom: 8px;
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
`;
