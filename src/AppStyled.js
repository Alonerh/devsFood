import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;
export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80px;
    background-color: #136713;
`;
export const PageBody = styled.div`
    display: flex;
    background-color: #00980D;
    background-image: url('/assets/bg.png');
    background-repeat: repeat;
    flex: 1;
    overflow-y: auto;
`;