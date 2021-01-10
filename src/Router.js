import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Landing from './views/Landing/Landing'
import About from './views/About/About'
import Location from './views/Location/Location'
import Name from './views/Name/Name'
import Phone from './views/Phone/Phone'
import Price from './views/Price/Price'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/location">
                    <Location />
                </Route>
                <Route path="/name">
                    <Name />
                </Route>
                <Route path="/phone">
                    <Phone />
                </Route>
                <Route path="/price">
                    <Price />
                </Route>
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
