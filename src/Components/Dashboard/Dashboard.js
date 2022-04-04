import React from 'react';
import UseChartHook from '../Hooks/UseChartHook';

import LineChartDiv from '../LineChartDiv/LineChartDiv';
import SimpleAreaChartDiv from '../SimpleAreaChartDiv/SimpleAreaChartDiv';
import SimpleBarChartDiv from '../SimpleBarChartDiv/SimpleBarChartDiv';
import Spinner from '../Spinner/Spinner';
import TwoLevelPieChartDiv from '../TwoLevelPieChartDiv/TwoLevelPieChartDiv';





const Dashboard = () => {

    const [chart] = UseChartHook([])
    return (

        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {
                chart.length === 0 ? (<Spinner></Spinner>) : (<LineChartDiv chart={chart}></LineChartDiv>)

            }

            {
                chart.length === 0 ? (<Spinner></Spinner>) : (<SimpleAreaChartDiv chart={chart}></SimpleAreaChartDiv>)

            }
            {
                chart.length === 0 ? (<Spinner></Spinner>) : (<SimpleBarChartDiv chart={chart}></SimpleBarChartDiv>)

            }

            {
                chart.length === 0 ? (<Spinner></Spinner>) : (<TwoLevelPieChartDiv chart={chart}></TwoLevelPieChartDiv>)

            }

        </div>


    );
};

export default Dashboard;

