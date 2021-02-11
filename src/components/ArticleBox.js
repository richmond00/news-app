import React from "react";
import PropTypes from "prop-types";

const ArticleBox = ({ data }) => {
    return (
        <article className="article">
            <div className="article__text-wrapper">
                <div className="article__header">
                    <span className="article__section">{data.section}</span>
                    <span className="article__time">{data.updated}</span>
                </div>
                <h1 className="article__title">{data.title}</h1>
                <div className="article__summary">{data.abstract}</div>
            </div>
            <div className="article__image-wrapper">
                {/* {data.media && (
                    <img
                        src={data.media[1].url}
                        className="article__image"
                        alt="Thumbmail"
                    />
                )} */}
            </div>
        </article>
    );
};

ArticleBox.defaultProps = {
    data: {
        title: "",
        section: "",
        updated: "",
        abstract: "",
    },
};

ArticleBox.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        section: PropTypes.string.isRequired,
        updated: PropTypes.string.isRequired,
        abstract: PropTypes.string.isRequired,
        media: PropTypes.arrayOf(Object),
    }),
};

export default ArticleBox;
