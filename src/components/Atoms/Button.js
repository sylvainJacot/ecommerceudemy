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
  }

`;

export const Button = (props) => (
    <ButtonStyle onClick={props.onCLick} type={props.type} fullwidth={props.fullwidth}>
        {props.label}
    </ButtonStyle>
)