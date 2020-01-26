import React from "react";
import styled from "styled-components";
import {Button} from "../../Atoms/Button";

const ButtonPosition = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;

`;

const CollectionItemWrapper = styled.div`
  position: relative;
  width: 288px;
  background-color: #b3d4fc;
  margin-left: 80px;
  background-color: green;
  
  &:nth-child(1) {
  margin-left: 0;
  }
  &:hover ${ButtonPosition} {
  opacity: 100%;
  visibility: visible;
  transition: all 0.2s;
  }
`;

const CollectionItemTopWrapper = styled.div`
position: relative;
background-color: burlywood;
width: 100%;
height: 280px;
overflow: hidden; 
display: flex;
justify-content: center;

  img {
  height: 100%;
  width: auto;
  border: 1px solid red;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export class CollectionItem extends React.Component {
    render() {
        const {itemimg,name,price} = this.props
        return (
            <>
                <CollectionItemWrapper>
                    <CollectionItemTopWrapper>

                        <ButtonPosition>
                            <Button label={"add to cart"} fullwidth={true}/>
                        </ButtonPosition>
                     <img src={itemimg}/>
                    </CollectionItemTopWrapper>
                    <Footer>
                        <h4>{name}</h4>
                        <p>${price}</p>
                    </Footer>
                </CollectionItemWrapper>
            </>
        )
    }
}