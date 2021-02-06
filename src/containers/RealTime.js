import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const RealTime = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "realtime/callApi" });
    }, [dispatch]);

    return (
        <div>
            <h4>Real Time Articles</h4>
        </div>
    );
};

export default RealTime;
