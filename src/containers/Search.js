import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import ArticleBox from "../components/ArticleBox";
import { getStringByLanguage } from "../helpers/common";

const searchRemapper = (search) => {
    return search.data.map((elem, index) => {
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
    const isLoading = useSelector((state) => state.article.isLoading);
    const keyword = useSelector((state) => state.article.search.keyword);
    const language = useSelector((state) => state.display.language);

    if (isLoading)
        return (
            <h1 className="loading">
                {getStringByLanguage(language, "loading")}...
            </h1>
        );
    return (
        <section className="section-search">
            <h1 className="section-title">{`"${keyword} " ${getStringByLanguage(
                language,
                "searchResult"
            )}`}</h1>
            {search.map((article) => (
                <ArticleBox key={article.id} data={article} />
            ))}
        </section>
    );
};

export default Search;
