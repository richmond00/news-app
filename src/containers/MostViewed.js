import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { fetchMostViewedData } from "../actions";
import ArticleBox from "../components/ArticleBox";

const mostviewedRemapper = (mostviewed) => {
    return mostviewed.map((elem) => {
        const { section, title, abstract, media, id, updated } = elem;
        return {
            section,
            title,
            abstract,
            media,
            id,
            updated,
        };
    });
};

const mostviewedSelector = createSelector(
    (state) => state.article.mostviewed,
    mostviewedRemapper
);

const Mostviewed = () => {
    const dispatch = useDispatch();
    const mostviewed = useSelector(mostviewedSelector);

    useEffect(() => {
        dispatch(fetchMostViewedData());
    }, [dispatch]);

    return (
        <div>
            <h4>Most Viewed!</h4>
            {mostviewed &&
                mostviewed.map((article) => {
                    return <ArticleBox key={article.id} data={article} />;
                })}
        </div>
    );
};

export default Mostviewed;
