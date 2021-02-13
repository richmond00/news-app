import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import ArticleBox from "../components/ArticleBox";

const searchRemapper = (search) => {
    return search.map((elem, index) => {
        console.log(elem.multimedia);
        const imageUrl =
            elem.multimedia.length !== 0
                ? `${process.env.ROOT_IMAGE_URL}/${elem.multimedia[38].url}`
                : null;
        return {
            section: elem.section_name,
            title: elem.headline.main,
            abstract: elem.abstract,
            imageUrl,
            id: index,
            updated: elem.pub_date,
        };
    });
};

const searchSelector = createSelector(
    (state) => state.article.search,
    searchRemapper
);

const Search = () => {
    const search = useSelector(searchSelector);

    return (
        <section className="section-search">
            <h1 className="section-title">Search Result: </h1>
            {search.map((article) => (
                <ArticleBox key={article.id} data={article} />
            ))}
        </section>
    );
};

export default Search;
