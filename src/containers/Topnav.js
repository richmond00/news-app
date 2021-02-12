import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import LanguagePicker from "../components/LanguagePicker";
import ThemePicker from "../components/ThemePicker";
import { fetchSearchResult, pickLanguage, pickTheme } from "../actions";
import { getStringByLanguage } from "../helpers/common";

const Topnav = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const language = useSelector((state) => state.display.language);
    const theme = useSelector((state) => state.display.theme);
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
                <div className="topnav__logo">🏠</div>
                <ul className="topnav__items">
                    <li className="topnav__item">
                        <Link to="realtime">
                            {getStringByLanguage(language, "realtime")}
                        </Link>
                    </li>
                    <li className="topnav__item">
                        <Link to="mostviewed">
                            {getStringByLanguage(language, "mostviewed")}
                        </Link>
                    </li>
                    <li className="topnav__item">
                        <LanguagePicker
                            onClick={handleLanguageClick}
                            language={language}
                        />
                    </li>
                    <li className="topnav__item">
                        <ThemePicker onClick={handleThemeClick} theme={theme} />
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
