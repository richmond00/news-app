import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { fetchRealTimeData } from "../actions";
import ArticleBox from "../components/ArticleBox";

const realtimeRemapper = (realtime) => {
    return realtime.map((elem, index) => {
        const { section, title, abstract, multimedia } = elem;
        return {
            section,
            title,
            abstract,
            media: multimedia,
            id: index,
            updated: elem.updated_date,
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

    useEffect(() => {
        dispatch(fetchRealTimeData());
    }, [dispatch]);

    return (
        <section>
            <h1 className="section-title">Real Time</h1>
            {realtime.map((article) => (
                <ArticleBox key={article.id} data={article} />
            ))}
        </section>
    );
};

export default Realtime;
