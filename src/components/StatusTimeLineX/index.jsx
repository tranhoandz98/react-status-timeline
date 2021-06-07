// import "./styles.scss";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const StatusTimeLineX = (props) => {
    const {
        listData,
        statusCurrent,
        onError,
        isStart,
        isEnd,
        txtStart,
        txtActionStart,
        txtEnd,
        txtActionEnd,
        captionStep,
    } = props;
    const [statusEnd, setStatusEnd] = useState("");

    useEffect(() => {
        try {
            if (isEnd) {
                if (listData) {
                    const lengthData = listData.data.length;
                    if (lengthData === statusCurrent) {
                        const listStatus = listData.data;
                        if (listStatus[lengthData - 1].status === "complete") {
                            setStatusEnd("complete");
                        }
                    }
                }
            }
        } catch (error) {
            onError();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listData]);
    return (
        <div className="StatusTimeLineX">
            <ul className="timeline__ul">
                {isStart && (
                    <li
                        className="timeline__li  timeline__li--complete"
                        title={txtActionStart}
                        data-pr-tooltip={txtActionStart}
                    >
                        <div className="timeline__timestamp">
                            <div className="timeline__content timeline__tag timeline__tag--success text-uppercase">
                                {txtActionStart || <span>&nbsp;</span>}
                            </div>
                        </div>
                        <div className="timeline__status">
                            <div className="timeline__step">
                                {txtStart || <span>&nbsp;</span>}
                            </div>
                        </div>
                    </li>
                )}
                {listData.data.map((data, index) => (
                    <li
                        className={`timeline__li timeline__li--${data.status}`}
                        key={index}
                        title={captionStep + data.stepName}
                        data-pr-tooltip={captionStep + data.stepName}
                    >
                        <div className="timeline__timestamp">
                            <div
                                className={`timeline__content text-uppercase timeline__tag timeline__tag--secondary timeline__tag--${data.color} ${data.className}`}
                            >
                                {data.statusStep ? data.statusStep : <span>&nbsp;</span>}
                            </div>
                        </div>
                        <div className="timeline__status">
                            <div className="timeline__step ">
                                {data.step || <span>&nbsp;</span>}
                            </div>
                        </div>
                    </li>
                ))}
                {isEnd && (
                    <li className={`timeline__li  timeline__li--${statusEnd}`}
                    title={txtActionEnd}
                        data-pr-tooltip={txtActionEnd}
                    >
                        <div className="timeline__timestamp">
                            <div
                                className={`timeline__content text-uppercase timeline__tag timeline__tag--none`}
                            >
                                {txtActionEnd || <span>&nbsp;</span>}
                            </div>
                        </div>
                        <div className="timeline__status">
                            <div className="timeline__step">
                                {txtEnd || <span>&nbsp;</span>}
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

StatusTimeLineX.propTypes = {
    listData: PropTypes.object,
    statusCurrent: PropTypes.number,
    onError: PropTypes.func,
    isStart: PropTypes.bool,
    isEnd: PropTypes.bool,
    txtStart: PropTypes.string,
    txtActionStart: PropTypes.string,
    txtEnd: PropTypes.string,
    txtActionEnd: PropTypes.string,
    captionStep: PropTypes.string,
};
StatusTimeLineX.defaultProps = {
    listData: {
        data: [
            {
                status: "complete",
                color: "success",
                stepName: "Đã xong",
                statusStep: "Xong",
                step: "Bước 1",
            },
            {
                status: "waiting",
                color: "warning",
                stepName: "Chờ đợi",
                statusStep: "Chờ",
                step: "Bước 2",
            },
            {
                status: "cancel",
                color: "danger",
                stepName: "Từ chối rồi",
                statusStep: "Từ chối",
                step: "Bước 3",
            },
        ],
    },
    statusCurrent: 2,
    isStart: true,
    isEnd: true,
    txtStart: "Bắt đầu",
    txtActionStart: "Soạn thảo",
    txtEnd: "",
    txtActionEnd: "Kết thúc",
    captionStep: "Tên bước: ",
};

export default StatusTimeLineX;
