import React from "react";
import PropTypes from "prop-types";

const ArticleBox = ({ data }) => {
    const image = data.imageUrl ? (
        <img
            className="article__image"
            src={data.imageUrl}
            alt="Article media"
        />
    ) : (
        "No image available"
    );
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
            <div className="article__image-wrapper">{image}</div>
        </article>
    );
};

ArticleBox.defaultProps = {
    data: {
        title: "",
        section: "",
        updated: "",
        abstract: "",
        imageUrl: "",
    },
};

ArticleBox.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        section: PropTypes.string.isRequired,
        updated: PropTypes.string.isRequired,
        abstract: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
    }),
};

export default ArticleBox;
