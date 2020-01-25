import React from "react";
import Styled from "styled-components";

const CollectionItemWrapper = Styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;
const CollectionItemImage = Styled.img`
  width: 100%;
  height: 95%;
  background-image: url(${props => props.itemimg});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;
const Footer = Styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export class CollectionItem extends React.Component {
    render() {
        const {itemimg,name,price} = this.props
        return (
            <>
                <CollectionItemWrapper>
                    <CollectionItemImage itemimg={itemimg}>
                    </CollectionItemImage>
                    <Footer>
                        <h4>{name}</h4>
                        <p>{price}</p>
                    </Footer>
                </CollectionItemWrapper>
            </>
        )
    }
}