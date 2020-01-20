import React from "react";
import Styled from "styled-components";
import {HomePageNavigationItemWithRouter} from "../HomePageNavigation/homepagenavigationitem";


const HomePageNavigationBox = Styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;

export class HomePageNavigation extends React.Component {
    render() {
        return (
            <HomePageNavigationBox>

                    <HomePageNavigationItemWithRouter />

            </HomePageNavigationBox>
        )
    }
}

