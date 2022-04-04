import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const LineChartDiv = ({ chart }) => {
    return (


        <div className="m-0 md:my-[30px]">

            <h1 className="text-2xl ml-4"> Monthly sell</h1>
            <LineChart className="mt-8"
                width={320}
                height={300}
                data={chart}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default LineChartDiv;