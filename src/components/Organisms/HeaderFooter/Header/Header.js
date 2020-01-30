import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components"
import {ReactComponent as Logo} from "../../../Atoms/media/matter-logo.svg";
import {ColorRoles} from "../../../Atoms/variables";

const LinkStyling = styled(Link)`
`;
const HeaderWrapper = styled.div`
width: 100%;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;

  ul {
  ${LinkStyling} {
   margin-left: 16px;
   text-decoration: none;
   color: ${ColorRoles.primary};
   text-transform: uppercase;
  }
  }

`;

export class Header extends React.Component {
    render() {

        return (
            <>
                <HeaderWrapper>
                    <Logo/>
                    <ul>
                        <LinkStyling to="/">Home</LinkStyling>
                        <LinkStyling to="/shop">Shop</LinkStyling>
                        <LinkStyling to="/contact">Contact</LinkStyling>
                        <LinkStyling to="/about">About</LinkStyling>
                        <LinkStyling to="/connexion">Connexion</LinkStyling>
                    </ul>
                </HeaderWrapper>
            </>
        )
    }
}