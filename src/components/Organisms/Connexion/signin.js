import React from "react";
import styled from "styled-components";
import {ColorRoles} from "../../Atoms/variables";
import {FormInput} from "../../Molecules/formInput";

const SignInWrapper = styled.div`
 h2 {
 font-size: 32px;
 margin-bottom: 16px;
 }
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

const InputWrapper = styled.div`
position: relative;
`;

const LabelStyling = styled.label`
    color: ${ColorRoles.primary};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
`;

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = event => {
        /* remove all features of submit form, so we have total control on it*/
        event.preventDefault();
        /* Clearing out the fields*/
        this.setState({email: "", password: ""});
    };

    handleChange = event => {
        /* Pull the value and name*/
        const {value,name} = event.target;
        /* If name is password, it will say password and point the value typed in */
        this.setState({[name]:value})
    }

    render() {
        return (
            <>
                <SignInWrapper>

                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit}>

                        <FormInput type={"email"} name="email" label={"Your Email"}
                                   value={this.state.email} handleChange={this.handleChange}required onChange={this.handleChange}>
                        </FormInput>

                        <FormInput type={"password"} name="password" label={"Your password"}
                                   value={this.state.password} handleChange={this.handleChange}required onChange={this.handleChange}>
                        </FormInput>

                        <input type={"submit"} value={"submit form"}/>
                    </form>
                </SignInWrapper>
            </>
        )
    }
}