import React from "react";
import Search from "../components/Search";
import LanguagePicker from "../components/LanguagePicker";

const Topnav = () => {
    return (
        <header className="header">
            <nav className="topnav">
                <div className="topnav__logo">Logo</div>
                <ul className="topnav__items">
                    <li className="topnav__item">Real Time</li>
                    <li className="topnav__item">Most Viewed</li>
                    <li className="topnav__item">
                        <LanguagePicker />
                    </li>
                    <li className="topnav__item">
                        <Search />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Topnav;
