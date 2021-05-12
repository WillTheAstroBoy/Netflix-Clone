import styled from "styled-components";
import {Link as ReactRouterLink} from "react-router-dom";


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: auto;
    padding: 3em;

`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding-top: 0.5em;
    grid-gap: 15px;

    @media (max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Break = styled.br`
    flex-basis: 100%;
    height: 0;
`;

export const Text = styled.p`
    font-size: 1.15em;
    color: #757575;
`;

export const Link = styled(ReactRouterLink)`
    color: #757575;
    text-decoration: none;
    text-transform: capitalize;
    margin-bottom: 20px;
    font-size: 0.85rem;
`;

export const SmallText = styled.p`
    color: #757575;
    font-size: 0.85rem;
`;