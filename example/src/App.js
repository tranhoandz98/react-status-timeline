import React from 'react';

import StatusTimeLine from 'react-status-timeline';
import 'react-status-timeline/dist/index.css';

const App = () => {
    const data = [
        {
            status: 'complete',
            color: 'success',
            stepName: 'Đã xong',
            statusStep: 'Hoàn thành',
            step: 'Bước 1',
        },
        {
            status: 'complete',
            color: 'danger',
            stepName: 'Từ chối rồi',
            statusStep: 'Từ chối',
            step: 'Bước 2',
        },
        {
            status: 'complete',
            color: 'danger',
            stepName: 'Từ chối rồi',
            statusStep: 'Từ chối',
            step: 'Bước 2',
        },
    ];
    return <StatusTimeLine data={data} />;
};

export default App;
