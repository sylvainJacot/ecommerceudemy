import React from "react";
import Styled from "styled-components";
import {Collections} from "../Organisms/ShopPagePreviewCollections/collections";

const ShopPageTitle = Styled.h2`
font-size: 40px;
`;

export class ShopPage extends React.Component {
    render() {
        return (
            <>
                <ShopPageTitle>Collections</ShopPageTitle>
                <Collections/>
            </>
        )
    }
}