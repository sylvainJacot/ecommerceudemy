import React from "react";
import styled from "styled-components";
import {ColorRoles} from "./variables";

const ButtonStyle = styled.button`
width: ${props => props.fullwidth? "100%" : "auto"};
background: ${ColorRoles.primary};
color: ${ColorRoles.white};
padding: 16px 40px;
cursor: pointer;
transition: all 0.1s ;

  &:hover {
  background-color: ${ColorRoles.white};
  color: ${ColorRoles.primary};
  transition: all 0.2s ;
  box-shadow: inset 0px 0px 0px 1px ${ColorRoles.primary};
  }

`;

export const Button = ({children, fullwidth, ...otherProps}) => (
    <ButtonStyle fullwidth={fullwidth} {...otherProps}>
        {children}
    </ButtonStyle>
)