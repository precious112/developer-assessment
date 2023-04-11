import React,{useState,useContext} from "react";
import {useQuery,gql} from '@apollo/client';
import { Body, Content, Header, HeaderText, Loader, Wrapper } from "./ProductComponent.styles";
import BounceLoader from 'react-spinners/BounceLoader';
import ProductDetail from "../ProductDetail";
import { ProductContext } from "../../ContextApis/ProductContext";
import Cart from "../CartComponent";
//pass


const Product=()=>{
    const {error,data,loading}=useQuery(
        gql`
    query{
        allProducts{
            id
            name
            description
            sku
            price
            image
        }
    }
    `
    );

    const [addToCart,setAddToCart]=useState(false);
    const [cart,setCart]=useState([]);

    return(
        <Wrapper>
            <Header>
                <HeaderText Color="#2ac70e">Life</HeaderText>
                <HeaderText Color="#f59d22">Stores</HeaderText>
            </Header>
            <Content>
            <Body>
                <ProductContext.Provider value={{setAddToCart,cart,setCart}}>
                {
                    loading? 
                    <Loader>
                    <BounceLoader size={50} color="#5ee6d1"/>
                    </Loader>
                    :
                    data.allProducts.map((item)=>(
                        <ProductDetail key={item.id} image={item.image}
                        name={item.name}  sku={item.sku} 
                        description={item.description}
                        price={item.price}
                        />
                    ))

                }
                {
                addToCart? <Cart/>
                :
                <></>
            }
                </ProductContext.Provider>
            </Body>
            </Content>
        </Wrapper>
    );
    
        
}

export default Product;