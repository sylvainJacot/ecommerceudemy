import React from "react";
import styled from "styled-components";
import {FormInput} from "../../Molecules/formInput";
import {Button} from "../../Atoms/Button";
import {signInWithGoogle} from "../../../firebase/firebase.utils";


const SignInWrapper = styled.div`
display: flex;
flex-direction: column;
 h2 {
 font-size: 32px;
 margin-bottom: 8px;
 }
 span {
 margin-bottom: 16px;
 }
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
        /* Pull the value and name */
        const {value,name} = event.target;
        /* If name is password, it will say password and will point the value typed in */
        this.setState({[name]:value})
    }

    render() {
        return (
            <>
                <SignInWrapper>

                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit}>

                        <FormInput type="email"
                                   name="email"
                                   label="Your Email"
                                   value={this.state.email}
                                   inputValueActive={this.state.email.length > 0}
                                   handleChange={this.handleChange}
                                   onChange={this.handleChange}
                        />

                        <FormInput type="password"
                                   name="password"
                                   label="Your password"
                                   value={this.state.password}
                                   inputValueActive={this.state.password.length > 0}
                                   handleChange={this.handleChange}
                                   onChange={this.handleChange}
                        />

                        <Button type="submit">Submit</Button>
                        <Button onClick={signInWithGoogle()}>Sign in with Google</Button>

                    </form>
                </SignInWrapper>
            </>
        )
    }
}