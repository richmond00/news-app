import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import LanguagePicker from "../components/LanguagePicker";
import ThemePicker from "../components/ThemePicker";
import { fetchSearchResult, pickLanguage, pickTheme } from "../actions";

const Topnav = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const display = useSelector((state) => state.display);
    const [keyword, setKeyword] = useState("");

    const handleLanguageClick = (e) => {
        dispatch(pickLanguage(e.target.value));
    };

    const handleThemeClick = (e) => {
        dispatch(pickTheme(e.target.value));
    };

    const handleSearchInputChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleSearchInputClick = (e) => {
        e.preventDefault();
        if (!keyword) return;
        dispatch(fetchSearchResult(keyword));
        history.push("/search");
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
                        <LanguagePicker
                            onClick={handleLanguageClick}
                            language={display.language}
                        />
                    </li>
                    <li className="topnav__item">
                        <ThemePicker
                            onClick={handleThemeClick}
                            theme={display.theme}
                        />
                    </li>
                    <li className="topnav__item">
                        <SearchInput
                            onChange={handleSearchInputChange}
                            onClick={handleSearchInputClick}
                            keyword={keyword}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Topnav;
