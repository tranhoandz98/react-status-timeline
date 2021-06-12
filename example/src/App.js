import React from 'react';

import StatusTimeLine from 'react-status-timeline';
import 'react-status-timeline/dist/index.css';

const App = () => {

    return <StatusTimeLine
      statusCurrent={2}
      txtStep="Bước "
    />;
};

export default App;
