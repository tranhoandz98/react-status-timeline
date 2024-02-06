// import "./styles.scss";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import StatusTimeLineX from "./components/StatusTimeLineX";
import "./components/StatusTimeLineX/styles.scss";

const StatusTimeLine = (props) => {
    return (
        <div >
            <StatusTimeLineX
            {...props}
            />

        </div>
    );
};

export default StatusTimeLine;
