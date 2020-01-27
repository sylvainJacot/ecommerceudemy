import React from "react";
import styled from "styled-components";
import {Header} from "./Header/Header";

const FooterWrapper = styled.div`
width: 100%;
height: 80px;
background-color: aliceblue;
display: flex;
align-items: center;
justify-content: center;

  h1 {
  font-size: 40px;
  }

\`;

`

export class HeaderFooter extends React.Component {
    render() {

        return (
            <>
                <Header/>
                {this.props.children}
                <FooterWrapper>
                    <h1> Footer</h1>
                </FooterWrapper>
                </>
        )
    }
}