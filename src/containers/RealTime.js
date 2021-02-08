import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRealTimeData } from "../actions";
import ArticleBox from "../components/ArticleBox";

const RealTime = () => {
    const dispatch = useDispatch();
    const realtime = useSelector((state) => state.article.realtime);

    useEffect(() => {
        dispatch(fetchRealTimeData());
    }, [dispatch]);

    return (
        <div>
            <h4>realtime</h4>
            {realtime &&
                realtime.map((article) => {
                    return <ArticleBox data={article} />;
                })}
        </div>
    );
};

export default RealTime;
