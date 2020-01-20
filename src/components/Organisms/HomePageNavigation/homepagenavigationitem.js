import React from "react";
import Styled from "styled-components";
import {homePageNavigationData} from "../../Assets/constant/HomePageNavigationData";


const HomePageNavigationItemBox = Styled.div`
  min-width: 30%;
  min-width: ${props => props.ItemBig ? '48%' : '30%'};
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-color:red;
  background: url(${props => props.BgImg}) no-repeat center;
  background-size: cover;

`;

const HomePageNavigationItemContent = Styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

    &:h1 {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }
    &:button {
      font-weight: lighter;
      font-size: 16px;
    }

`;


export class HomePageNavigationItem extends React.Component {
    render() {
        return (
            <>
            {homePageNavigationData.map((HomePageNavigationDataItem,id) =>
            <HomePageNavigationItemBox key={id} ItemBig={HomePageNavigationDataItem.itemBig} BgImg={HomePageNavigationDataItem.bgimg}>
                <HomePageNavigationItemContent>
                    <h1>
                        {HomePageNavigationDataItem.title}
                    </h1>
                    <button>
                        Shop Now
                    </button>
                </HomePageNavigationItemContent>
            </HomePageNavigationItemBox>
                )}
                </>
        )
    }
}