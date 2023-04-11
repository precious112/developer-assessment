import React,{useState,useContext} from 'react';
import { AddToCart, BuySection, ProductImage, ProductInfo, ProductName, ProductPrice, Wrapper } from './ProductDetail.styles';
import { ProductContext } from '../../ContextApis/ProductContext';

const ProductDetail=(props)=>{
    const {setAddToCart,cart,setCart}=useContext(ProductContext);
    
    
    const addItemToCart=(e)=>{
        e.preventDefault();
        setCart([...cart,{name:props.name,image:props.image,price:props.price,num:0}]);
        setAddToCart(true);
    };
    return(
        <Wrapper>
            <ProductImage src={props.image}/>
            <ProductInfo>
                <ProductName><div>{props.name}</div><div>{props.sku}</div></ProductName>
                <BuySection>
                    <ProductPrice>N{props.price}</ProductPrice>
                    <AddToCart onClick={addItemToCart}>add to cart</AddToCart>
                </BuySection>
            </ProductInfo>
        </Wrapper>
    );
}

export default ProductDetail;