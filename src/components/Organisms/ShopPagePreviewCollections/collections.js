import React from "react";
import styled from "styled-components";
import {homePageNavigationData} from "../../Assets/constant/HomePageNavigationData";
import {PreviewCollectionItem} from "./previewcollectionitem";

const CollectionTitle = styled.h2`
    font-size: 24px;
    margin:16px  0px ;
`;

export class Collections extends React.Component {
    render() {
        return (
            <>
                {homePageNavigationData.map((HomePageNavigationDataItem) =>
                    <>
                        <CollectionTitle>{HomePageNavigationDataItem.title}</CollectionTitle>

                            <PreviewCollectionItem  HomePageNavigationDataItem={HomePageNavigationDataItem.items}/>

                    </>
                )}
            </>
        )
    }
}


