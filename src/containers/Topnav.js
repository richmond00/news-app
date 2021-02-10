import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import LanguagePicker from "../components/LanguagePicker";
import ThemePicker from "../components/ThemePicker";

const Topnav = () => {
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log("click");
        setKeyword("");
    };

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
                        <ThemePicker />
                    </li>
                    <li className="topnav__item">
                        <SearchInput
                            onChange={handleChange}
                            onClick={handleClick}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Topnav;
