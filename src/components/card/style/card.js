 
import styled from "styled-components";

export const Container = styled.div`
    

    
`;

export const Group = styled.div`
    padding: ${({ padding }) => ( padding ? padding : "1em 2em")};
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : "column")};
    margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const Title = styled.p`
    font-size: 2rem;
    color: white;
`;

export const Entities = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;



export const Image = styled.img`
    width: 100%;
    height: auto;
    border: 0;
    max-width: 305px;
    padding: 0;
    margin: 0;
`;

export const Meta = styled.div`
    position: absolute;
    bottom: 0;
    padding: 10px;
    background-color: #0000008f;
`;

export const SubTitle = styled.p`
    font-size: 12px;
    color: white;
    margin-top: 0;
    display: none;
    user-select: none;
    font-weight: bold;
    margin-bottom: 0;
`;

export const Text = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: white;
    margin-bottom: 0;
    display: none;
    user-select: none;
    line-height: normal;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 3px;
    position: relative;
    transition: transform 0.4s;
    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        transform: scale(1.3);
        cursor: pointer;
        z-index: 99;
    }

    @media (min-width: 800px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
            display: block;
            z-index: 100;
        }
    }

`;

export const FeatureText = styled.p`
    color: white;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 400px;
    width: 100%;
`;

export const Feature = styled.div`
    position: relative;
    background: url(${({ src })=> src});
    background-size: contain;
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;
    display: flex;

`;

export const FeatureTitle = styled(Title)`
    color: white;
    font-size: 1.4rem;
`;

export const FeatureClose = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    border: 0;
    cursor: pointer;
    color: white;
    background-color: transparent;

    img {
        width: 25px;
        filter: brightness(0) invert(1);
    }
`;

export const Content = styled.div``;


export const Maturity = styled.p`
    background-color: ${({ rating }) =>( rating < 15 ? "green" : "red")};
    width: 20px;
    padding: 5px;
    border-radius: 15px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    font-size: 12px;
`;

