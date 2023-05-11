import styled from "styled-components";

export const Container = styled.div`
    background-color: #136713;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

`;
export const Logo = styled.img`
    height: 70px;
    width: auto;
`;

export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px;//Vai para 300 quando aberto e 0 fechado
    height: 50px;
    background-color: #fff;
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    outline: 0;
    padding-left: 50px;
    transition: all ease .2s;
    cursor: pointer;
    font-size: 15px;

    &:focus {
        cursor: text;
    }
`;