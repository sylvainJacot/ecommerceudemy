import React from "react";
import styled from "styled-components";
import {SignIn} from "../Organisms/Connexion/signin";
import {SignUp} from "../Organisms/Connexion/signup";

const ConnexionPageWrapper = styled.div`
display: flex;
justify-content: space-around;
`;

export class ConnexionPage extends React.Component {
    render() {

        return (
                <ConnexionPageWrapper>
                    <SignIn/>
                    <SignUp/>
                </ConnexionPageWrapper>
        )
    }
}