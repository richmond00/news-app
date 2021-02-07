import React from "react";
import { Switch, Route } from "react-router-dom";
import Topnav from "./Topnav";
import RealTime from "./RealTime";
import MostViewed from "./MostViewed";

const App = () => {
    return (
        <div className="container">
            <Topnav />
            <Switch>
                <Route path="/realtime" component={RealTime} />
                <Route path="/mostviewed" component={MostViewed} />
            </Switch>
        </div>
    );
};

export default App;
