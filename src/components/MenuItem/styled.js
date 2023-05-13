import styled from "styled-components";

export const LinkArea = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    background-color: ${props=>props.active ? '#0B4D0B' : 'transparent'};
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    outline: 0;
    text-decoration: none;
    color: #fff;
`;

export const LinkIcon = styled.img`
    width: 34px;
    height: auto;
`;