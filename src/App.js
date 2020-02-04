import React from 'react';
import './reset.css';
import styled from 'styled-components';
import {HeaderFooter} from './components/Organisms/HeaderFooter/HeaderFooter';
import {
    Switch,
    Route,
} from "react-router-dom";
import {HomePageNavigation} from "./components/Organisms/HomePageNavigation/homepagenavigation";
import {ShopPage} from "./components/Pages/shoppage";
import {ContactPage} from "./components/Pages/contactpage";
import {AboutPage} from "./components/Pages/aboutpage";
import {ConnexionPage} from "./components/Pages/connexionpage";
import {auth} from "./firebase/firebase.utils";

const OverallWrapper = styled.div`
margin: 0 40px;
`;

class App extends React.Component{
    constructor() {
        super();

         this.state = {
             isUserLoggedIn: null,
         }
    }
    render() {
        return (
            <div className="App">
                <OverallWrapper>
                    <HeaderFooter>
                        <Switch>
                            <Route exact path="/" component={HomePageNavigation} />
                            <Route path="/shop" component={ShopPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/connexion" component={ConnexionPage} />
                        </Switch>
                    </HeaderFooter>
                </OverallWrapper>
            </div>
        );
    }
}

export default App;
