import styled from "styled-components";

export const Wrapper=styled.div`
position:relative;
width:90%;
min-height:200px;
background:#ffffff;
border-radius:7px;
padding-bottom:10px;
margin-bottom:10px;
margin-right:15px;
display:flex;
flex-direction:column;
justify-content:space-between;
box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.31);
-webkit-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.31);
-moz-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.31);

:hover{
    box-shadow: 0px 3px 5px 2px rgba(0,0,0,0.37);
    -webkit-box-shadow: 0px 3px 5px 2px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 3px 5px 2px rgba(0,0,0,0.37);

    transform: scale(1.1, 1.1);
}

@media only screen and (max-width: 480px) {
    margin-bottom:15px;
    :hover{
        box-shadow: 0px 3px 5px 2px rgba(0,0,0,0.37);
        -webkit-box-shadow: 0px 3px 5px 2px rgba(0,0,0,0.37);
        -moz-box-shadow: 0px 3px 5px 2px rgba(0,0,0,0.37);
    
        transform: scale(1, 1);
    } 
}
`;

export const ProductImage=styled.img`
width:100%;
height:150px;
margin-bottom:5px;
`;

export const ProductInfo=styled.div`
position:relative;
bottom:0px;
width:100%;
`;

export const ProductName=styled.div`
width:97%;
display:flex;
justify-content:space-between;
font-size:12px;
font-weight:bold;
margin-bottom:4px;
padding:3px;
`;


export const BuySection=styled.div`
width:97%;
display:flex;
justify-content:space-between;
align-items:center;
padding: 3px 3px 3px 3px;
`;

export const ProductPrice=styled.div`
font-size:15px;
font-weight:bold;
color:#fca853;
`;

export const AddToCart=styled.button`
background-color:#fca853;
border-radius:7px;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-size:13px;
font-weight:bold;
padding:10px 5px;
text-decoration:none;
border:none;

:hover {
	background-color:#d16e0a;
}
:active {
	position:relative;
	top:1px;
}
`;
