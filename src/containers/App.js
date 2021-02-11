import React from "react";
import { Switch, Route } from "react-router-dom";
import Topnav from "./Topnav";
import Realtime from "./Realtime";
import Mostviewed from "./Mostviewed";
import Search from "./Search";

const App = () => {
    return (
        <div className="container">
            <Topnav />
            <main className="contents">
                <Switch>
                    <Route path="/realtime" component={Realtime} />
                    <Route path="/mostviewed" component={Mostviewed} />
                    <Route path="/search" component={Search} />
                </Switch>
            </main>
        </div>
    );
};

export default App;
