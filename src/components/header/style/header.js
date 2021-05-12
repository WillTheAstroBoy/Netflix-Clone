import styled from "styled-components";
import {Link as ReactRouterLink} from "react-router-dom";

export const Background = styled.section`
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`)});
    display: flex;
    flex-direction: column;
    background-size: cover;
    
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.8em 3em;
`;

export  const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 130px;
    height: auto;
`;

export const ButtonLink = styled(ReactRouterLink)`
    text-decoration: none;
    padding: 0.5em 1.2em;
    border-radius: 5px;
    background-color: red;
    color: white;
    font-weight: bolder;

    &:hover{
        cursor: pointer;
    }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-left: 1.5em;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: ${({ active })=> active ? "700" : "normal" };

    &:hover {
        font-weight: bold;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    background-color: transparent;
    height: 30px;
    font-size: 14px;
    outline: 0;
    border: 1.2px solid #fff;
    color: #fff;
    transition: width 0.5s;
    width: ${({ active }) => active ? "200px" : 0 };
    margin-left: ${({ active }) => active ? "10px" : 0 };
    padding: ${({ active }) => active ? "0 10px" : 0 };
    opacity: ${({ active }) => active ? 1 : 0 };

`;

export const SearchIcon = styled.button`
    
    border: 0;
    background-color: transparent;
    cursor: pointer;
    
    
    
    img{
        width: 16px;
        filter: brightness(0) invert(1);
    }
`;


export const Picture = styled.button`
    background: url(${({ src }) => src});
    width: 32px;
    height: 32px;
    background-size: contain;
    cursor: pointer;
    border: none;
    margin-left: 10px;
`;

export const Dropdown = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    padding: 5px 10px;
    position: absolute;
    width: 100px;
    right: 0px;
    top: 33px;
    display: none;
    flex-direction: column;

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }

        ${Link}, ${Picture} {
            cursor: default;
        }
    }

    button {
        margin-right: 10px;
        margin-left: 0;
    }

    p{
        text-align: left;
        font-size: 12px;
        margin: 0;
        margin-bottom: 0;
        margin-top: 0;

    }
`;

export const Profile = styled.div`
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        
    }
`;

export const Text = styled.p`
    line-height: 1.5;
    font-size: 1.1rem;
    text-shadow: 2px 1px  black;
`;

export const Feature = styled(Container)`
    color: white;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    width: 70%;
    padding: 2em 2em 200px 2em;
    max-width: 500px;
`;

export const FeatureCallOut = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 0;
    text-shadow: 2px 1px  black;
`;

export const PlayButton = styled.button`
    display: block;
    padding: 0.3em 1.6em;
    font-size: 1.1rem;
    color: black;
    border-radius: 4px;
    border: none;
    font-weight: bolder;
`;