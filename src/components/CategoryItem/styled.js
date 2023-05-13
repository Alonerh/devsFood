import styled from "styled-components";

export const Container = styled.div`
    width: 80px;
    height: 80px;
    background-color: ${props=>props.active === props.id ? '#fff' : '#AAE09A'};//
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-right: 10px;
    padding: 10px;
    cursor: pointer;
    transition: all ease .2s;
    color: #0B670B;
`;
export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
    margin-bottom: 5px;
`;