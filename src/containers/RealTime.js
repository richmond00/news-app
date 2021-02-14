import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { fetchRealTimeData } from "../actions";
import ArticleBox from "../components/ArticleBox";
import { getStringByLanguage } from "../helpers/common";

const realtimeRemapper = (realtime) => {
    return realtime.map((elem, index) => {
        const { section, title, abstract, multimedia, url } = elem;
        return {
            section,
            title,
            abstract,
            imageUrl: multimedia && multimedia[1].url,
            id: index,
            updated: elem.updated_date,
            url,
        };
    });
};

const realtimeSelector = createSelector(
    (state) => state.article.realtime,
    realtimeRemapper
);

const Realtime = () => {
    const dispatch = useDispatch();
    const realtime = useSelector(realtimeSelector);
    const isLoading = useSelector((state) => state.article.isLoading);
    const language = useSelector((state) => state.display.language);

    useEffect(() => {
        dispatch(fetchRealTimeData());
    }, [dispatch]);

    if (isLoading)
        return (
            <h1 className="loading">
                {getStringByLanguage(language, "loading")}...
            </h1>
        );

    return (
        <section className="section-realtime">
            <h1 className="section-title">
                {getStringByLanguage(language, "realtimeTitle")}
            </h1>
            {realtime.map((article) => (
                <ArticleBox key={article.id} data={article} />
            ))}
        </section>
    );
};

export default Realtime;
