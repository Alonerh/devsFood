import React from "react";
import { 
    Container,
    ProductArea,
    ProductButtons,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductName,
    ProductIngredients,
    ProductButton,
    ProductQuantity,
    ProductQtImage,
    ProductQtText,
    ProductPrice
} from "./styled";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/reducers/cartReducer";

const ModalProduct = ({ data, setStatus }) => {
    const [qt, setQt]=useState(1);
    const dispatch = useDispatch();

    useEffect(()=>{
        setQt(1);
    }, [data])

    const handleCancelButton = ()=>{
        setStatus(false);
    }
    const handleMinusQt = ()=>{
        if(qt > 1) {
            setQt(qt - 1);
        }
    }
    const handlePlusQt = ()=>{
        setQt(qt + 1);
    }
    const handleAddToCart = ()=>{
        // Juntar informações
        // Mandar para reducer 
        dispatch(setProducts({data, qt}));
        // Fechar o modal
        setStatus(false);
    }

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image}/>
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage src="/assets/minus.png" onClick={handleMinusQt}/>
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage src="/assets/plus.png" onClick={handlePlusQt}/>
                        </ProductQuantity>
                        <ProductPrice>R$ {(qt * data.price).toFixed(2)}</ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>
    )
};

export default ModalProduct;
