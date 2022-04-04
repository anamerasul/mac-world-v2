import React from 'react';

import { PieChart, Pie } from "recharts";

const TwoLevelPieChartDiv = ({ chart }) => {

    return (
        <div className="m-0 md:my-[30px]">

            <h1 className="text-2xl ml-4 uppercase"> revenue vs investment</h1>

            <PieChart className="mt-8" width={320} height={400}>
                <Pie data={chart} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={chart} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>

        </div>
    );
};

export default TwoLevelPieChartDiv;



