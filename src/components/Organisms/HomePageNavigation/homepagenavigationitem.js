import React from "react";
import Styled from "styled-components";
import {withRouter} from "react-router-dom";
import {colorRoles} from "../../Atoms/variables";
import {homePageNavigationData} from "../../Assets/constant/HomePageNavigationData";


const BackgroundImage = Styled.div`
     width: 100%;
     height: 100%;
     position: absolute;
     z-index: -1;
     background: url(${props => props.BgImg}) no-repeat center;
     background-size: cover;
     transition: all 0.6s;
`;
const HomePageNavigationItemBox = Styled.div`
  position: relative;
  min-width: 30%;
  min-width: ${props => props.ItemBig ? '48%' : '30%'};
  height: ${props => props.ItemBig ? '320px' : '240px'};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  
  &:hover ${BackgroundImage}{
  transform: scale(1.1);
  transition: all 0.6s;
  
  }
  
`;

const HomePageNavigationItemContent = Styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: ${colorRoles.white}80;

    h1 {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: ${colorRoles.primary};
    }
    button {
      font-weight: lighter;
      font-size: 16px;
    }

`;


class HomePageNavigationItem extends React.Component {
    render() {
        const {match,history} = this.props;
        return (
            <>
                {homePageNavigationData.map((HomePageNavigationDataItem,id) =>
                    <HomePageNavigationItemBox
                        key={id}
                        ItemBig={HomePageNavigationDataItem.itemBig}
                        onClick={() => history.push(`${match.url}${HomePageNavigationDataItem.linkUrl}`)}
                    >
                        <HomePageNavigationItemContent>
                            <h1>
                                {HomePageNavigationDataItem.title.toUpperCase()}
                            </h1>
                            <button>
                                Shop Now
                            </button>
                        </HomePageNavigationItemContent>
                        <BackgroundImage BgImg={HomePageNavigationDataItem.bgimg}></BackgroundImage>
                    </HomePageNavigationItemBox>
                )}
            </>
        )
    }
}


export const HomePageNavigationItemWithRouter = withRouter(HomePageNavigationItem);



