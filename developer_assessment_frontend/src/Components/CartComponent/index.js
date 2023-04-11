import React,{useState,useContext} from 'react';
import { ProductContext } from '../../ContextApis/ProductContext';
import { AlterSection, BackButtonDiv, CartItem, EditCartItemSection, ImageAndNameSection, ImageItem, IncAndDecItem, ItemSection, NameDiv, NameItem, RemoveItem, Wrapper } from './CartComponent.styles';

//pass

const Cart=()=>{
    const {setAddToCart,cart,setCart}=useContext(ProductContext);
    
    const hideDialog=()=>{
       setAddToCart(false);
    }

    const Increment=(e,index)=>{
        e.preventDefault();
        let array =[...cart]
        array[index].num=array[index].num+1
        setCart(array);
        
    }

    const Decrement=(e,index)=>{
        e.preventDefault();
        let array =[...cart]
        if (array[index].num>0){
        array[index].num=array[index].num-1
        setCart(array);
        }
        
    }

    const Delete=(e,index)=>{
        e.preventDefault();
        let array=cart.filter(function(item){
         return item !== cart[index]
        });
        setCart(array);
    }

    return(
        <Wrapper>
            <BackButtonDiv>
            <div onClick={()=>hideDialog()}>
            <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            </BackButtonDiv>
            <ItemSection>
                {
                    cart.map((item,index)=>(
                        <CartItem key={index}>
                            <ImageAndNameSection>
                                <ImageItem src={item.image}/>
                                <NameDiv>
                                    <NameItem color='#000000'>{item.name}</NameItem>
                                    <NameItem color='#fca853'>{item.price}</NameItem>
                                </NameDiv>
                            </ImageAndNameSection>
                            <EditCartItemSection>
                                <AlterSection>
                                    <IncAndDecItem onClick={e=>Increment(e,index)}>+</IncAndDecItem>
                                    {item.num}
                                    <IncAndDecItem onClick={e=>Decrement(e,index)}>-</IncAndDecItem>
                                    <RemoveItem onClick={e=>Delete(e,index)}>remove item</RemoveItem>
                                </AlterSection>
                            </EditCartItemSection>
                        </CartItem>
                        ))
                }
                
            </ItemSection>
        </Wrapper>
    );
}

export default Cart;