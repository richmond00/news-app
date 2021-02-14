import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
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
        <nav className="topnav">
            <div className="topnav__logo home">
                <NavLink to="realtime" activeClassName="topnav__item-active">
                    🏠
                </NavLink>
            </div>
            <ul className="topnav__items">
                <li className="topnav__item menu">
                    <NavLink
                        to="realtime"
                        activeClassName="topnav__item-active"
                    >
                        {getStringByLanguage(language, "realtime")}
                    </NavLink>
                </li>
                <li className="topnav__item menu">
                    <NavLink
                        to="mostviewed"
                        activeClassName="topnav__item-active"
                    >
                        {getStringByLanguage(language, "mostviewed")}
                    </NavLink>
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
    );
};

export default Topnav;
