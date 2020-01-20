import React from "react";
import {homePageNavigationData} from "../../Assets/constant/HomePageNavigationData";
import {PreviewCollectionItem} from "./previewcollectionitem";


export class PreviewCollections extends React.Component {
    render() {
        return (
            <>
                {homePageNavigationData.map((homePageNavigationDataItem, id) =>

                    <h1>{homePageNavigationDataItem.title.toUpperCase()}</h1>
                    <PreviewCollectionItem/>
                )}
            </>
        )
    }
}