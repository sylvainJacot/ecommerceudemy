import React from "react";
import styled from "styled-components";
import {ColorRoles} from "../Atoms/variables";

const InputWrapper = styled.div`
position: relative;
`;

const InputStyling = styled.input`
    background: none;
    background-color: white;
    color: ${ColorRoles.primary};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${ColorRoles.primary};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

`;

export const FormInput = ({handleChange,label,...otherProps}) => (

         <InputWrapper>
                <InputStyling onChange={handleChange} {...otherProps}/>
             {label}
         </InputWrapper>

)