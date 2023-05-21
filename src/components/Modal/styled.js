import styled from "styled-components";

export const Container = styled.div`
    z-index: 900;
    display: ${props=>props.status ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
`;
export const ModalBody = styled.div`
    background-color: #fff;

    box-shadow: 0 0 50px #000;
    border-radius: 20px;
    overflow: auto;
    max-height: 95vh;
    max-width: 100vw;

`;