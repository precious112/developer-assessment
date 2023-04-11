import styled from "styled-components";

export const Wrapper=styled.div`
position:fixed;
left:30%;
top:30%;
width:40%;
background:#ffffff;
height:280px;
padding:6px;
box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.61);
-webkit-box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.61);
-moz-box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.61);
overflow-x:hidden;
overflow-y:auto;

::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    backround:transparent;
     
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  @media only screen and (max-width: 480px) {
    left:5%;
    top:20%;
    width:85%;
  }
`;

export const BackButtonDiv=styled.div`
width:100%;
display:flex;
flex-direction:row-reverse;
font-size:15px;
`;



export const ItemSection=styled.div`
width:100%;

`;

export const CartItem=styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:10px;
margin-left:20px;
@media only screen and (max-width: 480px) {
  margin-left:0px;  
}
`;

export const ImageAndNameSection=styled.div`
display:flex;
align-items:center;
width:45%;
`;

export const ImageItem=styled.img`
border-radius:10px;
width:60%;
height:80px;
margin-right:17px;
@media only screen and (max-width: 480px) {
   margin-right:3px;
   width:40%;
   height:60px;  
}
`;

export const NameDiv=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
font-size:12px;
font-weight:bold;
@media only screen and (max-width: 480px) {
    font-size:10px;
}
`;

export const NameItem=styled.p`
color:${(props)=>props.Color};
`;


export const EditCartItemSection=styled.div`
width:45%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`;

export const AlterSection=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
@media only screen and (max-width: 480px) {
  font-size:11px;   
 }
`;

export const IncAndDecItem=styled.button`
background-color:#fca853;
border-radius:7px;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-size:12px;
font-weight:bold;
padding:6px 6px;
text-decoration:none;
border:none;
margin-left:3px;
margin-right:3px;

:hover {
	background-color:#d16e0a;
}
:active {
	position:relative;
	top:1px;
}

@media only screen and (max-width: 480px) {
  font-size:10px;  
 }
`;

export const RemoveItem=styled.button`
background-color:#fca853;
border-radius:7px;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-size:12px;
font-weight:bold;
padding:10px 6px;
text-decoration:none;
border:none;
margin-left:3px;
margin-right:3px;

:hover {
	background-color:#d16e0a;
}
:active {
	position:relative;
	top:1px;
}
@media only screen and (max-width: 480px) {
 font-size:10px;
 padding:10px 6px;
 display:inline;  
 pass:pass; 
}
`;