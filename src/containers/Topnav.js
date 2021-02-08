import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import LanguagePicker from "../components/LanguagePicker";

const Topnav = () => {
    return (
        <header className="header">
            <nav className="topnav">
                <div className="topnav__logo">Logo</div>
                <ul className="topnav__items">
                    <li className="topnav__item">
                        <Link to="realtime">Real Time</Link>
                    </li>
                    <li className="topnav__item">
                        <Link to="mostviewed">Most Viewed</Link>
                    </li>
                    <li className="topnav__item">
                        <LanguagePicker />
                    </li>
                    <li className="topnav__item">
                        <SearchInput />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Topnav;
