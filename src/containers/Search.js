import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import ArticleBox from "../components/ArticleBox";

const searchRemapper = (search) => {
    return search.map((elem, index) => {
        return {
            section: elem.section_name,
            title: elem.headline.main,
            abstract: elem.abstract,
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
        <div>
            <h4>Search Result: </h4>
            {search &&
                search.map((article) => {
                    return <ArticleBox key={article.id} data={article} />;
                })}
        </div>
    );
};

export default Search;
