import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`;

export const List = styled.div``;



export const Title = styled.h1`
    color: #fff;
    font-weight: lighter;
    font-size: 2.5rem;
`;

export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid black;
    cursor: pointer;
`;

export const Name = styled.p`
    color: #333;
    text-overflow: ellipsis;
    font-size: 16px;

    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }

`;

export const Item = styled.section`
    &:hover > ${Picture}{
        border: 3px solid white;
    }

    &:hover ${Name} {
        font-weight: bold;
        color: white;
    }
`;