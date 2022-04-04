import React from 'react';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const SimpleAreaChartDiv = ({ chart }) => {
    return (
        <div className="m-0 md:my-[30px]">

            <h1 className="text-2xl ml-4 uppercase"> revenue vs investment</h1>

            <AreaChart className="mt-8"
                width={320}
                height={300}
                data={chart}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                />
                <Area
                    type="monotone"
                    dataKey="investment"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                />
            </AreaChart>
        </div>
    );
};

export default SimpleAreaChartDiv;