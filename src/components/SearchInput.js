import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ onChange, onClick }) => {
    return (
        <form action="">
            <input
                type="text"
                className="search__input"
                placeholder="search..."
                onChange={onChange}
            />
            <button type="submit" onClick={onClick}>
                submit
            </button>
        </form>
    );
};

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SearchInput;
