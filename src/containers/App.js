import React from "react";
import { Switch, Route } from "react-router-dom";
import Topnav from "./Topnav";
import RealTime from "./RealTime";
import MostViewed from "./MostViewed";
import Search from "./Search";

const App = () => {
    return (
        <div className="container">
            <Topnav />
            <main className="contents">
                <Switch>
                    <Route path="/realtime" component={RealTime} />
                    <Route path="/mostviewed" component={MostViewed} />
                    <Route path="/search" component={Search} />
                </Switch>
            </main>
        </div>
    );
};

export default App;
