import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {BiRestaurant, BiWallet} from 'react-icons/bi';
import {Container} from '../../Globalstyles';


export const Nav = styled.nav` 
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 80px;
background-color: rgba(0, 0, 0, 0.5);
/* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: center;
align-items: center;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
${Container};
`;

export const NavLogo = styled(Link)`
color: #fff;
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
font-size: 2.5rem;
font-weight: 800;
transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}
`;

export const NavIcon = styled(BiRestaurant)`
margin-right: .8rem;
transition: all .5s ease;

&:hover {
    transform: scale(2);
}
`;

export const WalletIcon = styled(BiWallet)`
margin-right: .8rem;
transition: all .5s ease;
color:black!important;
&:hover {
    transform: scale(2);
}
`;

export const MenuIcon = styled.div`
display: none;

@media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
}
`;

export const Menu = styled.ul`
display: flex;
align-items: center;
text-align: center;

@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? '0' : '-100%'};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all .5s ease;
}
`;

export const MenuItem = styled.li`
list-style: none;
height: 80px;


@media only screen and (max-width:1000px){
    width: 100%;
    &:hover {
        border: none;
    }
}
`;

export const MenuLink = styled(Link)`
text-decoration: none;
font-weight: bold;
font-size: 2rem;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
height: 100%;
transition: all .2s ease;

&:hover {
    color: #E38B06;
    transform: traslateY(-3rem);
    
}
&:active {
    transform: traslateY(3rem);
    color: #E38B06;
}

@media only screen and (max-width:1000px){
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all .2s ease;
}
`;

export const MenuItemBtn = styled.li`
list-style: none;
@media screen and (max-width:1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
}
`;

export const MenuLinkBtn = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;

`;

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

export const StyledLi = styled.li`
  float: left;
`;

export const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius:20px;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border-radius:20px;
`;

export const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
  border-radius:20px;
`;
