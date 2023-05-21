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

    &:first-child {
        margin-bottom: 15px;
    }

    @media (max-width: 470px) {
        width: 40px;
        height: 40px;
        font-size: 14px;
        padding: 14px;
    }
`;
export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
    margin-bottom: 5px;

    @media (max-width: 470px) {
        width: 27px;
        height: 27px;
    }
`;