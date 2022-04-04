import React from 'react';
import UseChartHook from '../Hooks/UseChartHook';

import LineChartDiv from '../LineChartDiv/LineChartDiv';
import SimpleAreaChartDiv from '../SimpleAreaChartDiv/SimpleAreaChartDiv';





const Dashboard = () => {

    const [chart, setChart] = UseChartHook([])
    return (
        <div>


            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                <LineChartDiv chart={chart}></LineChartDiv>
                <SimpleAreaChartDiv chart={chart}></SimpleAreaChartDiv>
                <SimpleAreaChartDiv chart={chart}></SimpleAreaChartDiv>
                <SimpleAreaChartDiv chart={chart}></SimpleAreaChartDiv>

            </div>


        </div>
    );
};

export default Dashboard;