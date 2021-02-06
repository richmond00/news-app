import React from "react";
import RealTime from "./containers/RealTime";

const App = () => {
    // eslint-disable-next-line no-console
    console.log("test", process.env.NODE_ENV);

    return (
        <div className="container">
            <RealTime />
        </div>
    );
};

export default App;
