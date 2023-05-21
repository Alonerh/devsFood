import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;

    @media (max-width: 580px) {   
        flex-direction: column;
    }
`;
export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80px;
    background-color: #136713;

    @media (max-width: 580px) {
        width: 100%;
        flex-direction: row;
    }
`;
export const PageBody = styled.div`
    display: flex;
    background-color: #00980D;
    background-image: url('/assets/bg.png');
    background-repeat: repeat;
    flex: 1;
    overflow-y: auto;
`;