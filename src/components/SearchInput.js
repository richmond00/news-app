import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ onChange, onClick, keyword }) => {
    return (
        <form className="topnav__form">
            <button type="submit" className="btn btn-search" onClick={onClick}>
                🔍
            </button>
            <input
                type="text"
                className="search__input"
                placeholder="search..."
                onChange={onChange}
                value={keyword}
            />
        </form>
    );
};

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired,
};

export default SearchInput;
