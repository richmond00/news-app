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
        <span className="article__no-image">No image available 🙁</span>
    );

    return (
        <article className="article">
            <div className="article__text-wrapper">
                <div className="article__header">
                    <span className="article__section">{data.section}</span>
                    <span className="article__time">
                        {new Date(data.updated).toLocaleString()}
                    </span>
                </div>
                <h1 className="article__title">
                    {" "}
                    <a href={data.url} target="_blank" rel="noreferrer">
                        {data.title}
                    </a>
                </h1>
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
        url: "",
    },
};

ArticleBox.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        section: PropTypes.string.isRequired,
        updated: PropTypes.string.isRequired,
        abstract: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        url: PropTypes.string.isRequired,
    }),
};

export default ArticleBox;
