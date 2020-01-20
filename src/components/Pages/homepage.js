import React from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import {HomePageNavigation} from "../Organisms/HomePageNavigation/homepagenavigation";
import {ShopPage} from "./shoppage";
import {ContactPage} from "./contactpage";
import {AboutPage} from "./aboutpage";

export class HomePage extends React.Component {
    render() {
        return (
            <>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </ul>
                <Switch>
                    <Route exact path="/" component={HomePageNavigation} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/about" component={AboutPage} />
                </Switch>

            </>
        )
    }
}