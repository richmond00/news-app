import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import LanguagePicker from "../components/LanguagePicker";
import ThemePicker from "../components/ThemePicker";
import { fetchSearchResult } from "../actions";

const Topnav = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (!keyword) return;
        dispatch(fetchSearchResult(keyword));
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
                            keyword={keyword}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Topnav;
