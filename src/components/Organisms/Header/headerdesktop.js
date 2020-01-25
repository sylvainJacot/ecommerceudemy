import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
width: 100%;
height: 80px;
background-color: bisque;
display: flex;
align-items: center;
justify-content: center;

  h1 {
  font-size: 40px;
  }

`;

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
                <HeaderWrapper>
                    <h1> Header</h1>
                </HeaderWrapper>
                {this.props.children}
                <FooterWrapper>
                    <h1> Footer</h1>
                </FooterWrapper>
                </>
        )
    }
}