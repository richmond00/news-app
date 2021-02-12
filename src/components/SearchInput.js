import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ onChange, onClick, keyword }) => {
    return (
        <form action="">
            <input
                type="text"
                className="search__input"
                placeholder="search..."
                onChange={onChange}
                value={keyword}
            />
            <button type="submit" className="btn btn-search" onClick={onClick}>
                🔍
            </button>
        </form>
    );
};

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired,
};

export default SearchInput;
