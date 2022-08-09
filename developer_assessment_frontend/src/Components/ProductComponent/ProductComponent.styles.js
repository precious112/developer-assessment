import styled from 'styled-components';

export const Wrapper=styled.div`
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
width:100%;
font-family:'Comfortaa';
position:relative;
box-sizing:border-box;
background:#faf9f7;
min-height:100vh;
`;

export const Header=styled.div`
top: 0;
left: 0;
width:100%;
font-size:20px;
margin-bottom:30px;
position:sticky;
background:#faf9f7;
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
z-index: 100;
box-shadow: -1px 5px 16px -10px rgba(0,0,0,0.63);
-webkit-box-shadow: -1px 5px 16px -10px rgba(0,0,0,0.63);
-moz-box-shadow: -1px 5px 16px -10px rgba(0,0,0,0.63);
@media only screen and (max-width: 480px) {
    box-sizing: border-box;
    position: -webkit-sticky;
    position: sticky;
    }
`;


export const HeaderText=styled.h2`
color:${(props)=>props.Color};
font-weight: 900;
`;

export const Content=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:top;
`;

export const Body=styled.div`
display:grid;
grid-template-columns:25% 25% 25% 25%;
@media only screen and (max-width: 480px) {
    display:flex;
    flex-direction:column;
}
`;

export const Loader=styled.div`
diaplay:block;
position:fixed;
left:50%;
top:50%;
@media only screen and (max-width: 480px) {
    left:46%;
}
`;