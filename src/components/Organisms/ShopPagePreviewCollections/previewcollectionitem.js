import React from "react";
import styled from "styled-components";
import {CollectionItem} from './collectionitem';

const PreviewCollectionItemWrapper = styled.div`
display: flex;
justify-content: space-between;
`;

export class PreviewCollectionItem extends React.Component {
    render() {
        const {HomePageNavigationDataItem} = this.props;
        return (
            <PreviewCollectionItemWrapper>
                {/* && veut dire "si...alors... -> Si hompepage alors homepage.map*/}
                {HomePageNavigationDataItem && HomePageNavigationDataItem
                    .filter((article,index) => index < 4)
                    .map((article)=>

                            <CollectionItem itemimg={article.itemimg} price={article.price} name={article.name}/>

                )}
            </PreviewCollectionItemWrapper>
        )
    }
}