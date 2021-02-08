import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RealTime = () => {
    const dispatch = useDispatch();
    const realtime = useSelector((state) => state.article.realtime);

    useEffect(() => {
        dispatch({ type: "realtime/callApi" });
    }, [dispatch]);

    return (
        <div>
            <h4>realtime</h4>
            {realtime &&
                realtime.map((article) => {
                    return <div key={article.slug_name}>{article.title}</div>;
                })}
        </div>
    );
};

export default RealTime;
