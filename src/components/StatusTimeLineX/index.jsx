// import "./styles.scss";

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StatusTimeLineX = (props) => {
    const {
        data,
        statusCurrent,
        onError,
        isStart,
        isEnd,
        txtStart,
        txtActionStart,
        txtEnd,
        txtActionEnd,
        captionStep,
        className,
        txtStep
    } = props;
    const [statusEnd, setStatusEnd] = useState('');

    useEffect(() => {
        try {
            if (isEnd) {
                if (data) {
                    const lengthData = data.length;
                    if (lengthData === statusCurrent) {
                        if (data[lengthData - 1].status === 'complete') {
                            setStatusEnd('complete');
                        }
                    }
                }
            }
        } catch (error) {
            console.error('error: ', error);
            onError();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    return (
        <div className={`StatusTimeLine ${className}`}>
            <ul className='timeline__ul'>
                {isStart && (
                    <li
                        className='timeline__li  timeline__li--complete'
                        title={txtActionStart}
                        data-pr-tooltip={txtActionStart}
                    >
                        <div className='timeline__timestamp'>
                            <div
                                className={`timeline__content
                            timeline__tag
${txtActionStart ? 'timeline__tag--success' : 'timeline__tag--none'}

                             text-uppercase`}
                            >
                                {txtActionStart}
                            </div>
                        </div>
                        <div className='timeline__status'>
                            <div className='timeline__step'>{txtStart || <span>&nbsp;</span>}</div>
                        </div>
                    </li>
                )}
                {data.map((item, index) => (
                    <li
                        className={`timeline__li timeline__li--${item.status}`}
                        key={index}
                        title={captionStep + item.stepName}
                        data-pr-tooltip={captionStep + item.stepName}
                    >
                        <div className='timeline__timestamp'>
                            <div
                                className={`timeline__content
                                text-uppercase
                                timeline__tag
                                timeline__tag--secondary
                                timeline__tag--${item.color}
                                 ${item.className}
${item?.statusStep ? 'timeline__tag--success' : 'timeline__tag--none'}
                                 `}
                            >
                                {item?.statusStep}
                            </div>
                        </div>
                        <div className='timeline__status'>
                            <div className='timeline__step '>
                               {txtStep}{item.step || <span>&nbsp;</span>}
                            </div>
                        </div>
                    </li>
                ))}
                {isEnd && (
                    <li
                        className={`timeline__li  timeline__li--${statusEnd}`}

                        title={txtActionEnd}
                        data-pr-tooltip={txtActionEnd}
                    >
                        <div className='timeline__timestamp'>
                            <div
                                className={`timeline__content text-uppercase timeline__tag timeline__tag--none`}
                            >
                                {txtActionEnd || <span>&nbsp;</span>}
                            </div>
                        </div>
                        <div className='timeline__status'>
                            <div className='timeline__step'>{txtEnd || <span>&nbsp;</span>}</div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

StatusTimeLineX.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
    statusCurrent: PropTypes.number,
    onError: PropTypes.func,
    isStart: PropTypes.bool,
    isEnd: PropTypes.bool,
    txtStart: PropTypes.string,
    txtActionStart: PropTypes.string,
    txtEnd: PropTypes.string,
    txtActionEnd: PropTypes.string,
    captionStep: PropTypes.string,
    txtStep: PropTypes.string,
};
StatusTimeLineX.defaultProps = {
    data: [
        {
            status: 'complete',
            color: 'success',
            stepName: 'Đã xong',
            statusStep: 'Hoàn thành',
            step: '1',
        },
        {
            status: 'cancel',
            color: 'danger',
            stepName: 'Từ chối rồi',
            statusStep: 'Từ chối',
            step: '2',
        },
    ],
    statusCurrent: 2,
    isStart: true,
    isEnd: true,
    txtStart: 'Bắt đầu',
    txtActionStart: 'Soạn thảo',
    txtEnd: 'Kết thúc',
    txtActionEnd: 'Hoàn thành',
    captionStep: 'Tên bước: ',
};

export default StatusTimeLineX;
