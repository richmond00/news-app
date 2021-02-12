import React from "react";
import PropTypes from "prop-types";

const themeEmoji = {
    light: "🌞",
    dark: "🌜",
};

const ThemePicker = ({ onClick, theme }) => {
    return (
        <div>
            <button
                className="btn btn-picker"
                type="button"
                onClick={onClick}
                value={theme}
            >
                {themeEmoji[theme]}
            </button>
        </div>
    );
};

ThemePicker.propTypes = {
    onClick: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
};

export default ThemePicker;
