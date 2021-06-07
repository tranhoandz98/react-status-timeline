import './styles.scss';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StatusTimeLine = (props) => {
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
        captionStep
    } = props;
    const [statusEnd, setStatusEnd] = useState('');

    useEffect(() => {
        try {
            if (isEnd) {
                if (listData) {
                    const lengthData = listData.data.length;
                    if (lengthData === statusCurrent) {
                        const listStatus = listData.data;
                        if (listStatus[lengthData - 1].status !== 'cancel') {
                            setStatusEnd('complete');
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
        <div className="StatusTimeLine">
            <ul className='t-timeline' >
                {isStart && (
                    <li
                        className='t-li t-complete t-li-start'
                        title={txtActionStart}
                        data-pr-tooltip={txtActionStart}
                    >
                        <div className='t-timestamp'>
                            <div className='t-content t-tag p-tag p-tag-success p-text-uppercase'>
                                {txtActionStart || <span>&nbsp;</span>}
                            </div>
                        </div>
                        <div className='t-status'>
                            <div className='t-step'>{txtStart || <span>&nbsp;</span>}</div>
                        </div>
                    </li>
                )}
                {listData.data.map((data, index) => (
                    <li
                        className={`t-li t-${data.status}`}
                        key={index}
                        title={captionStep + data.stepName}
                        data-pr-tooltip={captionStep + data.stepName}
                    >
                        <div className='t-timestamp'>
                            <div
                                className={`t-content p-text-uppercase t-tag p-tag p-tag-secondary p-tag-${data.color}`}
                            >
                                {data.statusStep ? data.statusStep : <span>&nbsp;</span>}
                            </div>
                        </div>
                        <div className='t-status'>
                            <div className='t-step '>{data.step || <span>&nbsp;</span>}</div>
                        </div>
                    </li>
                ))}
                {isEnd && (
                    <li className={`t-li t-${statusEnd} t-li-end`}>
                        <div className='t-timestamp'>
                            <div className={`t-content p-text-uppercase t-tag p-tag p-tag-none`}>
                                {txtActionEnd || <span>&nbsp;</span>}
                            </div>
                        </div>
                        <div className='t-status'>
                            <div className='t-step'>{txtEnd || <span>&nbsp;</span>}</div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

StatusTimeLine.propTypes = {
    listData: PropTypes.object,
    statusCurrent: PropTypes.number,
    onError: PropTypes.func,
    isStart: PropTypes.bool,
    isEnd: PropTypes.bool,
    txtStart:PropTypes.string,
    txtActionStart:PropTypes.string,
    txtEnd:PropTypes.string,
    txtActionEnd:PropTypes.string,
    captionStep:PropTypes.string,
};
StatusTimeLine.defaultProps = {
    listData: {
        data: [
            // {
            //     status: 'complete',
            //     color: 'success',
            //     stepName: 'Làm',
            //     statusStep: 'Soạn thảo',
            //     step: 'Bắt đầu',
            // },
            {
                status: 'complete',
                color: 'success',
                stepName: 'Ăn',
                statusStep: 'Chờ ký',
                step: 'Bước 1',
            },
            {
                status: 'waiting',
                color: 'warning',
                stepName: 'Chơi',
                statusStep: 'Chờ ký',
                step: 'Bước 2',
            },
            {
                status: 'cancel',
                color: 'success',
                stepName: 'Ngủ',
                statusStep: 'Từ chối ký',
                step: 'Bước 3',
            },
            // {
            //     status: '',
            //     color: 'success',
            //     stepName: 'Làm',
            //     statusStep: 'Kết thúc',
            //     step: null,
            // },
        ],
        statusCurrent: 3,
    },
    statusCurrent: 3,
    isStart: true,
    isEnd: true,
    txtStart:"Bắt đầu",
    txtActionStart:"Soạn thảo",
    txtEnd:"",
    txtActionEnd:"Kết thúc",
    captionStep:"Tên bước: "
};

export default StatusTimeLine;
