import React from "react";
import PropTypes from "prop-types";

const countryEmoji = {
    en: "🇺🇸",
    kr: "🇰🇷",
};

const LanguagePicker = ({ onClick, language }) => {
    return (
        <div>
            <button
                className="btn btn-picker"
                type="button"
                onClick={onClick}
                value={language}
            >
                {countryEmoji[language]}
            </button>
        </div>
    );
};

LanguagePicker.propTypes = {
    onClick: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
};

export default LanguagePicker;
