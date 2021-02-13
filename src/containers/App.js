import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Topnav from "./Topnav";
import Realtime from "./Realtime";
import Mostviewed from "./Mostviewed";
import Search from "./Search";
import { themes } from "../helpers/common";

const App = () => {
    const theme = useSelector((state) => state.display.theme);

    return (
        <div
            className="container"
            style={{
                color: themes[theme].color,
                backgroundColor: themes[theme].main,
            }}
        >
            <header
                className="header"
                style={{
                    color: themes[theme].color,
                    backgroundColor: themes[theme].header,
                }}
            >
                <Topnav />
            </header>
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
