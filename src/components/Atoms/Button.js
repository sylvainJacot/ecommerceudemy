import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import {colorRoles} from "./variables";


const Buttonstyles = {
    primary: "",
    disabled: "",
    google: "",
}

const BackGroundColorsList = {
    primary: colorRoles.primary,
    disabled: colorRoles.disabled,
    google: colorRoles.Google,
}

const TextColorsList = {
    primary: colorRoles.white,
    disabled: colorRoles.primary,
    google: colorRoles.white,
}

const CursorList = {
    primary: 'pointer',
    disabled: 'not-allowed',
}


const ButtonStyle = styled.button`
width: ${props => props.fullwidth? "100%" : "auto"};
color: ${props => TextColorsList[props.btnVariant]};
background:${props => BackGroundColorsList[props.btnVariant]};
cursor: ${props => CursorList[props.btnVariant]};
padding: 16px 40px;
transition: all 0.1s ;

  &:hover {
  background-color: ${colorRoles.white};
  color: ${colorRoles.primary};
  transition: all 0.2s ;
  box-shadow: inset 0px 0px 0px 1px ${colorRoles.primary};
  }
`;

export const Button = ({children, fullwidth, ...otherProps}) => (
    <ButtonStyle fullwidth={fullwidth} {...otherProps}>
        {children}
    </ButtonStyle>
)

Button.propTypes = {
    btnVariant: PropTypes.oneOf(Object.keys(Buttonstyles)),
    children: PropTypes.node,
    fullwidth: PropTypes.bool,
    /*Vas me renvoyer une erreur si je n'ai pas de onClick sur mon button"*/
    onClick: PropTypes.func.isRequired,
}

/*Le bouton par defaut si je ne specifie pas props*/

Button.defaultProps = {
    btnVariant: "primary",
    children: "Default text",
    fullwidth: false,
}
