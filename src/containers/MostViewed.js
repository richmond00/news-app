import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMostViewedData } from "../actions";
import ArticleBox from "../components/ArticleBox";

const MostViewed = () => {
    const dispatch = useDispatch();
    const mostviewed = useSelector((state) => state.article.mostviewed);

    useEffect(() => {
        dispatch(fetchMostViewedData());
    }, [dispatch]);

    return (
        <div>
            <h4>Most Viewed!</h4>
            {mostviewed &&
                mostviewed.map((article) => {
                    return <ArticleBox data={article} />;
                })}
        </div>
    );
};

export default MostViewed;
