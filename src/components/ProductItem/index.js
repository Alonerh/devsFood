import React from "react";
import { 
    Container, 
    ProductPhoto, 
    ProductPhotoArea, 
    ProductInfoArea, 
    ProductButtonArea,
    ProductName,
    ProductButton,
    ProductPrice,
    ProductIngredients
} from "./styled";

const ProductItem = ({data, onClick})=> {

    const handleClick = ()=>{
        onClick(data);
    }

    return (
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <ProductPhoto src={data.image}/>
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png"/>
            </ProductButtonArea>
        </Container>
    )
};

export default ProductItem;