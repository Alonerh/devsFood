import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
`;

export const CategoryArea = styled.div`
    color: #fff;
    margin-top: 20px;
    transition: all ease .2s;
`;

export const CategoryMain = styled.div`
    display: flex;
    align-items: center;
`;

export const CategoryList = styled.div`
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;

    @media (max-width: 470px) {
        display: none;
    }
`;
export const CategoryList2 = styled.div`
    width: fit-content;
    height: auto;
    display: none;
    padding: 15px;
    border-radius: 0px 10px 10px 10px;
    background-color: #fff;
    color: #000;
    flex-wrap: wrap;
    transition: all ease .5s;

    @media (max-width: 470px) {
        display: flex;
    }

`;

export const CategorySelect = styled.div`
    background-color: #fff;
    color: #000;
    padding: 5px;
`;

export const CategorySelectOption = styled.div`
    
`;
export const Hamburguer = styled.img`
    display: none;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background-color: #fff;
    padding: 5px;
    color: #000;

    @media (max-width: 470px) {
        display: flex;
    }
`;





export const ProductArea = styled.div`
    margin: 20px 0;
`;
export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;

    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 630px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ProductPaginationArea= styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

`;
export const ProductPaginationItem= styled.div`
    background-color: ${props=>props.active === props.current ? '#ddd' : '#fff'};
    padding: 5px  10px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px  rgba(0, 0, 0, 0.16);
    cursor: pointer;
    margin-right: 10px;

    @media (max-width: 930px) {
        margin-bottom: 10px;
    }

`;