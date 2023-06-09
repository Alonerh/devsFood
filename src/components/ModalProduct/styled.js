import styled from "styled-components";

export const Container = styled.div`
    width: 650px;
    padding: 20px;

    @media (max-width: 870px) {
        width: 400px;
    }
    @media (max-width: 500px) {
        width: 200px;
    }
`;
export const ProductArea = styled.div`
    height: 200px;
    display: flex;

    @media (max-width: 870px) {
        height: 100px;
    }
    @media (max-width: 500px) {
        height: 200px;
        flex-direction: column;
        align-items: center;
    }
`;

export const ProductPhoto = styled.img`
    width: 310px;
    border-radius: 10px;

    @media (max-width: 870px) {
        width: 150px;
    }
`;
export const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;

    font-size: ${props=>props.small ? '10px' : '19px'};

    @media (max-width: 500px) {
        flex: none;
    }
`;

export const ProductDetails = styled.div`
`;
export const ProductQuantityArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 870px) {
        width: 180px;
        margin-top: 15px;
    }
`;

export const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold;

    @media (max-width: 870px) {
        font-size: 20px;
    }
`;
export const ProductIngredients = styled.div`
    font-size: 14px;

    @media (max-width: 870px) {
        font-size: 12px;
    }
`;

export const ProductButtons = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ProductButton = styled.button`
    border: 0;
    background-color: #073c07;
    box-shadow: 4px 5px 0 #999;
    color: #fff;
    font-size: ${props=>props.small ? '13px' : '22px'};
    font-weight: bold;
    padding: ${props=>props.small ? '5px 10px' : '10px 20px'};
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 870px) {
        font-size: ${props=>props.small ? '10px' : '19px'};
    }
    @media (max-width: 870px) {
        font-size: ${props=>props.small ? '10px' : '15px'};
    }
`;


export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    background-color: #073c07;
    border-radius: 5px;
`;
export const ProductQtImage = styled.img`
    width: 24px;
    height: auto;
    margin: 0px 10px;
    cursor: pointer;

    @media (max-width: 870px) {
        width: 15px;
    }
`;
export const ProductQtText = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #fff;

    @media (max-width: 870px) {
        font-size: 20px;
    }
`;
export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;

    @media (max-width: 870px) {
        font-size: 20px;
    }
`;

