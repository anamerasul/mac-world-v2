import React from 'react';
import UseChartHook from '../Hooks/UseChartHook';

import LineChartDiv from '../LineChartDiv/LineChartDiv';


// const [chart, setChart] = UseChartHook([])


const Dashboard = () => {

    const [chart, setChart] = UseChartHook([])
    return (
        <div>
            <div >
                <LineChartDiv chart={chart}></LineChartDiv>

            </div>
        </div>
    );
};

export default Dashboard;