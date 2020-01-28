import React from "react";
import styled from "styled-components";
import {ColorRoles} from "../Atoms/variables";

const InputStyling = styled.input`
  position: relative;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  position: relative;
  background-color: ${ColorRoles.white};
  transition: 0.3s all;
  padding-left: 8px;

    &:focus {
      outline: none;
    }
    &:hover {
        background-color: ${ColorRoles.white}45;
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
    }

`;
const LabelStyling = styled.label`
position: absolute;
top: ${props => props.inputHasValue ? '12px' : '50%'};
font-size: ${props => props.inputHasValue ? 12 : 16}px;
left: 8px;
transform: translate(0,-50%);
transition: all 0.1s ease-in-out;
pointer-events: none;

`;
const InputWrapper = styled.div`
position: relative;
 margin-bottom: 16px;

${InputStyling}:focus ~ ${LabelStyling} {
font-size: 12px;
top: 12px;
transition: all 0.1s ease-in-out;
}
`;

export const FormInput = ({handleChange,label, inputHasValue, ...otherProps}) => (

         <InputWrapper>
                <InputStyling onChange={handleChange} {...otherProps}/>
                {label ?
                 <LabelStyling inputHasValue={inputHasValue}>{label}</LabelStyling>
                    : null
                }
         </InputWrapper>

)