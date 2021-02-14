import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { fetchMostViewedData } from "../actions";
import ArticleBox from "../components/ArticleBox";
import { getStringByLanguage } from "../helpers/common";

const mostviewedRemapper = (mostviewed) => {
    return mostviewed.map((elem) => {
        const { section, title, abstract, id, updated } = elem;
        const imageUrl =
            elem.media[0] && elem.media[0]["media-metadata"][1].url;

        return {
            section,
            title,
            abstract,
            imageUrl,
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
    const isLoading = useSelector((state) => state.article.isLoading);
    const language = useSelector((state) => state.display.language);

    useEffect(() => {
        dispatch(fetchMostViewedData());
    }, [dispatch]);

    if (isLoading)
        return (
            <h1 className="loading">
                {getStringByLanguage(language, "loading")}...
            </h1>
        );

    return (
        <section className="section-mostviewed">
            <h1 className="section-title">
                {getStringByLanguage(language, "mostviewedTitle")}
            </h1>
            {mostviewed.map((article) => (
                <ArticleBox key={article.id} data={article} />
            ))}
        </section>
    );
};

export default Mostviewed;
